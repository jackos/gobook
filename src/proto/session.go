package proto

import (
	"bytes"
	"context"
	"errors"
	"fmt"
	"go/build"
	"go/scanner"
	"io"
	"os"
	"runtime/debug"
	"strings"
	"sync"
	"time"

	"github.com/traefik/yaegi/interp"
	"github.com/traefik/yaegi/stdlib"
	"google.golang.org/protobuf/types/known/durationpb"
)

type Session struct {
	interp  *interp.Interpreter
	stream  Kernel_SessionServer
	context context.Context
	cancel  context.CancelFunc

	errMu  sync.Mutex
	errors []error

	stdout chan []byte
	stderr chan []byte
}

func (s *Session) Interpreter() *interp.Interpreter { return s.interp }
func (s *Session) Context() context.Context         { return s.context }

func (s *Session) addError(err ...error) {
	s.errMu.Lock()
	defer s.errMu.Unlock()
	s.errors = append(s.errors, err...)
}

func StartSession(stream Kernel_SessionServer) *Session {
	s := new(Session)
	s.stream = stream
	s.context, s.cancel = context.WithCancel(stream.Context())

	// rIn, wIn := io.Pipe()
	rOut, wOut := io.Pipe()
	rErr, wErr := io.Pipe()

	s.stdout = make(chan []byte)
	s.stderr = make(chan []byte)

	go func() {
		<-s.context.Done()
		rOut.Close()
		wOut.Close()
		rErr.Close()
		wErr.Close()
	}()

	go s.forwardIO(rOut, s.stdout)
	go s.forwardIO(rErr, s.stderr)

	gopath := os.Getenv("GOPATH")
	if gopath == "" {
		gopath = build.Default.GOPATH
	}

	s.interp = interp.New(interp.Options{
		Stdin:  bytes.NewReader(nil),
		Stdout: wOut,
		Stderr: wErr,
		GoPath: gopath,
	})

	s.interp.Use(stdlib.Symbols)

	return s
}

func (s *Session) forwardIO(r io.Reader, ch chan<- []byte) {
	defer close(ch)

	var b [512]byte
	for {
		n, err := r.Read(b[:])
		if err != nil {
			if !errors.Is(err, io.ErrClosedPipe) {
				s.addError(err)
			}
			return
		}

		d := make([]byte, n)
		copy(d, b[:n])
		ch <- d
	}
}

func (s *Session) sendIO(ctx context.Context, wg *sync.WaitGroup, ch <-chan []byte, mime string) {
	defer wg.Done()

	for {
		select {
		case <-ctx.Done():
			return

		case b := <-ch:
			s.Send(&Content{Mime: mime, Value: b})
		}
	}
}

func (s *Session) EvalWithIO(ctx context.Context, code string) {
	var err error
	var resp EvaluateResponse
	var wg sync.WaitGroup

	defer s.Send(&resp)

	defer func() {
		if r := recover(); r != nil {
			stack := string(debug.Stack())
			resp.Errors = append(resp.Errors, &EvaluateError{
				Message: fmt.Sprint(r),
				Stack:   &stack,
			})
		}
	}()

	ctx, cancel := context.WithCancel(ctx)

	wg.Add(2)
	go s.sendIO(ctx, &wg, s.stdout, "stdout")
	go s.sendIO(ctx, &wg, s.stderr, "stderr")

	defer wg.Wait()
	defer cancel()

	before := time.Now()
	_, err = s.interp.EvalWithContext(ctx, code)
	after := time.Now()
	resp.Duration = durationpb.New(after.Sub(before))

	if err == nil {
		return
	}

	select {
	case <-ctx.Done():
		resp.Errors = append(resp.Errors, &EvaluateError{
			Message: "Canceled",
		})
	default:
	}

	var errPanic interp.Panic
	var errList scanner.ErrorList
	if errors.As(err, &errPanic) {
		var stack = string(errPanic.Stack)
		resp.Errors = append(resp.Errors, &EvaluateError{
			Message: fmt.Sprint(errPanic.Value),
			Stack:   &stack,
		})
	} else if errors.As(err, &errList) {
		for _, err := range errList {
			var errScanner *scanner.Error
			if errors.As(err, &errScanner) {
				resp.Errors = append(resp.Errors, &EvaluateError{
					Message: err.Msg,
					Position: &LineAndColumn{
						Line:   int32(errScanner.Pos.Line),
						Column: int32(errScanner.Pos.Column),
					},
				})
			} else {
				resp.Errors = append(resp.Errors, &EvaluateError{
					Message: err.Msg,
				})
			}
		}
	} else if err.Error() != "context canceled" {
		resp.Errors = append(resp.Errors, &EvaluateError{
			Message: err.Error(),
		})
	}
}

func (s *Session) Err() error {
	s.errMu.Lock()
	errs := s.errors
	s.errors = nil
	s.errMu.Unlock()

	if len(errs) == 0 {
		return nil
	}

	if len(errs) == 1 {
		return errs[0]
	}

	str := make([]string, len(errs))
	for i := range errs {
		str[i] = errs[i].Error()
	}

	return errors.New(strings.Join(str, "\n"))
}
