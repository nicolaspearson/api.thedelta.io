# Contact Service

This microservice is used all contact events that occur on the front-end, e.g. user contact form submission, etc.

### Overview

- **actions** - API actions.
- **db** - Database configuration and invocation.
- **env** - Configuration of static application variables. See **Configuration** below for more information.
- **index.ts** - Application entrypoint.
- **logger** - Application logging.
- **models** - Application and database models
- **proto** - Protocol buffer files, contains both source files, i.e. `*.proto`, as well as the generated output. See [gRPC & Protocol Buffers](#grpc-&-protocol-buffers)
- **repositories** - Database repositories
- **services** - Database related services
- **types** - Additional typescript definitions.
- **utils** - Application utilities

### Configuration

The configuration of static application variables is done using [nconf](https://github.com/indexzero/nconf). It allows us to set the hierarchy for different sources of configuration with no defaults. Thus providing an easy way to configure the applications for the various environments, i.e. `development`, `staging`, and `production`.

The configuration hierarchy being used:

1.  argv - Command line arguments will override environment variables, and configuration files.
2.  env - Environment variables will override configuration files.
3.  file - Files will be used as the baseline configuration if neither of the above is specified.

### Directory Structure

```
src
├── actions
│   ├── contact-us.actions.ts
│   ├── echo.actions.ts
│   └── index.ts
├── db
│   └── app.db.ts
├── env
│   ├── config.default.json
│   ├── config.development.json
│   ├── config.production.json
│   ├── config.staging.json
│   └── index.ts
├── index.ts
├── logger
│   └── app.logger.ts
├── models
│   └── contact-us.model.ts
├── proto
│   ├── contact.proto
│   ├── contact_grpc_pb.d.ts
│   ├── contact_grpc_pb.js
│   ├── contact_pb.d.ts
│   └── contact_pb.js
├── repositories
│   └── contact-us.repository.ts
├── services
│   └── contact-us.service.ts
├── types
└── utils
    ├── grpc.utils.ts
    ├── proto.utils.ts
    └── system.utils.ts
```

### gRPC & Protocol Buffers

This project uses gRPC and Protocol Buffers.

**Protoc Binary**

Download and install the compiler: https://github.com/protocolbuffers/protobuf/releases

```
$ mv ~/Downloads/protoc-3.6.1-osx-x86_64 ~/Tools
$ ln -s protoc-3.6.1-osx-x86_64 protoc
```

Add the binary to your path, e.g. `export PATH=$PATH:$HOME/Tools/protoc/bin`

**Protoc Gen Plugin**

Install the plugin: `npm install protoc-gen-grpc -g`

Run the following command to generate the proto messages and the service client stub from .proto definitions:

```bash
$ contact-service/proto-gen.sh
```

### gRPC Testing

Install grpcc: `npm install -g grpcc`

Connect to the gRPC server:

```bash
$ grpcc --proto ./contact-service/src/proto/contact.proto --address 127.0.0.1:9090 -i
```

Test the connection using an **Echo:**

```bash
$ client.echo({ "message": "Hi there!" }, printReply)
```

**Save Contact Us Item:**

```bash
$ client.saveContactUsItem({ "contact_us": { "first_name": "Nic", "last_name": "Test", "email_address": "test@test.com", "message": "Hi there!" } }, createMetadata({ "x-access-token": "secret"}), printReply)
```
