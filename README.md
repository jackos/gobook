
# Gobook: Go Notebook VS Code Extension

## Install Instructions 
- Install the extension
- Extension will automatically start when opening a .gobook file
- To use it with a .md or .markdown file, right click on the file and press 'Open With' then 'Gobook'

## Usage Instructions

- No need to import anything, it will import any required packages in the background.
- If writing functions, keep funcs in their own cells
- Don't declare a main function, just type code and run it e.g.
```go
x := "cool"
fmt.Println("Wow no other code required", x)
```

Keyboard shortcuts are located in File > Preferences > Keyboard Shortcuts. Type in 'Notebook:' to see everything available.

## Output Examples
Click the Markdown files [in the repo here](https://github.com/gobookdev/gobook-examples) to see how the markdown formats after running cells and saving.

## Kernel
The kernel is very simple [source code here](https://github.com/gobookdev/gokernel) 

The extension will prompt you to install it on first run which it does with 

```go get github.com/gobookdev/gokernel```

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
- API for adding any language 

[If you have any issues please submit here](https://github.com/gobookdev/gobook/issues)