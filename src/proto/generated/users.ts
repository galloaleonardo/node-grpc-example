import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { UserServiceClient as _users_package_UserServiceClient, UserServiceDefinition as _users_package_UserServiceDefinition } from './users_package/UserService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
    }
  }
  users_package: {
    User: MessageTypeDefinition
    UserIdRequest: MessageTypeDefinition
    UserService: SubtypeConstructor<typeof grpc.Client, _users_package_UserServiceClient> & { service: _users_package_UserServiceDefinition }
  }
}

