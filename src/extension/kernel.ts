import fetch from 'node-fetch'
import { TextEncoder } from 'util'
import * as vscode from 'vscode'
import { execSync } from 'child_process'
import { sep } from 'path'
import { createServer } from "net"


export class Kernel {
    static get output() {
        const value = vscode.window.createOutputChannel('Go Notebook Kernel')
        Object.defineProperty(this, 'output', { value })
        return value
    }
    installed = false
    skipLaunch = false
    label = 'Go Kernel';
    id = 'go-kernel';
    supportedLanguages = ['go'];
    sessions = new Map();
    async executeCells(doc: vscode.NotebookDocument, cells: vscode.NotebookCell[], ctrl: vscode.NotebookController): Promise<void> {
        if (!this.installed) {
            await this.install()
        }
        if (this.installed) {
            const tasks = vscode.tasks.taskExecutions
            let launchTask = true
            if (tasks.length || this.skipLaunch) {
                launchTask = false
            }
            for (const task of tasks) {
                if (task.task.name === "gobook") {
                    launchTask = false
                }
            }
            if (launchTask) {
                await this.launch()
            }
            for (const cell of cells) {
                const exec = ctrl.createNotebookCellExecution(cell)
                exec.start((new Date).getTime())
                exec.clearOutput()
                const data = {
                    index: exec.cell.index,
                    filename: doc.uri.fsPath,
                    fragment: +exec.cell.document.uri.fragment.substring(3),
                    contents: exec.cell.document.getText(),
                    executing: true
                }
                let success = true
                let res = await fetch("http://127.0.0.1:5250", {
                    method: 'POST',
                    body: JSON.stringify(data),
                    timeout: 5000
                })
                    .then(res => res.text())
                    .catch(err => { success = false })
                if (res) {
                    if (res.substring(0, 12) === "exit status ") {
                        res = res.split("\n").slice(1).join("\n")
                        success = false
                    }
                    Kernel.output.appendLine(res.trim())
                    var u8 = new TextEncoder().encode(res.trim())
                    const x = new vscode.NotebookCellOutputItem(u8, "text/plain")
                    await exec.appendOutput([new vscode.NotebookCellOutput([x])])
                }
                exec.end(success, (new Date).getTime())
            }
        }
    }
    // Executes the Go binary on first run of a notebook cell
    async install() {
        try {
            vscode.window.showInformationMessage("Checking latest version of gopls and gokernel")
            execSync("go get github.com/gobookdev/gokernel@latest")
            execSync("go get golang.org/x/tools/gopls@latest")
            vscode.window.showInformationMessage("gopls and gokernel are up to date")
            this.installed = true
        } catch (err) {
            vscode.window.showErrorMessage("Go not installed correctly [Follow instructions here](https://golang.org/doc/install)")
        }
    }
    async launch() {
        const GOPATH = execSync("go env GOPATH").toString().trim()
        const gokernelTask = new vscode.Task(
            { type: 'shell' }, // this is the same type as in tasks.json
            null,
            'server', // how you name the task
            'gokernel', // Shows up as MyTask: name 
            new vscode.ShellExecution(GOPATH + sep + "bin" + sep + "gokernel"),
            ["mywarnings"] // list of problem matchers (can use $gcc or other pre-built matchers, or the ones defined in package.json)
        )

        const portInUse = (port, callback) => {
            const server = createServer(function (socket) {
                socket.write('Echo server\r\n')
                socket.pipe(socket)
            })
            server.on('error', (e) => {
                callback(true)
            })
            server.on('listening', (e) => {
                server.close()
                callback(false)
            })
            server.listen(port, '127.0.0.1')
        }

        portInUse(5250, (returnValue) => {
            if (returnValue) {
                this.skipLaunch = true
                vscode.window.showInformationMessage("gokernel already running on port 5250")
            } else {
                vscode.tasks.executeTask(gokernelTask)
            }
        })
    }
}
