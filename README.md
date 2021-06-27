# Gobook: Go Notebook VS Code Extension

## Warning!
This extension currently only works on VS Code Insiders as it's reliant on a fix:
[Issue 121456](https://github.com/microsoft/vscode/issues/121456). Expect it to be stable for the July release.

## Install Instructions
- Install the extension
- Extension will prompt you to install a kernel
- Extension will automatically start when opening a .gobook file
- To use it with a .md or .markdown file, right click on the file and press 'Open With' then 'Gobook'


## Usage Instructions

Make sure to use shorthand initializers and keep your imports in seperate cells:

![usage](images/usage.png)

Files will save with standard markdown code blocks e.g.

![md](images/md.png)

You can save your .gobook files as .md files and they'll behave like markdown e.g. they'll render on Github with syntax highlighting.

Alternatively you can run go code directly in a .md or .markdown file:

![rightclick](images/rightclick.png)

![select](images/select.png)

Use the command Pallete to restart kernal
```markdown
ctrl+shift+p
Go Notebook Kernel: Restart Kernel
```

As the notebook is using the new Notebook API, there are many keyboard shortcuts available in File > Preferences > Keyboard Shortcuts. Type in 'Notebook:' to see everything available.

## Kernel
The kernel being used is [Go Notebook Kernel](https://marketplace.visualstudio.com/items?itemName=ethan-reesor.go-notebook-kernel) by Ethan Reesor, which uses [Yaegi](https://github.com/traefik/yaegi) under the hood, the extension will prompt you to install it as a dependency.



## Development Status
- [ x ] Add an option to activate extension with .md or .gobook files
- [ x ] Activate extension as default when opening a .gobook file
- [   ] Make an icon for .gobook files
- [   ] Save output of cells to file
- [   ] Syntax highlighting
- [   ] Code completion
- [   ] Auto format cells
- [   ] Export to PDF
