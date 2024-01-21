/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "zitadel.oidc.v2beta";

export enum Prompt {
  PROMPT_UNSPECIFIED = 0,
  PROMPT_NONE = 1,
  PROMPT_LOGIN = 2,
  PROMPT_CONSENT = 3,
  PROMPT_SELECT_ACCOUNT = 4,
  PROMPT_CREATE = 5,
  UNRECOGNIZED = -1,
}

export enum ErrorReason {
  ERROR_REASON_UNSPECIFIED = 0,
  /** ERROR_REASON_INVALID_REQUEST - Error states from https://datatracker.ietf.org/doc/html/rfc6749#section-4.2.2.1 */
  ERROR_REASON_INVALID_REQUEST = 1,
  ERROR_REASON_UNAUTHORIZED_CLIENT = 2,
  ERROR_REASON_ACCESS_DENIED = 3,
  ERROR_REASON_UNSUPPORTED_RESPONSE_TYPE = 4,
  ERROR_REASON_INVALID_SCOPE = 5,
  ERROR_REASON_SERVER_ERROR = 6,
  ERROR_REASON_TEMPORARY_UNAVAILABLE = 7,
  /** ERROR_REASON_INTERACTION_REQUIRED - Error states from https://openid.net/specs/openid-connect-core-1_0.html#AuthError */
  ERROR_REASON_INTERACTION_REQUIRED = 8,
  ERROR_REASON_LOGIN_REQUIRED = 9,
  ERROR_REASON_ACCOUNT_SELECTION_REQUIRED = 10,
  ERROR_REASON_CONSENT_REQUIRED = 11,
  ERROR_REASON_INVALID_REQUEST_URI = 12,
  ERROR_REASON_INVALID_REQUEST_OBJECT = 13,
  ERROR_REASON_REQUEST_NOT_SUPPORTED = 14,
  ERROR_REASON_REQUEST_URI_NOT_SUPPORTED = 15,
  ERROR_REASON_REGISTRATION_NOT_SUPPORTED = 16,
  UNRECOGNIZED = -1,
}

export interface AuthRequest {
  id: string;
  creationDate: Date | undefined;
  clientId: string;
  scope: string[];
  redirectUri: string;
  prompt: Prompt[];
  uiLocales: string[];
  loginHint?: string | undefined;
  maxAge?: Duration | undefined;
  hintUserId?: string | undefined;
}

export interface AuthorizationError {
  error: ErrorReason;
  errorDescription?: string | undefined;
  errorUri?: string | undefined;
}

function createBaseAuthRequest(): AuthRequest {
  return {
    id: "",
    creationDate: undefined,
    clientId: "",
    scope: [],
    redirectUri: "",
    prompt: [],
    uiLocales: [],
    loginHint: undefined,
    maxAge: undefined,
    hintUserId: undefined,
  };
}

export const AuthRequest = {
  encode(message: AuthRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.creationDate !== undefined) {
      Timestamp.encode(toTimestamp(message.creationDate), writer.uint32(18).fork()).ldelim();
    }
    if (message.clientId !== "") {
      writer.uint32(26).string(message.clientId);
    }
    for (const v of message.scope) {
      writer.uint32(34).string(v!);
    }
    if (message.redirectUri !== "") {
      writer.uint32(42).string(message.redirectUri);
    }
    writer.uint32(50).fork();
    for (const v of message.prompt) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.uiLocales) {
      writer.uint32(58).string(v!);
    }
    if (message.loginHint !== undefined) {
      writer.uint32(66).string(message.loginHint);
    }
    if (message.maxAge !== undefined) {
      Duration.encode(message.maxAge, writer.uint32(74).fork()).ldelim();
    }
    if (message.hintUserId !== undefined) {
      writer.uint32(82).string(message.hintUserId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthRequest();
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

          message.clientId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.scope.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.redirectUri = reader.string();
          continue;
        case 6:
          if (tag === 48) {
            message.prompt.push(reader.int32() as any);

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.prompt.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.uiLocales.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.loginHint = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.maxAge = Duration.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.hintUserId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AuthRequest>): AuthRequest {
    return AuthRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AuthRequest>): AuthRequest {
    const message = createBaseAuthRequest();
    message.id = object.id ?? "";
    message.creationDate = object.creationDate ?? undefined;
    message.clientId = object.clientId ?? "";
    message.scope = object.scope?.map((e) => e) || [];
    message.redirectUri = object.redirectUri ?? "";
    message.prompt = object.prompt?.map((e) => e) || [];
    message.uiLocales = object.uiLocales?.map((e) => e) || [];
    message.loginHint = object.loginHint ?? undefined;
    message.maxAge = (object.maxAge !== undefined && object.maxAge !== null)
      ? Duration.fromPartial(object.maxAge)
      : undefined;
    message.hintUserId = object.hintUserId ?? undefined;
    return message;
  },
};

function createBaseAuthorizationError(): AuthorizationError {
  return { error: 0, errorDescription: undefined, errorUri: undefined };
}

export const AuthorizationError = {
  encode(message: AuthorizationError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    if (message.errorDescription !== undefined) {
      writer.uint32(18).string(message.errorDescription);
    }
    if (message.errorUri !== undefined) {
      writer.uint32(26).string(message.errorUri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizationError {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthorizationError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.error = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.errorDescription = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.errorUri = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AuthorizationError>): AuthorizationError {
    return AuthorizationError.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AuthorizationError>): AuthorizationError {
    const message = createBaseAuthorizationError();
    message.error = object.error ?? 0;
    message.errorDescription = object.errorDescription ?? undefined;
    message.errorUri = object.errorUri ?? undefined;
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
