# Change Log

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