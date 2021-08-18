import { parseMarkdown, writeCellsToMarkdown, RawNotebookCell } from './markdownParser';
import { Kernel } from './kernel';
import {
	window, notebooks, commands, workspace, ExtensionContext,
	CancellationToken, NotebookSerializer, NotebookData, NotebookCellData
} from 'vscode';

const kernel = new Kernel();

export function activate(context: ExtensionContext) {
	const controller = notebooks.createNotebookController('go-kernel', 'gobook', 'Go Kernel');
	controller.supportedLanguages = ['go'];
	controller.executeHandler = (cells, doc, ctrl) => kernel.executeCells(doc, cells, ctrl);
	context.subscriptions.push(commands.registerCommand('gobook.kernel.restart', () => {
		window.showInformationMessage('Restarting kernel');
	}));

	const notebookSettings = {
		transientOutputs: false,
		transientCellMetadata: {
			inputCollapsed: true,
			outputCollapsed: true,
		}
	};

	context.subscriptions.push(workspace.registerNotebookSerializer('gobook', new MarkdownProvider(), notebookSettings));
	kernel.install();
}

class MarkdownProvider implements NotebookSerializer {
	deserializeNotebook(data: Uint8Array, _token: CancellationToken): NotebookData | Thenable<NotebookData> {
		const content = Buffer.from(data)
			.toString('utf8');

		const cellRawData = parseMarkdown(content);
		const cells = cellRawData.map(rawToNotebookCellData);

		return {
			cells
		};
	}

	serializeNotebook(data: NotebookData, _token: CancellationToken): Uint8Array | Thenable<Uint8Array> {
		const stringOutput = writeCellsToMarkdown(data.cells);
		return Buffer.from(stringOutput);
	}
}

export function rawToNotebookCellData(data: RawNotebookCell): NotebookCellData {
	return <NotebookCellData>{
		kind: data.kind,
		languageId: data.language,
		metadata: { leadingWhitespace: data.leadingWhitespace, trailingWhitespace: data.trailingWhitespace, indentation: data.indentation },
		outputs: data.outputs || [],
		value: data.content,
	};
}