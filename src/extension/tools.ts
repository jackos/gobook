import vscode = require('vscode')
import path = require('path')
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

export function waitForProc(label: string, proc: proc.ChildProcess): Promise<undefined>
export function waitForProc(label: string, proc: proc.ChildProcess, getOutput: () => string): Promise<string>
export function waitForProc(label: string, proc: proc.ChildProcess, getOutput?: () => string): Promise<string | undefined> {
    return new Promise((resolve, reject) => {
        proc.on('error', err => reject(new Error(`An error occured while executing ${label}: ${err.message}`)))

        proc.on('exit', (code, signal) => {
            const out = getOutput && getOutput()

            if (signal)
                reject(new Error(`${label} was terminated with signal ${signal}`))
            else if (code === 0)
                resolve(out)
            else if (out && out.length)
                reject(new Error(`${label} exited with code ${code}:\n${out}`))
            else
                reject(new Error(`${label} exited with code ${code}`))
        })
    })
}

export class GoTool {
    constructor(
        public readonly name: string,
        public readonly module: string,
        public readonly version: string,
        private readonly output?: vscode.OutputChannel,
    ) {}

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

    async install(ask?: string) {
        const tags: string | undefined = this.config.get('kernel.tags')
        const modVer = `${this.module}@${this.version}`
        const label = `"go get${tags ? '-tags ' + tags : ''} ${modVer}"`

        if (ask) {
            const sel = await vscode.window.showWarningMessage(`${ask}. Run ${label} to install.`, 'Install')
            if (sel != 'Install') return
        }

        const args = ['get', '-u', modVer]
        if (tags) args.splice(1, 0, '-tags', tags)

        this.output?.clear()
        this.output?.append(`Installing kernel: go ${args.join(' ')}\n\n`)
        this.output?.show()

        const env = Object.assign({}, process.env, { GO111MODULE: 'on' })
        const p = proc.spawn(await this.goCmd, args, { env })
        p.stdout.on('data', b => this.output?.append(b.toString()))
        p.stderr.on('data', b => this.output?.append(b.toString()))

        await waitForProc(label, p)

        const path = await this.path
        if (path) return path
        
        vscode.window.showErrorMessage('Failed to install kernel')
    }

    async launch(args: string[], installAsk: string) {
        const kernelPath = await this.path || await this.install(installAsk)
        if (!kernelPath) return

        return proc.spawn(kernelPath, args)
    }
}
