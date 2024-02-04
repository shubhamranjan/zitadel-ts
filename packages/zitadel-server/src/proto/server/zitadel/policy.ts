/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../google/protobuf/duration";
import { IDPLoginPolicyLink } from "./idp";
import { ObjectDetails } from "./object";

export const protobufPackage = "zitadel.policy.v1";

export enum ThemeMode {
  THEME_MODE_UNSPECIFIED = 0,
  THEME_MODE_AUTO = 1,
  THEME_MODE_DARK = 2,
  THEME_MODE_LIGHT = 3,
  UNRECOGNIZED = -1,
}

export enum SecondFactorType {
  SECOND_FACTOR_TYPE_UNSPECIFIED = 0,
  /** SECOND_FACTOR_TYPE_OTP - SECOND_FACTOR_TYPE_OTP is the type for TOTP */
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

export enum PasswordlessType {
  PASSWORDLESS_TYPE_NOT_ALLOWED = 0,
  /** PASSWORDLESS_TYPE_ALLOWED - PLANNED: PASSWORDLESS_TYPE_WITH_CERT */
  PASSWORDLESS_TYPE_ALLOWED = 1,
  UNRECOGNIZED = -1,
}

/** deprecated: please use DomainPolicy instead */
export interface OrgIAMPolicy {
  details: ObjectDetails | undefined;
  userLoginMustBeDomain: boolean;
  isDefault: boolean;
}

export interface DomainPolicy {
  details: ObjectDetails | undefined;
  userLoginMustBeDomain: boolean;
  isDefault: boolean;
  validateOrgDomains: boolean;
  smtpSenderAddressMatchesInstanceDomain: boolean;
}

export interface LabelPolicy {
  details:
    | ObjectDetails
    | undefined;
  /** hex value for primary color */
  primaryColor: string;
  /** defines if the organization's admin changed the policy */
  isDefault: boolean;
  /** hides the org suffix on the login form if the scope \"urn:zitadel:iam:org:domain:primary:{domainname}\" is set */
  hideLoginNameSuffix: boolean;
  /** hex value for secondary color */
  warnColor: string;
  /** hex value for background color */
  backgroundColor: string;
  /** hex value for font color */
  fontColor: string;
  /** hex value for primary color dark theme */
  primaryColorDark: string;
  /** hex value for background color dark theme */
  backgroundColorDark: string;
  /** hex value for warning color dark theme */
  warnColorDark: string;
  /** hex value for font color dark theme */
  fontColorDark: string;
  disableWatermark: boolean;
  logoUrl: string;
  iconUrl: string;
  logoUrlDark: string;
  iconUrlDark: string;
  fontUrl: string;
  themeMode: ThemeMode;
}

export interface LoginPolicy {
  details: ObjectDetails | undefined;
  allowUsernamePassword: boolean;
  allowRegister: boolean;
  allowExternalIdp: boolean;
  forceMfa: boolean;
  passwordlessType: PasswordlessType;
  isDefault: boolean;
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
  idps: IDPLoginPolicyLink[];
  /** If set to true, the suffix (@domain.com) of an unknown username input on the login screen will be matched against the org domains and will redirect to the registration of that organization on success. */
  allowDomainDiscovery: boolean;
  disableLoginWithEmail: boolean;
  disableLoginWithPhone: boolean;
  forceMfaLocalOnly: boolean;
}

export interface PasswordComplexityPolicy {
  details: ObjectDetails | undefined;
  minLength: number;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasNumber: boolean;
  hasSymbol: boolean;
  isDefault: boolean;
}

export interface PasswordAgePolicy {
  details: ObjectDetails | undefined;
  maxAgeDays: number;
  expireWarnDays: number;
  isDefault: boolean;
}

export interface LockoutPolicy {
  details: ObjectDetails | undefined;
  maxPasswordAttempts: number;
  isDefault: boolean;
}

export interface PrivacyPolicy {
  details: ObjectDetails | undefined;
  tosLink: string;
  privacyLink: string;
  isDefault: boolean;
  helpLink: string;
  supportEmail: string;
}

export interface NotificationPolicy {
  details: ObjectDetails | undefined;
  isDefault: boolean;
  passwordChange: boolean;
}

function createBaseOrgIAMPolicy(): OrgIAMPolicy {
  return { details: undefined, userLoginMustBeDomain: false, isDefault: false };
}

export const OrgIAMPolicy = {
  encode(message: OrgIAMPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.userLoginMustBeDomain === true) {
      writer.uint32(16).bool(message.userLoginMustBeDomain);
    }
    if (message.isDefault === true) {
      writer.uint32(24).bool(message.isDefault);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrgIAMPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrgIAMPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.userLoginMustBeDomain = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isDefault = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<OrgIAMPolicy>): OrgIAMPolicy {
    return OrgIAMPolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OrgIAMPolicy>): OrgIAMPolicy {
    const message = createBaseOrgIAMPolicy();
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.userLoginMustBeDomain = object.userLoginMustBeDomain ?? false;
    message.isDefault = object.isDefault ?? false;
    return message;
  },
};

function createBaseDomainPolicy(): DomainPolicy {
  return {
    details: undefined,
    userLoginMustBeDomain: false,
    isDefault: false,
    validateOrgDomains: false,
    smtpSenderAddressMatchesInstanceDomain: false,
  };
}

export const DomainPolicy = {
  encode(message: DomainPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.userLoginMustBeDomain === true) {
      writer.uint32(16).bool(message.userLoginMustBeDomain);
    }
    if (message.isDefault === true) {
      writer.uint32(24).bool(message.isDefault);
    }
    if (message.validateOrgDomains === true) {
      writer.uint32(32).bool(message.validateOrgDomains);
    }
    if (message.smtpSenderAddressMatchesInstanceDomain === true) {
      writer.uint32(40).bool(message.smtpSenderAddressMatchesInstanceDomain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DomainPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDomainPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.userLoginMustBeDomain = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isDefault = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.validateOrgDomains = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.smtpSenderAddressMatchesInstanceDomain = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<DomainPolicy>): DomainPolicy {
    return DomainPolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DomainPolicy>): DomainPolicy {
    const message = createBaseDomainPolicy();
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.userLoginMustBeDomain = object.userLoginMustBeDomain ?? false;
    message.isDefault = object.isDefault ?? false;
    message.validateOrgDomains = object.validateOrgDomains ?? false;
    message.smtpSenderAddressMatchesInstanceDomain = object.smtpSenderAddressMatchesInstanceDomain ?? false;
    return message;
  },
};

function createBaseLabelPolicy(): LabelPolicy {
  return {
    details: undefined,
    primaryColor: "",
    isDefault: false,
    hideLoginNameSuffix: false,
    warnColor: "",
    backgroundColor: "",
    fontColor: "",
    primaryColorDark: "",
    backgroundColorDark: "",
    warnColorDark: "",
    fontColorDark: "",
    disableWatermark: false,
    logoUrl: "",
    iconUrl: "",
    logoUrlDark: "",
    iconUrlDark: "",
    fontUrl: "",
    themeMode: 0,
  };
}

export const LabelPolicy = {
  encode(message: LabelPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.primaryColor !== "") {
      writer.uint32(18).string(message.primaryColor);
    }
    if (message.isDefault === true) {
      writer.uint32(32).bool(message.isDefault);
    }
    if (message.hideLoginNameSuffix === true) {
      writer.uint32(40).bool(message.hideLoginNameSuffix);
    }
    if (message.warnColor !== "") {
      writer.uint32(50).string(message.warnColor);
    }
    if (message.backgroundColor !== "") {
      writer.uint32(58).string(message.backgroundColor);
    }
    if (message.fontColor !== "") {
      writer.uint32(66).string(message.fontColor);
    }
    if (message.primaryColorDark !== "") {
      writer.uint32(74).string(message.primaryColorDark);
    }
    if (message.backgroundColorDark !== "") {
      writer.uint32(82).string(message.backgroundColorDark);
    }
    if (message.warnColorDark !== "") {
      writer.uint32(90).string(message.warnColorDark);
    }
    if (message.fontColorDark !== "") {
      writer.uint32(98).string(message.fontColorDark);
    }
    if (message.disableWatermark === true) {
      writer.uint32(104).bool(message.disableWatermark);
    }
    if (message.logoUrl !== "") {
      writer.uint32(114).string(message.logoUrl);
    }
    if (message.iconUrl !== "") {
      writer.uint32(122).string(message.iconUrl);
    }
    if (message.logoUrlDark !== "") {
      writer.uint32(130).string(message.logoUrlDark);
    }
    if (message.iconUrlDark !== "") {
      writer.uint32(138).string(message.iconUrlDark);
    }
    if (message.fontUrl !== "") {
      writer.uint32(146).string(message.fontUrl);
    }
    if (message.themeMode !== 0) {
      writer.uint32(152).int32(message.themeMode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LabelPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLabelPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.primaryColor = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isDefault = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.hideLoginNameSuffix = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.warnColor = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.backgroundColor = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.fontColor = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.primaryColorDark = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.backgroundColorDark = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.warnColorDark = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.fontColorDark = reader.string();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.disableWatermark = reader.bool();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.logoUrl = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.iconUrl = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.logoUrlDark = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.iconUrlDark = reader.string();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.fontUrl = reader.string();
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.themeMode = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<LabelPolicy>): LabelPolicy {
    return LabelPolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LabelPolicy>): LabelPolicy {
    const message = createBaseLabelPolicy();
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.primaryColor = object.primaryColor ?? "";
    message.isDefault = object.isDefault ?? false;
    message.hideLoginNameSuffix = object.hideLoginNameSuffix ?? false;
    message.warnColor = object.warnColor ?? "";
    message.backgroundColor = object.backgroundColor ?? "";
    message.fontColor = object.fontColor ?? "";
    message.primaryColorDark = object.primaryColorDark ?? "";
    message.backgroundColorDark = object.backgroundColorDark ?? "";
    message.warnColorDark = object.warnColorDark ?? "";
    message.fontColorDark = object.fontColorDark ?? "";
    message.disableWatermark = object.disableWatermark ?? false;
    message.logoUrl = object.logoUrl ?? "";
    message.iconUrl = object.iconUrl ?? "";
    message.logoUrlDark = object.logoUrlDark ?? "";
    message.iconUrlDark = object.iconUrlDark ?? "";
    message.fontUrl = object.fontUrl ?? "";
    message.themeMode = object.themeMode ?? 0;
    return message;
  },
};

function createBaseLoginPolicy(): LoginPolicy {
  return {
    details: undefined,
    allowUsernamePassword: false,
    allowRegister: false,
    allowExternalIdp: false,
    forceMfa: false,
    passwordlessType: 0,
    isDefault: false,
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
    idps: [],
    allowDomainDiscovery: false,
    disableLoginWithEmail: false,
    disableLoginWithPhone: false,
    forceMfaLocalOnly: false,
  };
}

export const LoginPolicy = {
  encode(message: LoginPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.allowUsernamePassword === true) {
      writer.uint32(16).bool(message.allowUsernamePassword);
    }
    if (message.allowRegister === true) {
      writer.uint32(24).bool(message.allowRegister);
    }
    if (message.allowExternalIdp === true) {
      writer.uint32(32).bool(message.allowExternalIdp);
    }
    if (message.forceMfa === true) {
      writer.uint32(40).bool(message.forceMfa);
    }
    if (message.passwordlessType !== 0) {
      writer.uint32(48).int32(message.passwordlessType);
    }
    if (message.isDefault === true) {
      writer.uint32(56).bool(message.isDefault);
    }
    if (message.hidePasswordReset === true) {
      writer.uint32(64).bool(message.hidePasswordReset);
    }
    if (message.ignoreUnknownUsernames === true) {
      writer.uint32(72).bool(message.ignoreUnknownUsernames);
    }
    if (message.defaultRedirectUri !== "") {
      writer.uint32(82).string(message.defaultRedirectUri);
    }
    if (message.passwordCheckLifetime !== undefined) {
      Duration.encode(message.passwordCheckLifetime, writer.uint32(90).fork()).ldelim();
    }
    if (message.externalLoginCheckLifetime !== undefined) {
      Duration.encode(message.externalLoginCheckLifetime, writer.uint32(98).fork()).ldelim();
    }
    if (message.mfaInitSkipLifetime !== undefined) {
      Duration.encode(message.mfaInitSkipLifetime, writer.uint32(106).fork()).ldelim();
    }
    if (message.secondFactorCheckLifetime !== undefined) {
      Duration.encode(message.secondFactorCheckLifetime, writer.uint32(114).fork()).ldelim();
    }
    if (message.multiFactorCheckLifetime !== undefined) {
      Duration.encode(message.multiFactorCheckLifetime, writer.uint32(122).fork()).ldelim();
    }
    writer.uint32(130).fork();
    for (const v of message.secondFactors) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(138).fork();
    for (const v of message.multiFactors) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.idps) {
      IDPLoginPolicyLink.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    if (message.allowDomainDiscovery === true) {
      writer.uint32(152).bool(message.allowDomainDiscovery);
    }
    if (message.disableLoginWithEmail === true) {
      writer.uint32(160).bool(message.disableLoginWithEmail);
    }
    if (message.disableLoginWithPhone === true) {
      writer.uint32(168).bool(message.disableLoginWithPhone);
    }
    if (message.forceMfaLocalOnly === true) {
      writer.uint32(176).bool(message.forceMfaLocalOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.allowUsernamePassword = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.allowRegister = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.allowExternalIdp = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.forceMfa = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.passwordlessType = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.isDefault = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.hidePasswordReset = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.ignoreUnknownUsernames = reader.bool();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.defaultRedirectUri = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.passwordCheckLifetime = Duration.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.externalLoginCheckLifetime = Duration.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.mfaInitSkipLifetime = Duration.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.secondFactorCheckLifetime = Duration.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.multiFactorCheckLifetime = Duration.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag === 128) {
            message.secondFactors.push(reader.int32() as any);

            continue;
          }

          if (tag === 130) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.secondFactors.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 17:
          if (tag === 136) {
            message.multiFactors.push(reader.int32() as any);

            continue;
          }

          if (tag === 138) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.multiFactors.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.idps.push(IDPLoginPolicyLink.decode(reader, reader.uint32()));
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.allowDomainDiscovery = reader.bool();
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.disableLoginWithEmail = reader.bool();
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.disableLoginWithPhone = reader.bool();
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

  create(base?: DeepPartial<LoginPolicy>): LoginPolicy {
    return LoginPolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LoginPolicy>): LoginPolicy {
    const message = createBaseLoginPolicy();
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.allowUsernamePassword = object.allowUsernamePassword ?? false;
    message.allowRegister = object.allowRegister ?? false;
    message.allowExternalIdp = object.allowExternalIdp ?? false;
    message.forceMfa = object.forceMfa ?? false;
    message.passwordlessType = object.passwordlessType ?? 0;
    message.isDefault = object.isDefault ?? false;
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
    message.idps = object.idps?.map((e) => IDPLoginPolicyLink.fromPartial(e)) || [];
    message.allowDomainDiscovery = object.allowDomainDiscovery ?? false;
    message.disableLoginWithEmail = object.disableLoginWithEmail ?? false;
    message.disableLoginWithPhone = object.disableLoginWithPhone ?? false;
    message.forceMfaLocalOnly = object.forceMfaLocalOnly ?? false;
    return message;
  },
};

function createBasePasswordComplexityPolicy(): PasswordComplexityPolicy {
  return {
    details: undefined,
    minLength: 0,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSymbol: false,
    isDefault: false,
  };
}

export const PasswordComplexityPolicy = {
  encode(message: PasswordComplexityPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.minLength !== 0) {
      writer.uint32(16).uint64(message.minLength);
    }
    if (message.hasUppercase === true) {
      writer.uint32(24).bool(message.hasUppercase);
    }
    if (message.hasLowercase === true) {
      writer.uint32(32).bool(message.hasLowercase);
    }
    if (message.hasNumber === true) {
      writer.uint32(40).bool(message.hasNumber);
    }
    if (message.hasSymbol === true) {
      writer.uint32(48).bool(message.hasSymbol);
    }
    if (message.isDefault === true) {
      writer.uint32(56).bool(message.isDefault);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PasswordComplexityPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePasswordComplexityPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.minLength = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.hasUppercase = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.hasLowercase = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.hasNumber = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.hasSymbol = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.isDefault = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<PasswordComplexityPolicy>): PasswordComplexityPolicy {
    return PasswordComplexityPolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PasswordComplexityPolicy>): PasswordComplexityPolicy {
    const message = createBasePasswordComplexityPolicy();
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.minLength = object.minLength ?? 0;
    message.hasUppercase = object.hasUppercase ?? false;
    message.hasLowercase = object.hasLowercase ?? false;
    message.hasNumber = object.hasNumber ?? false;
    message.hasSymbol = object.hasSymbol ?? false;
    message.isDefault = object.isDefault ?? false;
    return message;
  },
};

function createBasePasswordAgePolicy(): PasswordAgePolicy {
  return { details: undefined, maxAgeDays: 0, expireWarnDays: 0, isDefault: false };
}

export const PasswordAgePolicy = {
  encode(message: PasswordAgePolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxAgeDays !== 0) {
      writer.uint32(16).uint64(message.maxAgeDays);
    }
    if (message.expireWarnDays !== 0) {
      writer.uint32(24).uint64(message.expireWarnDays);
    }
    if (message.isDefault === true) {
      writer.uint32(32).bool(message.isDefault);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PasswordAgePolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePasswordAgePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.maxAgeDays = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.expireWarnDays = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isDefault = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<PasswordAgePolicy>): PasswordAgePolicy {
    return PasswordAgePolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PasswordAgePolicy>): PasswordAgePolicy {
    const message = createBasePasswordAgePolicy();
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.maxAgeDays = object.maxAgeDays ?? 0;
    message.expireWarnDays = object.expireWarnDays ?? 0;
    message.isDefault = object.isDefault ?? false;
    return message;
  },
};

function createBaseLockoutPolicy(): LockoutPolicy {
  return { details: undefined, maxPasswordAttempts: 0, isDefault: false };
}

export const LockoutPolicy = {
  encode(message: LockoutPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxPasswordAttempts !== 0) {
      writer.uint32(16).uint64(message.maxPasswordAttempts);
    }
    if (message.isDefault === true) {
      writer.uint32(32).bool(message.isDefault);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockoutPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockoutPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.maxPasswordAttempts = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isDefault = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<LockoutPolicy>): LockoutPolicy {
    return LockoutPolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LockoutPolicy>): LockoutPolicy {
    const message = createBaseLockoutPolicy();
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.maxPasswordAttempts = object.maxPasswordAttempts ?? 0;
    message.isDefault = object.isDefault ?? false;
    return message;
  },
};

function createBasePrivacyPolicy(): PrivacyPolicy {
  return { details: undefined, tosLink: "", privacyLink: "", isDefault: false, helpLink: "", supportEmail: "" };
}

export const PrivacyPolicy = {
  encode(message: PrivacyPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.tosLink !== "") {
      writer.uint32(18).string(message.tosLink);
    }
    if (message.privacyLink !== "") {
      writer.uint32(26).string(message.privacyLink);
    }
    if (message.isDefault === true) {
      writer.uint32(32).bool(message.isDefault);
    }
    if (message.helpLink !== "") {
      writer.uint32(42).string(message.helpLink);
    }
    if (message.supportEmail !== "") {
      writer.uint32(50).string(message.supportEmail);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrivacyPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivacyPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tosLink = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.privacyLink = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isDefault = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.helpLink = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.supportEmail = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<PrivacyPolicy>): PrivacyPolicy {
    return PrivacyPolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PrivacyPolicy>): PrivacyPolicy {
    const message = createBasePrivacyPolicy();
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.tosLink = object.tosLink ?? "";
    message.privacyLink = object.privacyLink ?? "";
    message.isDefault = object.isDefault ?? false;
    message.helpLink = object.helpLink ?? "";
    message.supportEmail = object.supportEmail ?? "";
    return message;
  },
};

function createBaseNotificationPolicy(): NotificationPolicy {
  return { details: undefined, isDefault: false, passwordChange: false };
}

export const NotificationPolicy = {
  encode(message: NotificationPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.isDefault === true) {
      writer.uint32(16).bool(message.isDefault);
    }
    if (message.passwordChange === true) {
      writer.uint32(24).bool(message.passwordChange);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NotificationPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotificationPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isDefault = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.passwordChange = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<NotificationPolicy>): NotificationPolicy {
    return NotificationPolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NotificationPolicy>): NotificationPolicy {
    const message = createBaseNotificationPolicy();
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.isDefault = object.isDefault ?? false;
    message.passwordChange = object.passwordChange ?? false;
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
