/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";
import { ObjectDetails, TextQueryMethod } from "./object";

export const protobufPackage = "zitadel.user.v1";

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

export enum Gender {
  GENDER_UNSPECIFIED = 0,
  GENDER_FEMALE = 1,
  GENDER_MALE = 2,
  GENDER_DIVERSE = 3,
  UNRECOGNIZED = -1,
}

export enum AccessTokenType {
  ACCESS_TOKEN_TYPE_BEARER = 0,
  ACCESS_TOKEN_TYPE_JWT = 1,
  UNRECOGNIZED = -1,
}

export enum Type {
  TYPE_UNSPECIFIED = 0,
  TYPE_HUMAN = 1,
  TYPE_MACHINE = 2,
  UNRECOGNIZED = -1,
}

export enum UserFieldName {
  USER_FIELD_NAME_UNSPECIFIED = 0,
  USER_FIELD_NAME_USER_NAME = 1,
  USER_FIELD_NAME_FIRST_NAME = 2,
  USER_FIELD_NAME_LAST_NAME = 3,
  USER_FIELD_NAME_NICK_NAME = 4,
  USER_FIELD_NAME_DISPLAY_NAME = 5,
  USER_FIELD_NAME_EMAIL = 6,
  USER_FIELD_NAME_STATE = 7,
  USER_FIELD_NAME_TYPE = 8,
  USER_FIELD_NAME_CREATION_DATE = 9,
  UNRECOGNIZED = -1,
}

export enum AuthFactorState {
  AUTH_FACTOR_STATE_UNSPECIFIED = 0,
  AUTH_FACTOR_STATE_NOT_READY = 1,
  AUTH_FACTOR_STATE_READY = 2,
  AUTH_FACTOR_STATE_REMOVED = 3,
  UNRECOGNIZED = -1,
}

export enum SessionState {
  SESSION_STATE_UNSPECIFIED = 0,
  SESSION_STATE_ACTIVE = 1,
  SESSION_STATE_TERMINATED = 2,
  UNRECOGNIZED = -1,
}

export enum UserGrantState {
  USER_GRANT_STATE_UNSPECIFIED = 0,
  USER_GRANT_STATE_ACTIVE = 1,
  USER_GRANT_STATE_INACTIVE = 2,
  UNRECOGNIZED = -1,
}

export interface User {
  id: string;
  details: ObjectDetails | undefined;
  state: UserState;
  userName: string;
  loginNames: string[];
  preferredLoginName: string;
  human?: Human | undefined;
  machine?: Machine | undefined;
}

export interface Human {
  profile: Profile | undefined;
  email: Email | undefined;
  phone: Phone | undefined;
}

export interface Machine {
  name: string;
  description: string;
  hasSecret: boolean;
  accessTokenType: AccessTokenType;
}

export interface Profile {
  firstName: string;
  lastName: string;
  nickName: string;
  displayName: string;
  preferredLanguage: string;
  gender: Gender;
  avatarUrl: string;
}

export interface Email {
  email: string;
  isEmailVerified: boolean;
}

export interface Phone {
  phone: string;
  isPhoneVerified: boolean;
}

export interface SearchQuery {
  userNameQuery?: UserNameQuery | undefined;
  firstNameQuery?: FirstNameQuery | undefined;
  lastNameQuery?: LastNameQuery | undefined;
  nickNameQuery?: NickNameQuery | undefined;
  displayNameQuery?: DisplayNameQuery | undefined;
  emailQuery?: EmailQuery | undefined;
  stateQuery?: StateQuery | undefined;
  typeQuery?: TypeQuery | undefined;
  loginNameQuery?: LoginNameQuery | undefined;
  inUserIdsQuery?: InUserIDQuery | undefined;
  orQuery?: OrQuery | undefined;
  andQuery?: AndQuery | undefined;
  notQuery?: NotQuery | undefined;
}

export interface OrQuery {
  queries: SearchQuery[];
}

export interface AndQuery {
  queries: SearchQuery[];
}

export interface NotQuery {
  query: SearchQuery | undefined;
}

export interface InUserIDQuery {
  userIds: string[];
}

export interface UserNameQuery {
  userName: string;
  method: TextQueryMethod;
}

export interface FirstNameQuery {
  firstName: string;
  method: TextQueryMethod;
}

export interface LastNameQuery {
  lastName: string;
  method: TextQueryMethod;
}

export interface NickNameQuery {
  nickName: string;
  method: TextQueryMethod;
}

export interface DisplayNameQuery {
  displayName: string;
  method: TextQueryMethod;
}

export interface EmailQuery {
  emailAddress: string;
  method: TextQueryMethod;
}

export interface LoginNameQuery {
  loginName: string;
  method: TextQueryMethod;
}

/** UserStateQuery always equals */
export interface StateQuery {
  state: UserState;
}

/** UserTypeQuery always equals */
export interface TypeQuery {
  type: Type;
}

export interface AuthFactor {
  state: AuthFactorState;
  otp?: AuthFactorOTP | undefined;
  u2f?: AuthFactorU2F | undefined;
  otpSms?: AuthFactorOTPSMS | undefined;
  otpEmail?: AuthFactorOTPEmail | undefined;
}

export interface AuthFactorOTP {
}

export interface AuthFactorOTPSMS {
}

export interface AuthFactorOTPEmail {
}

export interface AuthFactorU2F {
  id: string;
  name: string;
}

export interface WebAuthNKey {
  publicKey: Uint8Array;
}

export interface WebAuthNVerification {
  publicKeyCredential: Uint8Array;
  tokenName: string;
}

export interface WebAuthNToken {
  id: string;
  state: AuthFactorState;
  name: string;
}

export interface Membership {
  userId: string;
  details: ObjectDetails | undefined;
  roles: string[];
  displayName: string;
  iam?: boolean | undefined;
  orgId?: string | undefined;
  projectId?: string | undefined;
  projectGrantId?: string | undefined;
}

export interface MembershipQuery {
  orgQuery?: MembershipOrgQuery | undefined;
  projectQuery?: MembershipProjectQuery | undefined;
  projectGrantQuery?: MembershipProjectGrantQuery | undefined;
  iamQuery?: MembershipIAMQuery | undefined;
}

/** this query always equals */
export interface MembershipOrgQuery {
  orgId: string;
}

/** this query always equals */
export interface MembershipProjectQuery {
  projectId: string;
}

/** this query always equals */
export interface MembershipProjectGrantQuery {
  projectGrantId: string;
}

/** this query always equals */
export interface MembershipIAMQuery {
  iam: boolean;
}

export interface Session {
  sessionId: string;
  agentId: string;
  authState: SessionState;
  userId: string;
  userName: string;
  loginName: string;
  displayName: string;
  details: ObjectDetails | undefined;
  avatarUrl: string;
}

export interface RefreshToken {
  id: string;
  details: ObjectDetails | undefined;
  clientId: string;
  authTime: Date | undefined;
  idleExpiration: Date | undefined;
  expiration: Date | undefined;
  scopes: string[];
  audience: string[];
}

export interface PersonalAccessToken {
  id: string;
  details: ObjectDetails | undefined;
  expirationDate: Date | undefined;
  scopes: string[];
}

export interface UserGrant {
  id: string;
  details: ObjectDetails | undefined;
  roleKeys: string[];
  state: UserGrantState;
  userId: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  displayName: string;
  orgId: string;
  orgName: string;
  orgDomain: string;
  projectId: string;
  projectName: string;
  projectGrantId: string;
  avatarUrl: string;
  preferredLoginName: string;
  userType: Type;
}

