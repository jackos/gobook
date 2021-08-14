import fetch from 'node-fetch'
import { TextEncoder } from 'util'
import * as vscode from 'vscode'
import { execSync } from 'child_process'


export class Kernel {
    static get output() {
        const value = vscode.window.createOutputChannel('Go Notebook Kernel')
        Object.defineProperty(this, 'output', { value })
        return value
    }
    installed = false
    label = 'Go Kernel';
    id = 'go-kernel';
    supportedLanguages = ['go'];
    sessions = new Map();
    async executeCells(doc: vscode.NotebookDocument, cells: vscode.NotebookCell[], ctrl: vscode.NotebookController): Promise<void> {
        Kernel.output.appendLine(JSON.stringify(doc))
        await this.install()
        const tasks = vscode.tasks.taskExecutions
        let launchTask = true
        if (tasks.length) {
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
                    const lines = res.split("\n")
                    res = ""
                    for (const i in lines) {
                        if (i !== '0') {
                            res += lines[i] + "\n"
                        }
                    }
                    success = false
                }
                Kernel.output.appendLine(res)
                var u8 = new TextEncoder().encode(res)
                const x = new vscode.NotebookCellOutputItem(u8, "text/plain")
                await exec.appendOutput([new vscode.NotebookCellOutput([x])])
            }
            exec.end(success, (new Date).getTime())
        }
    }
    // Executes the Go binary on first run of a notebook cell
    async install() {
        if (!this.installed) {
            execSync("go get github.com/gobookdev/gokernel")
            this.installed = true
            Kernel.output.appendLine("Kernel Installed")
        }
    }
    async launch() {
        const gokernelTask = new vscode.Task(
            { type: 'shell' }, // this is the same type as in tasks.json
            null,
            'gokernel', // how you name the task
            'gokernel', // Shows up as MyTask: name 
            new vscode.ShellExecution("gokernel"),
            ["mywarnings"] // list of problem matchers (can use $gcc or other pre-built matchers, or the ones defined in package.json)
        )
        vscode.tasks.executeTask(gokernelTask)
        await new Promise(resolve => setTimeout(resolve, 2000))
    }
}
