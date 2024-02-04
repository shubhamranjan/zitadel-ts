/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { TimestampQueryMethod } from "../../object";

export const protobufPackage = "zitadel.session.v2beta";

export enum SessionFieldName {
  SESSION_FIELD_NAME_UNSPECIFIED = 0,
  SESSION_FIELD_NAME_CREATION_DATE = 1,
  UNRECOGNIZED = -1,
}

export interface Session {
  id: string;
  creationDate: Date | undefined;
  changeDate: Date | undefined;
  sequence: number;
  factors: Factors | undefined;
  metadata: { [key: string]: Uint8Array };
  userAgent: UserAgent | undefined;
  expirationDate?: Date | undefined;
}

export interface Session_MetadataEntry {
  key: string;
  value: Uint8Array;
}

export interface Factors {
  user: UserFactor | undefined;
  password: PasswordFactor | undefined;
  webAuthN: WebAuthNFactor | undefined;
  intent: IntentFactor | undefined;
  totp: TOTPFactor | undefined;
  otpSms: OTPFactor | undefined;
  otpEmail: OTPFactor | undefined;
}

export interface UserFactor {
  verifiedAt: Date | undefined;
  id: string;
  loginName: string;
  displayName: string;
  /** deprecated: use organization_id, will be remove before GA (https://github.com/zitadel/zitadel/issues/6718) */
  organisationId: string;
  organizationId: string;
}

export interface PasswordFactor {
  verifiedAt: Date | undefined;
}

export interface IntentFactor {
  verifiedAt: Date | undefined;
}

export interface WebAuthNFactor {
  verifiedAt: Date | undefined;
  userVerified: boolean;
}

export interface TOTPFactor {
  verifiedAt: Date | undefined;
}

export interface OTPFactor {
  verifiedAt: Date | undefined;
}

export interface SearchQuery {
  idsQuery?: IDsQuery | undefined;
  userIdQuery?: UserIDQuery | undefined;
  creationDateQuery?: CreationDateQuery | undefined;
}

export interface IDsQuery {
  ids: string[];
}

export interface UserIDQuery {
  id: string;
}

export interface CreationDateQuery {
  creationDate: Date | undefined;
  method: TimestampQueryMethod;
}

export interface UserAgent {
  fingerprintId?: string | undefined;
  ip?: string | undefined;
  description?: string | undefined;
  header: { [key: string]: UserAgent_HeaderValues };
}

/**
 * A header may have multiple values.
 * In Go, headers are defined
 * as map[string][]string, but protobuf
 * doesn't allow this scheme.
 */
export interface UserAgent_HeaderValues {
  values: string[];
}

export interface UserAgent_HeaderEntry {
  key: string;
  value: UserAgent_HeaderValues | undefined;
}

function createBaseSession(): Session {
  return {
    id: "",
    creationDate: undefined,
    changeDate: undefined,
    sequence: 0,
    factors: undefined,
    metadata: {},
    userAgent: undefined,
    expirationDate: undefined,
  };
}

export const Session = {
  encode(message: Session, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.creationDate !== undefined) {
      Timestamp.encode(toTimestamp(message.creationDate), writer.uint32(18).fork()).ldelim();
    }
    if (message.changeDate !== undefined) {
      Timestamp.encode(toTimestamp(message.changeDate), writer.uint32(26).fork()).ldelim();
    }
    if (message.sequence !== 0) {
      writer.uint32(32).uint64(message.sequence);
    }
    if (message.factors !== undefined) {
      Factors.encode(message.factors, writer.uint32(42).fork()).ldelim();
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      Session_MetadataEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).ldelim();
    });
    if (message.userAgent !== undefined) {
      UserAgent.encode(message.userAgent, writer.uint32(58).fork()).ldelim();
    }
    if (message.expirationDate !== undefined) {
      Timestamp.encode(toTimestamp(message.expirationDate), writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Session {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSession();
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

          message.creationDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.changeDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.sequence = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.factors = Factors.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          const entry6 = Session_MetadataEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.metadata[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.userAgent = UserAgent.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.expirationDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Session>): Session {
    return Session.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Session>): Session {
    const message = createBaseSession();
    message.id = object.id ?? "";
    message.creationDate = object.creationDate ?? undefined;
    message.changeDate = object.changeDate ?? undefined;
    message.sequence = object.sequence ?? 0;
    message.factors = (object.factors !== undefined && object.factors !== null)
      ? Factors.fromPartial(object.factors)
      : undefined;
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{ [key: string]: Uint8Array }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value;
        }
        return acc;
      },
      {},
    );
    message.userAgent = (object.userAgent !== undefined && object.userAgent !== null)
      ? UserAgent.fromPartial(object.userAgent)
      : undefined;
    message.expirationDate = object.expirationDate ?? undefined;
    return message;
  },
};

