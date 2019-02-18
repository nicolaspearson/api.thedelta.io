# The Delta API

A simple microservice architecture API implementation, built using Node.js, gRPC and Envoy proxy.

## Getting started

- Clone the repository
- Install Docker for Mac
- Build the containers: `make build`

### Running the system using Envoy:

- Starting the system: `make start`
- Stopping the system: `make stop`
- Destroying the system: `make destroy`

### Envoy

Envoy is an edge and service proxy that wraps all of the microservices. This is the central entrypoint into the application for external consumers. Internally Istio uses the Envoy proxy which makes ideal for use in a **development** environment.

### Makefile

The Makefile assists with the installation, deployment, and management of the system. Execute `make help` to see a list of available commands.

## gRPC & Protocol Buffers

This project uses gRPC and Protocol Buffers.

**Protoc Binary**

Download and install the compiler: https://github.com/protocolbuffers/protobuf/releases

```
$ mv ~/Downloads/protoc-3.6.1-osx-x86_64 ~/Tools
$ ln -s protoc-3.6.1-osx-x86_64 protoc
```

Add the binary to your path, e.g. `export PATH=$PATH:$HOME/Tools/protoc/bin`

**Protoc Gen Plugin**

If you are using Nodejs to create your microservice:

Install the plugin: `npm install protoc-gen-grpc -g`

Run the following command to generate the proto messages and the service client stub from .proto definitions:

```bash
$ auth-service/proto-gen.sh
```

## Contribution guidelines

Code reviews are done via pull requests.
