/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "zitadel.user.v2beta";

export enum PasskeyAuthenticator {
  PASSKEY_AUTHENTICATOR_UNSPECIFIED = 0,
  PASSKEY_AUTHENTICATOR_PLATFORM = 1,
  PASSKEY_AUTHENTICATOR_CROSS_PLATFORM = 2,
  UNRECOGNIZED = -1,
}

export interface SendPasskeyRegistrationLink {
  urlTemplate?: string | undefined;
}

export interface ReturnPasskeyRegistrationCode {
}

export interface PasskeyRegistrationCode {
  id: string;
  code: string;
}

function createBaseSendPasskeyRegistrationLink(): SendPasskeyRegistrationLink {
  return { urlTemplate: undefined };
}

export const SendPasskeyRegistrationLink = {
  encode(message: SendPasskeyRegistrationLink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.urlTemplate !== undefined) {
      writer.uint32(10).string(message.urlTemplate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendPasskeyRegistrationLink {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendPasskeyRegistrationLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.urlTemplate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SendPasskeyRegistrationLink>): SendPasskeyRegistrationLink {
    return SendPasskeyRegistrationLink.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SendPasskeyRegistrationLink>): SendPasskeyRegistrationLink {
    const message = createBaseSendPasskeyRegistrationLink();
    message.urlTemplate = object.urlTemplate ?? undefined;
    return message;
  },
};

function createBaseReturnPasskeyRegistrationCode(): ReturnPasskeyRegistrationCode {
  return {};
}

export const ReturnPasskeyRegistrationCode = {
  encode(_: ReturnPasskeyRegistrationCode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReturnPasskeyRegistrationCode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReturnPasskeyRegistrationCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ReturnPasskeyRegistrationCode>): ReturnPasskeyRegistrationCode {
    return ReturnPasskeyRegistrationCode.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ReturnPasskeyRegistrationCode>): ReturnPasskeyRegistrationCode {
    const message = createBaseReturnPasskeyRegistrationCode();
    return message;
  },
};

function createBasePasskeyRegistrationCode(): PasskeyRegistrationCode {
  return { id: "", code: "" };
}

export const PasskeyRegistrationCode = {
  encode(message: PasskeyRegistrationCode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PasskeyRegistrationCode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePasskeyRegistrationCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.code = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<PasskeyRegistrationCode>): PasskeyRegistrationCode {
    return PasskeyRegistrationCode.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PasskeyRegistrationCode>): PasskeyRegistrationCode {
    const message = createBasePasskeyRegistrationCode();
    message.id = object.id ?? "";
    message.code = object.code ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
