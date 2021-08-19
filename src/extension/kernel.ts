import fetch from 'node-fetch';
import { TextEncoder } from 'util';
import { execSync } from 'child_process';
import { sep } from 'path';
import {
    NotebookCellExecution, NotebookDocument, NotebookCell, NotebookController,
    NotebookCellOutput, NotebookCellOutputItem, ShellExecution, Task, window, tasks, TaskScope, TaskPanelKind,
} from 'vscode';
import { existsSync } from 'fs';

const presentationOptions = {
    panel: TaskPanelKind.Shared,
    showReuseMessage: false,
    clear: false,
    close: true,
    focus: true,
};

const sendCodeCell = async (exec: NotebookCellExecution, doc: NotebookDocument): Promise<string | void> => {
    const data = {
        index: exec.cell.index,
        filename: doc.uri.fsPath,
        fragment: +exec.cell.document.uri.fragment.substring(3),
        contents: exec.cell.document.getText(),
        executing: true
    };
    return await fetch("http://127.0.0.1:5250", {
        method: 'POST',
        body: JSON.stringify(data),
        timeout: 5000
    })
        .then(res => res.text())
        .catch(_ => {
            window.showWarningMessage(`Please wait for gokernel to start`);
        });
};

// Installs gokernel, launches the kernel in a task, sends code to be executed, and retrieves output
export class Kernel {
    output = window.createOutputChannel('Go Notebook Kernel');
    installed = false;
    retries = 10;
    GOPATH = "";

    async executeCells(doc: NotebookDocument, cells: NotebookCell[], ctrl: NotebookController): Promise<void> {
        this.launch();
        for (const cell of cells) {
            const exec = ctrl.createNotebookCellExecution(cell);
            // Used for the cell timer counter
            exec.start((new Date).getTime());
            exec.clearOutput();
            let success = false;
            let res = await sendCodeCell(exec, doc);
            if (res || res === "") {
                if (res.substring(0, 12) === "exit status ") {
                    res = res.split("\n").slice(1).join("\n");
                } else {
                    success = true;
                }
                this.output.appendLine(res.trim());
                var u8 = new TextEncoder().encode(res.trim());
                const x = new NotebookCellOutputItem(u8, "text/plain");
                await exec.appendOutput([new NotebookCellOutput([x])]);
            }
            exec.end(success, (new Date).getTime());
        }
    }

    async install() {
        try {
            this.GOPATH = execSync("go env GOPATH").toString().trim();


            // running 'go get` checks for latest
            window.showInformationMessage("Checking latest version of gopls");
            const installGopls = new Task(
                { type: 'shell' },
                TaskScope.Workspace,
                "gopls-get",
                "gopls-get",
                new ShellExecution("go install golang.org/x/tools/gopls@latest"),
            );
            installGopls.presentationOptions = presentationOptions;

            const installGokernel = new Task(
                { type: 'shell' },
                TaskScope.Workspace,
                "gokernel-get",
                "gokernel-get",
                new ShellExecution("go install github.com/gobookdev/gokernel@latest"),
            );
            installGokernel.presentationOptions = presentationOptions;

            tasks.executeTask(installGopls);
            tasks.executeTask(installGokernel);
            this.launch();
        } catch (err) {
            window.showErrorMessage(`Go not installed correctly [Follow instructions here](https://golang.org/doc/install)\n${err}`);
        }
    }

    async launch() {
        const gokernelPath = this.GOPATH + sep + "bin" + sep + "gokernel";
        const fileExists = existsSync(gokernelPath);
        const fileExistsWindows = existsSync(gokernelPath + ".exe");
        if (!fileExists && !fileExistsWindows) {
            window.showWarningMessage(`Please wait for gokernel to finish installing`);
        } else {
            const gokernelTask = new Task(
                { type: 'shell' },
                TaskScope.Workspace,
                'gokernel',
                'gokernel',
                new ShellExecution(gokernelPath)
            );
            gokernelTask.presentationOptions = presentationOptions;

            // Check if task already running
            let launchTask = true;
            const runningTasks = tasks.taskExecutions;
            if (tasks) {
                for (const task of runningTasks) {
                    if (task.task.name === "gokernel") {
                        launchTask = false;
                    }
                }
            }
            if (launchTask) {
                tasks.executeTask(gokernelTask);
            }
        }
    }
}
