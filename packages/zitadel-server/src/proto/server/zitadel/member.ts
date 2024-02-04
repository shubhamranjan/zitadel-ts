/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ObjectDetails, TextQueryMethod } from "./object";
import { Type } from "./user";

export const protobufPackage = "zitadel.member.v1";

export interface Member {
  userId: string;
  details: ObjectDetails | undefined;
  roles: string[];
  preferredLoginName: string;
  email: string;
  firstName: string;
  lastName: string;
  displayName: string;
  avatarUrl: string;
  userType: Type;
}

export interface SearchQuery {
  firstNameQuery?: FirstNameQuery | undefined;
  lastNameQuery?: LastNameQuery | undefined;
  emailQuery?: EmailQuery | undefined;
  userIdQuery?: UserIDQuery | undefined;
}

export interface FirstNameQuery {
  firstName: string;
  method: TextQueryMethod;
}

export interface LastNameQuery {
  lastName: string;
  method: TextQueryMethod;
}

export interface EmailQuery {
  email: string;
  method: TextQueryMethod;
}

export interface UserIDQuery {
  userId: string;
}

function createBaseMember(): Member {
  return {
    userId: "",
    details: undefined,
    roles: [],
    preferredLoginName: "",
    email: "",
    firstName: "",
    lastName: "",
    displayName: "",
    avatarUrl: "",
    userType: 0,
  };
}

export const Member = {
  encode(message: Member, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.roles) {
      writer.uint32(26).string(v!);
    }
    if (message.preferredLoginName !== "") {
      writer.uint32(34).string(message.preferredLoginName);
    }
    if (message.email !== "") {
      writer.uint32(42).string(message.email);
    }
    if (message.firstName !== "") {
      writer.uint32(50).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(58).string(message.lastName);
    }
    if (message.displayName !== "") {
      writer.uint32(66).string(message.displayName);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(74).string(message.avatarUrl);
    }
    if (message.userType !== 0) {
      writer.uint32(80).int32(message.userType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Member {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMember();
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
          if (tag !== 18) {
            break;
          }

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.roles.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.preferredLoginName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.email = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.firstName = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.lastName = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.avatarUrl = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.userType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Member>): Member {
    return Member.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Member>): Member {
    const message = createBaseMember();
    message.userId = object.userId ?? "";
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.roles = object.roles?.map((e) => e) || [];
    message.preferredLoginName = object.preferredLoginName ?? "";
    message.email = object.email ?? "";
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    message.displayName = object.displayName ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    message.userType = object.userType ?? 0;
    return message;
  },
};

function createBaseSearchQuery(): SearchQuery {
  return { firstNameQuery: undefined, lastNameQuery: undefined, emailQuery: undefined, userIdQuery: undefined };
}

export const SearchQuery = {
  encode(message: SearchQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.firstNameQuery !== undefined) {
      FirstNameQuery.encode(message.firstNameQuery, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastNameQuery !== undefined) {
      LastNameQuery.encode(message.lastNameQuery, writer.uint32(18).fork()).ldelim();
    }
    if (message.emailQuery !== undefined) {
      EmailQuery.encode(message.emailQuery, writer.uint32(26).fork()).ldelim();
    }
    if (message.userIdQuery !== undefined) {
      UserIDQuery.encode(message.userIdQuery, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SearchQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.firstNameQuery = FirstNameQuery.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.lastNameQuery = LastNameQuery.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.emailQuery = EmailQuery.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.userIdQuery = UserIDQuery.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SearchQuery>): SearchQuery {
    return SearchQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SearchQuery>): SearchQuery {
    const message = createBaseSearchQuery();
    message.firstNameQuery = (object.firstNameQuery !== undefined && object.firstNameQuery !== null)
      ? FirstNameQuery.fromPartial(object.firstNameQuery)
      : undefined;
    message.lastNameQuery = (object.lastNameQuery !== undefined && object.lastNameQuery !== null)
      ? LastNameQuery.fromPartial(object.lastNameQuery)
      : undefined;
    message.emailQuery = (object.emailQuery !== undefined && object.emailQuery !== null)
      ? EmailQuery.fromPartial(object.emailQuery)
      : undefined;
    message.userIdQuery = (object.userIdQuery !== undefined && object.userIdQuery !== null)
      ? UserIDQuery.fromPartial(object.userIdQuery)
      : undefined;
    return message;
  },
};

function createBaseFirstNameQuery(): FirstNameQuery {
  return { firstName: "", method: 0 };
}

export const FirstNameQuery = {
  encode(message: FirstNameQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.firstName !== "") {
      writer.uint32(10).string(message.firstName);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FirstNameQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFirstNameQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.firstName = reader.string();
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

  create(base?: DeepPartial<FirstNameQuery>): FirstNameQuery {
    return FirstNameQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FirstNameQuery>): FirstNameQuery {
    const message = createBaseFirstNameQuery();
    message.firstName = object.firstName ?? "";
    message.method = object.method ?? 0;
    return message;
  },
};

function createBaseLastNameQuery(): LastNameQuery {
  return { lastName: "", method: 0 };
}

export const LastNameQuery = {
  encode(message: LastNameQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastName !== "") {
      writer.uint32(10).string(message.lastName);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastNameQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastNameQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lastName = reader.string();
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

  create(base?: DeepPartial<LastNameQuery>): LastNameQuery {
    return LastNameQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LastNameQuery>): LastNameQuery {
    const message = createBaseLastNameQuery();
    message.lastName = object.lastName ?? "";
    message.method = object.method ?? 0;
    return message;
  },
};

function createBaseEmailQuery(): EmailQuery {
  return { email: "", method: 0 };
}

export const EmailQuery = {
  encode(message: EmailQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EmailQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmailQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.email = reader.string();
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

  create(base?: DeepPartial<EmailQuery>): EmailQuery {
    return EmailQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EmailQuery>): EmailQuery {
    const message = createBaseEmailQuery();
    message.email = object.email ?? "";
    message.method = object.method ?? 0;
    return message;
  },
};

function createBaseUserIDQuery(): UserIDQuery {
  return { userId: "" };
}

export const UserIDQuery = {
  encode(message: UserIDQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserIDQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserIDQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<UserIDQuery>): UserIDQuery {
    return UserIDQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserIDQuery>): UserIDQuery {
    const message = createBaseUserIDQuery();
    message.userId = object.userId ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
