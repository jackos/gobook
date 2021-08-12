import vscode = require('vscode')
import grpc = require('@grpc/grpc-js')
import { ChildProcess } from 'child_process'
import { getConfig } from './config'
import { GoTool, waitForProc } from './tools'
import fetch, { Request } from 'node-fetch'
import { TextDecoder, TextEncoder } from 'util'

type Cache = { [key: string]: string }

export class Kernel {
    connected = false
    static readonly executable = 'notebook-kernel';
    static readonly installAsk = 'The Gobook kernel is not available';

    static get module(): string {
        return getConfig().get('kernel.module') || 'github.com/gobookdev/gobook/cmd/notebook-kernel'
    }

    static get version(): string {
        return getConfig().get('kernel.version') || 'latest'
    }

    static get output() {
        const value = vscode.window.createOutputChannel('Go Notebook Kernel')
        Object.defineProperty(this, 'output', { value })
        return value
    }

    private static goTool() {
        return new GoTool(this.executable, this.module, this.version, this.output)
    }

    static async install(ask = true) {
        this.goTool().install(ask ? this.installAsk : void 0)
    }

    private static launch() {
        return this.goTool().launch(['tcp', 'localhost:'], this.installAsk)
    }

    private connectTo: number | undefined

    constructor() {
        // this.connectTo = 12345
    }

    label = 'Go Kernel';
    id = 'go-kernel';
    supportedLanguages = ['go'];

    private proc: ChildProcess | undefined
    private sessions = new Map<vscode.Uri, Session>();
    private cache = new Map<vscode.Uri, Cache>();
    private diagnostics = vscode.languages.createDiagnosticCollection();

    kill(signal?: NodeJS.Signals | number) {
        const sessions = Array.from(this.sessions.values())
        this.sessions.clear()

        for (const session of sessions)
            session.cancel()

        return this.proc?.kill(signal) || false
    }

    interrupt(document: vscode.NotebookDocument): void {
        const session = this.sessions.get(document.uri)
        if (session) session.write(new ToServer().setCancel(new CancelEvaluate()))
    }

    async executeCells(doc: vscode.NotebookDocument, cells: vscode.NotebookCell[], ctrl: vscode.NotebookController): Promise<void> {
        Kernel.output.appendLine("Executing Cells")
        await this.launch()
        let session = this.sessions.get(doc.uri)
        for (const cell of cells) {
            Kernel.output.appendLine("Executing a cell")
            const exec = ctrl.createNotebookCellExecution(cell)
            await this.execute(session, exec)
        }
    }

    stopSession(uri: vscode.Uri) {
        const session = this.sessions.get(uri)
        if (!session) return

        session.cancel()
        this.sessions.delete(uri)
    }

    // Executes the Go binary on first run of a notebook cell
    private async launch() {
        if (!this.connected) {
            // Appends to the Output tab in VS Code
            Kernel.output.appendLine("Launched Kernel")
            // Makes the output tab pop up
            Kernel.output.show()

            // Starts up the Go binary
            this.proc = await Kernel.launch()

            // Sends data from the Go runtime to Output tab in VS Code
            this.proc.stdout!.on('data', b => Kernel.output.appendLine(`[Kernel] ${b.toString()}`))
            this.proc.stderr!.on('data', b => Kernel.output.appendLine(`[Kernel] ${b.toString()}`))

            // Tear down the Go process on exit
            this.proc.on('exit', () => {
                this.proc = void 0
                this.kernel = void 0

                // cancel and remove all sessions
                for (const session of this.sessions.values())
                    session.cancel()
                this.sessions.clear()
            })
            this.connected = true
            Kernel.output.appendLine("Finished launching")
        }
    }

    private async execute(session: Session, exec: vscode.NotebookCellExecution) {
        exec.start()
        exec.clearOutput()
        const cellInput = exec.cell.document.getText()
        const result = await fetch("http://127.0.0.1:5250", {
            method: 'POST',
            body: cellInput
        }).then(res => res.text())
        Kernel.output.appendLine(result)
        var u8 = new TextEncoder().encode(result)
        const x = new vscode.NotebookCellOutputItem(u8, "text/plain")
        await exec.appendOutput([new vscode.NotebookCellOutput([x])])
        exec.end(true)
    }
}
