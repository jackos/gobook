package main

import (
	"bytes"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"regexp"
)

type Page struct {
	File string
	Body []byte
}

func (p *Page) save(original []byte) error {
	var buf bytes.Buffer
	// Get the cell number from incoming input
	cellRE, _ := regexp.Compile("// cell")
	endRE, _ := regexp.Compile("// end")
	pos := cellRE.FindIndex(p.Body)
	block := ""
	if pos == nil {
		fmt.Println("Didn't find an input")
	} else {
		i := pos[1]
		end := 0
		for {
			i++
			if p.Body[i] == '\n' {
				end = i
				break
			}
		}
		block = string(p.Body[pos[1]+1 : end])
		fmt.Println(block)
	}

	if len(original) > 1 {
		inputRE, _ := regexp.Compile("// cell " + block)
		start := inputRE.FindIndex(original)
		// If no input matches, insert at the end
		if start == nil {
			i := endRE.FindIndex(original)
			fmt.Fprint(&buf, string(original[:i[0]]))
			fmt.Fprint(&buf, "\n"+string(p.Body))
			fmt.Fprint(&buf, "\n\n"+string(original[i[0]:]))
		} else {
			// If get a match, replace old input with new one
			textRemainder := original[start[1]:]
			end := cellRE.FindIndex(textRemainder)
			if end == nil {
				end = endRE.FindIndex(original)
			} else {
				end[1] = end[1] + start[1]
				end[0] = end[0] + start[1]
			}
			fmt.Fprint(&buf, string(original[:start[0]]))
			fmt.Fprint(&buf, string(p.Body))
			fmt.Fprint(&buf, "\n\n"+string(original[end[0]:]))
		}
	} else {
		fmt.Fprint(&buf, "package main\n\nfunc main() {\n")
		fmt.Fprint(&buf, string(p.Body))
		fmt.Fprint(&buf, "\n// end\n}")
	}
	return os.WriteFile(p.File, buf.Bytes(), 0600)
}

func run(filename string) (*Page, error) {
	exec.Command("gopls", "imports", "-w", filepath.Join(filename)).Run()
	out, err := exec.Command("go", "run", filepath.Join(filename)).CombinedOutput()
	if err != nil {
		fmt.Fprint(os.Stderr, err)
	}
	go exec.Command("go", "fmt", filepath.Join(filename)).Run()
	return &Page{File: filename, Body: out}, nil
}

func load(filename string) []byte {
	dat, err := os.ReadFile(filename)
	if err != nil {
		fmt.Println(err)
	}
	return dat
}

func handler(w http.ResponseWriter, r *http.Request) {
	b := make([]byte, r.ContentLength)
	_, err := r.Body.Read(b)
	if err == io.EOF {
		log.Println("Parsed message")
	}

	file := os.TempDir() + "/main.go"
	original := load(file)

	p1 := &Page{File: file, Body: b}
	err = p1.save(original)
	if err != nil {
		log.Println("Failed to save program:", err)
	}

	result, err := run(file)
	if err != nil {
		log.Println("Could not execute program:", err)
	}

	_, err = w.Write(result.Body)
	if err != nil {
		fmt.Println(err)
	}
}

func main() {
	http.HandleFunc("/", handler)
	log.Println("Running on port 5250")
	log.Fatal(http.ListenAndServe(":5250", nil))
}
