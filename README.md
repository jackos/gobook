# Gobook Go Notebook VS Code Extension

## Warning!
This extension currently only works on VS Code Insiders as it's reliant on a fix:
[Issue 121456](https://github.com/microsoft/vscode/issues/121456). Expect it to be available in the next stable release in July.

## Usage Instructions
- Install the extension
- Right click on a .markdown, .md or .gobook file
- Choose "Open With...", then choose "Gobook Go Notebook"
- Extension will automatically start when opening a .gobook file

## Origin
This project originated from vscode-markdown-notebook provided by Microsoft as an example for using their Notebook API, but is intended to be specific for Go.

## Kernel
The kernel being used is [Go Notebook Kernel](https://marketplace.visualstudio.com/items?itemName=ethan-reesor.go-notebook-kernel) by Ethan Reesor, which uses [Yaegi](https://github.com/traefik/yaegi) under the hood, the extension will prompt you to install it as a dependency.

## Development Status
- [x] Add an option to active extension when opening .md or .markdown files
- [x] Activate extension as default when opening a .gobook file
- [ ] Save output of cells to file
- [ ] Syntax highlighting
- [ ] Code completion
- [ ] Auto format cells
- [ ] Export to PDF
