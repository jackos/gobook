// package: 
// file: kernel.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as kernel_pb from "./kernel_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

interface IKernelService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    session: IKernelService_ISession;
}

interface IKernelService_ISession extends grpc.MethodDefinition<kernel_pb.ToServer, kernel_pb.ToClient> {
    path: "/Kernel/Session";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<kernel_pb.ToServer>;
    requestDeserialize: grpc.deserialize<kernel_pb.ToServer>;
    responseSerialize: grpc.serialize<kernel_pb.ToClient>;
    responseDeserialize: grpc.deserialize<kernel_pb.ToClient>;
}

export const KernelService: IKernelService;

export interface IKernelServer extends grpc.UntypedServiceImplementation {
    session: grpc.handleBidiStreamingCall<kernel_pb.ToServer, kernel_pb.ToClient>;
}

export interface IKernelClient {
    session(): grpc.ClientDuplexStream<kernel_pb.ToServer, kernel_pb.ToClient>;
    session(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<kernel_pb.ToServer, kernel_pb.ToClient>;
    session(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<kernel_pb.ToServer, kernel_pb.ToClient>;
}

export class KernelClient extends grpc.Client implements IKernelClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public session(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<kernel_pb.ToServer, kernel_pb.ToClient>;
    public session(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<kernel_pb.ToServer, kernel_pb.ToClient>;
}
