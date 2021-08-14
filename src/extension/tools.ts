import vscode = require('vscode')
import path = require('path')
import * as cp from "child_process"
import proc = require('child_process')
import { promises as fsp } from 'fs'
import { getConfig } from './config'

const { F_OK, X_OK } = require('fs').constants

async function canAccess(path: string, mode: number) {
    try {
        await fsp.access(path, mode)
        return true
    } catch (error) {
        return false
    }
}

function assertCanAccess(path: string, mode: number, err: any) {
    return canAccess(path, mode).then(x => x || Promise.reject(err))
}

function isCmd(command: string, ...args: string[]) {
    return new Promise<boolean>(resolve => {
        const p = proc.spawn(command, args)

        p.on('error', () => resolve(false))
        p.on('exit', () => resolve(true))
    })
}

function readCmd(label: string, command: string) {
    return new Promise<string>((resolve, reject) => {
        proc.exec(command, (err, stdout, stderr) => {
            if (!err)
                resolve(stdout + stderr)
            else if (err.signal)
                reject(new Error(`${label} was terminated with signal ${err.signal}`))
            else if (stdout.length + stderr.length)
                reject(new Error(`${label} exited with code ${err.code || 0}:\n${stdout + stderr}`))
            else if (err.code != null)
                reject(new Error(`${label} exited with code ${err.code}`))
            else
                reject(new Error(`${label} exited`))
        })
    })
}

export class GoTool {
    constructor(
        public readonly name: string,
        public readonly module: string,
        public readonly version: string,
        private readonly output?: vscode.OutputChannel,
    ) { }

    get config() {
        const value = getConfig()
        Object.defineProperty(this, 'config', { value })
        return value
    }

    private get goCmd() {
        const value = (async () => {
            let goCmd = this.config.get('go.path') as string | undefined
            if (goCmd) {
                await assertCanAccess(goCmd, F_OK, new Error(`'${goCmd}' does not exist or cannot be accessed`))
                await assertCanAccess(goCmd, X_OK, new Error(`'${goCmd}' cannot be executed`))
                return goCmd
            }

            if (!await isCmd('go', '--version'))
                throw new Error(`Cannot find 'go'. Please add 'go' to the PATH or configure 'goNotebookKernel.go.path'.`)
            return 'go'
        })()

        Object.defineProperty(this, 'goCmd', { value })
        return value
    }

    private get path() {
        const value = (async () => {
            const kernelPath: string | undefined = this.config.get('kernel.path')
            if (kernelPath) {
                await assertCanAccess(kernelPath, F_OK, new Error(`'${kernelPath}' does not exist or cannot be accessed`))
                await assertCanAccess(kernelPath, X_OK, new Error(`'${kernelPath}' cannot be executed`))
                return kernelPath
            }

            const goBin = (await readCmd("`go env GOBIN`", `${await this.goCmd} env GOBIN`)).trim()
            const goBinPath = path.join(goBin, this.name)
            if (goBin.length && await canAccess(goBinPath, F_OK | X_OK))
                return goBinPath

            const goPath = (await readCmd("`go env GOPATH`", `${await this.goCmd} env GOPATH`)).trim()
            const goPathPath = path.join(goPath.split(';')[0], 'bin', this.name)
            if (goPath.length && await canAccess(goPathPath, F_OK | X_OK))
                return goPathPath
        })()

        Object.defineProperty(this, 'path', { value })
        return value
    }

    async install() {
        this.output?.clear()
        this.output?.append(`Installing kernel`)
        this.output?.show()
        const execShell = (cmd: string) =>
            new Promise<string>((resolve, reject) => {
                cp.exec(cmd, (err, out) => {
                    if (err) {
                        return reject(err)
                    }
                    return resolve(out)
                })
            })
        const installKernel = await execShell('go get github.com/gobookdev/gokernel')
        vscode.window.showInformationMessage(installKernel)
        vscode.window.showInformationMessage('Installed kernel')
    }

    async launch(args: string[], installAsk: string) {
        const kernelPath = await this.path || await this.install(installAsk)
        if (!kernelPath) return

        return proc.spawn(kernelPath, args)
    }
}
