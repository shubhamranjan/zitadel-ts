/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Duration } from "../google/protobuf/duration";
import { LocalizedMessage } from "./message";
import { ObjectDetails, TextQueryMethod } from "./object";

export const protobufPackage = "zitadel.app.v1";

export enum AppState {
  APP_STATE_UNSPECIFIED = 0,
  APP_STATE_ACTIVE = 1,
  APP_STATE_INACTIVE = 2,
  UNRECOGNIZED = -1,
}

export enum OIDCResponseType {
  OIDC_RESPONSE_TYPE_CODE = 0,
  OIDC_RESPONSE_TYPE_ID_TOKEN = 1,
  OIDC_RESPONSE_TYPE_ID_TOKEN_TOKEN = 2,
  UNRECOGNIZED = -1,
}

export enum OIDCGrantType {
  OIDC_GRANT_TYPE_AUTHORIZATION_CODE = 0,
  OIDC_GRANT_TYPE_IMPLICIT = 1,
  OIDC_GRANT_TYPE_REFRESH_TOKEN = 2,
  OIDC_GRANT_TYPE_DEVICE_CODE = 3,
  UNRECOGNIZED = -1,
}

export enum OIDCAppType {
  OIDC_APP_TYPE_WEB = 0,
  OIDC_APP_TYPE_USER_AGENT = 1,
  OIDC_APP_TYPE_NATIVE = 2,
  UNRECOGNIZED = -1,
}

export enum OIDCAuthMethodType {
  OIDC_AUTH_METHOD_TYPE_BASIC = 0,
  OIDC_AUTH_METHOD_TYPE_POST = 1,
  OIDC_AUTH_METHOD_TYPE_NONE = 2,
  OIDC_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT = 3,
  UNRECOGNIZED = -1,
}

export enum OIDCVersion {
  OIDC_VERSION_1_0 = 0,
  UNRECOGNIZED = -1,
}

export enum OIDCTokenType {
  OIDC_TOKEN_TYPE_BEARER = 0,
  OIDC_TOKEN_TYPE_JWT = 1,
  UNRECOGNIZED = -1,
}

export enum APIAuthMethodType {
  API_AUTH_METHOD_TYPE_BASIC = 0,
  API_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT = 1,
  UNRECOGNIZED = -1,
}

export interface App {
  id: string;
  details: ObjectDetails | undefined;
  state: AppState;
  name: string;
  oidcConfig?: OIDCConfig | undefined;
  apiConfig?: APIConfig | undefined;
  samlConfig?: SAMLConfig | undefined;
}

export interface AppQuery {
  nameQuery?: AppNameQuery | undefined;
}

export interface AppNameQuery {
  name: string;
  method: TextQueryMethod;
}

export interface OIDCConfig {
  redirectUris: string[];
  responseTypes: OIDCResponseType[];
  grantTypes: OIDCGrantType[];
  appType: OIDCAppType;
  clientId: string;
  authMethodType: OIDCAuthMethodType;
  postLogoutRedirectUris: string[];
  version: OIDCVersion;
  noneCompliant: boolean;
  complianceProblems: LocalizedMessage[];
  devMode: boolean;
  accessTokenType: OIDCTokenType;
  accessTokenRoleAssertion: boolean;
  idTokenRoleAssertion: boolean;
  idTokenUserinfoAssertion: boolean;
  clockSkew: Duration | undefined;
  additionalOrigins: string[];
  allowedOrigins: string[];
  skipNativeAppSuccessPage: boolean;
}

export interface SAMLConfig {
  metadataXml?: Uint8Array | undefined;
  metadataUrl?: string | undefined;
}

export interface APIConfig {
  clientId: string;
  authMethodType: APIAuthMethodType;
}

function createBaseApp(): App {
  return {
    id: "",
    details: undefined,
    state: 0,
    name: "",
    oidcConfig: undefined,
    apiConfig: undefined,
    samlConfig: undefined,
  };
}

