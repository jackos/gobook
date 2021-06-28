package main

import (
	"bufio"
	"flag"
	"fmt"
	"io"
	"log"
	"net"
	"os"
	"strings"

	"github.com/davecgh/go-spew/spew"
	"github.com/traefik/yaegi/interp"
	"github.com/traefik/yaegi/stdlib"
	"gitlab.com/ethan.reesor/vscode-notebooks/go-kernel/src/proto"
	grpc "google.golang.org/grpc"
)

var testMode = flag.Bool("test", false, "Test mode")

const usage = `
Usage: %[1]s <cmd> [<args>]

	%[1]s test
	%[1]s stdio
	%[1]s tcp <addr>
`

func printUsage() {
	fmt.Fprintf(os.Stderr, usage[1:], os.Args[0])
	os.Exit(1)
}

func main() {
	if len(os.Args) < 2 {
		printUsage()
	}

	var l net.Listener
	var err error

	switch os.Args[1] {
	case "stdio":
		if len(os.Args) != 2 {
			printUsage()
		}

		l = new(stdioListener)

	case "tcp":
		if len(os.Args) != 3 {
			printUsage()
		}

		l, err = net.Listen("tcp", os.Args[2])
		if err != nil {
			log.Fatalf("failed to listen: %v", err)
		}

		fmt.Printf("Listening on %v\n", l.Addr())

	case "test":
		test()
		return

	default:
		printUsage()
	}

	k := new(kernel)
	s := grpc.NewServer()
	proto.RegisterKernelServer(s, k)

	if err := s.Serve(l); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}

func test() {
	rOut, wOut := io.Pipe()
	rErr, wErr := io.Pipe()

	go forward("1>", rOut)
	go forward("2>", rErr)

	I := interp.New(interp.Options{
		Stdout: wOut,
		Stderr: wErr,
	})

	I.Use(stdlib.Symbols)

	for {
		var code string
		s := bufio.NewScanner(os.Stdin)

		fmt.Print("<: ")
		for s.Scan() {
			code += s.Text() + "\n"
			fmt.Print(".. ")
		}
		fmt.Println()

		if code == "" {
			return
		}

		if strings.TrimSpace(code) == "" {
			continue
		}

		v, err := I.Eval(code)
		if v.IsValid() {
			fmt.Print("=>", spew.Sdump(v.Interface()))
		}
		if err != nil {
			fmt.Println("!>", err)
		}
	}
}

func forward(prefix string, r io.Reader) {
	s := bufio.NewScanner(r)

	for s.Scan() {
		fmt.Printf("%s %s\n", prefix, s.Text())
	}
}
