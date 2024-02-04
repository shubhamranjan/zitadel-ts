/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ObjectDetails, TextQueryMethod } from "./object";

export const protobufPackage = "zitadel.metadata.v1";

export interface Metadata {
  details: ObjectDetails | undefined;
  key: string;
  value: Uint8Array;
}

export interface MetadataQuery {
  keyQuery?: MetadataKeyQuery | undefined;
}

export interface MetadataKeyQuery {
  key: string;
  method: TextQueryMethod;
}

function createBaseMetadata(): Metadata {
  return { details: undefined, key: "", value: new Uint8Array(0) };
}

export const Metadata = {
  encode(message: Metadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(26).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.key = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Metadata>): Metadata {
    return Metadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Metadata>): Metadata {
    const message = createBaseMetadata();
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMetadataQuery(): MetadataQuery {
  return { keyQuery: undefined };
}

export const MetadataQuery = {
  encode(message: MetadataQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyQuery !== undefined) {
      MetadataKeyQuery.encode(message.keyQuery, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MetadataQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadataQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyQuery = MetadataKeyQuery.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<MetadataQuery>): MetadataQuery {
    return MetadataQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MetadataQuery>): MetadataQuery {
    const message = createBaseMetadataQuery();
    message.keyQuery = (object.keyQuery !== undefined && object.keyQuery !== null)
      ? MetadataKeyQuery.fromPartial(object.keyQuery)
      : undefined;
    return message;
  },
};

function createBaseMetadataKeyQuery(): MetadataKeyQuery {
  return { key: "", method: 0 };
}

export const MetadataKeyQuery = {
  encode(message: MetadataKeyQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MetadataKeyQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadataKeyQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.method = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<MetadataKeyQuery>): MetadataKeyQuery {
    return MetadataKeyQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MetadataKeyQuery>): MetadataKeyQuery {
    const message = createBaseMetadataKeyQuery();
    message.key = object.key ?? "";
    message.method = object.method ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
