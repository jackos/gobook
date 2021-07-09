
# Gobook: Go Notebook VS Code Extension

## Install Instructions
- Install the extension
- Extension will automatically start when opening a .gobook file
- To use it with a .md or .markdown file, right click on the file and press 'Open With' then 'Gobook'

## Usage Instructions

Make sure to use shorthand initializers and keep your imports in separate cells.

Here is an example showing the source code in markdown format, and changing between a normal text editor and the Gobook editor while retaining outputs:

![usage](images/example.gif)


Use the command pallette to restart kernel
---
---
---
```markdown
ctrl+shift+p
Go Notebook Kernel: Restart Kernel
```
---
As the notebook is using the new Notebook API, there are many keyboard shortcuts available in File > Preferences > Keyboard Shortcuts. Type in 'Notebook:' to see everything available.

## Output Examples
Click the Markdown files [in the repo here](https://github.com/gobookdev/gobook-examples) to see how the markdown formats after running cells and saving.

## Kernel
The kernel being used originated from [Go Notebook Kernel](https://marketplace.visualstudio.com/items?itemName=ethan-reesor.go-notebook-kernel) by Ethan Reesor, which uses [Yaegi](https://github.com/traefik/yaegi) under the hood.

All credit to Ethan Reesor.

Originally was using it as a dependency but ultimately merged it into this project for ease of development and local debugging.

## Development Status
### Working
- Add an option to activate extension with .md or .gobook files
- Activate extension as default when opening a .gobook file
- Syntax highlighting
- Save output of cells to file
- Reload output when reopening file
- Markdown formatting to represent code in and code out 

### In Development 
- Code completion / linting
- Auto format cells
- Variables explorer by saving state
- Rewrite Go kernel removing protocol buffers to make extension more lightweight
- Export to PDF

### Future development
- Add support to execute JS, TS and Python code cells with additional kernels
- Shared state between all languages, i.e. initialize x in Python and use it in Go
- API for adding any language 
- If any code is run that requires the standard library, add the import to the first block and execute it

## Known Issues
### Being worked on
- Printing in a loop sometimes results in an output being left in the buffer, and printing on the next execution
- var keyword has issues when rerunning cells
- Have to run imports in separate cells
- Rerunning imports not handled gracefully

[If you have any other issues please submit here](https://github.com/gobookdev/gobook/issues)

## Swapping Interpreter
The interpreter being used is Yaegi, working on using gomacro instead as it appears to be more 1:1 with compiled Go.

### Not working with Yaegi Interpreter
Checking a map key 

---
```go
x, ok := map1[0]
```
---
Initializing a map key with ++ 

---
```go
points["lakers"]++
```
---