export interface UserGrantQuery {
  projectIdQuery?: UserGrantProjectIDQuery | undefined;
  userIdQuery?: UserGrantUserIDQuery | undefined;
  withGrantedQuery?: UserGrantWithGrantedQuery | undefined;
  roleKeyQuery?: UserGrantRoleKeyQuery | undefined;
  projectGrantIdQuery?: UserGrantProjectGrantIDQuery | undefined;
  userNameQuery?: UserGrantUserNameQuery | undefined;
  firstNameQuery?: UserGrantFirstNameQuery | undefined;
  lastNameQuery?: UserGrantLastNameQuery | undefined;
  emailQuery?: UserGrantEmailQuery | undefined;
  orgNameQuery?: UserGrantOrgNameQuery | undefined;
  orgDomainQuery?: UserGrantOrgDomainQuery | undefined;
  projectNameQuery?: UserGrantProjectNameQuery | undefined;
  displayNameQuery?: UserGrantDisplayNameQuery | undefined;
  userTypeQuery?: UserGrantUserTypeQuery | undefined;
}

export interface UserGrantProjectIDQuery {
  projectId: string;
}

export interface UserGrantUserIDQuery {
  userId: string;
}

export interface UserGrantWithGrantedQuery {
  withGranted: boolean;
}

export interface UserGrantRoleKeyQuery {
  roleKey: string;
  method: TextQueryMethod;
}

export interface UserGrantProjectGrantIDQuery {
  projectGrantId: string;
}

export interface UserGrantUserNameQuery {
  userName: string;
  method: TextQueryMethod;
}

export interface UserGrantFirstNameQuery {
  firstName: string;
  method: TextQueryMethod;
}

export interface UserGrantLastNameQuery {
  lastName: string;
  method: TextQueryMethod;
}

export interface UserGrantEmailQuery {
  email: string;
  method: TextQueryMethod;
}

export interface UserGrantOrgNameQuery {
  orgName: string;
  method: TextQueryMethod;
}

export interface UserGrantOrgDomainQuery {
  orgDomain: string;
  method: TextQueryMethod;
}

export interface UserGrantProjectNameQuery {
  projectName: string;
  method: TextQueryMethod;
}

export interface UserGrantDisplayNameQuery {
  displayName: string;
  method: TextQueryMethod;
}

export interface UserGrantUserTypeQuery {
  type: Type;
}

function createBaseUser(): User {
  return {
    id: "",
    details: undefined,
    state: 0,
    userName: "",
    loginNames: [],
    preferredLoginName: "",
    human: undefined,
    machine: undefined,
  };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.userName !== "") {
      writer.uint32(34).string(message.userName);
    }
    for (const v of message.loginNames) {
      writer.uint32(42).string(v!);
    }
    if (message.preferredLoginName !== "") {
      writer.uint32(50).string(message.preferredLoginName);
    }
    if (message.human !== undefined) {
      Human.encode(message.human, writer.uint32(58).fork()).ldelim();
    }
    if (message.machine !== undefined) {
      Machine.encode(message.machine, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
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

          message.userName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.loginNames.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.preferredLoginName = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.human = Human.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.machine = Machine.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<User>): User {
    return User.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<User>): User {
    const message = createBaseUser();
    message.id = object.id ?? "";
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.state = object.state ?? 0;
    message.userName = object.userName ?? "";
    message.loginNames = object.loginNames?.map((e) => e) || [];
    message.preferredLoginName = object.preferredLoginName ?? "";
    message.human = (object.human !== undefined && object.human !== null) ? Human.fromPartial(object.human) : undefined;
    message.machine = (object.machine !== undefined && object.machine !== null)
      ? Machine.fromPartial(object.machine)
      : undefined;
    return message;
  },
};

function createBaseHuman(): Human {
  return { profile: undefined, email: undefined, phone: undefined };
}

