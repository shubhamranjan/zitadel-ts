/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ResourceOwnerType } from "./settings";

export const protobufPackage = "zitadel.settings.v2beta";

export interface PasswordComplexitySettings {
  minLength: number;
  requiresUppercase: boolean;
  requiresLowercase: boolean;
  requiresNumber: boolean;
  requiresSymbol: boolean;
  /** resource_owner_type returns if the settings is managed on the organization or on the instance */
  resourceOwnerType: ResourceOwnerType;
}

function createBasePasswordComplexitySettings(): PasswordComplexitySettings {
  return {
    minLength: 0,
    requiresUppercase: false,
    requiresLowercase: false,
    requiresNumber: false,
    requiresSymbol: false,
    resourceOwnerType: 0,
  };
}

export const PasswordComplexitySettings = {
  encode(message: PasswordComplexitySettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minLength !== 0) {
      writer.uint32(8).uint64(message.minLength);
    }
    if (message.requiresUppercase === true) {
      writer.uint32(16).bool(message.requiresUppercase);
    }
    if (message.requiresLowercase === true) {
      writer.uint32(24).bool(message.requiresLowercase);
    }
    if (message.requiresNumber === true) {
      writer.uint32(32).bool(message.requiresNumber);
    }
    if (message.requiresSymbol === true) {
      writer.uint32(40).bool(message.requiresSymbol);
    }
    if (message.resourceOwnerType !== 0) {
      writer.uint32(48).int32(message.resourceOwnerType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PasswordComplexitySettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePasswordComplexitySettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.minLength = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.requiresUppercase = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.requiresLowercase = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.requiresNumber = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.requiresSymbol = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.resourceOwnerType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<PasswordComplexitySettings>): PasswordComplexitySettings {
    return PasswordComplexitySettings.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PasswordComplexitySettings>): PasswordComplexitySettings {
    const message = createBasePasswordComplexitySettings();
    message.minLength = object.minLength ?? 0;
    message.requiresUppercase = object.requiresUppercase ?? false;
    message.requiresLowercase = object.requiresLowercase ?? false;
    message.requiresNumber = object.requiresNumber ?? false;
    message.requiresSymbol = object.requiresSymbol ?? false;
    message.resourceOwnerType = object.resourceOwnerType ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
