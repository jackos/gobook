import vscode = require('vscode');
import grpc = require('@grpc/grpc-js');
import { ChildProcess } from 'child_process';
import { KernelClient } from '../proto/kernel_grpc_pb';
import { EvaluateRequest, PromptResponse, ToClient, ToServer, CacheResponse, CancelEvaluate } from '../proto/kernel_pb';
import { getConfig } from './config';
import { GoTool, waitForProc } from './tools';

type Session = grpc.ClientDuplexStream<ToServer, ToClient>;
type Cache = { [key: string]: string; };

export class Kernel {
    static readonly executable = 'notebook-kernel';
    static readonly installAsk = 'The Go notebook kernel is not available';

    static get module(): string {
        return getConfig().get('kernel.module') || 'gitlab.com/ethan.reesor/vscode-notebooks/go-kernel/cmd/notebook-kernel';
    }

    static get version(): string {
        return getConfig().get('kernel.version') || 'latest';
    }

    static get output() {
        const value = vscode.window.createOutputChannel('Go Notebook Kernel');
        Object.defineProperty(this, 'output', { value });
        return value;
    }

    private static goTool() {
        return new GoTool(this.executable, this.module, this.version, this.output);
    }

    static async install(ask = true) {
        this.goTool().install(ask ? this.installAsk : void 0);
    }

    private static launch() {
        return this.goTool().launch(['tcp', 'localhost:'], this.installAsk);
    }

    private connectTo: number | undefined;

    constructor() {
        // this.connectTo = 12345
    }

    label = 'Go Kernel';
    id = 'go-kernel';
    supportedLanguages = ['go'];

    private proc: ChildProcess | undefined;
    private kernel: KernelClient | undefined;
    private sessions = new Map<vscode.Uri, Session>();
    private cache = new Map<vscode.Uri, Cache>();
    private diagnostics = vscode.languages.createDiagnosticCollection();

    kill(signal?: NodeJS.Signals | number) {
        const sessions = Array.from(this.sessions.values());
        this.sessions.clear();

        for (const session of sessions)
            session.cancel();

        return this.proc?.kill(signal) || false;
    }

    interrupt(document: vscode.NotebookDocument): void {
        const session = this.sessions.get(document.uri);
        if (session) session.write(new ToServer().setCancel(new CancelEvaluate()));
    }

    async executeCells(doc: vscode.NotebookDocument, cells: vscode.NotebookCell[], ctrl: vscode.NotebookController): Promise<void> {
        if (!this.kernel) {
            try {
                await this.launch();
            } catch (error) {
                Kernel.output.append(error.message);
                vscode.window.showErrorMessage(error.message);
                return;
            }
        }

        let session = this.sessions.get(doc.uri);
        if (!session) {
            session = this.kernel!.session();
            this.sessions.set(doc.uri, session);
        }

        for (const cell of cells) {
            const exec = ctrl.createNotebookCellExecution(cell);
            await this.execute(session, exec);
        }
    }

    stopSession(uri: vscode.Uri) {
        const session = this.sessions.get(uri);
        if (!session) return;

        session.cancel();
        this.sessions.delete(uri);
    }

    private async launch() {
        if (this.connectTo) {
            this.kernel = new KernelClient(`localhost:${this.connectTo}`, grpc.credentials.createInsecure());
            return;
        }

        this.proc = await Kernel.launch();
        if (!this.proc) return;

        this.proc.stdout!.on('data', b => Kernel.output.appendLine(`[Kernel] ${b.toString()}`));
        this.proc.stderr!.on('data', b => Kernel.output.appendLine(`[Kernel] ${b.toString()}`));

        this.proc.on('exit', () => {
            this.proc = void 0;
            this.kernel = void 0;

            // cancel and remove all sessions
            for (const session of this.sessions.values())
                session.cancel();
            this.sessions.clear();
        });

        const listening = await Promise.race([
            waitForProc('Kernel', this.proc).then(() => Promise.reject('Kernel exited with code 0')),
            new Promise<string>(resolve => {
                let s = '';
                this.proc!.stdout!.on('data', (b: Buffer) => {
                    s += b.toString('utf-8');
                    if (s.indexOf('\n') >= 0)
                        resolve(s);
                });
            })
        ]);

        const [, port] = /^Listening on .*:(\d+)\n/.exec(listening) as string[];

        this.kernel = new KernelClient(`localhost:${port}`, grpc.credentials.createInsecure());
    }

    private async execute(session: Session, exec: vscode.NotebookCellExecution) {
        exec.start();
        exec.clearOutput();
        this.diagnostics.set(exec.cell.document.uri, []);
        type endData = { success: boolean; };
        let resolve: (_: endData) => void;
        const done = new Promise<endData>((r, j) => (resolve = r));
        const handle = async (msg: ToClient) => {
            const kindCase = msg.getKindCase();
            if (kindCase === ToClient.KindCase.OUTPUT) {
                const items = msg.getOutput()!.getContentList().map(c => {
                    let mime = c.getMime();
                    let value = Buffer.from(c.getValue());
                    if (mime === 'stdout') {
                        return vscode.NotebookCellOutputItem.stdout(value.toString('utf-8'));
                    }
                    else if (mime === 'stderr') {
                        return vscode.NotebookCellOutputItem.stderr(value.toString('utf-8'));
                    }
                    return new vscode.NotebookCellOutputItem(value, mime);
                });
                await exec.appendOutput([new vscode.NotebookCellOutput(items)]);
            }
            else if (kindCase === ToClient.KindCase.EVALUATE) {
                {
                    const resp = msg.getEvaluate()!.toObject();
                    const result: endData = {
                        success: true,
                    };

                    for (const err of resp.errorsList) {
                        result.success = false;

                        if (err.position) {
                            const lineNo = err.position.line - 1;
                            const column = err.position.column - 1;
                            const line = exec.cell.document.lineAt(lineNo);

                            this.diagnostics.set(exec.cell.document.uri, [
                                new vscode.Diagnostic(new vscode.Range(lineNo, column, lineNo, line.text.length - column), err.message, vscode.DiagnosticSeverity.Error)
                            ]);
                        }

                        exec.appendOutput([
                            new vscode.NotebookCellOutput([
                                vscode.NotebookCellOutputItem.stderr(err.message)
                            ])
                        ]);
                    }

                    session.off('data', handle);
                    resolve(result);
                }
            } else if (kindCase === ToClient.KindCase.PROMPT) {
                const { placeholder, ...opts } = msg.getPrompt()!.toObject();
                const answer = await vscode.window.showInputBox({ ...opts, placeHolder: placeholder });

                const resp = new PromptResponse();
                if (answer) resp.setValue(answer);

                session.write(new ToServer().setPrompt(resp));
            } else if (kindCase === ToClient.KindCase.CACHE) {
                let cache = this.cache.get(exec.cell.notebook.uri);
                if (!cache)
                    this.cache.set(exec.cell.notebook.uri, (cache = {}));

                const req = msg.getCache()!.toObject();
                const resp = new CacheResponse();
                if (req.key in cache)
                    resp.setValue(cache[req.key]);

                if (req.write)
                    cache[req.key] = req.write;

                session.write(new ToServer().setCache(resp));
            }
        };

        session.on('end', () => {
            // if the session ends early
            session.off('data', handle);
            resolve({ success: false });
        });

        session.on('data', handle);

        const req = new ToServer();
        const evalReq = new EvaluateRequest();
        evalReq.setCode(exec.cell.document.getText());
        req.setEvaluate(evalReq);
        session.write(req);

        const { success } = await done;
        exec.end(success);
    }
}
