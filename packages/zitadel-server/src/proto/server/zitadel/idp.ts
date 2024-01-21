/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Duration } from "../google/protobuf/duration";
import { ObjectDetails, TextQueryMethod } from "./object";

export const protobufPackage = "zitadel.idp.v1";

export enum IDPState {
  IDP_STATE_UNSPECIFIED = 0,
  IDP_STATE_ACTIVE = 1,
  IDP_STATE_INACTIVE = 2,
  UNRECOGNIZED = -1,
}

export enum IDPStylingType {
  STYLING_TYPE_UNSPECIFIED = 0,
  STYLING_TYPE_GOOGLE = 1,
  UNRECOGNIZED = -1,
}

/** authorization framework of the identity provider */
export enum IDPType {
  IDP_TYPE_UNSPECIFIED = 0,
  IDP_TYPE_OIDC = 1,
  IDP_TYPE_JWT = 3,
  UNRECOGNIZED = -1,
}

/** the owner of the identity provider. */
export enum IDPOwnerType {
  IDP_OWNER_TYPE_UNSPECIFIED = 0,
  /** IDP_OWNER_TYPE_SYSTEM - system is managed by the ZITADEL administrators */
  IDP_OWNER_TYPE_SYSTEM = 1,
  /** IDP_OWNER_TYPE_ORG - org is managed by de organization administrators */
  IDP_OWNER_TYPE_ORG = 2,
  UNRECOGNIZED = -1,
}

export enum OIDCMappingField {
  OIDC_MAPPING_FIELD_UNSPECIFIED = 0,
  OIDC_MAPPING_FIELD_PREFERRED_USERNAME = 1,
  OIDC_MAPPING_FIELD_EMAIL = 2,
  UNRECOGNIZED = -1,
}

export enum IDPFieldName {
  IDP_FIELD_NAME_UNSPECIFIED = 0,
  IDP_FIELD_NAME_NAME = 1,
  UNRECOGNIZED = -1,
}

export enum ProviderType {
  PROVIDER_TYPE_UNSPECIFIED = 0,
  PROVIDER_TYPE_OIDC = 1,
  PROVIDER_TYPE_JWT = 2,
  PROVIDER_TYPE_LDAP = 3,
  PROVIDER_TYPE_OAUTH = 4,
  PROVIDER_TYPE_AZURE_AD = 5,
  PROVIDER_TYPE_GITHUB = 6,
  PROVIDER_TYPE_GITHUB_ES = 7,
  PROVIDER_TYPE_GITLAB = 8,
  PROVIDER_TYPE_GITLAB_SELF_HOSTED = 9,
  PROVIDER_TYPE_GOOGLE = 10,
  PROVIDER_TYPE_APPLE = 11,
  PROVIDER_TYPE_SAML = 12,
  UNRECOGNIZED = -1,
}

export enum SAMLBinding {
  SAML_BINDING_UNSPECIFIED = 0,
  SAML_BINDING_POST = 1,
  SAML_BINDING_REDIRECT = 2,
  SAML_BINDING_ARTIFACT = 3,
  UNRECOGNIZED = -1,
}

export enum AzureADTenantType {
  AZURE_AD_TENANT_TYPE_COMMON = 0,
  AZURE_AD_TENANT_TYPE_ORGANISATIONS = 1,
  AZURE_AD_TENANT_TYPE_CONSUMERS = 2,
  UNRECOGNIZED = -1,
}

export interface IDP {
  id: string;
  details: ObjectDetails | undefined;
  state: IDPState;
  name: string;
  stylingType: IDPStylingType;
  owner: IDPOwnerType;
  oidcConfig?: OIDCConfig | undefined;
  jwtConfig?: JWTConfig | undefined;
  autoRegister: boolean;
}

export interface IDPUserLink {
  userId: string;
  idpId: string;
  idpName: string;
  providedUserId: string;
  providedUserName: string;
  idpType: IDPType;
}

export interface IDPLoginPolicyLink {
  idpId: string;
  idpName: string;
  idpType: IDPType;
}

export interface OIDCConfig {
  clientId: string;
  issuer: string;
  scopes: string[];
  displayNameMapping: OIDCMappingField;
  usernameMapping: OIDCMappingField;
}

export interface JWTConfig {
  jwtEndpoint: string;
  issuer: string;
  keysEndpoint: string;
  headerName: string;
}

export interface IDPIDQuery {
  id: string;
}

export interface IDPNameQuery {
  name: string;
  method: TextQueryMethod;
}

export interface IDPOwnerTypeQuery {
  ownerType: IDPOwnerType;
}

export interface Provider {
  id: string;
  details: ObjectDetails | undefined;
  state: IDPState;
  name: string;
  owner: IDPOwnerType;
  type: ProviderType;
  config: ProviderConfig | undefined;
}

