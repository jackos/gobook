
# Change Log

## v0.1.14
Now installs tools asynch and does everything via tasks so user can see what's happening.

If gokernel not started or installed, now cancels cell execution and throws a warning to wait

## v0.1.8
Fixed error messages containing javascript text

## v0.1.6
Added error handling if go not installed, and gopls check

## v0.1.4
Made the gokernel installation cross platform

Fixed output containing newlines

Rewrote documentation to be current with new features

## v0.1.3
Changed the kernel to run inside a task giving the user more visibility over what's happening. It's also a gigantic speed boost compared to running inside nodejs child_module. And it also gracefully handles restarting task. Does a check on each cell execution and restarts task if not active.

Added a check, if a different file is being executed to the last one, the kernel removes the current source code from memory.

## v0.1.1
Fixed issues with kernel not installing correctly

## v0.1.0
Big overhaul, changed kernel to be a compiler, removed GRPC, removed a lot of redundant code. Many bugs disappeared after major changes.

## v0.0.21
Fix problem with rendering blank lines as code cells

## v0.0.20
Pipeline and new notebook working. Removed new notebook until VS Code 1.58 is released, as the proposed API doesn't allow it to work in a production environment. 
Git hash to restore functionality later: 98ee7dbeb14aca3a488bc43ae8e07deca44ed68

## v0.0.15
Formatting now in this form: 

---
```go
x := 10
println(x)
```
```output
10
```
---
This makes it clear what the input / output is without cluttering when viewing the markdown file. Experimented with many different ways, this looked the most elegant to me.

## v0.0.12
Saving cell outputs now working, they persist in the form of a codeblock with output as the code type e.g.

\`\`\`output

x = 10

\`\`\`

The parser then reads them back into the notebook when reloading it

## v0.0.11

First release with all functionality in a single extension with no dependencies
### Working
- Syntax highlighting for go code
- .gobook and .md file types interchangeable
- Open extension automatically when opening file
### Not working
- Code completions
- Linting
- Saving output to file
- Formatting cell blocks

## v0.0.1 - v0.0.11

Initial release, with ability to open .gobook and .md files while retaining markdown syntax. Only available for VS Code Insiders 1.58.0 due to a bug fix with the newly released notebook API.

Many patch releases to test how the extension renders on the marketplace