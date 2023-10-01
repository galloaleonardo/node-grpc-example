import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../proto/generated/users';
import { User } from '../proto/generated/users_package/User';

const host = '0.0.0.0:9090';
const packageDefinition = protoLoader.loadSync(`${__dirname}/../proto/users.proto`);
const proto = grpc.loadPackageDefinition(
  packageDefinition,
) as unknown as ProtoGrpcType;

const client = new proto.users_package.UserService(
  host,
  grpc.credentials.createInsecure(),
);

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);

function doGetAll() {
  const stream = client.getAll({});

  stream.on('data', (user: User) => {
    console.log(`(client) Got server message: ${JSON.stringify(user)}`);
  });
}

function doGet() {
  client.get(
    {
      id: 2,
    },
    (error?: grpc.ServiceError | null, user?: User) => {
      if (error) {
        console.error(error.message);
      } else if (user) {
        console.log(
          `(client) Got server message: ${JSON.stringify(user)}`,
        );
      }
    },
  );
}

function onClientReady() {
  switch (process.argv[process.argv.length - 1]) {
    case '--get-all':
      doGetAll();
      break;
    case '--get':
      doGet();
      break;
    default:
      throw new Error('Example not specified');
  }
}

client.waitForReady(deadline, (error?: Error) => {
  if (error) {
    console.log(`Client connect error: ${error.message}`);
  } else {
    onClientReady();
  }
});