function createBaseSession_MetadataEntry(): Session_MetadataEntry {
  return { key: "", value: new Uint8Array(0) };
}

export const Session_MetadataEntry = {
  encode(message: Session_MetadataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Session_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSession_MetadataEntry();
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

  create(base?: DeepPartial<Session_MetadataEntry>): Session_MetadataEntry {
    return Session_MetadataEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Session_MetadataEntry>): Session_MetadataEntry {
    const message = createBaseSession_MetadataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseFactors(): Factors {
  return {
    user: undefined,
    password: undefined,
    webAuthN: undefined,
    intent: undefined,
    totp: undefined,
    otpSms: undefined,
    otpEmail: undefined,
  };
}

export const Factors = {
  encode(message: Factors, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      UserFactor.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    if (message.password !== undefined) {
      PasswordFactor.encode(message.password, writer.uint32(18).fork()).ldelim();
    }
    if (message.webAuthN !== undefined) {
      WebAuthNFactor.encode(message.webAuthN, writer.uint32(26).fork()).ldelim();
    }
    if (message.intent !== undefined) {
      IntentFactor.encode(message.intent, writer.uint32(34).fork()).ldelim();
    }
    if (message.totp !== undefined) {
      TOTPFactor.encode(message.totp, writer.uint32(42).fork()).ldelim();
    }
    if (message.otpSms !== undefined) {
      OTPFactor.encode(message.otpSms, writer.uint32(50).fork()).ldelim();
    }
    if (message.otpEmail !== undefined) {
      OTPFactor.encode(message.otpEmail, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Factors {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFactors();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = UserFactor.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = PasswordFactor.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.webAuthN = WebAuthNFactor.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.intent = IntentFactor.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.totp = TOTPFactor.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.otpSms = OTPFactor.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.otpEmail = OTPFactor.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Factors>): Factors {
    return Factors.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Factors>): Factors {
    const message = createBaseFactors();
    message.user = (object.user !== undefined && object.user !== null)
      ? UserFactor.fromPartial(object.user)
      : undefined;
    message.password = (object.password !== undefined && object.password !== null)
      ? PasswordFactor.fromPartial(object.password)
      : undefined;
    message.webAuthN = (object.webAuthN !== undefined && object.webAuthN !== null)
      ? WebAuthNFactor.fromPartial(object.webAuthN)
      : undefined;
    message.intent = (object.intent !== undefined && object.intent !== null)
      ? IntentFactor.fromPartial(object.intent)
      : undefined;
    message.totp = (object.totp !== undefined && object.totp !== null)
      ? TOTPFactor.fromPartial(object.totp)
      : undefined;
    message.otpSms = (object.otpSms !== undefined && object.otpSms !== null)
      ? OTPFactor.fromPartial(object.otpSms)
      : undefined;
    message.otpEmail = (object.otpEmail !== undefined && object.otpEmail !== null)
      ? OTPFactor.fromPartial(object.otpEmail)
      : undefined;
    return message;
  },
};

function createBaseUserFactor(): UserFactor {
  return { verifiedAt: undefined, id: "", loginName: "", displayName: "", organisationId: "", organizationId: "" };
}

export const UserFactor = {
  encode(message: UserFactor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.verifiedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.verifiedAt), writer.uint32(10).fork()).ldelim();
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.loginName !== "") {
      writer.uint32(26).string(message.loginName);
    }
    if (message.displayName !== "") {
      writer.uint32(34).string(message.displayName);
    }
    if (message.organisationId !== "") {
      writer.uint32(42).string(message.organisationId);
    }
    if (message.organizationId !== "") {
      writer.uint32(50).string(message.organizationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFactor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFactor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.verifiedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.loginName = reader.string();
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

          message.organisationId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.organizationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<UserFactor>): UserFactor {
    return UserFactor.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserFactor>): UserFactor {
    const message = createBaseUserFactor();
    message.verifiedAt = object.verifiedAt ?? undefined;
    message.id = object.id ?? "";
    message.loginName = object.loginName ?? "";
    message.displayName = object.displayName ?? "";
    message.organisationId = object.organisationId ?? "";
    message.organizationId = object.organizationId ?? "";
    return message;
  },
};

function createBasePasswordFactor(): PasswordFactor {
  return { verifiedAt: undefined };
}

export const PasswordFactor = {
  encode(message: PasswordFactor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.verifiedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.verifiedAt), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PasswordFactor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePasswordFactor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.verifiedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<PasswordFactor>): PasswordFactor {
    return PasswordFactor.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PasswordFactor>): PasswordFactor {
    const message = createBasePasswordFactor();
    message.verifiedAt = object.verifiedAt ?? undefined;
    return message;
  },
};

function createBaseIntentFactor(): IntentFactor {
  return { verifiedAt: undefined };
}

export const IntentFactor = {
  encode(message: IntentFactor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.verifiedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.verifiedAt), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IntentFactor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntentFactor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.verifiedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<IntentFactor>): IntentFactor {
    return IntentFactor.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<IntentFactor>): IntentFactor {
    const message = createBaseIntentFactor();
    message.verifiedAt = object.verifiedAt ?? undefined;
    return message;
  },
};

function createBaseWebAuthNFactor(): WebAuthNFactor {
  return { verifiedAt: undefined, userVerified: false };
}

export const WebAuthNFactor = {
  encode(message: WebAuthNFactor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.verifiedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.verifiedAt), writer.uint32(10).fork()).ldelim();
    }
    if (message.userVerified === true) {
      writer.uint32(16).bool(message.userVerified);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WebAuthNFactor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWebAuthNFactor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.verifiedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.userVerified = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<WebAuthNFactor>): WebAuthNFactor {
    return WebAuthNFactor.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<WebAuthNFactor>): WebAuthNFactor {
    const message = createBaseWebAuthNFactor();
    message.verifiedAt = object.verifiedAt ?? undefined;
    message.userVerified = object.userVerified ?? false;
    return message;
  },
};

function createBaseTOTPFactor(): TOTPFactor {
  return { verifiedAt: undefined };
}

export const TOTPFactor = {
  encode(message: TOTPFactor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.verifiedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.verifiedAt), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TOTPFactor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTOTPFactor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.verifiedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<TOTPFactor>): TOTPFactor {
    return TOTPFactor.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TOTPFactor>): TOTPFactor {
    const message = createBaseTOTPFactor();
    message.verifiedAt = object.verifiedAt ?? undefined;
    return message;
  },
};

