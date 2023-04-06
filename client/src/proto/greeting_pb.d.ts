import * as jspb from 'google-protobuf'



export class GreetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GreetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GreetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GreetRequest): GreetRequest.AsObject;
  static serializeBinaryToWriter(message: GreetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GreetRequest;
  static deserializeBinaryFromReader(message: GreetRequest, reader: jspb.BinaryReader): GreetRequest;
}

export namespace GreetRequest {
  export type AsObject = {
    name: string,
  }
}

export class GreetReply extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): GreetReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GreetReply.AsObject;
  static toObject(includeInstance: boolean, msg: GreetReply): GreetReply.AsObject;
  static serializeBinaryToWriter(message: GreetReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GreetReply;
  static deserializeBinaryFromReader(message: GreetReply, reader: jspb.BinaryReader): GreetReply;
}

export namespace GreetReply {
  export type AsObject = {
    message: string,
  }
}

