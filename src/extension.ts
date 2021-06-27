/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';
import * as vscode from 'vscode';
import { parseMarkdown, writeCellsToMarkdown, RawNotebookCell } from './markdownParser';

const providerOptions = {
	transientMetadata: {
		runnable: true,
		editable: true,
		custom: true,
	},
	transientOutputs: true
};

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.workspace.registerNotebookSerializer('markdown-notebook', new MarkdownProvider(), providerOptions));
}

class MarkdownProvider implements vscode.NotebookSerializer {
	deserializeNotebook(data: Uint8Array, _token: vscode.CancellationToken): vscode.NotebookData | Thenable<vscode.NotebookData> {
		const content = Buffer.from(data)
			.toString('utf8');

		const cellRawData = parseMarkdown(content);
		const cells = cellRawData.map(rawToNotebookCellData);

		return {
			cells
		};
	}

	serializeNotebook(data: vscode.NotebookData, _token: vscode.CancellationToken): Uint8Array | Thenable<Uint8Array> {
		const stringOutput = writeCellsToMarkdown(data.cells);
		return Buffer.from(stringOutput);
	}
}

export function rawToNotebookCellData(data: RawNotebookCell): vscode.NotebookCellData {
	return <vscode.NotebookCellData>{
		kind: data.kind,
		languageId: data.language,
		metadata: { leadingWhitespace: data.leadingWhitespace, trailingWhitespace: data.trailingWhitespace, indentation: data.indentation },
		outputs: [],
		value: data.content
	};
}

export function deactivate() { }

const ALL_LANGUAGES = [
	'plaintext',
	'bat',
	'jsonc',
	'css',
	'dockerfile',
	'go',
	'html',
	'javascriptreact',
	'javascript',
	'jsx-tags',
	'json',
	'less',
	'makefile',
	'markdown',
	'powershell',
	'scss',
	'sql',
	'typescript',
	'typescriptreact',
	'xml',
	'yaml',
	'github-issues'
];