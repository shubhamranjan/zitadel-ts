/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ResourceOwnerType } from "./settings";

export const protobufPackage = "zitadel.settings.v2beta";

export interface LegalAndSupportSettings {
  tosLink: string;
  privacyPolicyLink: string;
  helpLink: string;
  supportEmail: string;
  /** resource_owner_type returns if the setting is managed on the organization or on the instance */
  resourceOwnerType: ResourceOwnerType;
}

function createBaseLegalAndSupportSettings(): LegalAndSupportSettings {
  return { tosLink: "", privacyPolicyLink: "", helpLink: "", supportEmail: "", resourceOwnerType: 0 };
}

export const LegalAndSupportSettings = {
  encode(message: LegalAndSupportSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tosLink !== "") {
      writer.uint32(10).string(message.tosLink);
    }
    if (message.privacyPolicyLink !== "") {
      writer.uint32(18).string(message.privacyPolicyLink);
    }
    if (message.helpLink !== "") {
      writer.uint32(26).string(message.helpLink);
    }
    if (message.supportEmail !== "") {
      writer.uint32(34).string(message.supportEmail);
    }
    if (message.resourceOwnerType !== 0) {
      writer.uint32(40).int32(message.resourceOwnerType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegalAndSupportSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegalAndSupportSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tosLink = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.privacyPolicyLink = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.helpLink = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.supportEmail = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
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

  create(base?: DeepPartial<LegalAndSupportSettings>): LegalAndSupportSettings {
    return LegalAndSupportSettings.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LegalAndSupportSettings>): LegalAndSupportSettings {
    const message = createBaseLegalAndSupportSettings();
    message.tosLink = object.tosLink ?? "";
    message.privacyPolicyLink = object.privacyPolicyLink ?? "";
    message.helpLink = object.helpLink ?? "";
    message.supportEmail = object.supportEmail ?? "";
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