export interface ProviderConfig {
  options: Options | undefined;
  ldap?: LDAPConfig | undefined;
  google?: GoogleConfig | undefined;
  oauth?: OAuthConfig | undefined;
  oidc?: GenericOIDCConfig | undefined;
  jwt?: JWTConfig | undefined;
  github?: GitHubConfig | undefined;
  githubEs?: GitHubEnterpriseServerConfig | undefined;
  gitlab?: GitLabConfig | undefined;
  gitlabSelfHosted?: GitLabSelfHostedConfig | undefined;
  azureAd?: AzureADConfig | undefined;
  apple?: AppleConfig | undefined;
  saml?: SAMLConfig | undefined;
}

export interface OAuthConfig {
  clientId: string;
  authorizationEndpoint: string;
  tokenEndpoint: string;
  userEndpoint: string;
  scopes: string[];
  idAttribute: string;
}

export interface GenericOIDCConfig {
  issuer: string;
  clientId: string;
  scopes: string[];
  isIdTokenMapping: boolean;
}

export interface GitHubConfig {
  clientId: string;
  scopes: string[];
}

export interface GitHubEnterpriseServerConfig {
  clientId: string;
  authorizationEndpoint: string;
  tokenEndpoint: string;
  userEndpoint: string;
  scopes: string[];
}

export interface GoogleConfig {
  clientId: string;
  scopes: string[];
}

export interface GitLabConfig {
  clientId: string;
  scopes: string[];
}

export interface GitLabSelfHostedConfig {
  issuer: string;
  clientId: string;
  scopes: string[];
}

export interface LDAPConfig {
  servers: string[];
  startTls: boolean;
  baseDn: string;
  bindDn: string;
  userBase: string;
  userObjectClasses: string[];
  userFilters: string[];
  timeout: Duration | undefined;
  attributes: LDAPAttributes | undefined;
}

export interface SAMLConfig {
  metadataXml: Uint8Array;
  binding: SAMLBinding;
  withSignedRequest: boolean;
}

export interface AzureADConfig {
  clientId: string;
  tenant: AzureADTenant | undefined;
  emailVerified: boolean;
  scopes: string[];
}

export interface Options {
  isLinkingAllowed: boolean;
  isCreationAllowed: boolean;
  isAutoCreation: boolean;
  isAutoUpdate: boolean;
}

export interface LDAPAttributes {
  idAttribute: string;
  firstNameAttribute: string;
  lastNameAttribute: string;
  displayNameAttribute: string;
  nickNameAttribute: string;
  preferredUsernameAttribute: string;
  emailAttribute: string;
  emailVerifiedAttribute: string;
  phoneAttribute: string;
  phoneVerifiedAttribute: string;
  preferredLanguageAttribute: string;
  avatarUrlAttribute: string;
  profileAttribute: string;
}

export interface AzureADTenant {
  tenantType?: AzureADTenantType | undefined;
  tenantId?: string | undefined;
}

export interface AppleConfig {
  clientId: string;
  teamId: string;
  keyId: string;
  scopes: string[];
}

function createBaseIDP(): IDP {
  return {
    id: "",
    details: undefined,
    state: 0,
    name: "",
    stylingType: 0,
    owner: 0,
    oidcConfig: undefined,
    jwtConfig: undefined,
    autoRegister: false,
  };
}

