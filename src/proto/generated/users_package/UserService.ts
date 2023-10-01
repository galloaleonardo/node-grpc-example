// Original file: src/proto/users.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { User as _users_package_User, User__Output as _users_package_User__Output } from '../users_package/User';
import type { UserIdRequest as _users_package_UserIdRequest, UserIdRequest__Output as _users_package_UserIdRequest__Output } from '../users_package/UserIdRequest';

export interface UserServiceClient extends grpc.Client {
  get(argument: _users_package_UserIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_package_User__Output>): grpc.ClientUnaryCall;
  get(argument: _users_package_UserIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_package_User__Output>): grpc.ClientUnaryCall;
  get(argument: _users_package_UserIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_package_User__Output>): grpc.ClientUnaryCall;
  get(argument: _users_package_UserIdRequest, callback: grpc.requestCallback<_users_package_User__Output>): grpc.ClientUnaryCall;
  get(argument: _users_package_UserIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_package_User__Output>): grpc.ClientUnaryCall;
  get(argument: _users_package_UserIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_package_User__Output>): grpc.ClientUnaryCall;
  get(argument: _users_package_UserIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_package_User__Output>): grpc.ClientUnaryCall;
  get(argument: _users_package_UserIdRequest, callback: grpc.requestCallback<_users_package_User__Output>): grpc.ClientUnaryCall;
  
  getAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_users_package_User__Output>;
  getAll(argument: _google_protobuf_Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_users_package_User__Output>;
  getAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_users_package_User__Output>;
  getAll(argument: _google_protobuf_Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_users_package_User__Output>;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  get: grpc.handleUnaryCall<_users_package_UserIdRequest__Output, _users_package_User>;
  
  getAll: grpc.handleServerStreamingCall<_google_protobuf_Empty__Output, _users_package_User>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  get: MethodDefinition<_users_package_UserIdRequest, _users_package_User, _users_package_UserIdRequest__Output, _users_package_User__Output>
  getAll: MethodDefinition<_google_protobuf_Empty, _users_package_User, _google_protobuf_Empty__Output, _users_package_User__Output>
}
