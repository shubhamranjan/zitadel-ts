/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { ResourceOwnerType } from "./settings";

export const protobufPackage = "zitadel.settings.v2beta";

export enum SecondFactorType {
  SECOND_FACTOR_TYPE_UNSPECIFIED = 0,
  /** SECOND_FACTOR_TYPE_OTP - This is the type for TOTP */
  SECOND_FACTOR_TYPE_OTP = 1,
  SECOND_FACTOR_TYPE_U2F = 2,
  SECOND_FACTOR_TYPE_OTP_EMAIL = 3,
  SECOND_FACTOR_TYPE_OTP_SMS = 4,
  UNRECOGNIZED = -1,
}

export enum MultiFactorType {
  MULTI_FACTOR_TYPE_UNSPECIFIED = 0,
  MULTI_FACTOR_TYPE_U2F_WITH_VERIFICATION = 1,
  UNRECOGNIZED = -1,
}

export enum PasskeysType {
  PASSKEYS_TYPE_NOT_ALLOWED = 0,
  PASSKEYS_TYPE_ALLOWED = 1,
  UNRECOGNIZED = -1,
}

export enum IdentityProviderType {
  IDENTITY_PROVIDER_TYPE_UNSPECIFIED = 0,
  IDENTITY_PROVIDER_TYPE_OIDC = 1,
  IDENTITY_PROVIDER_TYPE_JWT = 2,
  IDENTITY_PROVIDER_TYPE_LDAP = 3,
  IDENTITY_PROVIDER_TYPE_OAUTH = 4,
  IDENTITY_PROVIDER_TYPE_AZURE_AD = 5,
  IDENTITY_PROVIDER_TYPE_GITHUB = 6,
  IDENTITY_PROVIDER_TYPE_GITHUB_ES = 7,
  IDENTITY_PROVIDER_TYPE_GITLAB = 8,
  IDENTITY_PROVIDER_TYPE_GITLAB_SELF_HOSTED = 9,
  IDENTITY_PROVIDER_TYPE_GOOGLE = 10,
  UNRECOGNIZED = -1,
}

export interface LoginSettings {
  allowUsernamePassword: boolean;
  allowRegister: boolean;
  allowExternalIdp: boolean;
  forceMfa: boolean;
  passkeysType: PasskeysType;
  hidePasswordReset: boolean;
  ignoreUnknownUsernames: boolean;
  defaultRedirectUri: string;
  passwordCheckLifetime: Duration | undefined;
  externalLoginCheckLifetime: Duration | undefined;
  mfaInitSkipLifetime: Duration | undefined;
  secondFactorCheckLifetime: Duration | undefined;
  multiFactorCheckLifetime: Duration | undefined;
  secondFactors: SecondFactorType[];
  multiFactors: MultiFactorType[];
  /** If set to true, the suffix (@domain.com) of an unknown username input on the login screen will be matched against the org domains and will redirect to the registration of that organization on success. */
  allowDomainDiscovery: boolean;
  disableLoginWithEmail: boolean;
  disableLoginWithPhone: boolean;
  /** resource_owner_type returns if the settings is managed on the organization or on the instance */
  resourceOwnerType: ResourceOwnerType;
  forceMfaLocalOnly: boolean;
}

export interface IdentityProvider {
  id: string;
  name: string;
  type: IdentityProviderType;
}

function createBaseLoginSettings(): LoginSettings {
  return {
    allowUsernamePassword: false,
    allowRegister: false,
    allowExternalIdp: false,
    forceMfa: false,
    passkeysType: 0,
    hidePasswordReset: false,
    ignoreUnknownUsernames: false,
    defaultRedirectUri: "",
    passwordCheckLifetime: undefined,
    externalLoginCheckLifetime: undefined,
    mfaInitSkipLifetime: undefined,
    secondFactorCheckLifetime: undefined,
    multiFactorCheckLifetime: undefined,
    secondFactors: [],
    multiFactors: [],
    allowDomainDiscovery: false,
    disableLoginWithEmail: false,
    disableLoginWithPhone: false,
    resourceOwnerType: 0,
    forceMfaLocalOnly: false,
  };
}

