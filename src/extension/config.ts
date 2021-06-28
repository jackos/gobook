import vscode = require('vscode')

export function getConfig() {
    return vscode.workspace.getConfiguration('goNotebookKernel')
}