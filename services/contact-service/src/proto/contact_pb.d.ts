// package: contact
// file: contact.proto

import * as jspb from 'google-protobuf';

export class EchoRequest extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EchoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EchoRequest): EchoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EchoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EchoRequest;
  static deserializeBinaryFromReader(message: EchoRequest, reader: jspb.BinaryReader): EchoRequest;
}

export namespace EchoRequest {
  export type AsObject = {
    message: string,
  }
}

export class EchoReply extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EchoReply.AsObject;
  static toObject(includeInstance: boolean, msg: EchoReply): EchoReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EchoReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EchoReply;
  static deserializeBinaryFromReader(message: EchoReply, reader: jspb.BinaryReader): EchoReply;
}

export namespace EchoReply {
  export type AsObject = {
    message: string,
  }
}

export class FindContactUsItemByEmailRequest extends jspb.Message {
  getEmailAddress(): string;
  setEmailAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindContactUsItemByEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindContactUsItemByEmailRequest): FindContactUsItemByEmailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindContactUsItemByEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindContactUsItemByEmailRequest;
  static deserializeBinaryFromReader(message: FindContactUsItemByEmailRequest, reader: jspb.BinaryReader): FindContactUsItemByEmailRequest;
}

export namespace FindContactUsItemByEmailRequest {
  export type AsObject = {
    emailAddress: string,
  }
}

export class FindContactUsItemByEmailReply extends jspb.Message {
  hasContactUs(): boolean;
  clearContactUs(): void;
  getContactUs(): ContactUs | undefined;
  setContactUs(value?: ContactUs): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindContactUsItemByEmailReply.AsObject;
  static toObject(includeInstance: boolean, msg: FindContactUsItemByEmailReply): FindContactUsItemByEmailReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindContactUsItemByEmailReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindContactUsItemByEmailReply;
  static deserializeBinaryFromReader(message: FindContactUsItemByEmailReply, reader: jspb.BinaryReader): FindContactUsItemByEmailReply;
}

export namespace FindContactUsItemByEmailReply {
  export type AsObject = {
    contactUs?: ContactUs.AsObject,
  }
}

export class SaveContactUsItemRequest extends jspb.Message {
  hasContactUs(): boolean;
  clearContactUs(): void;
  getContactUs(): ContactUs | undefined;
  setContactUs(value?: ContactUs): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveContactUsItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveContactUsItemRequest): SaveContactUsItemRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveContactUsItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveContactUsItemRequest;
  static deserializeBinaryFromReader(message: SaveContactUsItemRequest, reader: jspb.BinaryReader): SaveContactUsItemRequest;
}

export namespace SaveContactUsItemRequest {
  export type AsObject = {
    contactUs?: ContactUs.AsObject,
  }
}

export class SaveContactUsItemReply extends jspb.Message {
  hasContactUs(): boolean;
  clearContactUs(): void;
  getContactUs(): ContactUs | undefined;
  setContactUs(value?: ContactUs): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveContactUsItemReply.AsObject;
  static toObject(includeInstance: boolean, msg: SaveContactUsItemReply): SaveContactUsItemReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveContactUsItemReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveContactUsItemReply;
  static deserializeBinaryFromReader(message: SaveContactUsItemReply, reader: jspb.BinaryReader): SaveContactUsItemReply;
}

export namespace SaveContactUsItemReply {
  export type AsObject = {
    contactUs?: ContactUs.AsObject,
  }
}

export class ContactUs extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getEmailAddress(): string;
  setEmailAddress(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactUs.AsObject;
  static toObject(includeInstance: boolean, msg: ContactUs): ContactUs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactUs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactUs;
  static deserializeBinaryFromReader(message: ContactUs, reader: jspb.BinaryReader): ContactUs;
}

export namespace ContactUs {
  export type AsObject = {
    id: number,
    firstName: string,
    lastName: string,
    emailAddress: string,
    message: string,
  }
}

