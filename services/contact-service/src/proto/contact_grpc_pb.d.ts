// package: contact
// file: contact.proto

import * as grpc from 'grpc';
import * as contact_pb from './contact_pb';

interface IContactManagerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  echo: IContactManagerService_IEcho;
  findContactUsItemByEmail: IContactManagerService_IFindContactUsItemByEmail;
  saveContactUsItem: IContactManagerService_ISaveContactUsItem;
}

interface IContactManagerService_IEcho {
  path: string; // "/contact.ContactManager/Echo"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<contact_pb.EchoRequest>;
  requestDeserialize: grpc.deserialize<contact_pb.EchoRequest>;
  responseSerialize: grpc.serialize<contact_pb.EchoReply>;
  responseDeserialize: grpc.deserialize<contact_pb.EchoReply>;
}

interface IContactManagerService_IFindContactUsItemByEmail {
  path: string; // "/contact.ContactManager/FindContactUsItemByEmail"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<contact_pb.FindContactUsItemByEmailRequest>;
  requestDeserialize: grpc.deserialize<contact_pb.FindContactUsItemByEmailRequest>;
  responseSerialize: grpc.serialize<contact_pb.FindContactUsItemByEmailReply>;
  responseDeserialize: grpc.deserialize<contact_pb.FindContactUsItemByEmailReply>;
}

interface IContactManagerService_ISaveContactUsItem {
  path: string; // "/contact.ContactManager/SaveContactUsItem"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<contact_pb.SaveContactUsItemRequest>;
  requestDeserialize: grpc.deserialize<contact_pb.SaveContactUsItemRequest>;
  responseSerialize: grpc.serialize<contact_pb.SaveContactUsItemReply>;
  responseDeserialize: grpc.deserialize<contact_pb.SaveContactUsItemReply>;
}

export const ContactManagerService: IContactManagerService;
export interface IContactManagerServer {
  echo: grpc.handleUnaryCall<contact_pb.EchoRequest, contact_pb.EchoReply>;
  findContactUsItemByEmail: grpc.handleUnaryCall<contact_pb.FindContactUsItemByEmailRequest, contact_pb.FindContactUsItemByEmailReply>;
  saveContactUsItem: grpc.handleUnaryCall<contact_pb.SaveContactUsItemRequest, contact_pb.SaveContactUsItemReply>;
}

export interface IContactManagerClient {
  echo(request: contact_pb.EchoRequest, callback: (error: Error | null, response: contact_pb.EchoReply) => void): grpc.ClientUnaryCall;
  echo(request: contact_pb.EchoRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: contact_pb.EchoReply) => void): grpc.ClientUnaryCall;
  findContactUsItemByEmail(request: contact_pb.FindContactUsItemByEmailRequest, callback: (error: Error | null, response: contact_pb.FindContactUsItemByEmailReply) => void): grpc.ClientUnaryCall;
  findContactUsItemByEmail(request: contact_pb.FindContactUsItemByEmailRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: contact_pb.FindContactUsItemByEmailReply) => void): grpc.ClientUnaryCall;
  saveContactUsItem(request: contact_pb.SaveContactUsItemRequest, callback: (error: Error | null, response: contact_pb.SaveContactUsItemReply) => void): grpc.ClientUnaryCall;
  saveContactUsItem(request: contact_pb.SaveContactUsItemRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: contact_pb.SaveContactUsItemReply) => void): grpc.ClientUnaryCall;
}

export class ContactManagerClient extends grpc.Client implements IContactManagerClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  public echo(request: contact_pb.EchoRequest, callback: (error: Error | null, response: contact_pb.EchoReply) => void): grpc.ClientUnaryCall;
  public echo(request: contact_pb.EchoRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: contact_pb.EchoReply) => void): grpc.ClientUnaryCall;
  public findContactUsItemByEmail(request: contact_pb.FindContactUsItemByEmailRequest, callback: (error: Error | null, response: contact_pb.FindContactUsItemByEmailReply) => void): grpc.ClientUnaryCall;
  public findContactUsItemByEmail(request: contact_pb.FindContactUsItemByEmailRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: contact_pb.FindContactUsItemByEmailReply) => void): grpc.ClientUnaryCall;
  public saveContactUsItem(request: contact_pb.SaveContactUsItemRequest, callback: (error: Error | null, response: contact_pb.SaveContactUsItemReply) => void): grpc.ClientUnaryCall;
  public saveContactUsItem(request: contact_pb.SaveContactUsItemRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: contact_pb.SaveContactUsItemReply) => void): grpc.ClientUnaryCall;
}

