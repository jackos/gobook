import * as vscode from 'vscode'
import fetch from 'node-fetch'
import { TextEncoder } from 'util'
import { execSync } from 'child_process'
import { sep } from 'path'

const sendCodeCell = async (exec: vscode.NotebookCellExecution, doc: vscode.NotebookDocument): Promise<string | void> => {
    const data = {
        index: exec.cell.index,
        filename: doc.uri.fsPath,
        fragment: +exec.cell.document.uri.fragment.substring(3),
        contents: exec.cell.document.getText(),
        executing: true
    }
    return await fetch("http://127.0.0.1:5250", {
        method: 'POST',
        body: JSON.stringify(data),
        timeout: 5000
    })
        .then(res => res.text())
        .catch(err => {
            vscode.window.showWarningMessage(`Wait for gokernel to finish installing: ${err}`)
        })
}

// Installs gokernel, launches the kernel in a task, sends code to be executed, and retrieves output
export class Kernel {
    output = vscode.window.createOutputChannel('Go Notebook Kernel')
    installed = false
    retries = 10
    GOPATH = ""

    async executeCells(doc: vscode.NotebookDocument, cells: vscode.NotebookCell[], ctrl: vscode.NotebookController): Promise<void> {
        this.launch()
        for (const cell of cells) {
            const exec = ctrl.createNotebookCellExecution(cell)
            if (!this.installed) {
                exec.end(false, (new Date).getTime())
            } else {
                // Used for the cell timer counter
                exec.start((new Date).getTime())
                exec.clearOutput()
                let success = false
                let res = await sendCodeCell(exec, doc)
                if (res) {
                    if (res.substring(0, 12) === "exit status ") {
                        res = res.split("\n").slice(1).join("\n")
                    } else {
                        success = true
                    }
                    this.output.appendLine(res.trim())
                    var u8 = new TextEncoder().encode(res.trim())
                    const x = new vscode.NotebookCellOutputItem(u8, "text/plain")
                    await exec.appendOutput([new vscode.NotebookCellOutput([x])])
                }
                exec.end(success, (new Date).getTime())
            }
        }
    }

    async install() {
        try {
            this.GOPATH = execSync("go env GOPATH").toString().trim()
            // Still running 'go get gokernel` even if it exists to check for latest
            vscode.window.showInformationMessage("Checking latest version of gopls and gokernel")
            const installGokernel = new vscode.Task(
                { type: 'shell' },
                null,
                'check latest',
                'gokernel',
                new vscode.ShellExecution("go get github.com/gobookdev/gokernel@latest"),
            )
            const installGopls = new vscode.Task(
                { type: 'shell' },
                null,
                'check latest',
                'gopls',
                new vscode.ShellExecution("go get golang.org/x/tools/gopls@latest"),
            )
            await vscode.tasks.executeTask(installGokernel)
            await vscode.tasks.executeTask(installGopls)
            vscode.window.showInformationMessage("gopls and gokernel are up to date")
            this.installed = true
            this.launch()
        } catch (err) {
            vscode.window.showErrorMessage("Go not installed correctly [Follow instructions here](https://golang.org/doc/install)")
        }
    }

    async launch() {
        const gokernelTask = new vscode.Task(
            { type: 'shell' },
            null,
            'gobook',
            'gobook',
            new vscode.ShellExecution(this.GOPATH + sep + "bin" + sep + "gokernel")

        )
        // Check if task already running
        let launchTask = true
        const tasks = vscode.tasks.taskExecutions
        if (tasks) {
            for (const task of tasks) {
                if (task.task.name === "gobook") {
                    launchTask = false
                }
            }
        }
        vscode.window.showInformationMessage(`launchTask: ${launchTask}`)
        if (launchTask && this.installed) {
            vscode.tasks.executeTask(gokernelTask)
        }
    }
}
