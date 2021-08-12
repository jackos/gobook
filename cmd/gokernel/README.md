### Gokernel

This is a rewrite of the kernel not yet implemented.

Instead of using an interpreter it simply writes a go program to disk and runs it.

The benefits this adds is: 
- 1 to 1 with compiled go code
- Many programs will run faster
- Use pre-compiled external libraries
- Remove the need to import anything in the source files
- Much greater simplicity, not relying on external libraries