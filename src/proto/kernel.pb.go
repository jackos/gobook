// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.15.6
// source: kernel.proto

package proto

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	durationpb "google.golang.org/protobuf/types/known/durationpb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type ToServer struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Types that are assignable to Kind:
	//	*ToServer_Evaluate
	//	*ToServer_Prompt
	//	*ToServer_Cache
	//	*ToServer_Cancel
	Kind isToServer_Kind `protobuf_oneof:"kind"`
}

func (x *ToServer) Reset() {
	*x = ToServer{}
	if protoimpl.UnsafeEnabled {
		mi := &file_kernel_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ToServer) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ToServer) ProtoMessage() {}

func (x *ToServer) ProtoReflect() protoreflect.Message {
	mi := &file_kernel_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ToServer.ProtoReflect.Descriptor instead.
func (*ToServer) Descriptor() ([]byte, []int) {
	return file_kernel_proto_rawDescGZIP(), []int{0}
}

func (m *ToServer) GetKind() isToServer_Kind {
	if m != nil {
		return m.Kind
	}
	return nil
}

func (x *ToServer) GetEvaluate() *EvaluateRequest {
	if x, ok := x.GetKind().(*ToServer_Evaluate); ok {
		return x.Evaluate
	}
	return nil
}

func (x *ToServer) GetPrompt() *PromptResponse {
	if x, ok := x.GetKind().(*ToServer_Prompt); ok {
		return x.Prompt
	}
	return nil
}

func (x *ToServer) GetCache() *CacheResponse {
	if x, ok := x.GetKind().(*ToServer_Cache); ok {
		return x.Cache
	}
	return nil
}

func (x *ToServer) GetCancel() *CancelEvaluate {
	if x, ok := x.GetKind().(*ToServer_Cancel); ok {
		return x.Cancel
	}
	return nil
}

type isToServer_Kind interface {
	isToServer_Kind()
}

type ToServer_Evaluate struct {
	Evaluate *EvaluateRequest `protobuf:"bytes,1,opt,name=evaluate,proto3,oneof"`
}

type ToServer_Prompt struct {
	Prompt *PromptResponse `protobuf:"bytes,2,opt,name=prompt,proto3,oneof"`
}

type ToServer_Cache struct {
	Cache *CacheResponse `protobuf:"bytes,3,opt,name=cache,proto3,oneof"`
}

type ToServer_Cancel struct {
	Cancel *CancelEvaluate `protobuf:"bytes,4,opt,name=cancel,proto3,oneof"`
}

func (*ToServer_Evaluate) isToServer_Kind() {}

func (*ToServer_Prompt) isToServer_Kind() {}

func (*ToServer_Cache) isToServer_Kind() {}

func (*ToServer_Cancel) isToServer_Kind() {}

type ToClient struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Types that are assignable to Kind:
	//	*ToClient_Output
	//	*ToClient_Evaluate
	//	*ToClient_Prompt
	//	*ToClient_Cache
	Kind isToClient_Kind `protobuf_oneof:"kind"`
}

func (x *ToClient) Reset() {
	*x = ToClient{}
	if protoimpl.UnsafeEnabled {
		mi := &file_kernel_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ToClient) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ToClient) ProtoMessage() {}

