/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { HumanEmail } from "./email";
import { HumanPhone } from "./phone";

export const protobufPackage = "zitadel.user.v2beta";

export enum Gender {
  GENDER_UNSPECIFIED = 0,
  GENDER_FEMALE = 1,
  GENDER_MALE = 2,
  GENDER_DIVERSE = 3,
  UNRECOGNIZED = -1,
}

export enum UserState {
  USER_STATE_UNSPECIFIED = 0,
  USER_STATE_ACTIVE = 1,
  USER_STATE_INACTIVE = 2,
  USER_STATE_DELETED = 3,
  USER_STATE_LOCKED = 4,
  USER_STATE_SUSPEND = 5,
  USER_STATE_INITIAL = 6,
  UNRECOGNIZED = -1,
}

export interface SetHumanProfile {
  givenName: string;
  familyName: string;
  nickName?: string | undefined;
  displayName?: string | undefined;
  preferredLanguage?: string | undefined;
  gender?: Gender | undefined;
}

export interface HumanProfile {
  givenName: string;
  familyName: string;
  nickName?: string | undefined;
  displayName?: string | undefined;
  preferredLanguage?: string | undefined;
  gender?: Gender | undefined;
}

export interface SetMetadataEntry {
  key: string;
  value: Uint8Array;
}

export interface HumanUser {
  userId: string;
  state: UserState;
  username: string;
  loginNames: string[];
  preferredLoginName: string;
  profile: HumanProfile | undefined;
  email: HumanEmail | undefined;
  phone: HumanPhone | undefined;
}

function createBaseSetHumanProfile(): SetHumanProfile {
  return {
    givenName: "",
    familyName: "",
    nickName: undefined,
    displayName: undefined,
    preferredLanguage: undefined,
    gender: undefined,
  };
}

export const SetHumanProfile = {
  encode(message: SetHumanProfile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.givenName !== "") {
      writer.uint32(10).string(message.givenName);
    }
    if (message.familyName !== "") {
      writer.uint32(18).string(message.familyName);
    }
    if (message.nickName !== undefined) {
      writer.uint32(26).string(message.nickName);
    }
    if (message.displayName !== undefined) {
      writer.uint32(34).string(message.displayName);
    }
    if (message.preferredLanguage !== undefined) {
      writer.uint32(42).string(message.preferredLanguage);
    }
    if (message.gender !== undefined) {
      writer.uint32(48).int32(message.gender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetHumanProfile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetHumanProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.givenName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.familyName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nickName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.preferredLanguage = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.gender = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SetHumanProfile>): SetHumanProfile {
    return SetHumanProfile.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetHumanProfile>): SetHumanProfile {
    const message = createBaseSetHumanProfile();
    message.givenName = object.givenName ?? "";
    message.familyName = object.familyName ?? "";
    message.nickName = object.nickName ?? undefined;
    message.displayName = object.displayName ?? undefined;
    message.preferredLanguage = object.preferredLanguage ?? undefined;
    message.gender = object.gender ?? undefined;
    return message;
  },
};

function createBaseHumanProfile(): HumanProfile {
  return {
    givenName: "",
    familyName: "",
    nickName: undefined,
    displayName: undefined,
    preferredLanguage: undefined,
    gender: undefined,
  };
}

export const HumanProfile = {
  encode(message: HumanProfile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.givenName !== "") {
      writer.uint32(10).string(message.givenName);
    }
    if (message.familyName !== "") {
      writer.uint32(18).string(message.familyName);
    }
    if (message.nickName !== undefined) {
      writer.uint32(26).string(message.nickName);
    }
    if (message.displayName !== undefined) {
      writer.uint32(34).string(message.displayName);
    }
    if (message.preferredLanguage !== undefined) {
      writer.uint32(42).string(message.preferredLanguage);
    }
    if (message.gender !== undefined) {
      writer.uint32(48).int32(message.gender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HumanProfile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHumanProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.givenName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.familyName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nickName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.preferredLanguage = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.gender = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<HumanProfile>): HumanProfile {
    return HumanProfile.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<HumanProfile>): HumanProfile {
    const message = createBaseHumanProfile();
    message.givenName = object.givenName ?? "";
    message.familyName = object.familyName ?? "";
    message.nickName = object.nickName ?? undefined;
    message.displayName = object.displayName ?? undefined;
    message.preferredLanguage = object.preferredLanguage ?? undefined;
    message.gender = object.gender ?? undefined;
    return message;
  },
};

function createBaseSetMetadataEntry(): SetMetadataEntry {
  return { key: "", value: new Uint8Array(0) };
}

export const SetMetadataEntry = {
  encode(message: SetMetadataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetMetadataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetMetadataEntry();
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
          if (tag !== 18) {
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

  create(base?: DeepPartial<SetMetadataEntry>): SetMetadataEntry {
    return SetMetadataEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetMetadataEntry>): SetMetadataEntry {
    const message = createBaseSetMetadataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseHumanUser(): HumanUser {
  return {
    userId: "",
    state: 0,
    username: "",
    loginNames: [],
    preferredLoginName: "",
    profile: undefined,
    email: undefined,
    phone: undefined,
  };
}

export const HumanUser = {
  encode(message: HumanUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.username !== "") {
      writer.uint32(26).string(message.username);
    }
    for (const v of message.loginNames) {
      writer.uint32(34).string(v!);
    }
    if (message.preferredLoginName !== "") {
      writer.uint32(42).string(message.preferredLoginName);
    }
    if (message.profile !== undefined) {
      HumanProfile.encode(message.profile, writer.uint32(50).fork()).ldelim();
    }
    if (message.email !== undefined) {
      HumanEmail.encode(message.email, writer.uint32(58).fork()).ldelim();
    }
    if (message.phone !== undefined) {
      HumanPhone.encode(message.phone, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HumanUser {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHumanUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.username = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.loginNames.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.preferredLoginName = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.profile = HumanProfile.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.email = HumanEmail.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.phone = HumanPhone.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<HumanUser>): HumanUser {
    return HumanUser.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<HumanUser>): HumanUser {
    const message = createBaseHumanUser();
    message.userId = object.userId ?? "";
    message.state = object.state ?? 0;
    message.username = object.username ?? "";
    message.loginNames = object.loginNames?.map((e) => e) || [];
    message.preferredLoginName = object.preferredLoginName ?? "";
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? HumanProfile.fromPartial(object.profile)
      : undefined;
    message.email = (object.email !== undefined && object.email !== null)
      ? HumanEmail.fromPartial(object.email)
      : undefined;
    message.phone = (object.phone !== undefined && object.phone !== null)
      ? HumanPhone.fromPartial(object.phone)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
