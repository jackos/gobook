package proto

//go:generate protoc -I../.. --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative kernel.proto

func construct(v interface{}) *ToClient {
	switch u := v.(type) {
	case ToClient_Output:
		v = &u
	case ToClient_Evaluate:
		v = &u
	case ToClient_Prompt:
		v = &u
	case ToClient_Cache:
		v = &u
	case Output:
		v = &u
	case Content:
		v = &u
	case EvaluateResponse:
		v = &u
	case PromptRequest:
		v = &u
	case CacheRequest:
		v = &u
	}

	switch u := v.(type) {
	case *ToClient_Output:
		return &ToClient{Kind: u}
	case *ToClient_Evaluate:
		return &ToClient{Kind: u}
	case *ToClient_Prompt:
		return &ToClient{Kind: u}
	case *ToClient_Cache:
		return &ToClient{Kind: u}
	case *Output:
		return &ToClient{Kind: &ToClient_Output{Output: u}}
	case []*Content:
		return &ToClient{Kind: &ToClient_Output{Output: &Output{Content: u}}}
	case *Content:
		return &ToClient{Kind: &ToClient_Output{Output: &Output{Content: []*Content{u}}}}
	case *EvaluateResponse:
		return &ToClient{Kind: &ToClient_Evaluate{Evaluate: u}}
	case *PromptRequest:
		return &ToClient{Kind: &ToClient_Prompt{Prompt: u}}
	case *CacheRequest:
		return &ToClient{Kind: &ToClient_Cache{Cache: u}}
	}

	panic("Unknown type")
}

func (s *Session) Send(v interface{}) {
	err := s.stream.Send(construct(v))
	if err != nil {
		s.addError(err)
	}
}

func (s *Session) Recv() (interface{}, bool) {
	v, err := s.stream.Recv()
	if err != nil {
		s.addError(err)
		return v, false
	}

	switch v := v.GetKind().(type) {
	case *ToServer_Evaluate:
		return v.Evaluate, true
	case *ToServer_Prompt:
		return v.Prompt, true
	case *ToServer_Cache:
		return v.Cache, true
	case *ToServer_Cancel:
		return v.Cancel, true
	default:
		return v, true
	}
}