func (x *ToClient) ProtoReflect() protoreflect.Message {
	mi := &file_kernel_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ToClient.ProtoReflect.Descriptor instead.
func (*ToClient) Descriptor() ([]byte, []int) {
	return file_kernel_proto_rawDescGZIP(), []int{1}
}

func (m *ToClient) GetKind() isToClient_Kind {
	if m != nil {
		return m.Kind
	}
	return nil
}

func (x *ToClient) GetOutput() *Output {
	if x, ok := x.GetKind().(*ToClient_Output); ok {
		return x.Output
	}
	return nil
}

func (x *ToClient) GetEvaluate() *EvaluateResponse {
	if x, ok := x.GetKind().(*ToClient_Evaluate); ok {
		return x.Evaluate
	}
	return nil
}

func (x *ToClient) GetPrompt() *PromptRequest {
	if x, ok := x.GetKind().(*ToClient_Prompt); ok {
		return x.Prompt
	}
	return nil
}

func (x *ToClient) GetCache() *CacheRequest {
	if x, ok := x.GetKind().(*ToClient_Cache); ok {
		return x.Cache
	}
	return nil
}

type isToClient_Kind interface {
	isToClient_Kind()
}

type ToClient_Output struct {
	Output *Output `protobuf:"bytes,1,opt,name=output,proto3,oneof"`
}

type ToClient_Evaluate struct {
	Evaluate *EvaluateResponse `protobuf:"bytes,2,opt,name=evaluate,proto3,oneof"`
}

type ToClient_Prompt struct {
	Prompt *PromptRequest `protobuf:"bytes,3,opt,name=prompt,proto3,oneof"`
}

type ToClient_Cache struct {
	Cache *CacheRequest `protobuf:"bytes,4,opt,name=cache,proto3,oneof"`
}

func (*ToClient_Output) isToClient_Kind() {}

func (*ToClient_Evaluate) isToClient_Kind() {}

func (*ToClient_Prompt) isToClient_Kind() {}

func (*ToClient_Cache) isToClient_Kind() {}

type EvaluateRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Code string `protobuf:"bytes,1,opt,name=code,proto3" json:"code,omitempty"`
}

func (x *EvaluateRequest) Reset() {
	*x = EvaluateRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_kernel_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *EvaluateRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*EvaluateRequest) ProtoMessage() {}

func (x *EvaluateRequest) ProtoReflect() protoreflect.Message {
	mi := &file_kernel_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use EvaluateRequest.ProtoReflect.Descriptor instead.
func (*EvaluateRequest) Descriptor() ([]byte, []int) {
	return file_kernel_proto_rawDescGZIP(), []int{2}
}

func (x *EvaluateRequest) GetCode() string {
	if x != nil {
		return x.Code
	}
	return ""
}

type EvaluateResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Duration *durationpb.Duration `protobuf:"bytes,1,opt,name=duration,proto3" json:"duration,omitempty"`
	Errors   []*EvaluateError     `protobuf:"bytes,2,rep,name=errors,proto3" json:"errors,omitempty"`
}

func (x *EvaluateResponse) Reset() {
	*x = EvaluateResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_kernel_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *EvaluateResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*EvaluateResponse) ProtoMessage() {}

