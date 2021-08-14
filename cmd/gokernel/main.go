package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"regexp"
	"sort"
)

type Program struct {
	File      string        // Temp file location
	Cells     map[int]*Cell // Represents a cell from VS Code notebook
	Functions string
}

type Cell struct {
	Fragment  int    // What index the cell was at, at time of execution
	Index     int    // Current index by order in VS Code
	Contents  string // What's inside the cell
	Executing bool   // The cell that is currently being executed
}

func (p *Program) run() ([]byte, error) {
	err := exec.Command("gopls", "imports", "-w", filepath.Join(p.File)).Run()
	if err != nil {
		return nil, err
	}
	out, err := exec.Command("go", "run", filepath.Join(p.File)).CombinedOutput()
	if err != nil {
		return nil, err
	}
	err = exec.Command("go", "fmt", filepath.Join(p.File)).Run()
	if err != nil {
		return nil, err
	}
	// Determine where the output for executing cell starts and ends
	start, _ := regexp.Compile("gobook-output-start")
	end, _ := regexp.Compile("gobook-output-end")
	s := start.FindIndex(out)
	if s == nil {
		return out, nil
	}
	e := end.FindIndex(out)
	return out[s[1]:e[0]], nil
}

func (p *Program) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	p.Functions = ""
	b := make([]byte, r.ContentLength)
	_, err := r.Body.Read(b)
	if err == io.EOF {
		log.Println("Parsed message")
	}
	var input Cell
	_ = json.Unmarshal([]byte(b), &input)
	p.Cells[input.Fragment] = &input

	keys := [][]int{}
	for _, v := range p.Cells {
		keys = append(keys, []int{v.Index, v.Fragment})
	}

	sort.Slice(keys, func(i, j int) bool {
		if keys[i][0] == keys[j][0] {
			return true
		}
		return keys[i][0] < keys[j][0]
	})
	var buf bytes.Buffer
	var bufBody bytes.Buffer

	for _, key := range keys {
		c := p.Cells[key[1]]

		reFunc, _ := regexp.Compile(`\s*func.*\(\)\s*{`)
		if reFunc.MatchString(c.Contents) {
			p.Functions += c.Contents
		} else {
			if c.Executing {
				bufBody.Write([]byte(`println("gobook-output-start")`))
			}
			bufBody.Write([]byte("\n" + c.Contents + "\n"))
			if c.Executing {
				bufBody.Write([]byte(`println("gobook-output-end") `))
			}
		}
	}
	p.Cells[input.Fragment].Executing = false
	buf.Write([]byte("package main\n\n"))
	buf.Write([]byte(p.Functions))
	buf.Write([]byte("\n\nfunc main() {"))
	buf.Write(bufBody.Bytes())
	buf.Write([]byte("\n}"))
	err = os.WriteFile(p.File, buf.Bytes(), 0600)
	if err != nil {
		message := err.Error() + "\nMake sure the directory exists and you have permission to write there"
		_, _ = w.Write([]byte(message))
		log.Println(message)
	} else {
		result, err := p.run()
		if err != nil {
			_, _ = w.Write([]byte(err.Error()))
			log.Println("Failed to run program:", err)
		}
		_, err = w.Write(result)
		if err != nil {
			fmt.Println(err)
		}
	}
}

func main() {
	cells := make(map[int]*Cell)
	http.Handle("/", &Program{File: os.TempDir() + "/main.go", Cells: cells})
	log.Println("Running on port 5250")
	log.Fatal(http.ListenAndServe(":5250", nil))
}
