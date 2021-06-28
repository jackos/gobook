// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var kernel_pb = require('./kernel_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');

function serialize_ToClient(arg) {
  if (!(arg instanceof kernel_pb.ToClient)) {
    throw new Error('Expected argument of type ToClient');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ToClient(buffer_arg) {
  return kernel_pb.ToClient.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ToServer(arg) {
  if (!(arg instanceof kernel_pb.ToServer)) {
    throw new Error('Expected argument of type ToServer');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ToServer(buffer_arg) {
  return kernel_pb.ToServer.deserializeBinary(new Uint8Array(buffer_arg));
}


var KernelService = exports.KernelService = {
  session: {
    path: '/Kernel/Session',
    requestStream: true,
    responseStream: true,
    requestType: kernel_pb.ToServer,
    responseType: kernel_pb.ToClient,
    requestSerialize: serialize_ToServer,
    requestDeserialize: deserialize_ToServer,
    responseSerialize: serialize_ToClient,
    responseDeserialize: deserialize_ToClient,
  },
};

exports.KernelClient = grpc.makeGenericClientConstructor(KernelService);