func (x *EvaluateResponse) ProtoReflect() protoreflect.Message {
	mi := &file_kernel_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use EvaluateResponse.ProtoReflect.Descriptor instead.
func (*EvaluateResponse) Descriptor() ([]byte, []int) {
	return file_kernel_proto_rawDescGZIP(), []int{3}
}

func (x *EvaluateResponse) GetDuration() *durationpb.Duration {
	if x != nil {
		return x.Duration
	}
	return nil
}

func (x *EvaluateResponse) GetErrors() []*EvaluateError {
	if x != nil {
		return x.Errors
	}
	return nil
}

type EvaluateError struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Message  string         `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
	Stack    *string        `protobuf:"bytes,2,opt,name=stack,proto3,oneof" json:"stack,omitempty"`
	Position *LineAndColumn `protobuf:"bytes,3,opt,name=position,proto3,oneof" json:"position,omitempty"`
}

func (x *EvaluateError) Reset() {
	*x = EvaluateError{}
	if protoimpl.UnsafeEnabled {
		mi := &file_kernel_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *EvaluateError) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*EvaluateError) ProtoMessage() {}

func (x *EvaluateError) ProtoReflect() protoreflect.Message {
	mi := &file_kernel_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use EvaluateError.ProtoReflect.Descriptor instead.
func (*EvaluateError) Descriptor() ([]byte, []int) {
	return file_kernel_proto_rawDescGZIP(), []int{4}
}

func (x *EvaluateError) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

func (x *EvaluateError) GetStack() string {
	if x != nil && x.Stack != nil {
		return *x.Stack
	}
	return ""
}

func (x *EvaluateError) GetPosition() *LineAndColumn {
	if x != nil {
		return x.Position
	}
	return nil
}

type LineAndColumn struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Line   int32 `protobuf:"varint,1,opt,name=line,proto3" json:"line,omitempty"`
	Column int32 `protobuf:"varint,2,opt,name=column,proto3" json:"column,omitempty"`
}

func (x *LineAndColumn) Reset() {
	*x = LineAndColumn{}
	if protoimpl.UnsafeEnabled {
		mi := &file_kernel_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LineAndColumn) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LineAndColumn) ProtoMessage() {}

func (x *LineAndColumn) ProtoReflect() protoreflect.Message {
	mi := &file_kernel_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LineAndColumn.ProtoReflect.Descriptor instead.
func (*LineAndColumn) Descriptor() ([]byte, []int) {
	return file_kernel_proto_rawDescGZIP(), []int{5}
}

func (x *LineAndColumn) GetLine() int32 {
	if x != nil {
		return x.Line
	}
	return 0
}

func (x *LineAndColumn) GetColumn() int32 {
	if x != nil {
		return x.Column
	}
	return 0
}

type Output struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Content []*Content `protobuf:"bytes,1,rep,name=content,proto3" json:"content,omitempty"`
}

func (x *Output) Reset() {
	*x = Output{}
	if protoimpl.UnsafeEnabled {
		mi := &file_kernel_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Output) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Output) ProtoMessage() {}

func (x *Output) ProtoReflect() protoreflect.Message {
	mi := &file_kernel_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Output.ProtoReflect.Descriptor instead.
func (*Output) Descriptor() ([]byte, []int) {
	return file_kernel_proto_rawDescGZIP(), []int{6}
}

func (x *Output) GetContent() []*Content {
	if x != nil {
		return x.Content
	}
	return nil
}

type Content struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Mime  string `protobuf:"bytes,1,opt,name=mime,proto3" json:"mime,omitempty"`
	Value []byte `protobuf:"bytes,2,opt,name=value,proto3" json:"value,omitempty"`
}

func (x *Content) Reset() {
	*x = Content{}
	if protoimpl.UnsafeEnabled {
		mi := &file_kernel_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Content) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Content) ProtoMessage() {}

func (x *Content) ProtoReflect() protoreflect.Message {
	mi := &file_kernel_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Content.ProtoReflect.Descriptor instead.
func (*Content) Descriptor() ([]byte, []int) {
	return file_kernel_proto_rawDescGZIP(), []int{7}
}

func (x *Content) GetMime() string {
	if x != nil {
		return x.Mime
	}
	return ""
}

func (x *Content) GetValue() []byte {
	if x != nil {
		return x.Value
	}
	return nil
}

type PromptRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Prompt      *string `protobuf:"bytes,1,opt,name=prompt,proto3,oneof" json:"prompt,omitempty"`
	Placeholder *string `protobuf:"bytes,2,opt,name=placeholder,proto3,oneof" json:"placeholder,omitempty"`
	Password    bool    `protobuf:"varint,3,opt,name=password,proto3" json:"password,omitempty"`
}

func (x *PromptRequest) Reset() {
	*x = PromptRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_kernel_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PromptRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PromptRequest) ProtoMessage() {}

func (x *PromptRequest) ProtoReflect() protoreflect.Message {
	mi := &file_kernel_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PromptRequest.ProtoReflect.Descriptor instead.
func (*PromptRequest) Descriptor() ([]byte, []int) {
	return file_kernel_proto_rawDescGZIP(), []int{8}
}

func (x *PromptRequest) GetPrompt() string {
	if x != nil && x.Prompt != nil {
		return *x.Prompt
	}
	return ""
}

func (x *PromptRequest) GetPlaceholder() string {
	if x != nil && x.Placeholder != nil {
		return *x.Placeholder
	}
	return ""
}

func (x *PromptRequest) GetPassword() bool {
	if x != nil {
		return x.Password
	}
	return false
}

type PromptResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Value *string `protobuf:"bytes,1,opt,name=value,proto3,oneof" json:"value,omitempty"`
}

func (x *PromptResponse) Reset() {
	*x = PromptResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_kernel_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PromptResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PromptResponse) ProtoMessage() {}

func (x *PromptResponse) ProtoReflect() protoreflect.Message {
	mi := &file_kernel_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PromptResponse.ProtoReflect.Descriptor instead.
func (*PromptResponse) Descriptor() ([]byte, []int) {
	return file_kernel_proto_rawDescGZIP(), []int{9}
}

func (x *PromptResponse) GetValue() string {
	if x != nil && x.Value != nil {
		return *x.Value
	}
	return ""
}

type CacheRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Key   string  `protobuf:"bytes,1,opt,name=key,proto3" json:"key,omitempty"`
	Write *string `protobuf:"bytes,2,opt,name=write,proto3,oneof" json:"write,omitempty"`
}

func (x *CacheRequest) Reset() {
	*x = CacheRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_kernel_proto_msgTypes[10]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CacheRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CacheRequest) ProtoMessage() {}

func (x *CacheRequest) ProtoReflect() protoreflect.Message {
	mi := &file_kernel_proto_msgTypes[10]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CacheRequest.ProtoReflect.Descriptor instead.
func (*CacheRequest) Descriptor() ([]byte, []int) {
	return file_kernel_proto_rawDescGZIP(), []int{10}
}

func (x *CacheRequest) GetKey() string {
	if x != nil {
		return x.Key
	}
	return ""
}

func (x *CacheRequest) GetWrite() string {
	if x != nil && x.Write != nil {
		return *x.Write
	}
	return ""
}

type CacheResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Value *string `protobuf:"bytes,1,opt,name=value,proto3,oneof" json:"value,omitempty"`
}

func (x *CacheResponse) Reset() {
	*x = CacheResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_kernel_proto_msgTypes[11]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CacheResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CacheResponse) ProtoMessage() {}

func (x *CacheResponse) ProtoReflect() protoreflect.Message {
	mi := &file_kernel_proto_msgTypes[11]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CacheResponse.ProtoReflect.Descriptor instead.
func (*CacheResponse) Descriptor() ([]byte, []int) {
	return file_kernel_proto_rawDescGZIP(), []int{11}
}

func (x *CacheResponse) GetValue() string {
	if x != nil && x.Value != nil {
		return *x.Value
	}
	return ""
}

type CancelEvaluate struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *CancelEvaluate) Reset() {
	*x = CancelEvaluate{}
	if protoimpl.UnsafeEnabled {
		mi := &file_kernel_proto_msgTypes[12]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CancelEvaluate) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CancelEvaluate) ProtoMessage() {}

func (x *CancelEvaluate) ProtoReflect() protoreflect.Message {
	mi := &file_kernel_proto_msgTypes[12]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CancelEvaluate.ProtoReflect.Descriptor instead.
func (*CancelEvaluate) Descriptor() ([]byte, []int) {
	return file_kernel_proto_rawDescGZIP(), []int{12}
}

var File_kernel_proto protoreflect.FileDescriptor

var file_kernel_proto_rawDesc = []byte{
	0x0a, 0x0c, 0x6b, 0x65, 0x72, 0x6e, 0x65, 0x6c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f,
	0x64, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xc0,
	0x01, 0x0a, 0x08, 0x54, 0x6f, 0x53, 0x65, 0x72, 0x76, 0x65, 0x72, 0x12, 0x2e, 0x0a, 0x08, 0x65,
	0x76, 0x61, 0x6c, 0x75, 0x61, 0x74, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e,
	0x45, 0x76, 0x61, 0x6c, 0x75, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x48,
	0x00, 0x52, 0x08, 0x65, 0x76, 0x61, 0x6c, 0x75, 0x61, 0x74, 0x65, 0x12, 0x29, 0x0a, 0x06, 0x70,
	0x72, 0x6f, 0x6d, 0x70, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x50, 0x72,
	0x6f, 0x6d, 0x70, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x48, 0x00, 0x52, 0x06,
	0x70, 0x72, 0x6f, 0x6d, 0x70, 0x74, 0x12, 0x26, 0x0a, 0x05, 0x63, 0x61, 0x63, 0x68, 0x65, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x43, 0x61, 0x63, 0x68, 0x65, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x48, 0x00, 0x52, 0x05, 0x63, 0x61, 0x63, 0x68, 0x65, 0x12, 0x29,
	0x0a, 0x06, 0x63, 0x61, 0x6e, 0x63, 0x65, 0x6c, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f,
	0x2e, 0x43, 0x61, 0x6e, 0x63, 0x65, 0x6c, 0x45, 0x76, 0x61, 0x6c, 0x75, 0x61, 0x74, 0x65, 0x48,
	0x00, 0x52, 0x06, 0x63, 0x61, 0x6e, 0x63, 0x65, 0x6c, 0x42, 0x06, 0x0a, 0x04, 0x6b, 0x69, 0x6e,
	0x64, 0x22, 0xb7, 0x01, 0x0a, 0x08, 0x54, 0x6f, 0x43, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x12, 0x21,
	0x0a, 0x06, 0x6f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x07,
	0x2e, 0x4f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x48, 0x00, 0x52, 0x06, 0x6f, 0x75, 0x74, 0x70, 0x75,
	0x74, 0x12, 0x2f, 0x0a, 0x08, 0x65, 0x76, 0x61, 0x6c, 0x75, 0x61, 0x74, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x11, 0x2e, 0x45, 0x76, 0x61, 0x6c, 0x75, 0x61, 0x74, 0x65, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x48, 0x00, 0x52, 0x08, 0x65, 0x76, 0x61, 0x6c, 0x75, 0x61,
	0x74, 0x65, 0x12, 0x28, 0x0a, 0x06, 0x70, 0x72, 0x6f, 0x6d, 0x70, 0x74, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x50, 0x72, 0x6f, 0x6d, 0x70, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x48, 0x00, 0x52, 0x06, 0x70, 0x72, 0x6f, 0x6d, 0x70, 0x74, 0x12, 0x25, 0x0a, 0x05,
	0x63, 0x61, 0x63, 0x68, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0d, 0x2e, 0x43, 0x61,
	0x63, 0x68, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x48, 0x00, 0x52, 0x05, 0x63, 0x61,
	0x63, 0x68, 0x65, 0x42, 0x06, 0x0a, 0x04, 0x6b, 0x69, 0x6e, 0x64, 0x22, 0x25, 0x0a, 0x0f, 0x45,
	0x76, 0x61, 0x6c, 0x75, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12,
	0x0a, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x63, 0x6f,
	0x64, 0x65, 0x22, 0x71, 0x0a, 0x10, 0x45, 0x76, 0x61, 0x6c, 0x75, 0x61, 0x74, 0x65, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x35, 0x0a, 0x08, 0x64, 0x75, 0x72, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x44, 0x75, 0x72, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x52, 0x08, 0x64, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x26, 0x0a,
	0x06, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0e, 0x2e,
	0x45, 0x76, 0x61, 0x6c, 0x75, 0x61, 0x74, 0x65, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x52, 0x06, 0x65,
	0x72, 0x72, 0x6f, 0x72, 0x73, 0x22, 0x8c, 0x01, 0x0a, 0x0d, 0x45, 0x76, 0x61, 0x6c, 0x75, 0x61,
	0x74, 0x65, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61,
	0x67, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67,
	0x65, 0x12, 0x19, 0x0a, 0x05, 0x73, 0x74, 0x61, 0x63, 0x6b, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x48, 0x00, 0x52, 0x05, 0x73, 0x74, 0x61, 0x63, 0x6b, 0x88, 0x01, 0x01, 0x12, 0x2f, 0x0a, 0x08,
	0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0e,
	0x2e, 0x4c, 0x69, 0x6e, 0x65, 0x41, 0x6e, 0x64, 0x43, 0x6f, 0x6c, 0x75, 0x6d, 0x6e, 0x48, 0x01,
	0x52, 0x08, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x88, 0x01, 0x01, 0x42, 0x08, 0x0a,
	0x06, 0x5f, 0x73, 0x74, 0x61, 0x63, 0x6b, 0x42, 0x0b, 0x0a, 0x09, 0x5f, 0x70, 0x6f, 0x73, 0x69,
	0x74, 0x69, 0x6f, 0x6e, 0x22, 0x3b, 0x0a, 0x0d, 0x4c, 0x69, 0x6e, 0x65, 0x41, 0x6e, 0x64, 0x43,
	0x6f, 0x6c, 0x75, 0x6d, 0x6e, 0x12, 0x12, 0x0a, 0x04, 0x6c, 0x69, 0x6e, 0x65, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x04, 0x6c, 0x69, 0x6e, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x63, 0x6f, 0x6c,
	0x75, 0x6d, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x63, 0x6f, 0x6c, 0x75, 0x6d,
	0x6e, 0x22, 0x2c, 0x0a, 0x06, 0x4f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x12, 0x22, 0x0a, 0x07, 0x63,
	0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x08, 0x2e, 0x43,
	0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x52, 0x07, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x22,
	0x33, 0x0a, 0x07, 0x43, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6d, 0x69,
	0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6d, 0x69, 0x6d, 0x65, 0x12, 0x14,
	0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x05, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x22, 0x8a, 0x01, 0x0a, 0x0d, 0x50, 0x72, 0x6f, 0x6d, 0x70, 0x74, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a, 0x06, 0x70, 0x72, 0x6f, 0x6d, 0x70, 0x74,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x06, 0x70, 0x72, 0x6f, 0x6d, 0x70, 0x74,
	0x88, 0x01, 0x01, 0x12, 0x25, 0x0a, 0x0b, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x68, 0x6f, 0x6c, 0x64,
	0x65, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x0b, 0x70, 0x6c, 0x61, 0x63,
	0x65, 0x68, 0x6f, 0x6c, 0x64, 0x65, 0x72, 0x88, 0x01, 0x01, 0x12, 0x1a, 0x0a, 0x08, 0x70, 0x61,
	0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x08, 0x52, 0x08, 0x70, 0x61,
	0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x42, 0x09, 0x0a, 0x07, 0x5f, 0x70, 0x72, 0x6f, 0x6d, 0x70,
	0x74, 0x42, 0x0e, 0x0a, 0x0c, 0x5f, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x68, 0x6f, 0x6c, 0x64, 0x65,
	0x72, 0x22, 0x35, 0x0a, 0x0e, 0x50, 0x72, 0x6f, 0x6d, 0x70, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x19, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x48, 0x00, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x88, 0x01, 0x01, 0x42, 0x08,
	0x0a, 0x06, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x22, 0x45, 0x0a, 0x0c, 0x43, 0x61, 0x63, 0x68,
	0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x19, 0x0a, 0x05, 0x77, 0x72,
	0x69, 0x74, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x05, 0x77, 0x72, 0x69,
	0x74, 0x65, 0x88, 0x01, 0x01, 0x42, 0x08, 0x0a, 0x06, 0x5f, 0x77, 0x72, 0x69, 0x74, 0x65, 0x22,
	0x34, 0x0a, 0x0d, 0x43, 0x61, 0x63, 0x68, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x19, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x48,
	0x00, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x88, 0x01, 0x01, 0x42, 0x08, 0x0a, 0x06, 0x5f,
	0x76, 0x61, 0x6c, 0x75, 0x65, 0x22, 0x10, 0x0a, 0x0e, 0x43, 0x61, 0x6e, 0x63, 0x65, 0x6c, 0x45,
	0x76, 0x61, 0x6c, 0x75, 0x61, 0x74, 0x65, 0x32, 0x2d, 0x0a, 0x06, 0x4b, 0x65, 0x72, 0x6e, 0x65,
	0x6c, 0x12, 0x23, 0x0a, 0x07, 0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x09, 0x2e, 0x54,
	0x6f, 0x53, 0x65, 0x72, 0x76, 0x65, 0x72, 0x1a, 0x09, 0x2e, 0x54, 0x6f, 0x43, 0x6c, 0x69, 0x65,
	0x6e, 0x74, 0x28, 0x01, 0x30, 0x01, 0x42, 0x0b, 0x5a, 0x09, 0x73, 0x72, 0x63, 0x2f, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_kernel_proto_rawDescOnce sync.Once
	file_kernel_proto_rawDescData = file_kernel_proto_rawDesc
)

func file_kernel_proto_rawDescGZIP() []byte {
	file_kernel_proto_rawDescOnce.Do(func() {
		file_kernel_proto_rawDescData = protoimpl.X.CompressGZIP(file_kernel_proto_rawDescData)
	})
	return file_kernel_proto_rawDescData
}

var file_kernel_proto_msgTypes = make([]protoimpl.MessageInfo, 13)
var file_kernel_proto_goTypes = []interface{}{
	(*ToServer)(nil),            // 0: ToServer
	(*ToClient)(nil),            // 1: ToClient
	(*EvaluateRequest)(nil),     // 2: EvaluateRequest
	(*EvaluateResponse)(nil),    // 3: EvaluateResponse
	(*EvaluateError)(nil),       // 4: EvaluateError
	(*LineAndColumn)(nil),       // 5: LineAndColumn
	(*Output)(nil),              // 6: Output
	(*Content)(nil),             // 7: Content
	(*PromptRequest)(nil),       // 8: PromptRequest
	(*PromptResponse)(nil),      // 9: PromptResponse
	(*CacheRequest)(nil),        // 10: CacheRequest
	(*CacheResponse)(nil),       // 11: CacheResponse
	(*CancelEvaluate)(nil),      // 12: CancelEvaluate
	(*durationpb.Duration)(nil), // 13: google.protobuf.Duration
}
var file_kernel_proto_depIdxs = []int32{
	2,  // 0: ToServer.evaluate:type_name -> EvaluateRequest
	9,  // 1: ToServer.prompt:type_name -> PromptResponse
	11, // 2: ToServer.cache:type_name -> CacheResponse
	12, // 3: ToServer.cancel:type_name -> CancelEvaluate
	6,  // 4: ToClient.output:type_name -> Output
	3,  // 5: ToClient.evaluate:type_name -> EvaluateResponse
	8,  // 6: ToClient.prompt:type_name -> PromptRequest
	10, // 7: ToClient.cache:type_name -> CacheRequest
	13, // 8: EvaluateResponse.duration:type_name -> google.protobuf.Duration
	4,  // 9: EvaluateResponse.errors:type_name -> EvaluateError
	5,  // 10: EvaluateError.position:type_name -> LineAndColumn
	7,  // 11: Output.content:type_name -> Content
	0,  // 12: Kernel.Session:input_type -> ToServer
	1,  // 13: Kernel.Session:output_type -> ToClient
	13, // [13:14] is the sub-list for method output_type
	12, // [12:13] is the sub-list for method input_type
	12, // [12:12] is the sub-list for extension type_name
	12, // [12:12] is the sub-list for extension extendee
	0,  // [0:12] is the sub-list for field type_name
}

func init() { file_kernel_proto_init() }
func file_kernel_proto_init() {
	if File_kernel_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_kernel_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ToServer); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_kernel_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ToClient); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_kernel_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*EvaluateRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_kernel_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*EvaluateResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_kernel_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*EvaluateError); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_kernel_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*LineAndColumn); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_kernel_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Output); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_kernel_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Content); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_kernel_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PromptRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_kernel_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PromptResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_kernel_proto_msgTypes[10].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CacheRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_kernel_proto_msgTypes[11].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CacheResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_kernel_proto_msgTypes[12].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CancelEvaluate); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_kernel_proto_msgTypes[0].OneofWrappers = []interface{}{
		(*ToServer_Evaluate)(nil),
		(*ToServer_Prompt)(nil),
		(*ToServer_Cache)(nil),
		(*ToServer_Cancel)(nil),
	}
	file_kernel_proto_msgTypes[1].OneofWrappers = []interface{}{
		(*ToClient_Output)(nil),
		(*ToClient_Evaluate)(nil),
		(*ToClient_Prompt)(nil),
		(*ToClient_Cache)(nil),
	}
	file_kernel_proto_msgTypes[4].OneofWrappers = []interface{}{}
	file_kernel_proto_msgTypes[8].OneofWrappers = []interface{}{}
	file_kernel_proto_msgTypes[9].OneofWrappers = []interface{}{}
	file_kernel_proto_msgTypes[10].OneofWrappers = []interface{}{}
	file_kernel_proto_msgTypes[11].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_kernel_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   13,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_kernel_proto_goTypes,
		DependencyIndexes: file_kernel_proto_depIdxs,
		MessageInfos:      file_kernel_proto_msgTypes,
	}.Build()
	File_kernel_proto = out.File
	file_kernel_proto_rawDesc = nil
	file_kernel_proto_goTypes = nil
	file_kernel_proto_depIdxs = nil
}
