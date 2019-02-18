// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var contact_pb = require('./contact_pb.js');

function serialize_contact_EchoReply(arg) {
  if (!(arg instanceof contact_pb.EchoReply)) {
    throw new Error('Expected argument of type contact.EchoReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_contact_EchoReply(buffer_arg) {
  return contact_pb.EchoReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_contact_EchoRequest(arg) {
  if (!(arg instanceof contact_pb.EchoRequest)) {
    throw new Error('Expected argument of type contact.EchoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_contact_EchoRequest(buffer_arg) {
  return contact_pb.EchoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_contact_FindContactUsItemByEmailReply(arg) {
  if (!(arg instanceof contact_pb.FindContactUsItemByEmailReply)) {
    throw new Error('Expected argument of type contact.FindContactUsItemByEmailReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_contact_FindContactUsItemByEmailReply(buffer_arg) {
  return contact_pb.FindContactUsItemByEmailReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_contact_FindContactUsItemByEmailRequest(arg) {
  if (!(arg instanceof contact_pb.FindContactUsItemByEmailRequest)) {
    throw new Error('Expected argument of type contact.FindContactUsItemByEmailRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_contact_FindContactUsItemByEmailRequest(buffer_arg) {
  return contact_pb.FindContactUsItemByEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_contact_SaveContactUsItemReply(arg) {
  if (!(arg instanceof contact_pb.SaveContactUsItemReply)) {
    throw new Error('Expected argument of type contact.SaveContactUsItemReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_contact_SaveContactUsItemReply(buffer_arg) {
  return contact_pb.SaveContactUsItemReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_contact_SaveContactUsItemRequest(arg) {
  if (!(arg instanceof contact_pb.SaveContactUsItemRequest)) {
    throw new Error('Expected argument of type contact.SaveContactUsItemRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_contact_SaveContactUsItemRequest(buffer_arg) {
  return contact_pb.SaveContactUsItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ContactManagerService = exports.ContactManagerService = {
  echo: {
    path: '/contact.ContactManager/Echo',
    requestStream: false,
    responseStream: false,
    requestType: contact_pb.EchoRequest,
    responseType: contact_pb.EchoReply,
    requestSerialize: serialize_contact_EchoRequest,
    requestDeserialize: deserialize_contact_EchoRequest,
    responseSerialize: serialize_contact_EchoReply,
    responseDeserialize: deserialize_contact_EchoReply,
  },
  findContactUsItemByEmail: {
    path: '/contact.ContactManager/FindContactUsItemByEmail',
    requestStream: false,
    responseStream: false,
    requestType: contact_pb.FindContactUsItemByEmailRequest,
    responseType: contact_pb.FindContactUsItemByEmailReply,
    requestSerialize: serialize_contact_FindContactUsItemByEmailRequest,
    requestDeserialize: deserialize_contact_FindContactUsItemByEmailRequest,
    responseSerialize: serialize_contact_FindContactUsItemByEmailReply,
    responseDeserialize: deserialize_contact_FindContactUsItemByEmailReply,
  },
  saveContactUsItem: {
    path: '/contact.ContactManager/SaveContactUsItem',
    requestStream: false,
    responseStream: false,
    requestType: contact_pb.SaveContactUsItemRequest,
    responseType: contact_pb.SaveContactUsItemReply,
    requestSerialize: serialize_contact_SaveContactUsItemRequest,
    requestDeserialize: deserialize_contact_SaveContactUsItemRequest,
    responseSerialize: serialize_contact_SaveContactUsItemReply,
    responseDeserialize: deserialize_contact_SaveContactUsItemReply,
  },
};

exports.ContactManagerClient = grpc.makeGenericClientConstructor(ContactManagerService);
