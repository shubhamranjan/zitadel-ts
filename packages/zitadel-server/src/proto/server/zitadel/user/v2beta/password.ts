/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "zitadel.user.v2beta";

export enum NotificationType {
  NOTIFICATION_TYPE_Unspecified = 0,
  NOTIFICATION_TYPE_Email = 1,
  NOTIFICATION_TYPE_SMS = 2,
  UNRECOGNIZED = -1,
}

export interface Password {
  password: string;
  changeRequired: boolean;
}

export interface HashedPassword {
  hash: string;
  changeRequired: boolean;
}

export interface SendPasswordResetLink {
  notificationType: NotificationType;
  urlTemplate?: string | undefined;
}

export interface ReturnPasswordResetCode {
}

export interface SetPassword {
  password?: Password | undefined;
  hashedPassword?: HashedPassword | undefined;
  currentPassword?: string | undefined;
  verificationCode?: string | undefined;
}

function createBasePassword(): Password {
  return { password: "", changeRequired: false };
}

export const Password = {
  encode(message: Password, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.password !== "") {
      writer.uint32(10).string(message.password);
    }
    if (message.changeRequired === true) {
      writer.uint32(16).bool(message.changeRequired);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Password {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePassword();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.password = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.changeRequired = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Password>): Password {
    return Password.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Password>): Password {
    const message = createBasePassword();
    message.password = object.password ?? "";
    message.changeRequired = object.changeRequired ?? false;
    return message;
  },
};

function createBaseHashedPassword(): HashedPassword {
  return { hash: "", changeRequired: false };
}

export const HashedPassword = {
  encode(message: HashedPassword, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.changeRequired === true) {
      writer.uint32(16).bool(message.changeRequired);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HashedPassword {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHashedPassword();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hash = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.changeRequired = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<HashedPassword>): HashedPassword {
    return HashedPassword.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<HashedPassword>): HashedPassword {
    const message = createBaseHashedPassword();
    message.hash = object.hash ?? "";
    message.changeRequired = object.changeRequired ?? false;
    return message;
  },
};

function createBaseSendPasswordResetLink(): SendPasswordResetLink {
  return { notificationType: 0, urlTemplate: undefined };
}

export const SendPasswordResetLink = {
  encode(message: SendPasswordResetLink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.notificationType !== 0) {
      writer.uint32(8).int32(message.notificationType);
    }
    if (message.urlTemplate !== undefined) {
      writer.uint32(18).string(message.urlTemplate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendPasswordResetLink {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendPasswordResetLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.notificationType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
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

  create(base?: DeepPartial<SendPasswordResetLink>): SendPasswordResetLink {
    return SendPasswordResetLink.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SendPasswordResetLink>): SendPasswordResetLink {
    const message = createBaseSendPasswordResetLink();
    message.notificationType = object.notificationType ?? 0;
    message.urlTemplate = object.urlTemplate ?? undefined;
    return message;
  },
};

function createBaseReturnPasswordResetCode(): ReturnPasswordResetCode {
  return {};
}

export const ReturnPasswordResetCode = {
  encode(_: ReturnPasswordResetCode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReturnPasswordResetCode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReturnPasswordResetCode();
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

  create(base?: DeepPartial<ReturnPasswordResetCode>): ReturnPasswordResetCode {
    return ReturnPasswordResetCode.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ReturnPasswordResetCode>): ReturnPasswordResetCode {
    const message = createBaseReturnPasswordResetCode();
    return message;
  },
};

function createBaseSetPassword(): SetPassword {
  return { password: undefined, hashedPassword: undefined, currentPassword: undefined, verificationCode: undefined };
}

export const SetPassword = {
  encode(message: SetPassword, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.password !== undefined) {
      Password.encode(message.password, writer.uint32(10).fork()).ldelim();
    }
    if (message.hashedPassword !== undefined) {
      HashedPassword.encode(message.hashedPassword, writer.uint32(18).fork()).ldelim();
    }
    if (message.currentPassword !== undefined) {
      writer.uint32(26).string(message.currentPassword);
    }
    if (message.verificationCode !== undefined) {
      writer.uint32(34).string(message.verificationCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetPassword {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetPassword();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.password = Password.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.hashedPassword = HashedPassword.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.currentPassword = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.verificationCode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SetPassword>): SetPassword {
    return SetPassword.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetPassword>): SetPassword {
    const message = createBaseSetPassword();
    message.password = (object.password !== undefined && object.password !== null)
      ? Password.fromPartial(object.password)
      : undefined;
    message.hashedPassword = (object.hashedPassword !== undefined && object.hashedPassword !== null)
      ? HashedPassword.fromPartial(object.hashedPassword)
      : undefined;
    message.currentPassword = object.currentPassword ?? undefined;
    message.verificationCode = object.verificationCode ?? undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