export const App = {
  encode(message: App, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.oidcConfig !== undefined) {
      OIDCConfig.encode(message.oidcConfig, writer.uint32(42).fork()).ldelim();
    }
    if (message.apiConfig !== undefined) {
      APIConfig.encode(message.apiConfig, writer.uint32(50).fork()).ldelim();
    }
    if (message.samlConfig !== undefined) {
      SAMLConfig.encode(message.samlConfig, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): App {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApp();
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

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.oidcConfig = OIDCConfig.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.apiConfig = APIConfig.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.samlConfig = SAMLConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<App>): App {
    return App.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<App>): App {
    const message = createBaseApp();
    message.id = object.id ?? "";
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.state = object.state ?? 0;
    message.name = object.name ?? "";
    message.oidcConfig = (object.oidcConfig !== undefined && object.oidcConfig !== null)
      ? OIDCConfig.fromPartial(object.oidcConfig)
      : undefined;
    message.apiConfig = (object.apiConfig !== undefined && object.apiConfig !== null)
      ? APIConfig.fromPartial(object.apiConfig)
      : undefined;
    message.samlConfig = (object.samlConfig !== undefined && object.samlConfig !== null)
      ? SAMLConfig.fromPartial(object.samlConfig)
      : undefined;
    return message;
  },
};

function createBaseAppQuery(): AppQuery {
  return { nameQuery: undefined };
}

export const AppQuery = {
  encode(message: AppQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nameQuery !== undefined) {
      AppNameQuery.encode(message.nameQuery, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nameQuery = AppNameQuery.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AppQuery>): AppQuery {
    return AppQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AppQuery>): AppQuery {
    const message = createBaseAppQuery();
    message.nameQuery = (object.nameQuery !== undefined && object.nameQuery !== null)
      ? AppNameQuery.fromPartial(object.nameQuery)
      : undefined;
    return message;
  },
};

function createBaseAppNameQuery(): AppNameQuery {
  return { name: "", method: 0 };
}

export const AppNameQuery = {
  encode(message: AppNameQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppNameQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppNameQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
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

  create(base?: DeepPartial<AppNameQuery>): AppNameQuery {
    return AppNameQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AppNameQuery>): AppNameQuery {
    const message = createBaseAppNameQuery();
    message.name = object.name ?? "";
    message.method = object.method ?? 0;
    return message;
  },
};

function createBaseOIDCConfig(): OIDCConfig {
  return {
    redirectUris: [],
    responseTypes: [],
    grantTypes: [],
    appType: 0,
    clientId: "",
    authMethodType: 0,
    postLogoutRedirectUris: [],
    version: 0,
    noneCompliant: false,
    complianceProblems: [],
    devMode: false,
    accessTokenType: 0,
    accessTokenRoleAssertion: false,
    idTokenRoleAssertion: false,
    idTokenUserinfoAssertion: false,
    clockSkew: undefined,
    additionalOrigins: [],
    allowedOrigins: [],
    skipNativeAppSuccessPage: false,
  };
}

export const OIDCConfig = {
  encode(message: OIDCConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.redirectUris) {
      writer.uint32(10).string(v!);
    }
    writer.uint32(18).fork();
    for (const v of message.responseTypes) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.grantTypes) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.appType !== 0) {
      writer.uint32(32).int32(message.appType);
    }
    if (message.clientId !== "") {
      writer.uint32(42).string(message.clientId);
    }
    if (message.authMethodType !== 0) {
      writer.uint32(56).int32(message.authMethodType);
    }
    for (const v of message.postLogoutRedirectUris) {
      writer.uint32(66).string(v!);
    }
    if (message.version !== 0) {
      writer.uint32(72).int32(message.version);
    }
    if (message.noneCompliant === true) {
      writer.uint32(80).bool(message.noneCompliant);
    }
    for (const v of message.complianceProblems) {
      LocalizedMessage.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.devMode === true) {
      writer.uint32(96).bool(message.devMode);
    }
    if (message.accessTokenType !== 0) {
      writer.uint32(104).int32(message.accessTokenType);
    }
    if (message.accessTokenRoleAssertion === true) {
      writer.uint32(112).bool(message.accessTokenRoleAssertion);
    }
    if (message.idTokenRoleAssertion === true) {
      writer.uint32(120).bool(message.idTokenRoleAssertion);
    }
    if (message.idTokenUserinfoAssertion === true) {
      writer.uint32(128).bool(message.idTokenUserinfoAssertion);
    }
    if (message.clockSkew !== undefined) {
      Duration.encode(message.clockSkew, writer.uint32(138).fork()).ldelim();
    }
    for (const v of message.additionalOrigins) {
      writer.uint32(146).string(v!);
    }
    for (const v of message.allowedOrigins) {
      writer.uint32(154).string(v!);
    }
    if (message.skipNativeAppSuccessPage === true) {
      writer.uint32(160).bool(message.skipNativeAppSuccessPage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OIDCConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOIDCConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.redirectUris.push(reader.string());
          continue;
        case 2:
          if (tag === 16) {
            message.responseTypes.push(reader.int32() as any);

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.responseTypes.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 3:
          if (tag === 24) {
            message.grantTypes.push(reader.int32() as any);

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.grantTypes.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.appType = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.clientId = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.authMethodType = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.postLogoutRedirectUris.push(reader.string());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.version = reader.int32() as any;
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.noneCompliant = reader.bool();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.complianceProblems.push(LocalizedMessage.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.devMode = reader.bool();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.accessTokenType = reader.int32() as any;
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.accessTokenRoleAssertion = reader.bool();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.idTokenRoleAssertion = reader.bool();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.idTokenUserinfoAssertion = reader.bool();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.clockSkew = Duration.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.additionalOrigins.push(reader.string());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.allowedOrigins.push(reader.string());
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.skipNativeAppSuccessPage = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<OIDCConfig>): OIDCConfig {
    return OIDCConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OIDCConfig>): OIDCConfig {
    const message = createBaseOIDCConfig();
    message.redirectUris = object.redirectUris?.map((e) => e) || [];
    message.responseTypes = object.responseTypes?.map((e) => e) || [];
    message.grantTypes = object.grantTypes?.map((e) => e) || [];
    message.appType = object.appType ?? 0;
    message.clientId = object.clientId ?? "";
    message.authMethodType = object.authMethodType ?? 0;
    message.postLogoutRedirectUris = object.postLogoutRedirectUris?.map((e) => e) || [];
    message.version = object.version ?? 0;
    message.noneCompliant = object.noneCompliant ?? false;
    message.complianceProblems = object.complianceProblems?.map((e) => LocalizedMessage.fromPartial(e)) || [];
    message.devMode = object.devMode ?? false;
    message.accessTokenType = object.accessTokenType ?? 0;
    message.accessTokenRoleAssertion = object.accessTokenRoleAssertion ?? false;
    message.idTokenRoleAssertion = object.idTokenRoleAssertion ?? false;
    message.idTokenUserinfoAssertion = object.idTokenUserinfoAssertion ?? false;
    message.clockSkew = (object.clockSkew !== undefined && object.clockSkew !== null)
      ? Duration.fromPartial(object.clockSkew)
      : undefined;
    message.additionalOrigins = object.additionalOrigins?.map((e) => e) || [];
    message.allowedOrigins = object.allowedOrigins?.map((e) => e) || [];
    message.skipNativeAppSuccessPage = object.skipNativeAppSuccessPage ?? false;
    return message;
  },
};

function createBaseSAMLConfig(): SAMLConfig {
  return { metadataXml: undefined, metadataUrl: undefined };
}

export const SAMLConfig = {
  encode(message: SAMLConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadataXml !== undefined) {
      writer.uint32(10).bytes(message.metadataXml);
    }
    if (message.metadataUrl !== undefined) {
      writer.uint32(18).string(message.metadataUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SAMLConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSAMLConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.metadataXml = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadataUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SAMLConfig>): SAMLConfig {
    return SAMLConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SAMLConfig>): SAMLConfig {
    const message = createBaseSAMLConfig();
    message.metadataXml = object.metadataXml ?? undefined;
    message.metadataUrl = object.metadataUrl ?? undefined;
    return message;
  },
};

function createBaseAPIConfig(): APIConfig {
  return { clientId: "", authMethodType: 0 };
}

export const APIConfig = {
  encode(message: APIConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.authMethodType !== 0) {
      writer.uint32(24).int32(message.authMethodType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clientId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.authMethodType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<APIConfig>): APIConfig {
    return APIConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<APIConfig>): APIConfig {
    const message = createBaseAPIConfig();
    message.clientId = object.clientId ?? "";
    message.authMethodType = object.authMethodType ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
