// package: 
// file: kernel.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class ToServer extends jspb.Message { 

    hasEvaluate(): boolean;
    clearEvaluate(): void;
    getEvaluate(): EvaluateRequest | undefined;
    setEvaluate(value?: EvaluateRequest): ToServer;

    hasPrompt(): boolean;
    clearPrompt(): void;
    getPrompt(): PromptResponse | undefined;
    setPrompt(value?: PromptResponse): ToServer;

    hasCache(): boolean;
    clearCache(): void;
    getCache(): CacheResponse | undefined;
    setCache(value?: CacheResponse): ToServer;

    hasCancel(): boolean;
    clearCancel(): void;
    getCancel(): CancelEvaluate | undefined;
    setCancel(value?: CancelEvaluate): ToServer;

    getKindCase(): ToServer.KindCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ToServer.AsObject;
    static toObject(includeInstance: boolean, msg: ToServer): ToServer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ToServer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ToServer;
    static deserializeBinaryFromReader(message: ToServer, reader: jspb.BinaryReader): ToServer;
}

export namespace ToServer {
    export type AsObject = {
        evaluate?: EvaluateRequest.AsObject,
        prompt?: PromptResponse.AsObject,
        cache?: CacheResponse.AsObject,
        cancel?: CancelEvaluate.AsObject,
    }

    export enum KindCase {
        KIND_NOT_SET = 0,
        EVALUATE = 1,
        PROMPT = 2,
        CACHE = 3,
        CANCEL = 4,
    }

}

export class ToClient extends jspb.Message { 

    hasOutput(): boolean;
    clearOutput(): void;
    getOutput(): Output | undefined;
    setOutput(value?: Output): ToClient;

    hasEvaluate(): boolean;
    clearEvaluate(): void;
    getEvaluate(): EvaluateResponse | undefined;
    setEvaluate(value?: EvaluateResponse): ToClient;

    hasPrompt(): boolean;
    clearPrompt(): void;
    getPrompt(): PromptRequest | undefined;
    setPrompt(value?: PromptRequest): ToClient;

    hasCache(): boolean;
    clearCache(): void;
    getCache(): CacheRequest | undefined;
    setCache(value?: CacheRequest): ToClient;

    getKindCase(): ToClient.KindCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ToClient.AsObject;
    static toObject(includeInstance: boolean, msg: ToClient): ToClient.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ToClient, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ToClient;
    static deserializeBinaryFromReader(message: ToClient, reader: jspb.BinaryReader): ToClient;
}

export namespace ToClient {
    export type AsObject = {
        output?: Output.AsObject,
        evaluate?: EvaluateResponse.AsObject,
        prompt?: PromptRequest.AsObject,
        cache?: CacheRequest.AsObject,
    }

    export enum KindCase {
        KIND_NOT_SET = 0,
        OUTPUT = 1,
        EVALUATE = 2,
        PROMPT = 3,
        CACHE = 4,
    }

}

export class EvaluateRequest extends jspb.Message { 
    getCode(): string;
    setCode(value: string): EvaluateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EvaluateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EvaluateRequest): EvaluateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EvaluateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EvaluateRequest;
    static deserializeBinaryFromReader(message: EvaluateRequest, reader: jspb.BinaryReader): EvaluateRequest;
}

export namespace EvaluateRequest {
    export type AsObject = {
        code: string,
    }
}

export class EvaluateResponse extends jspb.Message { 

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): google_protobuf_duration_pb.Duration | undefined;
    setDuration(value?: google_protobuf_duration_pb.Duration): EvaluateResponse;
    clearErrorsList(): void;
    getErrorsList(): Array<EvaluateError>;
    setErrorsList(value: Array<EvaluateError>): EvaluateResponse;
    addErrors(value?: EvaluateError, index?: number): EvaluateError;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EvaluateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EvaluateResponse): EvaluateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EvaluateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EvaluateResponse;
    static deserializeBinaryFromReader(message: EvaluateResponse, reader: jspb.BinaryReader): EvaluateResponse;
}

export namespace EvaluateResponse {
    export type AsObject = {
        duration?: google_protobuf_duration_pb.Duration.AsObject,
        errorsList: Array<EvaluateError.AsObject>,
    }
}

export class EvaluateError extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): EvaluateError;

    hasStack(): boolean;
    clearStack(): void;
    getStack(): string | undefined;
    setStack(value: string): EvaluateError;

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): LineAndColumn | undefined;
    setPosition(value?: LineAndColumn): EvaluateError;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EvaluateError.AsObject;
    static toObject(includeInstance: boolean, msg: EvaluateError): EvaluateError.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EvaluateError, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EvaluateError;
    static deserializeBinaryFromReader(message: EvaluateError, reader: jspb.BinaryReader): EvaluateError;
}