export const Human = {
  encode(message: Human, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.profile !== undefined) {
      Profile.encode(message.profile, writer.uint32(10).fork()).ldelim();
    }
    if (message.email !== undefined) {
      Email.encode(message.email, writer.uint32(18).fork()).ldelim();
    }
    if (message.phone !== undefined) {
      Phone.encode(message.phone, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Human {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHuman();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.profile = Profile.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.email = Email.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.phone = Phone.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Human>): Human {
    return Human.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Human>): Human {
    const message = createBaseHuman();
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? Profile.fromPartial(object.profile)
      : undefined;
    message.email = (object.email !== undefined && object.email !== null) ? Email.fromPartial(object.email) : undefined;
    message.phone = (object.phone !== undefined && object.phone !== null) ? Phone.fromPartial(object.phone) : undefined;
    return message;
  },
};

function createBaseMachine(): Machine {
  return { name: "", description: "", hasSecret: false, accessTokenType: 0 };
}

export const Machine = {
  encode(message: Machine, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.hasSecret === true) {
      writer.uint32(24).bool(message.hasSecret);
    }
    if (message.accessTokenType !== 0) {
      writer.uint32(32).int32(message.accessTokenType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Machine {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMachine();
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
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.hasSecret = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.accessTokenType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Machine>): Machine {
    return Machine.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Machine>): Machine {
    const message = createBaseMachine();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.hasSecret = object.hasSecret ?? false;
    message.accessTokenType = object.accessTokenType ?? 0;
    return message;
  },
};

function createBaseProfile(): Profile {
  return {
    firstName: "",
    lastName: "",
    nickName: "",
    displayName: "",
    preferredLanguage: "",
    gender: 0,
    avatarUrl: "",
  };
}

export const Profile = {
  encode(message: Profile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.firstName !== "") {
      writer.uint32(10).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(18).string(message.lastName);
    }
    if (message.nickName !== "") {
      writer.uint32(26).string(message.nickName);
    }
    if (message.displayName !== "") {
      writer.uint32(34).string(message.displayName);
    }
    if (message.preferredLanguage !== "") {
      writer.uint32(42).string(message.preferredLanguage);
    }
    if (message.gender !== 0) {
      writer.uint32(48).int32(message.gender);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(58).string(message.avatarUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Profile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfile();
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
          if (tag !== 18) {
            break;
          }

          message.lastName = reader.string();
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
        case 7:
          if (tag !== 58) {
            break;
          }

          message.avatarUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Profile>): Profile {
    return Profile.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Profile>): Profile {
    const message = createBaseProfile();
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    message.nickName = object.nickName ?? "";
    message.displayName = object.displayName ?? "";
    message.preferredLanguage = object.preferredLanguage ?? "";
    message.gender = object.gender ?? 0;
    message.avatarUrl = object.avatarUrl ?? "";
    return message;
  },
};

function createBaseEmail(): Email {
  return { email: "", isEmailVerified: false };
}

export const Email = {
  encode(message: Email, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.isEmailVerified === true) {
      writer.uint32(16).bool(message.isEmailVerified);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Email {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmail();
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

          message.isEmailVerified = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Email>): Email {
    return Email.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Email>): Email {
    const message = createBaseEmail();
    message.email = object.email ?? "";
    message.isEmailVerified = object.isEmailVerified ?? false;
    return message;
  },
};

function createBasePhone(): Phone {
  return { phone: "", isPhoneVerified: false };
}

export const Phone = {
  encode(message: Phone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.phone !== "") {
      writer.uint32(10).string(message.phone);
    }
    if (message.isPhoneVerified === true) {
      writer.uint32(16).bool(message.isPhoneVerified);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Phone {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.phone = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isPhoneVerified = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Phone>): Phone {
    return Phone.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Phone>): Phone {
    const message = createBasePhone();
    message.phone = object.phone ?? "";
    message.isPhoneVerified = object.isPhoneVerified ?? false;
    return message;
  },
};

function createBaseSearchQuery(): SearchQuery {
  return {
    userNameQuery: undefined,
    firstNameQuery: undefined,
    lastNameQuery: undefined,
    nickNameQuery: undefined,
    displayNameQuery: undefined,
    emailQuery: undefined,
    stateQuery: undefined,
    typeQuery: undefined,
    loginNameQuery: undefined,
    inUserIdsQuery: undefined,
    orQuery: undefined,
    andQuery: undefined,
    notQuery: undefined,
  };
}

export const SearchQuery = {
  encode(message: SearchQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userNameQuery !== undefined) {
      UserNameQuery.encode(message.userNameQuery, writer.uint32(10).fork()).ldelim();
    }
    if (message.firstNameQuery !== undefined) {
      FirstNameQuery.encode(message.firstNameQuery, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastNameQuery !== undefined) {
      LastNameQuery.encode(message.lastNameQuery, writer.uint32(26).fork()).ldelim();
    }
    if (message.nickNameQuery !== undefined) {
      NickNameQuery.encode(message.nickNameQuery, writer.uint32(34).fork()).ldelim();
    }
    if (message.displayNameQuery !== undefined) {
      DisplayNameQuery.encode(message.displayNameQuery, writer.uint32(42).fork()).ldelim();
    }
    if (message.emailQuery !== undefined) {
      EmailQuery.encode(message.emailQuery, writer.uint32(50).fork()).ldelim();
    }
    if (message.stateQuery !== undefined) {
      StateQuery.encode(message.stateQuery, writer.uint32(58).fork()).ldelim();
    }
    if (message.typeQuery !== undefined) {
      TypeQuery.encode(message.typeQuery, writer.uint32(66).fork()).ldelim();
    }
    if (message.loginNameQuery !== undefined) {
      LoginNameQuery.encode(message.loginNameQuery, writer.uint32(74).fork()).ldelim();
    }
    if (message.inUserIdsQuery !== undefined) {
      InUserIDQuery.encode(message.inUserIdsQuery, writer.uint32(82).fork()).ldelim();
    }
    if (message.orQuery !== undefined) {
      OrQuery.encode(message.orQuery, writer.uint32(90).fork()).ldelim();
    }
    if (message.andQuery !== undefined) {
      AndQuery.encode(message.andQuery, writer.uint32(98).fork()).ldelim();
    }
    if (message.notQuery !== undefined) {
      NotQuery.encode(message.notQuery, writer.uint32(106).fork()).ldelim();
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

          message.userNameQuery = UserNameQuery.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.firstNameQuery = FirstNameQuery.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lastNameQuery = LastNameQuery.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nickNameQuery = NickNameQuery.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.displayNameQuery = DisplayNameQuery.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.emailQuery = EmailQuery.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.stateQuery = StateQuery.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.typeQuery = TypeQuery.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.loginNameQuery = LoginNameQuery.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.inUserIdsQuery = InUserIDQuery.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.orQuery = OrQuery.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.andQuery = AndQuery.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.notQuery = NotQuery.decode(reader, reader.uint32());
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
    message.userNameQuery = (object.userNameQuery !== undefined && object.userNameQuery !== null)
      ? UserNameQuery.fromPartial(object.userNameQuery)
      : undefined;
    message.firstNameQuery = (object.firstNameQuery !== undefined && object.firstNameQuery !== null)
      ? FirstNameQuery.fromPartial(object.firstNameQuery)
      : undefined;
    message.lastNameQuery = (object.lastNameQuery !== undefined && object.lastNameQuery !== null)
      ? LastNameQuery.fromPartial(object.lastNameQuery)
      : undefined;
    message.nickNameQuery = (object.nickNameQuery !== undefined && object.nickNameQuery !== null)
      ? NickNameQuery.fromPartial(object.nickNameQuery)
      : undefined;
    message.displayNameQuery = (object.displayNameQuery !== undefined && object.displayNameQuery !== null)
      ? DisplayNameQuery.fromPartial(object.displayNameQuery)
      : undefined;
    message.emailQuery = (object.emailQuery !== undefined && object.emailQuery !== null)
      ? EmailQuery.fromPartial(object.emailQuery)
      : undefined;
    message.stateQuery = (object.stateQuery !== undefined && object.stateQuery !== null)
      ? StateQuery.fromPartial(object.stateQuery)
      : undefined;
    message.typeQuery = (object.typeQuery !== undefined && object.typeQuery !== null)
      ? TypeQuery.fromPartial(object.typeQuery)
      : undefined;
    message.loginNameQuery = (object.loginNameQuery !== undefined && object.loginNameQuery !== null)
      ? LoginNameQuery.fromPartial(object.loginNameQuery)
      : undefined;
    message.inUserIdsQuery = (object.inUserIdsQuery !== undefined && object.inUserIdsQuery !== null)
      ? InUserIDQuery.fromPartial(object.inUserIdsQuery)
      : undefined;
    message.orQuery = (object.orQuery !== undefined && object.orQuery !== null)
      ? OrQuery.fromPartial(object.orQuery)
      : undefined;
    message.andQuery = (object.andQuery !== undefined && object.andQuery !== null)
      ? AndQuery.fromPartial(object.andQuery)
      : undefined;
    message.notQuery = (object.notQuery !== undefined && object.notQuery !== null)
      ? NotQuery.fromPartial(object.notQuery)
      : undefined;
    return message;
  },
};

function createBaseOrQuery(): OrQuery {
  return { queries: [] };
}

export const OrQuery = {
  encode(message: OrQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.queries) {
      SearchQuery.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.queries.push(SearchQuery.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<OrQuery>): OrQuery {
    return OrQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OrQuery>): OrQuery {
    const message = createBaseOrQuery();
    message.queries = object.queries?.map((e) => SearchQuery.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAndQuery(): AndQuery {
  return { queries: [] };
}

export const AndQuery = {
  encode(message: AndQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.queries) {
      SearchQuery.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AndQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAndQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.queries.push(SearchQuery.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AndQuery>): AndQuery {
    return AndQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AndQuery>): AndQuery {
    const message = createBaseAndQuery();
    message.queries = object.queries?.map((e) => SearchQuery.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNotQuery(): NotQuery {
  return { query: undefined };
}

export const NotQuery = {
  encode(message: NotQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.query !== undefined) {
      SearchQuery.encode(message.query, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NotQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.query = SearchQuery.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<NotQuery>): NotQuery {
    return NotQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NotQuery>): NotQuery {
    const message = createBaseNotQuery();
    message.query = (object.query !== undefined && object.query !== null)
      ? SearchQuery.fromPartial(object.query)
      : undefined;
    return message;
  },
};

function createBaseInUserIDQuery(): InUserIDQuery {
  return { userIds: [] };
}

export const InUserIDQuery = {
  encode(message: InUserIDQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.userIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InUserIDQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInUserIDQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<InUserIDQuery>): InUserIDQuery {
    return InUserIDQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<InUserIDQuery>): InUserIDQuery {
    const message = createBaseInUserIDQuery();
    message.userIds = object.userIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseUserNameQuery(): UserNameQuery {
  return { userName: "", method: 0 };
}

export const UserNameQuery = {
  encode(message: UserNameQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userName !== "") {
      writer.uint32(10).string(message.userName);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserNameQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserNameQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userName = reader.string();
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

  create(base?: DeepPartial<UserNameQuery>): UserNameQuery {
    return UserNameQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserNameQuery>): UserNameQuery {
    const message = createBaseUserNameQuery();
    message.userName = object.userName ?? "";
    message.method = object.method ?? 0;
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

function createBaseNickNameQuery(): NickNameQuery {
  return { nickName: "", method: 0 };
}

export const NickNameQuery = {
  encode(message: NickNameQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nickName !== "") {
      writer.uint32(10).string(message.nickName);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NickNameQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNickNameQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nickName = reader.string();
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

  create(base?: DeepPartial<NickNameQuery>): NickNameQuery {
    return NickNameQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NickNameQuery>): NickNameQuery {
    const message = createBaseNickNameQuery();
    message.nickName = object.nickName ?? "";
    message.method = object.method ?? 0;
    return message;
  },
};

function createBaseDisplayNameQuery(): DisplayNameQuery {
  return { displayName: "", method: 0 };
}

export const DisplayNameQuery = {
  encode(message: DisplayNameQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.displayName !== "") {
      writer.uint32(10).string(message.displayName);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DisplayNameQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisplayNameQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.displayName = reader.string();
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

  create(base?: DeepPartial<DisplayNameQuery>): DisplayNameQuery {
    return DisplayNameQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DisplayNameQuery>): DisplayNameQuery {
    const message = createBaseDisplayNameQuery();
    message.displayName = object.displayName ?? "";
    message.method = object.method ?? 0;
    return message;
  },
};

function createBaseEmailQuery(): EmailQuery {
  return { emailAddress: "", method: 0 };
}

export const EmailQuery = {
  encode(message: EmailQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.emailAddress !== "") {
      writer.uint32(10).string(message.emailAddress);
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

          message.emailAddress = reader.string();
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
    message.emailAddress = object.emailAddress ?? "";
    message.method = object.method ?? 0;
    return message;
  },
};

function createBaseLoginNameQuery(): LoginNameQuery {
  return { loginName: "", method: 0 };
}

export const LoginNameQuery = {
  encode(message: LoginNameQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loginName !== "") {
      writer.uint32(10).string(message.loginName);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginNameQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginNameQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loginName = reader.string();
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

  create(base?: DeepPartial<LoginNameQuery>): LoginNameQuery {
    return LoginNameQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LoginNameQuery>): LoginNameQuery {
    const message = createBaseLoginNameQuery();
    message.loginName = object.loginName ?? "";
    message.method = object.method ?? 0;
    return message;
  },
};

function createBaseStateQuery(): StateQuery {
  return { state: 0 };
}

export const StateQuery = {
  encode(message: StateQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StateQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStateQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<StateQuery>): StateQuery {
    return StateQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StateQuery>): StateQuery {
    const message = createBaseStateQuery();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseTypeQuery(): TypeQuery {
  return { type: 0 };
}

export const TypeQuery = {
  encode(message: TypeQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TypeQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTypeQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  create(base?: DeepPartial<TypeQuery>): TypeQuery {
    return TypeQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TypeQuery>): TypeQuery {
    const message = createBaseTypeQuery();
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseAuthFactor(): AuthFactor {
  return { state: 0, otp: undefined, u2f: undefined, otpSms: undefined, otpEmail: undefined };
}

export const AuthFactor = {
  encode(message: AuthFactor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.otp !== undefined) {
      AuthFactorOTP.encode(message.otp, writer.uint32(18).fork()).ldelim();
    }
    if (message.u2f !== undefined) {
      AuthFactorU2F.encode(message.u2f, writer.uint32(26).fork()).ldelim();
    }
    if (message.otpSms !== undefined) {
      AuthFactorOTPSMS.encode(message.otpSms, writer.uint32(34).fork()).ldelim();
    }
    if (message.otpEmail !== undefined) {
      AuthFactorOTPEmail.encode(message.otpEmail, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthFactor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthFactor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.otp = AuthFactorOTP.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.u2f = AuthFactorU2F.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.otpSms = AuthFactorOTPSMS.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.otpEmail = AuthFactorOTPEmail.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AuthFactor>): AuthFactor {
    return AuthFactor.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AuthFactor>): AuthFactor {
    const message = createBaseAuthFactor();
    message.state = object.state ?? 0;
    message.otp = (object.otp !== undefined && object.otp !== null) ? AuthFactorOTP.fromPartial(object.otp) : undefined;
    message.u2f = (object.u2f !== undefined && object.u2f !== null) ? AuthFactorU2F.fromPartial(object.u2f) : undefined;
    message.otpSms = (object.otpSms !== undefined && object.otpSms !== null)
      ? AuthFactorOTPSMS.fromPartial(object.otpSms)
      : undefined;
    message.otpEmail = (object.otpEmail !== undefined && object.otpEmail !== null)
      ? AuthFactorOTPEmail.fromPartial(object.otpEmail)
      : undefined;
    return message;
  },
};

function createBaseAuthFactorOTP(): AuthFactorOTP {
  return {};
}

export const AuthFactorOTP = {
  encode(_: AuthFactorOTP, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthFactorOTP {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthFactorOTP();
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

  create(base?: DeepPartial<AuthFactorOTP>): AuthFactorOTP {
    return AuthFactorOTP.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AuthFactorOTP>): AuthFactorOTP {
    const message = createBaseAuthFactorOTP();
    return message;
  },
};

function createBaseAuthFactorOTPSMS(): AuthFactorOTPSMS {
  return {};
}

export const AuthFactorOTPSMS = {
  encode(_: AuthFactorOTPSMS, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthFactorOTPSMS {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthFactorOTPSMS();
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

  create(base?: DeepPartial<AuthFactorOTPSMS>): AuthFactorOTPSMS {
    return AuthFactorOTPSMS.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AuthFactorOTPSMS>): AuthFactorOTPSMS {
    const message = createBaseAuthFactorOTPSMS();
    return message;
  },
};

function createBaseAuthFactorOTPEmail(): AuthFactorOTPEmail {
  return {};
}

export const AuthFactorOTPEmail = {
  encode(_: AuthFactorOTPEmail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthFactorOTPEmail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthFactorOTPEmail();
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

  create(base?: DeepPartial<AuthFactorOTPEmail>): AuthFactorOTPEmail {
    return AuthFactorOTPEmail.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AuthFactorOTPEmail>): AuthFactorOTPEmail {
    const message = createBaseAuthFactorOTPEmail();
    return message;
  },
};

function createBaseAuthFactorU2F(): AuthFactorU2F {
  return { id: "", name: "" };
}

export const AuthFactorU2F = {
  encode(message: AuthFactorU2F, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthFactorU2F {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthFactorU2F();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AuthFactorU2F>): AuthFactorU2F {
    return AuthFactorU2F.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AuthFactorU2F>): AuthFactorU2F {
    const message = createBaseAuthFactorU2F();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseWebAuthNKey(): WebAuthNKey {
  return { publicKey: new Uint8Array(0) };
}

export const WebAuthNKey = {
  encode(message: WebAuthNKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publicKey.length !== 0) {
      writer.uint32(10).bytes(message.publicKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WebAuthNKey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWebAuthNKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.publicKey = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<WebAuthNKey>): WebAuthNKey {
    return WebAuthNKey.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<WebAuthNKey>): WebAuthNKey {
    const message = createBaseWebAuthNKey();
    message.publicKey = object.publicKey ?? new Uint8Array(0);
    return message;
  },
};

function createBaseWebAuthNVerification(): WebAuthNVerification {
  return { publicKeyCredential: new Uint8Array(0), tokenName: "" };
}

export const WebAuthNVerification = {
  encode(message: WebAuthNVerification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publicKeyCredential.length !== 0) {
      writer.uint32(10).bytes(message.publicKeyCredential);
    }
    if (message.tokenName !== "") {
      writer.uint32(18).string(message.tokenName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WebAuthNVerification {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWebAuthNVerification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.publicKeyCredential = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tokenName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<WebAuthNVerification>): WebAuthNVerification {
    return WebAuthNVerification.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<WebAuthNVerification>): WebAuthNVerification {
    const message = createBaseWebAuthNVerification();
    message.publicKeyCredential = object.publicKeyCredential ?? new Uint8Array(0);
    message.tokenName = object.tokenName ?? "";
    return message;
  },
};

function createBaseWebAuthNToken(): WebAuthNToken {
  return { id: "", state: 0, name: "" };
}

export const WebAuthNToken = {
  encode(message: WebAuthNToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WebAuthNToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWebAuthNToken();
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
          if (tag !== 16) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<WebAuthNToken>): WebAuthNToken {
    return WebAuthNToken.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<WebAuthNToken>): WebAuthNToken {
    const message = createBaseWebAuthNToken();
    message.id = object.id ?? "";
    message.state = object.state ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseMembership(): Membership {
  return {
    userId: "",
    details: undefined,
    roles: [],
    displayName: "",
    iam: undefined,
    orgId: undefined,
    projectId: undefined,
    projectGrantId: undefined,
  };
}

export const Membership = {
  encode(message: Membership, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.roles) {
      writer.uint32(26).string(v!);
    }
    if (message.displayName !== "") {
      writer.uint32(34).string(message.displayName);
    }
    if (message.iam !== undefined) {
      writer.uint32(40).bool(message.iam);
    }
    if (message.orgId !== undefined) {
      writer.uint32(50).string(message.orgId);
    }
    if (message.projectId !== undefined) {
      writer.uint32(58).string(message.projectId);
    }
    if (message.projectGrantId !== undefined) {
      writer.uint32(66).string(message.projectGrantId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Membership {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMembership();
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

          message.displayName = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.iam = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.orgId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.projectId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.projectGrantId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Membership>): Membership {
    return Membership.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Membership>): Membership {
    const message = createBaseMembership();
    message.userId = object.userId ?? "";
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.roles = object.roles?.map((e) => e) || [];
    message.displayName = object.displayName ?? "";
    message.iam = object.iam ?? undefined;
    message.orgId = object.orgId ?? undefined;
    message.projectId = object.projectId ?? undefined;
    message.projectGrantId = object.projectGrantId ?? undefined;
    return message;
  },
};

function createBaseMembershipQuery(): MembershipQuery {
  return { orgQuery: undefined, projectQuery: undefined, projectGrantQuery: undefined, iamQuery: undefined };
}

export const MembershipQuery = {
  encode(message: MembershipQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orgQuery !== undefined) {
      MembershipOrgQuery.encode(message.orgQuery, writer.uint32(10).fork()).ldelim();
    }
    if (message.projectQuery !== undefined) {
      MembershipProjectQuery.encode(message.projectQuery, writer.uint32(18).fork()).ldelim();
    }
    if (message.projectGrantQuery !== undefined) {
      MembershipProjectGrantQuery.encode(message.projectGrantQuery, writer.uint32(26).fork()).ldelim();
    }
    if (message.iamQuery !== undefined) {
      MembershipIAMQuery.encode(message.iamQuery, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MembershipQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMembershipQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orgQuery = MembershipOrgQuery.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.projectQuery = MembershipProjectQuery.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.projectGrantQuery = MembershipProjectGrantQuery.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.iamQuery = MembershipIAMQuery.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<MembershipQuery>): MembershipQuery {
    return MembershipQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MembershipQuery>): MembershipQuery {
    const message = createBaseMembershipQuery();
    message.orgQuery = (object.orgQuery !== undefined && object.orgQuery !== null)
      ? MembershipOrgQuery.fromPartial(object.orgQuery)
      : undefined;
    message.projectQuery = (object.projectQuery !== undefined && object.projectQuery !== null)
      ? MembershipProjectQuery.fromPartial(object.projectQuery)
      : undefined;
    message.projectGrantQuery = (object.projectGrantQuery !== undefined && object.projectGrantQuery !== null)
      ? MembershipProjectGrantQuery.fromPartial(object.projectGrantQuery)
      : undefined;
    message.iamQuery = (object.iamQuery !== undefined && object.iamQuery !== null)
      ? MembershipIAMQuery.fromPartial(object.iamQuery)
      : undefined;
    return message;
  },
};

function createBaseMembershipOrgQuery(): MembershipOrgQuery {
  return { orgId: "" };
}

export const MembershipOrgQuery = {
  encode(message: MembershipOrgQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orgId !== "") {
      writer.uint32(10).string(message.orgId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MembershipOrgQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMembershipOrgQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orgId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<MembershipOrgQuery>): MembershipOrgQuery {
    return MembershipOrgQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MembershipOrgQuery>): MembershipOrgQuery {
    const message = createBaseMembershipOrgQuery();
    message.orgId = object.orgId ?? "";
    return message;
  },
};

function createBaseMembershipProjectQuery(): MembershipProjectQuery {
  return { projectId: "" };
}

export const MembershipProjectQuery = {
  encode(message: MembershipProjectQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MembershipProjectQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMembershipProjectQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<MembershipProjectQuery>): MembershipProjectQuery {
    return MembershipProjectQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MembershipProjectQuery>): MembershipProjectQuery {
    const message = createBaseMembershipProjectQuery();
    message.projectId = object.projectId ?? "";
    return message;
  },
};

function createBaseMembershipProjectGrantQuery(): MembershipProjectGrantQuery {
  return { projectGrantId: "" };
}

export const MembershipProjectGrantQuery = {
  encode(message: MembershipProjectGrantQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGrantId !== "") {
      writer.uint32(10).string(message.projectGrantId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MembershipProjectGrantQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMembershipProjectGrantQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectGrantId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<MembershipProjectGrantQuery>): MembershipProjectGrantQuery {
    return MembershipProjectGrantQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MembershipProjectGrantQuery>): MembershipProjectGrantQuery {
    const message = createBaseMembershipProjectGrantQuery();
    message.projectGrantId = object.projectGrantId ?? "";
    return message;
  },
};

function createBaseMembershipIAMQuery(): MembershipIAMQuery {
  return { iam: false };
}

export const MembershipIAMQuery = {
  encode(message: MembershipIAMQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iam === true) {
      writer.uint32(8).bool(message.iam);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MembershipIAMQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMembershipIAMQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.iam = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<MembershipIAMQuery>): MembershipIAMQuery {
    return MembershipIAMQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MembershipIAMQuery>): MembershipIAMQuery {
    const message = createBaseMembershipIAMQuery();
    message.iam = object.iam ?? false;
    return message;
  },
};

function createBaseSession(): Session {
  return {
    sessionId: "",
    agentId: "",
    authState: 0,
    userId: "",
    userName: "",
    loginName: "",
    displayName: "",
    details: undefined,
    avatarUrl: "",
  };
}

export const Session = {
  encode(message: Session, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.agentId !== "") {
      writer.uint32(18).string(message.agentId);
    }
    if (message.authState !== 0) {
      writer.uint32(24).int32(message.authState);
    }
    if (message.userId !== "") {
      writer.uint32(34).string(message.userId);
    }
    if (message.userName !== "") {
      writer.uint32(42).string(message.userName);
    }
    if (message.loginName !== "") {
      writer.uint32(58).string(message.loginName);
    }
    if (message.displayName !== "") {
      writer.uint32(66).string(message.displayName);
    }
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(74).fork()).ldelim();
    }
    if (message.avatarUrl !== "") {
      writer.uint32(82).string(message.avatarUrl);
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

          message.sessionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.agentId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.authState = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.userName = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.loginName = reader.string();
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

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.avatarUrl = reader.string();
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
    message.sessionId = object.sessionId ?? "";
    message.agentId = object.agentId ?? "";
    message.authState = object.authState ?? 0;
    message.userId = object.userId ?? "";
    message.userName = object.userName ?? "";
    message.loginName = object.loginName ?? "";
    message.displayName = object.displayName ?? "";
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.avatarUrl = object.avatarUrl ?? "";
    return message;
  },
};

function createBaseRefreshToken(): RefreshToken {
  return {
    id: "",
    details: undefined,
    clientId: "",
    authTime: undefined,
    idleExpiration: undefined,
    expiration: undefined,
    scopes: [],
    audience: [],
  };
}

export const RefreshToken = {
  encode(message: RefreshToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
    }
    if (message.clientId !== "") {
      writer.uint32(26).string(message.clientId);
    }
    if (message.authTime !== undefined) {
      Timestamp.encode(toTimestamp(message.authTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.idleExpiration !== undefined) {
      Timestamp.encode(toTimestamp(message.idleExpiration), writer.uint32(42).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.scopes) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.audience) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefreshToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefreshToken();
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
          if (tag !== 26) {
            break;
          }

          message.clientId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.authTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.idleExpiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.scopes.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.audience.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<RefreshToken>): RefreshToken {
    return RefreshToken.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RefreshToken>): RefreshToken {
    const message = createBaseRefreshToken();
    message.id = object.id ?? "";
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.clientId = object.clientId ?? "";
    message.authTime = object.authTime ?? undefined;
    message.idleExpiration = object.idleExpiration ?? undefined;
    message.expiration = object.expiration ?? undefined;
    message.scopes = object.scopes?.map((e) => e) || [];
    message.audience = object.audience?.map((e) => e) || [];
    return message;
  },
};

function createBasePersonalAccessToken(): PersonalAccessToken {
  return { id: "", details: undefined, expirationDate: undefined, scopes: [] };
}

export const PersonalAccessToken = {
  encode(message: PersonalAccessToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
    }
    if (message.expirationDate !== undefined) {
      Timestamp.encode(toTimestamp(message.expirationDate), writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.scopes) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PersonalAccessToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePersonalAccessToken();
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
          if (tag !== 26) {
            break;
          }

          message.expirationDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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

  create(base?: DeepPartial<PersonalAccessToken>): PersonalAccessToken {
    return PersonalAccessToken.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PersonalAccessToken>): PersonalAccessToken {
    const message = createBasePersonalAccessToken();
    message.id = object.id ?? "";
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.expirationDate = object.expirationDate ?? undefined;
    message.scopes = object.scopes?.map((e) => e) || [];
    return message;
  },
};

function createBaseUserGrant(): UserGrant {
  return {
    id: "",
    details: undefined,
    roleKeys: [],
    state: 0,
    userId: "",
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    displayName: "",
    orgId: "",
    orgName: "",
    orgDomain: "",
    projectId: "",
    projectName: "",
    projectGrantId: "",
    avatarUrl: "",
    preferredLoginName: "",
    userType: 0,
  };
}

export const UserGrant = {
  encode(message: UserGrant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.roleKeys) {
      writer.uint32(26).string(v!);
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    if (message.userId !== "") {
      writer.uint32(42).string(message.userId);
    }
    if (message.userName !== "") {
      writer.uint32(50).string(message.userName);
    }
    if (message.firstName !== "") {
      writer.uint32(58).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(66).string(message.lastName);
    }
    if (message.email !== "") {
      writer.uint32(74).string(message.email);
    }
    if (message.displayName !== "") {
      writer.uint32(82).string(message.displayName);
    }
    if (message.orgId !== "") {
      writer.uint32(90).string(message.orgId);
    }
    if (message.orgName !== "") {
      writer.uint32(98).string(message.orgName);
    }
    if (message.orgDomain !== "") {
      writer.uint32(106).string(message.orgDomain);
    }
    if (message.projectId !== "") {
      writer.uint32(114).string(message.projectId);
    }
    if (message.projectName !== "") {
      writer.uint32(122).string(message.projectName);
    }
    if (message.projectGrantId !== "") {
      writer.uint32(130).string(message.projectGrantId);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(138).string(message.avatarUrl);
    }
    if (message.preferredLoginName !== "") {
      writer.uint32(146).string(message.preferredLoginName);
    }
    if (message.userType !== 0) {
      writer.uint32(152).int32(message.userType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserGrant {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGrant();
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
          if (tag !== 26) {
            break;
          }

          message.roleKeys.push(reader.string());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.userName = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.firstName = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.lastName = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.email = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.orgId = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.orgName = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.orgDomain = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.projectId = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.projectName = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.projectGrantId = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.avatarUrl = reader.string();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.preferredLoginName = reader.string();
          continue;
        case 19:
          if (tag !== 152) {
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

  create(base?: DeepPartial<UserGrant>): UserGrant {
    return UserGrant.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserGrant>): UserGrant {
    const message = createBaseUserGrant();
    message.id = object.id ?? "";
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.roleKeys = object.roleKeys?.map((e) => e) || [];
    message.state = object.state ?? 0;
    message.userId = object.userId ?? "";
    message.userName = object.userName ?? "";
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    message.email = object.email ?? "";
    message.displayName = object.displayName ?? "";
    message.orgId = object.orgId ?? "";
    message.orgName = object.orgName ?? "";
    message.orgDomain = object.orgDomain ?? "";
    message.projectId = object.projectId ?? "";
    message.projectName = object.projectName ?? "";
    message.projectGrantId = object.projectGrantId ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    message.preferredLoginName = object.preferredLoginName ?? "";
    message.userType = object.userType ?? 0;
    return message;
  },
};

function createBaseUserGrantQuery(): UserGrantQuery {
  return {
    projectIdQuery: undefined,
    userIdQuery: undefined,
    withGrantedQuery: undefined,
    roleKeyQuery: undefined,
    projectGrantIdQuery: undefined,
    userNameQuery: undefined,
    firstNameQuery: undefined,
    lastNameQuery: undefined,
    emailQuery: undefined,
    orgNameQuery: undefined,
    orgDomainQuery: undefined,
    projectNameQuery: undefined,
    displayNameQuery: undefined,
    userTypeQuery: undefined,
  };
}

export const UserGrantQuery = {
  encode(message: UserGrantQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectIdQuery !== undefined) {
      UserGrantProjectIDQuery.encode(message.projectIdQuery, writer.uint32(10).fork()).ldelim();
    }
    if (message.userIdQuery !== undefined) {
      UserGrantUserIDQuery.encode(message.userIdQuery, writer.uint32(18).fork()).ldelim();
    }
    if (message.withGrantedQuery !== undefined) {
      UserGrantWithGrantedQuery.encode(message.withGrantedQuery, writer.uint32(26).fork()).ldelim();
    }
    if (message.roleKeyQuery !== undefined) {
      UserGrantRoleKeyQuery.encode(message.roleKeyQuery, writer.uint32(34).fork()).ldelim();
    }
    if (message.projectGrantIdQuery !== undefined) {
      UserGrantProjectGrantIDQuery.encode(message.projectGrantIdQuery, writer.uint32(42).fork()).ldelim();
    }
    if (message.userNameQuery !== undefined) {
      UserGrantUserNameQuery.encode(message.userNameQuery, writer.uint32(50).fork()).ldelim();
    }
    if (message.firstNameQuery !== undefined) {
      UserGrantFirstNameQuery.encode(message.firstNameQuery, writer.uint32(58).fork()).ldelim();
    }
    if (message.lastNameQuery !== undefined) {
      UserGrantLastNameQuery.encode(message.lastNameQuery, writer.uint32(66).fork()).ldelim();
    }
    if (message.emailQuery !== undefined) {
      UserGrantEmailQuery.encode(message.emailQuery, writer.uint32(74).fork()).ldelim();
    }
    if (message.orgNameQuery !== undefined) {
      UserGrantOrgNameQuery.encode(message.orgNameQuery, writer.uint32(82).fork()).ldelim();
    }
    if (message.orgDomainQuery !== undefined) {
      UserGrantOrgDomainQuery.encode(message.orgDomainQuery, writer.uint32(90).fork()).ldelim();
    }
    if (message.projectNameQuery !== undefined) {
      UserGrantProjectNameQuery.encode(message.projectNameQuery, writer.uint32(98).fork()).ldelim();
    }
    if (message.displayNameQuery !== undefined) {
      UserGrantDisplayNameQuery.encode(message.displayNameQuery, writer.uint32(106).fork()).ldelim();
    }
    if (message.userTypeQuery !== undefined) {
      UserGrantUserTypeQuery.encode(message.userTypeQuery, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGrantQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectIdQuery = UserGrantProjectIDQuery.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userIdQuery = UserGrantUserIDQuery.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.withGrantedQuery = UserGrantWithGrantedQuery.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.roleKeyQuery = UserGrantRoleKeyQuery.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.projectGrantIdQuery = UserGrantProjectGrantIDQuery.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.userNameQuery = UserGrantUserNameQuery.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.firstNameQuery = UserGrantFirstNameQuery.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.lastNameQuery = UserGrantLastNameQuery.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.emailQuery = UserGrantEmailQuery.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.orgNameQuery = UserGrantOrgNameQuery.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.orgDomainQuery = UserGrantOrgDomainQuery.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.projectNameQuery = UserGrantProjectNameQuery.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.displayNameQuery = UserGrantDisplayNameQuery.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.userTypeQuery = UserGrantUserTypeQuery.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<UserGrantQuery>): UserGrantQuery {
    return UserGrantQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserGrantQuery>): UserGrantQuery {
    const message = createBaseUserGrantQuery();
    message.projectIdQuery = (object.projectIdQuery !== undefined && object.projectIdQuery !== null)
      ? UserGrantProjectIDQuery.fromPartial(object.projectIdQuery)
      : undefined;
    message.userIdQuery = (object.userIdQuery !== undefined && object.userIdQuery !== null)
      ? UserGrantUserIDQuery.fromPartial(object.userIdQuery)
      : undefined;
    message.withGrantedQuery = (object.withGrantedQuery !== undefined && object.withGrantedQuery !== null)
      ? UserGrantWithGrantedQuery.fromPartial(object.withGrantedQuery)
      : undefined;
    message.roleKeyQuery = (object.roleKeyQuery !== undefined && object.roleKeyQuery !== null)
      ? UserGrantRoleKeyQuery.fromPartial(object.roleKeyQuery)
      : undefined;
    message.projectGrantIdQuery = (object.projectGrantIdQuery !== undefined && object.projectGrantIdQuery !== null)
      ? UserGrantProjectGrantIDQuery.fromPartial(object.projectGrantIdQuery)
      : undefined;
    message.userNameQuery = (object.userNameQuery !== undefined && object.userNameQuery !== null)
      ? UserGrantUserNameQuery.fromPartial(object.userNameQuery)
      : undefined;
    message.firstNameQuery = (object.firstNameQuery !== undefined && object.firstNameQuery !== null)
      ? UserGrantFirstNameQuery.fromPartial(object.firstNameQuery)
      : undefined;
    message.lastNameQuery = (object.lastNameQuery !== undefined && object.lastNameQuery !== null)
      ? UserGrantLastNameQuery.fromPartial(object.lastNameQuery)
      : undefined;
    message.emailQuery = (object.emailQuery !== undefined && object.emailQuery !== null)
      ? UserGrantEmailQuery.fromPartial(object.emailQuery)
      : undefined;
    message.orgNameQuery = (object.orgNameQuery !== undefined && object.orgNameQuery !== null)
      ? UserGrantOrgNameQuery.fromPartial(object.orgNameQuery)
      : undefined;
    message.orgDomainQuery = (object.orgDomainQuery !== undefined && object.orgDomainQuery !== null)
      ? UserGrantOrgDomainQuery.fromPartial(object.orgDomainQuery)
      : undefined;
    message.projectNameQuery = (object.projectNameQuery !== undefined && object.projectNameQuery !== null)
      ? UserGrantProjectNameQuery.fromPartial(object.projectNameQuery)
      : undefined;
    message.displayNameQuery = (object.displayNameQuery !== undefined && object.displayNameQuery !== null)
      ? UserGrantDisplayNameQuery.fromPartial(object.displayNameQuery)
      : undefined;
    message.userTypeQuery = (object.userTypeQuery !== undefined && object.userTypeQuery !== null)
      ? UserGrantUserTypeQuery.fromPartial(object.userTypeQuery)
      : undefined;
    return message;
  },
};

function createBaseUserGrantProjectIDQuery(): UserGrantProjectIDQuery {
  return { projectId: "" };
}

export const UserGrantProjectIDQuery = {
  encode(message: UserGrantProjectIDQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantProjectIDQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGrantProjectIDQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<UserGrantProjectIDQuery>): UserGrantProjectIDQuery {
    return UserGrantProjectIDQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserGrantProjectIDQuery>): UserGrantProjectIDQuery {
    const message = createBaseUserGrantProjectIDQuery();
    message.projectId = object.projectId ?? "";
    return message;
  },
};

function createBaseUserGrantUserIDQuery(): UserGrantUserIDQuery {
  return { userId: "" };
}

export const UserGrantUserIDQuery = {
  encode(message: UserGrantUserIDQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantUserIDQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGrantUserIDQuery();
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

  create(base?: DeepPartial<UserGrantUserIDQuery>): UserGrantUserIDQuery {
    return UserGrantUserIDQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserGrantUserIDQuery>): UserGrantUserIDQuery {
    const message = createBaseUserGrantUserIDQuery();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseUserGrantWithGrantedQuery(): UserGrantWithGrantedQuery {
  return { withGranted: false };
}

export const UserGrantWithGrantedQuery = {
  encode(message: UserGrantWithGrantedQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withGranted === true) {
      writer.uint32(8).bool(message.withGranted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantWithGrantedQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGrantWithGrantedQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.withGranted = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<UserGrantWithGrantedQuery>): UserGrantWithGrantedQuery {
    return UserGrantWithGrantedQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserGrantWithGrantedQuery>): UserGrantWithGrantedQuery {
    const message = createBaseUserGrantWithGrantedQuery();
    message.withGranted = object.withGranted ?? false;
    return message;
  },
};

function createBaseUserGrantRoleKeyQuery(): UserGrantRoleKeyQuery {
  return { roleKey: "", method: 0 };
}

export const UserGrantRoleKeyQuery = {
  encode(message: UserGrantRoleKeyQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.roleKey !== "") {
      writer.uint32(10).string(message.roleKey);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantRoleKeyQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGrantRoleKeyQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.roleKey = reader.string();
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

  create(base?: DeepPartial<UserGrantRoleKeyQuery>): UserGrantRoleKeyQuery {
    return UserGrantRoleKeyQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserGrantRoleKeyQuery>): UserGrantRoleKeyQuery {
    const message = createBaseUserGrantRoleKeyQuery();
    message.roleKey = object.roleKey ?? "";
    message.method = object.method ?? 0;
    return message;
  },
};

function createBaseUserGrantProjectGrantIDQuery(): UserGrantProjectGrantIDQuery {
  return { projectGrantId: "" };
}

export const UserGrantProjectGrantIDQuery = {
  encode(message: UserGrantProjectGrantIDQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectGrantId !== "") {
      writer.uint32(10).string(message.projectGrantId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantProjectGrantIDQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGrantProjectGrantIDQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectGrantId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<UserGrantProjectGrantIDQuery>): UserGrantProjectGrantIDQuery {
    return UserGrantProjectGrantIDQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserGrantProjectGrantIDQuery>): UserGrantProjectGrantIDQuery {
    const message = createBaseUserGrantProjectGrantIDQuery();
    message.projectGrantId = object.projectGrantId ?? "";
    return message;
  },
};

function createBaseUserGrantUserNameQuery(): UserGrantUserNameQuery {
  return { userName: "", method: 0 };
}

export const UserGrantUserNameQuery = {
  encode(message: UserGrantUserNameQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userName !== "") {
      writer.uint32(10).string(message.userName);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantUserNameQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGrantUserNameQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userName = reader.string();
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

  create(base?: DeepPartial<UserGrantUserNameQuery>): UserGrantUserNameQuery {
    return UserGrantUserNameQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserGrantUserNameQuery>): UserGrantUserNameQuery {
    const message = createBaseUserGrantUserNameQuery();
    message.userName = object.userName ?? "";
    message.method = object.method ?? 0;
    return message;
  },
};

function createBaseUserGrantFirstNameQuery(): UserGrantFirstNameQuery {
  return { firstName: "", method: 0 };
}

export const UserGrantFirstNameQuery = {
  encode(message: UserGrantFirstNameQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.firstName !== "") {
      writer.uint32(10).string(message.firstName);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantFirstNameQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGrantFirstNameQuery();
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

  create(base?: DeepPartial<UserGrantFirstNameQuery>): UserGrantFirstNameQuery {
    return UserGrantFirstNameQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserGrantFirstNameQuery>): UserGrantFirstNameQuery {
    const message = createBaseUserGrantFirstNameQuery();
    message.firstName = object.firstName ?? "";
    message.method = object.method ?? 0;
    return message;
  },
};

function createBaseUserGrantLastNameQuery(): UserGrantLastNameQuery {
  return { lastName: "", method: 0 };
}

export const UserGrantLastNameQuery = {
  encode(message: UserGrantLastNameQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastName !== "") {
      writer.uint32(10).string(message.lastName);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantLastNameQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGrantLastNameQuery();
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

  create(base?: DeepPartial<UserGrantLastNameQuery>): UserGrantLastNameQuery {
    return UserGrantLastNameQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserGrantLastNameQuery>): UserGrantLastNameQuery {
    const message = createBaseUserGrantLastNameQuery();
    message.lastName = object.lastName ?? "";
    message.method = object.method ?? 0;
    return message;
  },
};

function createBaseUserGrantEmailQuery(): UserGrantEmailQuery {
  return { email: "", method: 0 };
}

export const UserGrantEmailQuery = {
  encode(message: UserGrantEmailQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantEmailQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGrantEmailQuery();
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

  create(base?: DeepPartial<UserGrantEmailQuery>): UserGrantEmailQuery {
    return UserGrantEmailQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserGrantEmailQuery>): UserGrantEmailQuery {
    const message = createBaseUserGrantEmailQuery();
    message.email = object.email ?? "";
    message.method = object.method ?? 0;
    return message;
  },
};

function createBaseUserGrantOrgNameQuery(): UserGrantOrgNameQuery {
  return { orgName: "", method: 0 };
}

export const UserGrantOrgNameQuery = {
  encode(message: UserGrantOrgNameQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orgName !== "") {
      writer.uint32(10).string(message.orgName);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantOrgNameQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGrantOrgNameQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orgName = reader.string();
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

  create(base?: DeepPartial<UserGrantOrgNameQuery>): UserGrantOrgNameQuery {
    return UserGrantOrgNameQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserGrantOrgNameQuery>): UserGrantOrgNameQuery {
    const message = createBaseUserGrantOrgNameQuery();
    message.orgName = object.orgName ?? "";
    message.method = object.method ?? 0;
    return message;
  },
};

function createBaseUserGrantOrgDomainQuery(): UserGrantOrgDomainQuery {
  return { orgDomain: "", method: 0 };
}

export const UserGrantOrgDomainQuery = {
  encode(message: UserGrantOrgDomainQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orgDomain !== "") {
      writer.uint32(10).string(message.orgDomain);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantOrgDomainQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGrantOrgDomainQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orgDomain = reader.string();
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

  create(base?: DeepPartial<UserGrantOrgDomainQuery>): UserGrantOrgDomainQuery {
    return UserGrantOrgDomainQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserGrantOrgDomainQuery>): UserGrantOrgDomainQuery {
    const message = createBaseUserGrantOrgDomainQuery();
    message.orgDomain = object.orgDomain ?? "";
    message.method = object.method ?? 0;
    return message;
  },
};

function createBaseUserGrantProjectNameQuery(): UserGrantProjectNameQuery {
  return { projectName: "", method: 0 };
}

export const UserGrantProjectNameQuery = {
  encode(message: UserGrantProjectNameQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectName !== "") {
      writer.uint32(10).string(message.projectName);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantProjectNameQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGrantProjectNameQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectName = reader.string();
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

  create(base?: DeepPartial<UserGrantProjectNameQuery>): UserGrantProjectNameQuery {
    return UserGrantProjectNameQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserGrantProjectNameQuery>): UserGrantProjectNameQuery {
    const message = createBaseUserGrantProjectNameQuery();
    message.projectName = object.projectName ?? "";
    message.method = object.method ?? 0;
    return message;
  },
};

function createBaseUserGrantDisplayNameQuery(): UserGrantDisplayNameQuery {
  return { displayName: "", method: 0 };
}

export const UserGrantDisplayNameQuery = {
  encode(message: UserGrantDisplayNameQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.displayName !== "") {
      writer.uint32(10).string(message.displayName);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantDisplayNameQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGrantDisplayNameQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.displayName = reader.string();
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

  create(base?: DeepPartial<UserGrantDisplayNameQuery>): UserGrantDisplayNameQuery {
    return UserGrantDisplayNameQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserGrantDisplayNameQuery>): UserGrantDisplayNameQuery {
    const message = createBaseUserGrantDisplayNameQuery();
    message.displayName = object.displayName ?? "";
    message.method = object.method ?? 0;
    return message;
  },
};

function createBaseUserGrantUserTypeQuery(): UserGrantUserTypeQuery {
  return { type: 0 };
}

export const UserGrantUserTypeQuery = {
  encode(message: UserGrantUserTypeQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantUserTypeQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGrantUserTypeQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  create(base?: DeepPartial<UserGrantUserTypeQuery>): UserGrantUserTypeQuery {
    return UserGrantUserTypeQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserGrantUserTypeQuery>): UserGrantUserTypeQuery {
    const message = createBaseUserGrantUserTypeQuery();
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