export const IDP = {
  encode(message: IDP, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.stylingType !== 0) {
      writer.uint32(40).int32(message.stylingType);
    }
    if (message.owner !== 0) {
      writer.uint32(48).int32(message.owner);
    }
    if (message.oidcConfig !== undefined) {
      OIDCConfig.encode(message.oidcConfig, writer.uint32(58).fork()).ldelim();
    }
    if (message.jwtConfig !== undefined) {
      JWTConfig.encode(message.jwtConfig, writer.uint32(74).fork()).ldelim();
    }
    if (message.autoRegister === true) {
      writer.uint32(64).bool(message.autoRegister);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IDP {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDP();
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
          if (tag !== 40) {
            break;
          }

          message.stylingType = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.owner = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.oidcConfig = OIDCConfig.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.jwtConfig = JWTConfig.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.autoRegister = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<IDP>): IDP {
    return IDP.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<IDP>): IDP {
    const message = createBaseIDP();
    message.id = object.id ?? "";
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.state = object.state ?? 0;
    message.name = object.name ?? "";
    message.stylingType = object.stylingType ?? 0;
    message.owner = object.owner ?? 0;
    message.oidcConfig = (object.oidcConfig !== undefined && object.oidcConfig !== null)
      ? OIDCConfig.fromPartial(object.oidcConfig)
      : undefined;
    message.jwtConfig = (object.jwtConfig !== undefined && object.jwtConfig !== null)
      ? JWTConfig.fromPartial(object.jwtConfig)
      : undefined;
    message.autoRegister = object.autoRegister ?? false;
    return message;
  },
};

function createBaseIDPUserLink(): IDPUserLink {
  return { userId: "", idpId: "", idpName: "", providedUserId: "", providedUserName: "", idpType: 0 };
}

export const IDPUserLink = {
  encode(message: IDPUserLink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.idpId !== "") {
      writer.uint32(18).string(message.idpId);
    }
    if (message.idpName !== "") {
      writer.uint32(26).string(message.idpName);
    }
    if (message.providedUserId !== "") {
      writer.uint32(34).string(message.providedUserId);
    }
    if (message.providedUserName !== "") {
      writer.uint32(42).string(message.providedUserName);
    }
    if (message.idpType !== 0) {
      writer.uint32(48).int32(message.idpType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IDPUserLink {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDPUserLink();
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

          message.idpId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.idpName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.providedUserId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.providedUserName = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.idpType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<IDPUserLink>): IDPUserLink {
    return IDPUserLink.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<IDPUserLink>): IDPUserLink {
    const message = createBaseIDPUserLink();
    message.userId = object.userId ?? "";
    message.idpId = object.idpId ?? "";
    message.idpName = object.idpName ?? "";
    message.providedUserId = object.providedUserId ?? "";
    message.providedUserName = object.providedUserName ?? "";
    message.idpType = object.idpType ?? 0;
    return message;
  },
};

function createBaseIDPLoginPolicyLink(): IDPLoginPolicyLink {
  return { idpId: "", idpName: "", idpType: 0 };
}

export const IDPLoginPolicyLink = {
  encode(message: IDPLoginPolicyLink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.idpId !== "") {
      writer.uint32(10).string(message.idpId);
    }
    if (message.idpName !== "") {
      writer.uint32(18).string(message.idpName);
    }
    if (message.idpType !== 0) {
      writer.uint32(24).int32(message.idpType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IDPLoginPolicyLink {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDPLoginPolicyLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.idpId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.idpName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.idpType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<IDPLoginPolicyLink>): IDPLoginPolicyLink {
    return IDPLoginPolicyLink.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<IDPLoginPolicyLink>): IDPLoginPolicyLink {
    const message = createBaseIDPLoginPolicyLink();
    message.idpId = object.idpId ?? "";
    message.idpName = object.idpName ?? "";
    message.idpType = object.idpType ?? 0;
    return message;
  },
};

function createBaseOIDCConfig(): OIDCConfig {
  return { clientId: "", issuer: "", scopes: [], displayNameMapping: 0, usernameMapping: 0 };
}

export const OIDCConfig = {
  encode(message: OIDCConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    for (const v of message.scopes) {
      writer.uint32(26).string(v!);
    }
    if (message.displayNameMapping !== 0) {
      writer.uint32(32).int32(message.displayNameMapping);
    }
    if (message.usernameMapping !== 0) {
      writer.uint32(40).int32(message.usernameMapping);
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

          message.clientId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.issuer = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.scopes.push(reader.string());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.displayNameMapping = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.usernameMapping = reader.int32() as any;
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
    message.clientId = object.clientId ?? "";
    message.issuer = object.issuer ?? "";
    message.scopes = object.scopes?.map((e) => e) || [];
    message.displayNameMapping = object.displayNameMapping ?? 0;
    message.usernameMapping = object.usernameMapping ?? 0;
    return message;
  },
};

function createBaseJWTConfig(): JWTConfig {
  return { jwtEndpoint: "", issuer: "", keysEndpoint: "", headerName: "" };
}

export const JWTConfig = {
  encode(message: JWTConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jwtEndpoint !== "") {
      writer.uint32(10).string(message.jwtEndpoint);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    if (message.keysEndpoint !== "") {
      writer.uint32(26).string(message.keysEndpoint);
    }
    if (message.headerName !== "") {
      writer.uint32(34).string(message.headerName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JWTConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJWTConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jwtEndpoint = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.issuer = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.keysEndpoint = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.headerName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<JWTConfig>): JWTConfig {
    return JWTConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<JWTConfig>): JWTConfig {
    const message = createBaseJWTConfig();
    message.jwtEndpoint = object.jwtEndpoint ?? "";
    message.issuer = object.issuer ?? "";
    message.keysEndpoint = object.keysEndpoint ?? "";
    message.headerName = object.headerName ?? "";
    return message;
  },
};

function createBaseIDPIDQuery(): IDPIDQuery {
  return { id: "" };
}

export const IDPIDQuery = {
  encode(message: IDPIDQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IDPIDQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDPIDQuery();
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

  create(base?: DeepPartial<IDPIDQuery>): IDPIDQuery {
    return IDPIDQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<IDPIDQuery>): IDPIDQuery {
    const message = createBaseIDPIDQuery();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseIDPNameQuery(): IDPNameQuery {
  return { name: "", method: 0 };
}

export const IDPNameQuery = {
  encode(message: IDPNameQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IDPNameQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDPNameQuery();
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

  create(base?: DeepPartial<IDPNameQuery>): IDPNameQuery {
    return IDPNameQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<IDPNameQuery>): IDPNameQuery {
    const message = createBaseIDPNameQuery();
    message.name = object.name ?? "";
    message.method = object.method ?? 0;
    return message;
  },
};

function createBaseIDPOwnerTypeQuery(): IDPOwnerTypeQuery {
  return { ownerType: 0 };
}

export const IDPOwnerTypeQuery = {
  encode(message: IDPOwnerTypeQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownerType !== 0) {
      writer.uint32(8).int32(message.ownerType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IDPOwnerTypeQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDPOwnerTypeQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.ownerType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<IDPOwnerTypeQuery>): IDPOwnerTypeQuery {
    return IDPOwnerTypeQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<IDPOwnerTypeQuery>): IDPOwnerTypeQuery {
    const message = createBaseIDPOwnerTypeQuery();
    message.ownerType = object.ownerType ?? 0;
    return message;
  },
};

function createBaseProvider(): Provider {
  return { id: "", details: undefined, state: 0, name: "", owner: 0, type: 0, config: undefined };
}

export const Provider = {
  encode(message: Provider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.owner !== 0) {
      writer.uint32(40).int32(message.owner);
    }
    if (message.type !== 0) {
      writer.uint32(48).int32(message.type);
    }
    if (message.config !== undefined) {
      ProviderConfig.encode(message.config, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Provider {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvider();
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
          if (tag !== 40) {
            break;
          }

          message.owner = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.config = ProviderConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Provider>): Provider {
    return Provider.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Provider>): Provider {
    const message = createBaseProvider();
    message.id = object.id ?? "";
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.state = object.state ?? 0;
    message.name = object.name ?? "";
    message.owner = object.owner ?? 0;
    message.type = object.type ?? 0;
    message.config = (object.config !== undefined && object.config !== null)
      ? ProviderConfig.fromPartial(object.config)
      : undefined;
    return message;
  },
};

function createBaseProviderConfig(): ProviderConfig {
  return {
    options: undefined,
    ldap: undefined,
    google: undefined,
    oauth: undefined,
    oidc: undefined,
    jwt: undefined,
    github: undefined,
    githubEs: undefined,
    gitlab: undefined,
    gitlabSelfHosted: undefined,
    azureAd: undefined,
    apple: undefined,
    saml: undefined,
  };
}

export const ProviderConfig = {
  encode(message: ProviderConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.options !== undefined) {
      Options.encode(message.options, writer.uint32(10).fork()).ldelim();
    }
    if (message.ldap !== undefined) {
      LDAPConfig.encode(message.ldap, writer.uint32(18).fork()).ldelim();
    }
    if (message.google !== undefined) {
      GoogleConfig.encode(message.google, writer.uint32(26).fork()).ldelim();
    }
    if (message.oauth !== undefined) {
      OAuthConfig.encode(message.oauth, writer.uint32(34).fork()).ldelim();
    }
    if (message.oidc !== undefined) {
      GenericOIDCConfig.encode(message.oidc, writer.uint32(42).fork()).ldelim();
    }
    if (message.jwt !== undefined) {
      JWTConfig.encode(message.jwt, writer.uint32(50).fork()).ldelim();
    }
    if (message.github !== undefined) {
      GitHubConfig.encode(message.github, writer.uint32(58).fork()).ldelim();
    }
    if (message.githubEs !== undefined) {
      GitHubEnterpriseServerConfig.encode(message.githubEs, writer.uint32(66).fork()).ldelim();
    }
    if (message.gitlab !== undefined) {
      GitLabConfig.encode(message.gitlab, writer.uint32(74).fork()).ldelim();
    }
    if (message.gitlabSelfHosted !== undefined) {
      GitLabSelfHostedConfig.encode(message.gitlabSelfHosted, writer.uint32(82).fork()).ldelim();
    }
    if (message.azureAd !== undefined) {
      AzureADConfig.encode(message.azureAd, writer.uint32(90).fork()).ldelim();
    }
    if (message.apple !== undefined) {
      AppleConfig.encode(message.apple, writer.uint32(98).fork()).ldelim();
    }
    if (message.saml !== undefined) {
      SAMLConfig.encode(message.saml, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.options = Options.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ldap = LDAPConfig.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.google = GoogleConfig.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.oauth = OAuthConfig.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.oidc = GenericOIDCConfig.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.jwt = JWTConfig.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.github = GitHubConfig.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.githubEs = GitHubEnterpriseServerConfig.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.gitlab = GitLabConfig.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.gitlabSelfHosted = GitLabSelfHostedConfig.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.azureAd = AzureADConfig.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.apple = AppleConfig.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.saml = SAMLConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ProviderConfig>): ProviderConfig {
    return ProviderConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ProviderConfig>): ProviderConfig {
    const message = createBaseProviderConfig();
    message.options = (object.options !== undefined && object.options !== null)
      ? Options.fromPartial(object.options)
      : undefined;
    message.ldap = (object.ldap !== undefined && object.ldap !== null)
      ? LDAPConfig.fromPartial(object.ldap)
      : undefined;
    message.google = (object.google !== undefined && object.google !== null)
      ? GoogleConfig.fromPartial(object.google)
      : undefined;
    message.oauth = (object.oauth !== undefined && object.oauth !== null)
      ? OAuthConfig.fromPartial(object.oauth)
      : undefined;
    message.oidc = (object.oidc !== undefined && object.oidc !== null)
      ? GenericOIDCConfig.fromPartial(object.oidc)
      : undefined;
    message.jwt = (object.jwt !== undefined && object.jwt !== null) ? JWTConfig.fromPartial(object.jwt) : undefined;
    message.github = (object.github !== undefined && object.github !== null)
      ? GitHubConfig.fromPartial(object.github)
      : undefined;
    message.githubEs = (object.githubEs !== undefined && object.githubEs !== null)
      ? GitHubEnterpriseServerConfig.fromPartial(object.githubEs)
      : undefined;
    message.gitlab = (object.gitlab !== undefined && object.gitlab !== null)
      ? GitLabConfig.fromPartial(object.gitlab)
      : undefined;
    message.gitlabSelfHosted = (object.gitlabSelfHosted !== undefined && object.gitlabSelfHosted !== null)
      ? GitLabSelfHostedConfig.fromPartial(object.gitlabSelfHosted)
      : undefined;
    message.azureAd = (object.azureAd !== undefined && object.azureAd !== null)
      ? AzureADConfig.fromPartial(object.azureAd)
      : undefined;
    message.apple = (object.apple !== undefined && object.apple !== null)
      ? AppleConfig.fromPartial(object.apple)
      : undefined;
    message.saml = (object.saml !== undefined && object.saml !== null)
      ? SAMLConfig.fromPartial(object.saml)
      : undefined;
    return message;
  },
};

function createBaseOAuthConfig(): OAuthConfig {
  return { clientId: "", authorizationEndpoint: "", tokenEndpoint: "", userEndpoint: "", scopes: [], idAttribute: "" };
}

export const OAuthConfig = {
  encode(message: OAuthConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.authorizationEndpoint !== "") {
      writer.uint32(18).string(message.authorizationEndpoint);
    }
    if (message.tokenEndpoint !== "") {
      writer.uint32(26).string(message.tokenEndpoint);
    }
    if (message.userEndpoint !== "") {
      writer.uint32(34).string(message.userEndpoint);
    }
    for (const v of message.scopes) {
      writer.uint32(42).string(v!);
    }
    if (message.idAttribute !== "") {
      writer.uint32(50).string(message.idAttribute);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OAuthConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOAuthConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clientId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.authorizationEndpoint = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tokenEndpoint = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.userEndpoint = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.scopes.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.idAttribute = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<OAuthConfig>): OAuthConfig {
    return OAuthConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OAuthConfig>): OAuthConfig {
    const message = createBaseOAuthConfig();
    message.clientId = object.clientId ?? "";
    message.authorizationEndpoint = object.authorizationEndpoint ?? "";
    message.tokenEndpoint = object.tokenEndpoint ?? "";
    message.userEndpoint = object.userEndpoint ?? "";
    message.scopes = object.scopes?.map((e) => e) || [];
    message.idAttribute = object.idAttribute ?? "";
    return message;
  },
};

function createBaseGenericOIDCConfig(): GenericOIDCConfig {
  return { issuer: "", clientId: "", scopes: [], isIdTokenMapping: false };
}

export const GenericOIDCConfig = {
  encode(message: GenericOIDCConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    for (const v of message.scopes) {
      writer.uint32(26).string(v!);
    }
    if (message.isIdTokenMapping === true) {
      writer.uint32(32).bool(message.isIdTokenMapping);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenericOIDCConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenericOIDCConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.issuer = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.clientId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.scopes.push(reader.string());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isIdTokenMapping = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GenericOIDCConfig>): GenericOIDCConfig {
    return GenericOIDCConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenericOIDCConfig>): GenericOIDCConfig {
    const message = createBaseGenericOIDCConfig();
    message.issuer = object.issuer ?? "";
    message.clientId = object.clientId ?? "";
    message.scopes = object.scopes?.map((e) => e) || [];
    message.isIdTokenMapping = object.isIdTokenMapping ?? false;
    return message;
  },
};

function createBaseGitHubConfig(): GitHubConfig {
  return { clientId: "", scopes: [] };
}

export const GitHubConfig = {
  encode(message: GitHubConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.scopes) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GitHubConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGitHubConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clientId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.scopes.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GitHubConfig>): GitHubConfig {
    return GitHubConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GitHubConfig>): GitHubConfig {
    const message = createBaseGitHubConfig();
    message.clientId = object.clientId ?? "";
    message.scopes = object.scopes?.map((e) => e) || [];
    return message;
  },
};

function createBaseGitHubEnterpriseServerConfig(): GitHubEnterpriseServerConfig {
  return { clientId: "", authorizationEndpoint: "", tokenEndpoint: "", userEndpoint: "", scopes: [] };
}

export const GitHubEnterpriseServerConfig = {
  encode(message: GitHubEnterpriseServerConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.authorizationEndpoint !== "") {
      writer.uint32(18).string(message.authorizationEndpoint);
    }
    if (message.tokenEndpoint !== "") {
      writer.uint32(26).string(message.tokenEndpoint);
    }
    if (message.userEndpoint !== "") {
      writer.uint32(34).string(message.userEndpoint);
    }
    for (const v of message.scopes) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GitHubEnterpriseServerConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGitHubEnterpriseServerConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clientId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.authorizationEndpoint = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tokenEndpoint = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.userEndpoint = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.scopes.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GitHubEnterpriseServerConfig>): GitHubEnterpriseServerConfig {
    return GitHubEnterpriseServerConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GitHubEnterpriseServerConfig>): GitHubEnterpriseServerConfig {
    const message = createBaseGitHubEnterpriseServerConfig();
    message.clientId = object.clientId ?? "";
    message.authorizationEndpoint = object.authorizationEndpoint ?? "";
    message.tokenEndpoint = object.tokenEndpoint ?? "";
    message.userEndpoint = object.userEndpoint ?? "";
    message.scopes = object.scopes?.map((e) => e) || [];
    return message;
  },
};

function createBaseGoogleConfig(): GoogleConfig {
  return { clientId: "", scopes: [] };
}

export const GoogleConfig = {
  encode(message: GoogleConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.scopes) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GoogleConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGoogleConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clientId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.scopes.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GoogleConfig>): GoogleConfig {
    return GoogleConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GoogleConfig>): GoogleConfig {
    const message = createBaseGoogleConfig();
    message.clientId = object.clientId ?? "";
    message.scopes = object.scopes?.map((e) => e) || [];
    return message;
  },
};

function createBaseGitLabConfig(): GitLabConfig {
  return { clientId: "", scopes: [] };
}

export const GitLabConfig = {
  encode(message: GitLabConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.scopes) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GitLabConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGitLabConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clientId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.scopes.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GitLabConfig>): GitLabConfig {
    return GitLabConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GitLabConfig>): GitLabConfig {
    const message = createBaseGitLabConfig();
    message.clientId = object.clientId ?? "";
    message.scopes = object.scopes?.map((e) => e) || [];
    return message;
  },
};

function createBaseGitLabSelfHostedConfig(): GitLabSelfHostedConfig {
  return { issuer: "", clientId: "", scopes: [] };
}

export const GitLabSelfHostedConfig = {
  encode(message: GitLabSelfHostedConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    for (const v of message.scopes) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GitLabSelfHostedConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGitLabSelfHostedConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.issuer = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.clientId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.scopes.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GitLabSelfHostedConfig>): GitLabSelfHostedConfig {
    return GitLabSelfHostedConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GitLabSelfHostedConfig>): GitLabSelfHostedConfig {
    const message = createBaseGitLabSelfHostedConfig();
    message.issuer = object.issuer ?? "";
    message.clientId = object.clientId ?? "";
    message.scopes = object.scopes?.map((e) => e) || [];
    return message;
  },
};

function createBaseLDAPConfig(): LDAPConfig {
  return {
    servers: [],
    startTls: false,
    baseDn: "",
    bindDn: "",
    userBase: "",
    userObjectClasses: [],
    userFilters: [],
    timeout: undefined,
    attributes: undefined,
  };
}

export const LDAPConfig = {
  encode(message: LDAPConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.servers) {
      writer.uint32(10).string(v!);
    }
    if (message.startTls === true) {
      writer.uint32(16).bool(message.startTls);
    }
    if (message.baseDn !== "") {
      writer.uint32(26).string(message.baseDn);
    }
    if (message.bindDn !== "") {
      writer.uint32(34).string(message.bindDn);
    }
    if (message.userBase !== "") {
      writer.uint32(42).string(message.userBase);
    }
    for (const v of message.userObjectClasses) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.userFilters) {
      writer.uint32(58).string(v!);
    }
    if (message.timeout !== undefined) {
      Duration.encode(message.timeout, writer.uint32(66).fork()).ldelim();
    }
    if (message.attributes !== undefined) {
      LDAPAttributes.encode(message.attributes, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LDAPConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLDAPConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.servers.push(reader.string());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.startTls = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.baseDn = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bindDn = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.userBase = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.userObjectClasses.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.userFilters.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.timeout = Duration.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.attributes = LDAPAttributes.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<LDAPConfig>): LDAPConfig {
    return LDAPConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LDAPConfig>): LDAPConfig {
    const message = createBaseLDAPConfig();
    message.servers = object.servers?.map((e) => e) || [];
    message.startTls = object.startTls ?? false;
    message.baseDn = object.baseDn ?? "";
    message.bindDn = object.bindDn ?? "";
    message.userBase = object.userBase ?? "";
    message.userObjectClasses = object.userObjectClasses?.map((e) => e) || [];
    message.userFilters = object.userFilters?.map((e) => e) || [];
    message.timeout = (object.timeout !== undefined && object.timeout !== null)
      ? Duration.fromPartial(object.timeout)
      : undefined;
    message.attributes = (object.attributes !== undefined && object.attributes !== null)
      ? LDAPAttributes.fromPartial(object.attributes)
      : undefined;
    return message;
  },
};

function createBaseSAMLConfig(): SAMLConfig {
  return { metadataXml: new Uint8Array(0), binding: 0, withSignedRequest: false };
}

export const SAMLConfig = {
  encode(message: SAMLConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadataXml.length !== 0) {
      writer.uint32(10).bytes(message.metadataXml);
    }
    if (message.binding !== 0) {
      writer.uint32(16).int32(message.binding);
    }
    if (message.withSignedRequest === true) {
      writer.uint32(24).bool(message.withSignedRequest);
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
          if (tag !== 16) {
            break;
          }

          message.binding = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.withSignedRequest = reader.bool();
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
    message.metadataXml = object.metadataXml ?? new Uint8Array(0);
    message.binding = object.binding ?? 0;
    message.withSignedRequest = object.withSignedRequest ?? false;
    return message;
  },
};

function createBaseAzureADConfig(): AzureADConfig {
  return { clientId: "", tenant: undefined, emailVerified: false, scopes: [] };
}

export const AzureADConfig = {
  encode(message: AzureADConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.tenant !== undefined) {
      AzureADTenant.encode(message.tenant, writer.uint32(18).fork()).ldelim();
    }
    if (message.emailVerified === true) {
      writer.uint32(24).bool(message.emailVerified);
    }
    for (const v of message.scopes) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AzureADConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAzureADConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clientId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tenant = AzureADTenant.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.emailVerified = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.scopes.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AzureADConfig>): AzureADConfig {
    return AzureADConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AzureADConfig>): AzureADConfig {
    const message = createBaseAzureADConfig();
    message.clientId = object.clientId ?? "";
    message.tenant = (object.tenant !== undefined && object.tenant !== null)
      ? AzureADTenant.fromPartial(object.tenant)
      : undefined;
    message.emailVerified = object.emailVerified ?? false;
    message.scopes = object.scopes?.map((e) => e) || [];
    return message;
  },
};

function createBaseOptions(): Options {
  return { isLinkingAllowed: false, isCreationAllowed: false, isAutoCreation: false, isAutoUpdate: false };
}

export const Options = {
  encode(message: Options, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isLinkingAllowed === true) {
      writer.uint32(8).bool(message.isLinkingAllowed);
    }
    if (message.isCreationAllowed === true) {
      writer.uint32(16).bool(message.isCreationAllowed);
    }
    if (message.isAutoCreation === true) {
      writer.uint32(24).bool(message.isAutoCreation);
    }
    if (message.isAutoUpdate === true) {
      writer.uint32(32).bool(message.isAutoUpdate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Options {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isLinkingAllowed = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isCreationAllowed = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isAutoCreation = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isAutoUpdate = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Options>): Options {
    return Options.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Options>): Options {
    const message = createBaseOptions();
    message.isLinkingAllowed = object.isLinkingAllowed ?? false;
    message.isCreationAllowed = object.isCreationAllowed ?? false;
    message.isAutoCreation = object.isAutoCreation ?? false;
    message.isAutoUpdate = object.isAutoUpdate ?? false;
    return message;
  },
};

function createBaseLDAPAttributes(): LDAPAttributes {
  return {
    idAttribute: "",
    firstNameAttribute: "",
    lastNameAttribute: "",
    displayNameAttribute: "",
    nickNameAttribute: "",
    preferredUsernameAttribute: "",
    emailAttribute: "",
    emailVerifiedAttribute: "",
    phoneAttribute: "",
    phoneVerifiedAttribute: "",
    preferredLanguageAttribute: "",
    avatarUrlAttribute: "",
    profileAttribute: "",
  };
}

export const LDAPAttributes = {
  encode(message: LDAPAttributes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.idAttribute !== "") {
      writer.uint32(10).string(message.idAttribute);
    }
    if (message.firstNameAttribute !== "") {
      writer.uint32(18).string(message.firstNameAttribute);
    }
    if (message.lastNameAttribute !== "") {
      writer.uint32(26).string(message.lastNameAttribute);
    }
    if (message.displayNameAttribute !== "") {
      writer.uint32(34).string(message.displayNameAttribute);
    }
    if (message.nickNameAttribute !== "") {
      writer.uint32(42).string(message.nickNameAttribute);
    }
    if (message.preferredUsernameAttribute !== "") {
      writer.uint32(50).string(message.preferredUsernameAttribute);
    }
    if (message.emailAttribute !== "") {
      writer.uint32(58).string(message.emailAttribute);
    }
    if (message.emailVerifiedAttribute !== "") {
      writer.uint32(66).string(message.emailVerifiedAttribute);
    }
    if (message.phoneAttribute !== "") {
      writer.uint32(74).string(message.phoneAttribute);
    }
    if (message.phoneVerifiedAttribute !== "") {
      writer.uint32(82).string(message.phoneVerifiedAttribute);
    }
    if (message.preferredLanguageAttribute !== "") {
      writer.uint32(90).string(message.preferredLanguageAttribute);
    }
    if (message.avatarUrlAttribute !== "") {
      writer.uint32(98).string(message.avatarUrlAttribute);
    }
    if (message.profileAttribute !== "") {
      writer.uint32(106).string(message.profileAttribute);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LDAPAttributes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLDAPAttributes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.idAttribute = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.firstNameAttribute = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lastNameAttribute = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.displayNameAttribute = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.nickNameAttribute = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.preferredUsernameAttribute = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.emailAttribute = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.emailVerifiedAttribute = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.phoneAttribute = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.phoneVerifiedAttribute = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.preferredLanguageAttribute = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.avatarUrlAttribute = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.profileAttribute = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<LDAPAttributes>): LDAPAttributes {
    return LDAPAttributes.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LDAPAttributes>): LDAPAttributes {
    const message = createBaseLDAPAttributes();
    message.idAttribute = object.idAttribute ?? "";
    message.firstNameAttribute = object.firstNameAttribute ?? "";
    message.lastNameAttribute = object.lastNameAttribute ?? "";
    message.displayNameAttribute = object.displayNameAttribute ?? "";
    message.nickNameAttribute = object.nickNameAttribute ?? "";
    message.preferredUsernameAttribute = object.preferredUsernameAttribute ?? "";
    message.emailAttribute = object.emailAttribute ?? "";
    message.emailVerifiedAttribute = object.emailVerifiedAttribute ?? "";
    message.phoneAttribute = object.phoneAttribute ?? "";
    message.phoneVerifiedAttribute = object.phoneVerifiedAttribute ?? "";
    message.preferredLanguageAttribute = object.preferredLanguageAttribute ?? "";
    message.avatarUrlAttribute = object.avatarUrlAttribute ?? "";
    message.profileAttribute = object.profileAttribute ?? "";
    return message;
  },
};

function createBaseAzureADTenant(): AzureADTenant {
  return { tenantType: undefined, tenantId: undefined };
}

export const AzureADTenant = {
  encode(message: AzureADTenant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantType !== undefined) {
      writer.uint32(8).int32(message.tenantType);
    }
    if (message.tenantId !== undefined) {
      writer.uint32(18).string(message.tenantId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AzureADTenant {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAzureADTenant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.tenantType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tenantId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AzureADTenant>): AzureADTenant {
    return AzureADTenant.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AzureADTenant>): AzureADTenant {
    const message = createBaseAzureADTenant();
    message.tenantType = object.tenantType ?? undefined;
    message.tenantId = object.tenantId ?? undefined;
    return message;
  },
};

function createBaseAppleConfig(): AppleConfig {
  return { clientId: "", teamId: "", keyId: "", scopes: [] };
}

export const AppleConfig = {
  encode(message: AppleConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.teamId !== "") {
      writer.uint32(18).string(message.teamId);
    }
    if (message.keyId !== "") {
      writer.uint32(26).string(message.keyId);
    }
    for (const v of message.scopes) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppleConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppleConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clientId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.teamId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.keyId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.scopes.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AppleConfig>): AppleConfig {
    return AppleConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AppleConfig>): AppleConfig {
    const message = createBaseAppleConfig();
    message.clientId = object.clientId ?? "";
    message.teamId = object.teamId ?? "";
    message.keyId = object.keyId ?? "";
    message.scopes = object.scopes?.map((e) => e) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