export const LoginSettings = {
  encode(message: LoginSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allowUsernamePassword === true) {
      writer.uint32(8).bool(message.allowUsernamePassword);
    }
    if (message.allowRegister === true) {
      writer.uint32(16).bool(message.allowRegister);
    }
    if (message.allowExternalIdp === true) {
      writer.uint32(24).bool(message.allowExternalIdp);
    }
    if (message.forceMfa === true) {
      writer.uint32(32).bool(message.forceMfa);
    }
    if (message.passkeysType !== 0) {
      writer.uint32(40).int32(message.passkeysType);
    }
    if (message.hidePasswordReset === true) {
      writer.uint32(48).bool(message.hidePasswordReset);
    }
    if (message.ignoreUnknownUsernames === true) {
      writer.uint32(56).bool(message.ignoreUnknownUsernames);
    }
    if (message.defaultRedirectUri !== "") {
      writer.uint32(66).string(message.defaultRedirectUri);
    }
    if (message.passwordCheckLifetime !== undefined) {
      Duration.encode(message.passwordCheckLifetime, writer.uint32(74).fork()).ldelim();
    }
    if (message.externalLoginCheckLifetime !== undefined) {
      Duration.encode(message.externalLoginCheckLifetime, writer.uint32(82).fork()).ldelim();
    }
    if (message.mfaInitSkipLifetime !== undefined) {
      Duration.encode(message.mfaInitSkipLifetime, writer.uint32(90).fork()).ldelim();
    }
    if (message.secondFactorCheckLifetime !== undefined) {
      Duration.encode(message.secondFactorCheckLifetime, writer.uint32(98).fork()).ldelim();
    }
    if (message.multiFactorCheckLifetime !== undefined) {
      Duration.encode(message.multiFactorCheckLifetime, writer.uint32(106).fork()).ldelim();
    }
    writer.uint32(114).fork();
    for (const v of message.secondFactors) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(122).fork();
    for (const v of message.multiFactors) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.allowDomainDiscovery === true) {
      writer.uint32(128).bool(message.allowDomainDiscovery);
    }
    if (message.disableLoginWithEmail === true) {
      writer.uint32(136).bool(message.disableLoginWithEmail);
    }
    if (message.disableLoginWithPhone === true) {
      writer.uint32(144).bool(message.disableLoginWithPhone);
    }
    if (message.resourceOwnerType !== 0) {
      writer.uint32(152).int32(message.resourceOwnerType);
    }
    if (message.forceMfaLocalOnly === true) {
      writer.uint32(176).bool(message.forceMfaLocalOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.allowUsernamePassword = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.allowRegister = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.allowExternalIdp = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.forceMfa = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.passkeysType = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.hidePasswordReset = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.ignoreUnknownUsernames = reader.bool();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.defaultRedirectUri = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.passwordCheckLifetime = Duration.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.externalLoginCheckLifetime = Duration.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.mfaInitSkipLifetime = Duration.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.secondFactorCheckLifetime = Duration.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.multiFactorCheckLifetime = Duration.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag === 112) {
            message.secondFactors.push(reader.int32() as any);

            continue;
          }

          if (tag === 114) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.secondFactors.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 15:
          if (tag === 120) {
            message.multiFactors.push(reader.int32() as any);

            continue;
          }

          if (tag === 122) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.multiFactors.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.allowDomainDiscovery = reader.bool();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.disableLoginWithEmail = reader.bool();
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.disableLoginWithPhone = reader.bool();
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.resourceOwnerType = reader.int32() as any;
          continue;
        case 22:
          if (tag !== 176) {
            break;
          }

          message.forceMfaLocalOnly = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<LoginSettings>): LoginSettings {
    return LoginSettings.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LoginSettings>): LoginSettings {
    const message = createBaseLoginSettings();
    message.allowUsernamePassword = object.allowUsernamePassword ?? false;
    message.allowRegister = object.allowRegister ?? false;
    message.allowExternalIdp = object.allowExternalIdp ?? false;
    message.forceMfa = object.forceMfa ?? false;
    message.passkeysType = object.passkeysType ?? 0;
    message.hidePasswordReset = object.hidePasswordReset ?? false;
    message.ignoreUnknownUsernames = object.ignoreUnknownUsernames ?? false;
    message.defaultRedirectUri = object.defaultRedirectUri ?? "";
    message.passwordCheckLifetime =
      (object.passwordCheckLifetime !== undefined && object.passwordCheckLifetime !== null)
        ? Duration.fromPartial(object.passwordCheckLifetime)
        : undefined;
    message.externalLoginCheckLifetime =
      (object.externalLoginCheckLifetime !== undefined && object.externalLoginCheckLifetime !== null)
        ? Duration.fromPartial(object.externalLoginCheckLifetime)
        : undefined;
    message.mfaInitSkipLifetime = (object.mfaInitSkipLifetime !== undefined && object.mfaInitSkipLifetime !== null)
      ? Duration.fromPartial(object.mfaInitSkipLifetime)
      : undefined;
    message.secondFactorCheckLifetime =
      (object.secondFactorCheckLifetime !== undefined && object.secondFactorCheckLifetime !== null)
        ? Duration.fromPartial(object.secondFactorCheckLifetime)
        : undefined;
    message.multiFactorCheckLifetime =
      (object.multiFactorCheckLifetime !== undefined && object.multiFactorCheckLifetime !== null)
        ? Duration.fromPartial(object.multiFactorCheckLifetime)
        : undefined;
    message.secondFactors = object.secondFactors?.map((e) => e) || [];
    message.multiFactors = object.multiFactors?.map((e) => e) || [];
    message.allowDomainDiscovery = object.allowDomainDiscovery ?? false;
    message.disableLoginWithEmail = object.disableLoginWithEmail ?? false;
    message.disableLoginWithPhone = object.disableLoginWithPhone ?? false;
    message.resourceOwnerType = object.resourceOwnerType ?? 0;
    message.forceMfaLocalOnly = object.forceMfaLocalOnly ?? false;
    return message;
  },
};

function createBaseIdentityProvider(): IdentityProvider {
  return { id: "", name: "", type: 0 };
}

export const IdentityProvider = {
  encode(message: IdentityProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IdentityProvider {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentityProvider();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<IdentityProvider>): IdentityProvider {
    return IdentityProvider.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<IdentityProvider>): IdentityProvider {
    const message = createBaseIdentityProvider();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.type = object.type ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
