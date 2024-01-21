import * as jspb from 'google-protobuf'

import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_object_v2beta_object_pb from '../../../zitadel/object/v2beta/object_pb'; // proto import: "zitadel/object/v2beta/object.proto"
import * as zitadel_user_v2beta_email_pb from '../../../zitadel/user/v2beta/email_pb'; // proto import: "zitadel/user/v2beta/email.proto"
import * as zitadel_user_v2beta_phone_pb from '../../../zitadel/user/v2beta/phone_pb'; // proto import: "zitadel/user/v2beta/phone.proto"


export class SetHumanProfile extends jspb.Message {
  getGivenName(): string;
  setGivenName(value: string): SetHumanProfile;

  getFamilyName(): string;
  setFamilyName(value: string): SetHumanProfile;

  getNickName(): string;
  setNickName(value: string): SetHumanProfile;
  hasNickName(): boolean;
  clearNickName(): SetHumanProfile;

  getDisplayName(): string;
  setDisplayName(value: string): SetHumanProfile;
  hasDisplayName(): boolean;
  clearDisplayName(): SetHumanProfile;

  getPreferredLanguage(): string;
  setPreferredLanguage(value: string): SetHumanProfile;
  hasPreferredLanguage(): boolean;
  clearPreferredLanguage(): SetHumanProfile;

  getGender(): Gender;
  setGender(value: Gender): SetHumanProfile;
  hasGender(): boolean;
  clearGender(): SetHumanProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetHumanProfile.AsObject;
  static toObject(includeInstance: boolean, msg: SetHumanProfile): SetHumanProfile.AsObject;
  static serializeBinaryToWriter(message: SetHumanProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetHumanProfile;
  static deserializeBinaryFromReader(message: SetHumanProfile, reader: jspb.BinaryReader): SetHumanProfile;
}

export namespace SetHumanProfile {
  export type AsObject = {
    givenName: string,
    familyName: string,
    nickName?: string,
    displayName?: string,
    preferredLanguage?: string,
    gender?: Gender,
  }

  export enum NickNameCase { 
    _NICK_NAME_NOT_SET = 0,
    NICK_NAME = 3,
  }

  export enum DisplayNameCase { 
    _DISPLAY_NAME_NOT_SET = 0,
    DISPLAY_NAME = 4,
  }

  export enum PreferredLanguageCase { 
    _PREFERRED_LANGUAGE_NOT_SET = 0,
    PREFERRED_LANGUAGE = 5,
  }

  export enum GenderCase { 
    _GENDER_NOT_SET = 0,
    GENDER = 6,
  }
}

export class HumanProfile extends jspb.Message {
  getGivenName(): string;
  setGivenName(value: string): HumanProfile;

  getFamilyName(): string;
  setFamilyName(value: string): HumanProfile;

  getNickName(): string;
  setNickName(value: string): HumanProfile;
  hasNickName(): boolean;
  clearNickName(): HumanProfile;

  getDisplayName(): string;
  setDisplayName(value: string): HumanProfile;
  hasDisplayName(): boolean;
  clearDisplayName(): HumanProfile;

  getPreferredLanguage(): string;
  setPreferredLanguage(value: string): HumanProfile;
  hasPreferredLanguage(): boolean;
  clearPreferredLanguage(): HumanProfile;

  getGender(): Gender;
  setGender(value: Gender): HumanProfile;
  hasGender(): boolean;
  clearGender(): HumanProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanProfile.AsObject;
  static toObject(includeInstance: boolean, msg: HumanProfile): HumanProfile.AsObject;
  static serializeBinaryToWriter(message: HumanProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanProfile;
  static deserializeBinaryFromReader(message: HumanProfile, reader: jspb.BinaryReader): HumanProfile;
}

export namespace HumanProfile {
  export type AsObject = {
    givenName: string,
    familyName: string,
    nickName?: string,
    displayName?: string,
    preferredLanguage?: string,
    gender?: Gender,
  }

  export enum NickNameCase { 
    _NICK_NAME_NOT_SET = 0,
    NICK_NAME = 3,
  }

  export enum DisplayNameCase { 
    _DISPLAY_NAME_NOT_SET = 0,
    DISPLAY_NAME = 4,
  }

  export enum PreferredLanguageCase { 
    _PREFERRED_LANGUAGE_NOT_SET = 0,
    PREFERRED_LANGUAGE = 5,
  }

  export enum GenderCase { 
    _GENDER_NOT_SET = 0,
    GENDER = 6,
  }
}

export class SetMetadataEntry extends jspb.Message {
  getKey(): string;
  setKey(value: string): SetMetadataEntry;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): SetMetadataEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetMetadataEntry.AsObject;
  static toObject(includeInstance: boolean, msg: SetMetadataEntry): SetMetadataEntry.AsObject;
  static serializeBinaryToWriter(message: SetMetadataEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetMetadataEntry;
  static deserializeBinaryFromReader(message: SetMetadataEntry, reader: jspb.BinaryReader): SetMetadataEntry;
}

export namespace SetMetadataEntry {
  export type AsObject = {
    key: string,
    value: Uint8Array | string,
  }
}

export class HumanUser extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): HumanUser;

  getState(): UserState;
  setState(value: UserState): HumanUser;

  getUsername(): string;
  setUsername(value: string): HumanUser;

  getLoginNamesList(): Array<string>;
  setLoginNamesList(value: Array<string>): HumanUser;
  clearLoginNamesList(): HumanUser;
  addLoginNames(value: string, index?: number): HumanUser;

  getPreferredLoginName(): string;
  setPreferredLoginName(value: string): HumanUser;

  getProfile(): HumanProfile | undefined;
  setProfile(value?: HumanProfile): HumanUser;
  hasProfile(): boolean;
  clearProfile(): HumanUser;

  getEmail(): zitadel_user_v2beta_email_pb.HumanEmail | undefined;
  setEmail(value?: zitadel_user_v2beta_email_pb.HumanEmail): HumanUser;
  hasEmail(): boolean;
  clearEmail(): HumanUser;

  getPhone(): zitadel_user_v2beta_phone_pb.HumanPhone | undefined;
  setPhone(value?: zitadel_user_v2beta_phone_pb.HumanPhone): HumanUser;
  hasPhone(): boolean;
  clearPhone(): HumanUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanUser.AsObject;
  static toObject(includeInstance: boolean, msg: HumanUser): HumanUser.AsObject;
  static serializeBinaryToWriter(message: HumanUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanUser;
  static deserializeBinaryFromReader(message: HumanUser, reader: jspb.BinaryReader): HumanUser;
}

export namespace HumanUser {
  export type AsObject = {
    userId: string,
    state: UserState,
    username: string,
    loginNamesList: Array<string>,
    preferredLoginName: string,
    profile?: HumanProfile.AsObject,
    email?: zitadel_user_v2beta_email_pb.HumanEmail.AsObject,
    phone?: zitadel_user_v2beta_phone_pb.HumanPhone.AsObject,
  }
}

export enum Gender { 
  GENDER_UNSPECIFIED = 0,
  GENDER_FEMALE = 1,
  GENDER_MALE = 2,
  GENDER_DIVERSE = 3,
}
export enum UserState { 
  USER_STATE_UNSPECIFIED = 0,
  USER_STATE_ACTIVE = 1,
  USER_STATE_INACTIVE = 2,
  USER_STATE_DELETED = 3,
  USER_STATE_LOCKED = 4,
  USER_STATE_SUSPEND = 5,
  USER_STATE_INITIAL = 6,
}
