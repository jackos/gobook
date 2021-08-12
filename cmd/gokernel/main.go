package main

import (
	"bytes"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"regexp"

	"golang.org/x/tools/go/packages"
)

type Page struct {
	File string
	Body []byte
}

func (p *Page) save() error {
	var buf bytes.Buffer
	pkgs, err := packages.Load(nil, "std")
	if err != nil {
		panic(err)
	}
	fmt.Fprintf(&buf, "package main\n\nimport (	\n")
	for _, v := range pkgs {
		matches, _ := regexp.Match(v.Name, p.Body)
		if matches {
			fmt.Fprintf(&buf, "	\"%v\"\n", v.Name)
		}
	}
	fmt.Fprintf(&buf, ")\n\nfunc main() {\n%s\n}", string(p.Body))
	return os.WriteFile(p.File, buf.Bytes(), 0600)
}

func run(filename string) (*Page, error) {
	out, err := exec.Command("go", "run", filepath.Join(filename)).CombinedOutput()
	if err != nil {
		fmt.Fprint(os.Stderr, err)
	}
	return &Page{File: filename, Body: out}, nil
}

func handler(w http.ResponseWriter, r *http.Request) {
	b := make([]byte, r.ContentLength)
	_, err := r.Body.Read(b)
	if err != nil {
		log.Println("Parsed message")
	}
	p1 := &Page{File: "/home/jacko/main.go", Body: b}
	err = p1.save()
	if err != nil {
		log.Println("Failed to save program:", err)
	}
	result, err := run("/home/jacko/main.go")
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
	log.Fatal(http.ListenAndServe(":5250", nil))
}
