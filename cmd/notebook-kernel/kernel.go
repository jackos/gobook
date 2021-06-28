package main

import (
	"context"

	"gitlab.com/ethan.reesor/vscode-notebooks/go-kernel/src/proto"
)

type kernel struct {
	proto.UnsafeKernelServer
}

type promptOptions struct {
	Prompt      string
	Placeholder string
	Password    bool
}

func (k *kernel) Session(stream proto.Kernel_SessionServer) error {
	s := proto.StartSession(stream)
	s.UseNotebookAPI()

	prompt := make(chan *proto.PromptResponse)
	cache := make(chan *proto.CacheResponse)

	s.Interpreter().Use(proto.PackageExports{}.
		Add("PromptOptions", (*promptOptions)(nil)).
		Add("Prompt", func(opts *promptOptions) (string, bool) {
			if opts == nil {
				opts = new(promptOptions)
			}

			req := new(proto.PromptRequest)
			if opts != nil {
				if opts.Prompt != "" {
					req.Prompt = &opts.Prompt
				}
				if opts.Placeholder != "" {
					req.Placeholder = &opts.Placeholder
				}
				req.Password = opts.Password
			}

			s.Send(req)

			select {
			case <-s.Context().Done():
				return "", false
			case resp := <-prompt:
				if resp.Value == nil {
					return "", false
				}
				return *resp.Value, true
			}
		}).
		Add("Cache", func(key string, get func() string) string {
			var req = &proto.CacheRequest{Key: key}
			var resp *proto.CacheResponse

			s.Send(req)
			select {
			case <-s.Context().Done():
				return ""
			case resp = <-cache:
			}

			if resp.Value != nil {
				return *resp.Value
			}

			v := get()
			req.Write = &v

			s.Send(req)
			select {
			case <-s.Context().Done():
			case <-cache:
			}

			return v
		}).
		ExportAs("vscode"))

	evalSem := make(chan struct{}, 1)

	var cancel context.CancelFunc = func() {}
	for {
		msg, ok := s.Recv()
		if !ok {
			break
		}

		switch msg := msg.(type) {
		case *proto.EvaluateRequest:
			if msg.Code == "" {
				continue
			}

			var ctx context.Context
			ctx, cancel = context.WithCancel(s.Context())

			evalSem <- struct{}{}
			go func() {
				defer cancel()
				defer func() { <-evalSem }()
				s.EvalWithIO(ctx, msg.Code)
			}()

		case *proto.PromptResponse:
			prompt <- msg

		case *proto.CacheResponse:
			cache <- msg

		case *proto.CancelEvaluate:
			cancel()
		}
	}

	return s.Err()
}