function createBaseOTPFactor(): OTPFactor {
  return { verifiedAt: undefined };
}

export const OTPFactor = {
  encode(message: OTPFactor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.verifiedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.verifiedAt), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OTPFactor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOTPFactor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.verifiedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<OTPFactor>): OTPFactor {
    return OTPFactor.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OTPFactor>): OTPFactor {
    const message = createBaseOTPFactor();
    message.verifiedAt = object.verifiedAt ?? undefined;
    return message;
  },
};

function createBaseSearchQuery(): SearchQuery {
  return { idsQuery: undefined, userIdQuery: undefined, creationDateQuery: undefined };
}

export const SearchQuery = {
  encode(message: SearchQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.idsQuery !== undefined) {
      IDsQuery.encode(message.idsQuery, writer.uint32(10).fork()).ldelim();
    }
    if (message.userIdQuery !== undefined) {
      UserIDQuery.encode(message.userIdQuery, writer.uint32(18).fork()).ldelim();
    }
    if (message.creationDateQuery !== undefined) {
      CreationDateQuery.encode(message.creationDateQuery, writer.uint32(26).fork()).ldelim();
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

          message.idsQuery = IDsQuery.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userIdQuery = UserIDQuery.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.creationDateQuery = CreationDateQuery.decode(reader, reader.uint32());
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
    message.idsQuery = (object.idsQuery !== undefined && object.idsQuery !== null)
      ? IDsQuery.fromPartial(object.idsQuery)
      : undefined;
    message.userIdQuery = (object.userIdQuery !== undefined && object.userIdQuery !== null)
      ? UserIDQuery.fromPartial(object.userIdQuery)
      : undefined;
    message.creationDateQuery = (object.creationDateQuery !== undefined && object.creationDateQuery !== null)
      ? CreationDateQuery.fromPartial(object.creationDateQuery)
      : undefined;
    return message;
  },
};

