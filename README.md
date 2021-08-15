
# Gobook: Go Notebook VS Code Extension

## Getting Started
- Create a markdown (.md or .markdown) document and open it
- If extension hasn't activated, right click on file and select "Open With..." Then select "Gobook"
- Create a cell, write some Go and press the play button

![gobookExample](images/r1.png)

- It will then start a task running gokernel

![task](images/r2.png)

- To see the generated source code, ctrl + click the temp file

![ctrlClick](images/r3.png)

![sourceCode](images/r4.png)

- Because it's standard markdown as the source code, you can upload it to Github or a blog site and it will render nicely

![github](images/r5.png)

![github](images/r6.png)

## Notes
- If you are writing functions, put them in a seperate cell, gokernel will put them outside the main function
- If you terminate the gokernel task, the next time you execute a cell it will start again. This can be used to restart the kernel
- On first execution it will check for gokernel updates with `go get` and install latest if required
- The kernel will be installed to `$GOPATH/bin/gokernel`, delete it to force a reinstall
- Code completion and full langauage server features are coming, but for now the generated `tmp/main.go` works with gopls
- Keyboard shortcuts are located in File > Preferences > Keyboard Shortcuts. Type in 'Notebook:' to see everything available.

## Output Examples
Click the Markdown files [in the repo here](https://github.com/gobookdev/gobook-examples) to see how the markdown formats after running cells and saving.

## Kernel
The kernel is very simple [source code here](https://github.com/gobookdev/gokernel) 

---
```go

## Development Status
### Working
- Add an option to activate extension with .md or .gobook files
- Activate extension as default when opening a .gobook file
- Syntax highlighting
- Save output of cells to file
- Reload output when reopening file
- Markdown formatting to represent code in and code out 
- Go kernel compiler to be 1 to 1 with normal Go
- Imports no longer required, kernel imports automatically

### In Development 
- Code completion / linting
- Auto format cells
- Variables explorer by saving state
- Export to PDF

### Future development
- Add support to execute JS, TS and Python code cells with additional kernels
- Shared state between all languages, i.e. initialize x in Python and use it in Go
```
---
