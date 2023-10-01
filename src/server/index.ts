import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../proto/generated/users';
import { UserServiceHandlers } from '../proto/generated/users_package/UserService';
import { User } from '../proto/generated/users_package/User';
import { Empty } from '../proto/generated/google/protobuf/Empty';
import { users } from './db';
import { UserIdRequest } from '../proto/generated/users_package/UserIdRequest';

const host = '0.0.0.0:9090';

const usersServer: UserServiceHandlers = {
  getAll(
    call: grpc.ServerWritableStream<Empty, User>,
  ) {
    for (const user of users) call.write(user);
  },
  get(call: grpc.ServerUnaryCall<UserIdRequest, User>, callback: grpc.sendUnaryData<User>) {
    const user = users.find((user) => user.id === call.request.id);
    if (user) {
      callback(null, user);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: 'Not found',
      });
    }
  },
};

function getServer(): grpc.Server {
  console.log(__dirname, 'AUIQ');
  const packageDefinition = protoLoader.loadSync(`${__dirname}/../proto/users.proto`);
  const proto = grpc.loadPackageDefinition(
    packageDefinition,
  ) as unknown as ProtoGrpcType;
  const server = new grpc.Server();
  server.addService(proto.users_package.UserService.service, usersServer);
  return server;
}

if (require.main === module) {
  const server = getServer();
  server.bindAsync(
    host,
    grpc.ServerCredentials.createInsecure(),
    (err: Error | null, port: number) => {
      if (err) {
        console.error(`Server error: ${err.message}`);
      } else {
        console.log(`Server bound on port: ${port}`);
        server.start();
      }
    },
  );
}