function createBaseIDsQuery(): IDsQuery {
  return { ids: [] };
}

export const IDsQuery = {
  encode(message: IDsQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IDsQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDsQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ids.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<IDsQuery>): IDsQuery {
    return IDsQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<IDsQuery>): IDsQuery {
    const message = createBaseIDsQuery();
    message.ids = object.ids?.map((e) => e) || [];
    return message;
  },
};

function createBaseUserIDQuery(): UserIDQuery {
  return { id: "" };
}

export const UserIDQuery = {
  encode(message: UserIDQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
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

          message.id = reader.string();
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
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseCreationDateQuery(): CreationDateQuery {
  return { creationDate: undefined, method: 0 };
}

export const CreationDateQuery = {
  encode(message: CreationDateQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creationDate !== undefined) {
      Timestamp.encode(toTimestamp(message.creationDate), writer.uint32(10).fork()).ldelim();
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreationDateQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreationDateQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creationDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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

  create(base?: DeepPartial<CreationDateQuery>): CreationDateQuery {
    return CreationDateQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreationDateQuery>): CreationDateQuery {
    const message = createBaseCreationDateQuery();
    message.creationDate = object.creationDate ?? undefined;
    message.method = object.method ?? 0;
    return message;
  },
};

function createBaseUserAgent(): UserAgent {
  return { fingerprintId: undefined, ip: undefined, description: undefined, header: {} };
}

export const UserAgent = {
  encode(message: UserAgent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fingerprintId !== undefined) {
      writer.uint32(10).string(message.fingerprintId);
    }
    if (message.ip !== undefined) {
      writer.uint32(18).string(message.ip);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    Object.entries(message.header).forEach(([key, value]) => {
      UserAgent_HeaderEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserAgent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserAgent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fingerprintId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = UserAgent_HeaderEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.header[entry4.key] = entry4.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<UserAgent>): UserAgent {
    return UserAgent.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserAgent>): UserAgent {
    const message = createBaseUserAgent();
    message.fingerprintId = object.fingerprintId ?? undefined;
    message.ip = object.ip ?? undefined;
    message.description = object.description ?? undefined;
    message.header = Object.entries(object.header ?? {}).reduce<{ [key: string]: UserAgent_HeaderValues }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = UserAgent_HeaderValues.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseUserAgent_HeaderValues(): UserAgent_HeaderValues {
  return { values: [] };
}

export const UserAgent_HeaderValues = {
  encode(message: UserAgent_HeaderValues, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserAgent_HeaderValues {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserAgent_HeaderValues();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.values.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<UserAgent_HeaderValues>): UserAgent_HeaderValues {
    return UserAgent_HeaderValues.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserAgent_HeaderValues>): UserAgent_HeaderValues {
    const message = createBaseUserAgent_HeaderValues();
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseUserAgent_HeaderEntry(): UserAgent_HeaderEntry {
  return { key: "", value: undefined };
}

export const UserAgent_HeaderEntry = {
  encode(message: UserAgent_HeaderEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      UserAgent_HeaderValues.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserAgent_HeaderEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserAgent_HeaderEntry();
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

          message.value = UserAgent_HeaderValues.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<UserAgent_HeaderEntry>): UserAgent_HeaderEntry {
    return UserAgent_HeaderEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserAgent_HeaderEntry>): UserAgent_HeaderEntry {
    const message = createBaseUserAgent_HeaderEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? UserAgent_HeaderValues.fromPartial(object.value)
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

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

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