export namespace EvaluateError {
    export type AsObject = {
        message: string,
        stack?: string,
        position?: LineAndColumn.AsObject,
    }
}

export class LineAndColumn extends jspb.Message { 
    getLine(): number;
    setLine(value: number): LineAndColumn;
    getColumn(): number;
    setColumn(value: number): LineAndColumn;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LineAndColumn.AsObject;
    static toObject(includeInstance: boolean, msg: LineAndColumn): LineAndColumn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LineAndColumn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LineAndColumn;
    static deserializeBinaryFromReader(message: LineAndColumn, reader: jspb.BinaryReader): LineAndColumn;
}

export namespace LineAndColumn {
    export type AsObject = {
        line: number,
        column: number,
    }
}

export class Output extends jspb.Message { 
    clearContentList(): void;
    getContentList(): Array<Content>;
    setContentList(value: Array<Content>): Output;
    addContent(value?: Content, index?: number): Content;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Output.AsObject;
    static toObject(includeInstance: boolean, msg: Output): Output.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Output, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Output;
    static deserializeBinaryFromReader(message: Output, reader: jspb.BinaryReader): Output;
}

export namespace Output {
    export type AsObject = {
        contentList: Array<Content.AsObject>,
    }
}

export class Content extends jspb.Message { 
    getMime(): string;
    setMime(value: string): Content;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): Content;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Content.AsObject;
    static toObject(includeInstance: boolean, msg: Content): Content.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Content, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Content;
    static deserializeBinaryFromReader(message: Content, reader: jspb.BinaryReader): Content;
}

export namespace Content {
    export type AsObject = {
        mime: string,
        value: Uint8Array | string,
    }
}

export class PromptRequest extends jspb.Message { 

    hasPrompt(): boolean;
    clearPrompt(): void;
    getPrompt(): string | undefined;
    setPrompt(value: string): PromptRequest;

    hasPlaceholder(): boolean;
    clearPlaceholder(): void;
    getPlaceholder(): string | undefined;
    setPlaceholder(value: string): PromptRequest;
    getPassword(): boolean;
    setPassword(value: boolean): PromptRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PromptRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PromptRequest): PromptRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PromptRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PromptRequest;
    static deserializeBinaryFromReader(message: PromptRequest, reader: jspb.BinaryReader): PromptRequest;
}

export namespace PromptRequest {
    export type AsObject = {
        prompt?: string,
        placeholder?: string,
        password: boolean,
    }
}

export class PromptResponse extends jspb.Message { 

    hasValue(): boolean;
    clearValue(): void;
    getValue(): string | undefined;
    setValue(value: string): PromptResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PromptResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PromptResponse): PromptResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PromptResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PromptResponse;
    static deserializeBinaryFromReader(message: PromptResponse, reader: jspb.BinaryReader): PromptResponse;
}

export namespace PromptResponse {
    export type AsObject = {
        value?: string,
    }
}

export class CacheRequest extends jspb.Message { 
    getKey(): string;
    setKey(value: string): CacheRequest;

    hasWrite(): boolean;
    clearWrite(): void;
    getWrite(): string | undefined;
    setWrite(value: string): CacheRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CacheRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CacheRequest): CacheRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CacheRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CacheRequest;
    static deserializeBinaryFromReader(message: CacheRequest, reader: jspb.BinaryReader): CacheRequest;
}

export namespace CacheRequest {
    export type AsObject = {
        key: string,
        write?: string,
    }
}

export class CacheResponse extends jspb.Message { 

    hasValue(): boolean;
    clearValue(): void;
    getValue(): string | undefined;
    setValue(value: string): CacheResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CacheResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CacheResponse): CacheResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CacheResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CacheResponse;
    static deserializeBinaryFromReader(message: CacheResponse, reader: jspb.BinaryReader): CacheResponse;
}

export namespace CacheResponse {
    export type AsObject = {
        value?: string,
    }
}

export class CancelEvaluate extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelEvaluate.AsObject;
    static toObject(includeInstance: boolean, msg: CancelEvaluate): CancelEvaluate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelEvaluate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelEvaluate;
    static deserializeBinaryFromReader(message: CancelEvaluate, reader: jspb.BinaryReader): CancelEvaluate;
}

export namespace CancelEvaluate {
    export type AsObject = {
    }
}
