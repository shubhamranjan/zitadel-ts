/* eslint-disable */
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { Duration } from "../google/protobuf/duration";
import { Timestamp } from "../google/protobuf/timestamp";
import { KeyType } from "./auth_n_key";
import { InstanceFeature } from "./feature";
import { Domain, DomainFieldName, DomainSearchQuery, FieldName, Instance, InstanceDetail, Query } from "./instance";
import { Member, SearchQuery } from "./member";
import { ListDetails, ListQuery, ObjectDetails } from "./object";
import { Notification, Unit } from "./quota";

export const protobufPackage = "zitadel.system.v1";

/** This is an empty request */
export interface HealthzRequest {
}

/** This is an empty response */
export interface HealthzResponse {
}

export interface ListInstancesRequest {
  /** list limitations and ordering */
  query:
    | ListQuery
    | undefined;
  /** the field the result is sorted */
  sortingColumn: FieldName;
  /** criterias the client is looking for */
  queries: Query[];
}

export interface ListInstancesResponse {
  details: ListDetails | undefined;
  sortingColumn: FieldName;
  result: Instance[];
}

export interface GetInstanceRequest {
  instanceId: string;
}

export interface GetInstanceResponse {
  instance: InstanceDetail | undefined;
}

export interface AddInstanceRequest {
  instanceName: string;
  firstOrgName: string;
  customDomain: string;
  ownerUserName: string;
  ownerEmail: AddInstanceRequest_Email | undefined;
  ownerProfile: AddInstanceRequest_Profile | undefined;
  ownerPassword: AddInstanceRequest_Password | undefined;
  defaultLanguage: string;
}

export interface AddInstanceRequest_Profile {
  firstName: string;
  lastName: string;
  preferredLanguage: string;
}

export interface AddInstanceRequest_Email {
  email: string;
  isEmailVerified: boolean;
}

export interface AddInstanceRequest_Password {
  password: string;
  passwordChangeRequired: boolean;
}

export interface AddInstanceResponse {
  instanceId: string;
  details: ObjectDetails | undefined;
}

export interface CreateInstanceRequest {
  instanceName: string;
  firstOrgName: string;
  customDomain: string;
  /** oneof field for the user managing the instance */
  human?: CreateInstanceRequest_Human | undefined;
  machine?: CreateInstanceRequest_Machine | undefined;
  defaultLanguage: string;
}

export interface CreateInstanceRequest_Profile {
  firstName: string;
  lastName: string;
  preferredLanguage: string;
}

export interface CreateInstanceRequest_Email {
  email: string;
  isEmailVerified: boolean;
}

export interface CreateInstanceRequest_Password {
  password: string;
  passwordChangeRequired: boolean;
}

export interface CreateInstanceRequest_Human {
  userName: string;
  email: CreateInstanceRequest_Email | undefined;
  profile: CreateInstanceRequest_Profile | undefined;
  password: CreateInstanceRequest_Password | undefined;
}

export interface CreateInstanceRequest_PersonalAccessToken {
  expirationDate: Date | undefined;
}

export interface CreateInstanceRequest_MachineKey {
  type: KeyType;
  expirationDate: Date | undefined;
}

export interface CreateInstanceRequest_Machine {
  userName: string;
  name: string;
  personalAccessToken: CreateInstanceRequest_PersonalAccessToken | undefined;
  machineKey: CreateInstanceRequest_MachineKey | undefined;
}

export interface CreateInstanceResponse {
  instanceId: string;
  details: ObjectDetails | undefined;
  pat: string;
  machineKey: Uint8Array;
}

export interface UpdateInstanceRequest {
  instanceId: string;
  instanceName: string;
}

export interface UpdateInstanceResponse {
  details: ObjectDetails | undefined;
}

export interface RemoveInstanceRequest {
  instanceId: string;
}

export interface RemoveInstanceResponse {
  details: ObjectDetails | undefined;
}

export interface ListIAMMembersRequest {
  query: ListQuery | undefined;
  instanceId: string;
  queries: SearchQuery[];
}

export interface ListIAMMembersResponse {
  details: ListDetails | undefined;
  result: Member[];
}

export interface GetUsageRequest {
  instanceId: string;
}

export interface AddQuotaRequest {
  instanceId: string;
  /** the unit a quota should be imposed on */
  unit: Unit;
  /** the starting time from which the current quota period is calculated from. This is relevant for querying the current usage. */
  from:
    | Date
    | undefined;
  /** the quota periods duration */
  resetInterval:
    | Duration
    | undefined;
  /** the quota amount of units */
  amount: number;
  /** whether ZITADEL should block further usage when the configured amount is used */
  limit: boolean;
  /** the handlers, ZITADEL executes when certain quota percentages are reached */
  notifications: Notification[];
}

export interface AddQuotaResponse {
  details: ObjectDetails | undefined;
}

export interface SetQuotaRequest {
  instanceId: string;
  /** the unit a quota should be imposed on */
  unit: Unit;
  /** the starting time from which the current quota period is calculated from. This is relevant for querying the current usage. */
  from:
    | Date
    | undefined;
  /** the quota periods duration */
  resetInterval:
    | Duration
    | undefined;
  /** the quota amount of units */
  amount: number;
  /** whether ZITADEL should block further usage when the configured amount is used */
  limit: boolean;
  /** the handlers, ZITADEL executes when certain quota percentages are reached */
  notifications: Notification[];
}

export interface SetQuotaResponse {
  details: ObjectDetails | undefined;
}

export interface RemoveQuotaRequest {
  instanceId: string;
  unit: Unit;
}

export interface RemoveQuotaResponse {
  details: ObjectDetails | undefined;
}

export interface SetLimitsRequest {
  instanceId: string;
  auditLogRetention: Duration | undefined;
}

export interface SetLimitsResponse {
  details: ObjectDetails | undefined;
}

export interface ResetLimitsRequest {
  instanceId: string;
}

export interface ResetLimitsResponse {
  details: ObjectDetails | undefined;
}

export interface ExistsDomainRequest {
  domain: string;
}

export interface ExistsDomainResponse {
  exists: boolean;
}

export interface ListDomainsRequest {
  /** list limitations and ordering */
  instanceId: string;
  query:
    | ListQuery
    | undefined;
  /** the field the result is sorted */
  sortingColumn: DomainFieldName;
  /** criterias the client is looking for */
  queries: DomainSearchQuery[];
}

export interface ListDomainsResponse {
  details: ListDetails | undefined;
  sortingColumn: DomainFieldName;
  result: Domain[];
}

export interface AddDomainRequest {
  instanceId: string;
  domain: string;
}

export interface AddDomainResponse {
  details: ObjectDetails | undefined;
}

export interface RemoveDomainRequest {
  instanceId: string;
  domain: string;
}

export interface RemoveDomainResponse {
  details: ObjectDetails | undefined;
}

export interface SetPrimaryDomainRequest {
  instanceId: string;
  domain: string;
}

export interface SetPrimaryDomainResponse {
  details: ObjectDetails | undefined;
}

export interface ChangeSubscriptionRequest {
  domain: string;
  subscriptionName: string;
  requestLimit: number;
  actionMinsLimit: number;
}

export interface ChangeSubscriptionResponse {
  details: ObjectDetails | undefined;
}

/** This is an empty request */
export interface ListViewsRequest {
}

export interface ListViewsResponse {
  /** TODO: list details */
  result: View[];
}

export interface ClearViewRequest {
  database: string;
  viewName: string;
}

/** This is an empty response */
export interface ClearViewResponse {
}

/** This is an empty request */
export interface ListFailedEventsRequest {
}

export interface ListFailedEventsResponse {
  /** TODO: list details */
  result: FailedEvent[];
}

export interface RemoveFailedEventRequest {
  database: string;
  viewName: string;
  failedSequence: number;
  instanceId: string;
}

/** This is an empty response */
export interface RemoveFailedEventResponse {
}

export interface View {
  database: string;
  viewName: string;
  processedSequence: number;
  /** The timestamp the event occured */
  eventTimestamp: Date | undefined;
  lastSuccessfulSpoolerRun: Date | undefined;
  instance: string;
}

export interface FailedEvent {
  database: string;
  viewName: string;
  failedSequence: number;
  failureCount: number;
  errorMessage: string;
  lastFailed: Date | undefined;
}

export interface SetInstanceFeatureRequest {
  instanceId: string;
  featureId: InstanceFeature;
  bool?: boolean | undefined;
}

export interface SetInstanceFeatureResponse {
  details: ObjectDetails | undefined;
}

function createBaseHealthzRequest(): HealthzRequest {
  return {};
}

export const HealthzRequest = {
  encode(_: HealthzRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HealthzRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHealthzRequest();
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

  create(base?: DeepPartial<HealthzRequest>): HealthzRequest {
    return HealthzRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<HealthzRequest>): HealthzRequest {
    const message = createBaseHealthzRequest();
    return message;
  },
};

function createBaseHealthzResponse(): HealthzResponse {
  return {};
}

export const HealthzResponse = {
  encode(_: HealthzResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HealthzResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHealthzResponse();
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

  create(base?: DeepPartial<HealthzResponse>): HealthzResponse {
    return HealthzResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<HealthzResponse>): HealthzResponse {
    const message = createBaseHealthzResponse();
    return message;
  },
};

function createBaseListInstancesRequest(): ListInstancesRequest {
  return { query: undefined, sortingColumn: 0, queries: [] };
}

export const ListInstancesRequest = {
  encode(message: ListInstancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.query !== undefined) {
      ListQuery.encode(message.query, writer.uint32(10).fork()).ldelim();
    }
    if (message.sortingColumn !== 0) {
      writer.uint32(16).int32(message.sortingColumn);
    }
    for (const v of message.queries) {
      Query.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListInstancesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInstancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.query = ListQuery.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.sortingColumn = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.queries.push(Query.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListInstancesRequest>): ListInstancesRequest {
    return ListInstancesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListInstancesRequest>): ListInstancesRequest {
    const message = createBaseListInstancesRequest();
    message.query = (object.query !== undefined && object.query !== null)
      ? ListQuery.fromPartial(object.query)
      : undefined;
    message.sortingColumn = object.sortingColumn ?? 0;
    message.queries = object.queries?.map((e) => Query.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListInstancesResponse(): ListInstancesResponse {
  return { details: undefined, sortingColumn: 0, result: [] };
}

export const ListInstancesResponse = {
  encode(message: ListInstancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ListDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.sortingColumn !== 0) {
      writer.uint32(16).int32(message.sortingColumn);
    }
    for (const v of message.result) {
      Instance.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListInstancesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInstancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ListDetails.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.sortingColumn = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.result.push(Instance.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListInstancesResponse>): ListInstancesResponse {
    return ListInstancesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListInstancesResponse>): ListInstancesResponse {
    const message = createBaseListInstancesResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? ListDetails.fromPartial(object.details)
      : undefined;
    message.sortingColumn = object.sortingColumn ?? 0;
    message.result = object.result?.map((e) => Instance.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetInstanceRequest(): GetInstanceRequest {
  return { instanceId: "" };
}

export const GetInstanceRequest = {
  encode(message: GetInstanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetInstanceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetInstanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetInstanceRequest>): GetInstanceRequest {
    return GetInstanceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetInstanceRequest>): GetInstanceRequest {
    const message = createBaseGetInstanceRequest();
    message.instanceId = object.instanceId ?? "";
    return message;
  },
};

function createBaseGetInstanceResponse(): GetInstanceResponse {
  return { instance: undefined };
}

export const GetInstanceResponse = {
  encode(message: GetInstanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instance !== undefined) {
      InstanceDetail.encode(message.instance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetInstanceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetInstanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instance = InstanceDetail.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetInstanceResponse>): GetInstanceResponse {
    return GetInstanceResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetInstanceResponse>): GetInstanceResponse {
    const message = createBaseGetInstanceResponse();
    message.instance = (object.instance !== undefined && object.instance !== null)
      ? InstanceDetail.fromPartial(object.instance)
      : undefined;
    return message;
  },
};

function createBaseAddInstanceRequest(): AddInstanceRequest {
  return {
    instanceName: "",
    firstOrgName: "",
    customDomain: "",
    ownerUserName: "",
    ownerEmail: undefined,
    ownerProfile: undefined,
    ownerPassword: undefined,
    defaultLanguage: "",
  };
}

export const AddInstanceRequest = {
  encode(message: AddInstanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceName !== "") {
      writer.uint32(10).string(message.instanceName);
    }
    if (message.firstOrgName !== "") {
      writer.uint32(18).string(message.firstOrgName);
    }
    if (message.customDomain !== "") {
      writer.uint32(26).string(message.customDomain);
    }
    if (message.ownerUserName !== "") {
      writer.uint32(34).string(message.ownerUserName);
    }
    if (message.ownerEmail !== undefined) {
      AddInstanceRequest_Email.encode(message.ownerEmail, writer.uint32(42).fork()).ldelim();
    }
    if (message.ownerProfile !== undefined) {
      AddInstanceRequest_Profile.encode(message.ownerProfile, writer.uint32(50).fork()).ldelim();
    }
    if (message.ownerPassword !== undefined) {
      AddInstanceRequest_Password.encode(message.ownerPassword, writer.uint32(58).fork()).ldelim();
    }
    if (message.defaultLanguage !== "") {
      writer.uint32(66).string(message.defaultLanguage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddInstanceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddInstanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.firstOrgName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.customDomain = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.ownerUserName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.ownerEmail = AddInstanceRequest_Email.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.ownerProfile = AddInstanceRequest_Profile.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.ownerPassword = AddInstanceRequest_Password.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.defaultLanguage = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AddInstanceRequest>): AddInstanceRequest {
    return AddInstanceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddInstanceRequest>): AddInstanceRequest {
    const message = createBaseAddInstanceRequest();
    message.instanceName = object.instanceName ?? "";
    message.firstOrgName = object.firstOrgName ?? "";
    message.customDomain = object.customDomain ?? "";
    message.ownerUserName = object.ownerUserName ?? "";
    message.ownerEmail = (object.ownerEmail !== undefined && object.ownerEmail !== null)
      ? AddInstanceRequest_Email.fromPartial(object.ownerEmail)
      : undefined;
    message.ownerProfile = (object.ownerProfile !== undefined && object.ownerProfile !== null)
      ? AddInstanceRequest_Profile.fromPartial(object.ownerProfile)
      : undefined;
    message.ownerPassword = (object.ownerPassword !== undefined && object.ownerPassword !== null)
      ? AddInstanceRequest_Password.fromPartial(object.ownerPassword)
      : undefined;
    message.defaultLanguage = object.defaultLanguage ?? "";
    return message;
  },
};

function createBaseAddInstanceRequest_Profile(): AddInstanceRequest_Profile {
  return { firstName: "", lastName: "", preferredLanguage: "" };
}

export const AddInstanceRequest_Profile = {
  encode(message: AddInstanceRequest_Profile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.firstName !== "") {
      writer.uint32(10).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(18).string(message.lastName);
    }
    if (message.preferredLanguage !== "") {
      writer.uint32(42).string(message.preferredLanguage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddInstanceRequest_Profile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddInstanceRequest_Profile();
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
        case 5:
          if (tag !== 42) {
            break;
          }

          message.preferredLanguage = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AddInstanceRequest_Profile>): AddInstanceRequest_Profile {
    return AddInstanceRequest_Profile.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddInstanceRequest_Profile>): AddInstanceRequest_Profile {
    const message = createBaseAddInstanceRequest_Profile();
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    message.preferredLanguage = object.preferredLanguage ?? "";
    return message;
  },
};

function createBaseAddInstanceRequest_Email(): AddInstanceRequest_Email {
  return { email: "", isEmailVerified: false };
}

export const AddInstanceRequest_Email = {
  encode(message: AddInstanceRequest_Email, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.isEmailVerified === true) {
      writer.uint32(16).bool(message.isEmailVerified);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddInstanceRequest_Email {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddInstanceRequest_Email();
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

  create(base?: DeepPartial<AddInstanceRequest_Email>): AddInstanceRequest_Email {
    return AddInstanceRequest_Email.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddInstanceRequest_Email>): AddInstanceRequest_Email {
    const message = createBaseAddInstanceRequest_Email();
    message.email = object.email ?? "";
    message.isEmailVerified = object.isEmailVerified ?? false;
    return message;
  },
};

function createBaseAddInstanceRequest_Password(): AddInstanceRequest_Password {
  return { password: "", passwordChangeRequired: false };
}

export const AddInstanceRequest_Password = {
  encode(message: AddInstanceRequest_Password, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.password !== "") {
      writer.uint32(10).string(message.password);
    }
    if (message.passwordChangeRequired === true) {
      writer.uint32(16).bool(message.passwordChangeRequired);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddInstanceRequest_Password {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddInstanceRequest_Password();
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

          message.passwordChangeRequired = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AddInstanceRequest_Password>): AddInstanceRequest_Password {
    return AddInstanceRequest_Password.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddInstanceRequest_Password>): AddInstanceRequest_Password {
    const message = createBaseAddInstanceRequest_Password();
    message.password = object.password ?? "";
    message.passwordChangeRequired = object.passwordChangeRequired ?? false;
    return message;
  },
};

function createBaseAddInstanceResponse(): AddInstanceResponse {
  return { instanceId: "", details: undefined };
}

export const AddInstanceResponse = {
  encode(message: AddInstanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddInstanceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddInstanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AddInstanceResponse>): AddInstanceResponse {
    return AddInstanceResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddInstanceResponse>): AddInstanceResponse {
    const message = createBaseAddInstanceResponse();
    message.instanceId = object.instanceId ?? "";
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseCreateInstanceRequest(): CreateInstanceRequest {
  return {
    instanceName: "",
    firstOrgName: "",
    customDomain: "",
    human: undefined,
    machine: undefined,
    defaultLanguage: "",
  };
}

export const CreateInstanceRequest = {
  encode(message: CreateInstanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceName !== "") {
      writer.uint32(10).string(message.instanceName);
    }
    if (message.firstOrgName !== "") {
      writer.uint32(18).string(message.firstOrgName);
    }
    if (message.customDomain !== "") {
      writer.uint32(26).string(message.customDomain);
    }
    if (message.human !== undefined) {
      CreateInstanceRequest_Human.encode(message.human, writer.uint32(34).fork()).ldelim();
    }
    if (message.machine !== undefined) {
      CreateInstanceRequest_Machine.encode(message.machine, writer.uint32(42).fork()).ldelim();
    }
    if (message.defaultLanguage !== "") {
      writer.uint32(50).string(message.defaultLanguage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateInstanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.firstOrgName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.customDomain = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.human = CreateInstanceRequest_Human.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.machine = CreateInstanceRequest_Machine.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.defaultLanguage = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<CreateInstanceRequest>): CreateInstanceRequest {
    return CreateInstanceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateInstanceRequest>): CreateInstanceRequest {
    const message = createBaseCreateInstanceRequest();
    message.instanceName = object.instanceName ?? "";
    message.firstOrgName = object.firstOrgName ?? "";
    message.customDomain = object.customDomain ?? "";
    message.human = (object.human !== undefined && object.human !== null)
      ? CreateInstanceRequest_Human.fromPartial(object.human)
      : undefined;
    message.machine = (object.machine !== undefined && object.machine !== null)
      ? CreateInstanceRequest_Machine.fromPartial(object.machine)
      : undefined;
    message.defaultLanguage = object.defaultLanguage ?? "";
    return message;
  },
};

function createBaseCreateInstanceRequest_Profile(): CreateInstanceRequest_Profile {
  return { firstName: "", lastName: "", preferredLanguage: "" };
}

export const CreateInstanceRequest_Profile = {
  encode(message: CreateInstanceRequest_Profile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.firstName !== "") {
      writer.uint32(10).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(18).string(message.lastName);
    }
    if (message.preferredLanguage !== "") {
      writer.uint32(26).string(message.preferredLanguage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceRequest_Profile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateInstanceRequest_Profile();
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

          message.preferredLanguage = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<CreateInstanceRequest_Profile>): CreateInstanceRequest_Profile {
    return CreateInstanceRequest_Profile.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateInstanceRequest_Profile>): CreateInstanceRequest_Profile {
    const message = createBaseCreateInstanceRequest_Profile();
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    message.preferredLanguage = object.preferredLanguage ?? "";
    return message;
  },
};

function createBaseCreateInstanceRequest_Email(): CreateInstanceRequest_Email {
  return { email: "", isEmailVerified: false };
}

export const CreateInstanceRequest_Email = {
  encode(message: CreateInstanceRequest_Email, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.isEmailVerified === true) {
      writer.uint32(16).bool(message.isEmailVerified);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceRequest_Email {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateInstanceRequest_Email();
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

  create(base?: DeepPartial<CreateInstanceRequest_Email>): CreateInstanceRequest_Email {
    return CreateInstanceRequest_Email.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateInstanceRequest_Email>): CreateInstanceRequest_Email {
    const message = createBaseCreateInstanceRequest_Email();
    message.email = object.email ?? "";
    message.isEmailVerified = object.isEmailVerified ?? false;
    return message;
  },
};

function createBaseCreateInstanceRequest_Password(): CreateInstanceRequest_Password {
  return { password: "", passwordChangeRequired: false };
}

export const CreateInstanceRequest_Password = {
  encode(message: CreateInstanceRequest_Password, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.password !== "") {
      writer.uint32(10).string(message.password);
    }
    if (message.passwordChangeRequired === true) {
      writer.uint32(16).bool(message.passwordChangeRequired);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceRequest_Password {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateInstanceRequest_Password();
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

          message.passwordChangeRequired = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<CreateInstanceRequest_Password>): CreateInstanceRequest_Password {
    return CreateInstanceRequest_Password.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateInstanceRequest_Password>): CreateInstanceRequest_Password {
    const message = createBaseCreateInstanceRequest_Password();
    message.password = object.password ?? "";
    message.passwordChangeRequired = object.passwordChangeRequired ?? false;
    return message;
  },
};

function createBaseCreateInstanceRequest_Human(): CreateInstanceRequest_Human {
  return { userName: "", email: undefined, profile: undefined, password: undefined };
}

export const CreateInstanceRequest_Human = {
  encode(message: CreateInstanceRequest_Human, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userName !== "") {
      writer.uint32(10).string(message.userName);
    }
    if (message.email !== undefined) {
      CreateInstanceRequest_Email.encode(message.email, writer.uint32(18).fork()).ldelim();
    }
    if (message.profile !== undefined) {
      CreateInstanceRequest_Profile.encode(message.profile, writer.uint32(26).fork()).ldelim();
    }
    if (message.password !== undefined) {
      CreateInstanceRequest_Password.encode(message.password, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceRequest_Human {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateInstanceRequest_Human();
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
          if (tag !== 18) {
            break;
          }

          message.email = CreateInstanceRequest_Email.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.profile = CreateInstanceRequest_Profile.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.password = CreateInstanceRequest_Password.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<CreateInstanceRequest_Human>): CreateInstanceRequest_Human {
    return CreateInstanceRequest_Human.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateInstanceRequest_Human>): CreateInstanceRequest_Human {
    const message = createBaseCreateInstanceRequest_Human();
    message.userName = object.userName ?? "";
    message.email = (object.email !== undefined && object.email !== null)
      ? CreateInstanceRequest_Email.fromPartial(object.email)
      : undefined;
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? CreateInstanceRequest_Profile.fromPartial(object.profile)
      : undefined;
    message.password = (object.password !== undefined && object.password !== null)
      ? CreateInstanceRequest_Password.fromPartial(object.password)
      : undefined;
    return message;
  },
};

function createBaseCreateInstanceRequest_PersonalAccessToken(): CreateInstanceRequest_PersonalAccessToken {
  return { expirationDate: undefined };
}

export const CreateInstanceRequest_PersonalAccessToken = {
  encode(message: CreateInstanceRequest_PersonalAccessToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expirationDate !== undefined) {
      Timestamp.encode(toTimestamp(message.expirationDate), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceRequest_PersonalAccessToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateInstanceRequest_PersonalAccessToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  create(base?: DeepPartial<CreateInstanceRequest_PersonalAccessToken>): CreateInstanceRequest_PersonalAccessToken {
    return CreateInstanceRequest_PersonalAccessToken.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<CreateInstanceRequest_PersonalAccessToken>,
  ): CreateInstanceRequest_PersonalAccessToken {
    const message = createBaseCreateInstanceRequest_PersonalAccessToken();
    message.expirationDate = object.expirationDate ?? undefined;
    return message;
  },
};

function createBaseCreateInstanceRequest_MachineKey(): CreateInstanceRequest_MachineKey {
  return { type: 0, expirationDate: undefined };
}

export const CreateInstanceRequest_MachineKey = {
  encode(message: CreateInstanceRequest_MachineKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.expirationDate !== undefined) {
      Timestamp.encode(toTimestamp(message.expirationDate), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceRequest_MachineKey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateInstanceRequest_MachineKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
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

  create(base?: DeepPartial<CreateInstanceRequest_MachineKey>): CreateInstanceRequest_MachineKey {
    return CreateInstanceRequest_MachineKey.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateInstanceRequest_MachineKey>): CreateInstanceRequest_MachineKey {
    const message = createBaseCreateInstanceRequest_MachineKey();
    message.type = object.type ?? 0;
    message.expirationDate = object.expirationDate ?? undefined;
    return message;
  },
};

function createBaseCreateInstanceRequest_Machine(): CreateInstanceRequest_Machine {
  return { userName: "", name: "", personalAccessToken: undefined, machineKey: undefined };
}

export const CreateInstanceRequest_Machine = {
  encode(message: CreateInstanceRequest_Machine, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userName !== "") {
      writer.uint32(10).string(message.userName);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.personalAccessToken !== undefined) {
      CreateInstanceRequest_PersonalAccessToken.encode(message.personalAccessToken, writer.uint32(26).fork()).ldelim();
    }
    if (message.machineKey !== undefined) {
      CreateInstanceRequest_MachineKey.encode(message.machineKey, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceRequest_Machine {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateInstanceRequest_Machine();
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
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.personalAccessToken = CreateInstanceRequest_PersonalAccessToken.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.machineKey = CreateInstanceRequest_MachineKey.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<CreateInstanceRequest_Machine>): CreateInstanceRequest_Machine {
    return CreateInstanceRequest_Machine.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateInstanceRequest_Machine>): CreateInstanceRequest_Machine {
    const message = createBaseCreateInstanceRequest_Machine();
    message.userName = object.userName ?? "";
    message.name = object.name ?? "";
    message.personalAccessToken = (object.personalAccessToken !== undefined && object.personalAccessToken !== null)
      ? CreateInstanceRequest_PersonalAccessToken.fromPartial(object.personalAccessToken)
      : undefined;
    message.machineKey = (object.machineKey !== undefined && object.machineKey !== null)
      ? CreateInstanceRequest_MachineKey.fromPartial(object.machineKey)
      : undefined;
    return message;
  },
};

function createBaseCreateInstanceResponse(): CreateInstanceResponse {
  return { instanceId: "", details: undefined, pat: "", machineKey: new Uint8Array(0) };
}

export const CreateInstanceResponse = {
  encode(message: CreateInstanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
    }
    if (message.pat !== "") {
      writer.uint32(26).string(message.pat);
    }
    if (message.machineKey.length !== 0) {
      writer.uint32(34).bytes(message.machineKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateInstanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceId = reader.string();
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

          message.pat = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.machineKey = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<CreateInstanceResponse>): CreateInstanceResponse {
    return CreateInstanceResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateInstanceResponse>): CreateInstanceResponse {
    const message = createBaseCreateInstanceResponse();
    message.instanceId = object.instanceId ?? "";
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.pat = object.pat ?? "";
    message.machineKey = object.machineKey ?? new Uint8Array(0);
    return message;
  },
};

function createBaseUpdateInstanceRequest(): UpdateInstanceRequest {
  return { instanceId: "", instanceName: "" };
}

export const UpdateInstanceRequest = {
  encode(message: UpdateInstanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.instanceName !== "") {
      writer.uint32(18).string(message.instanceName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateInstanceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateInstanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.instanceName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<UpdateInstanceRequest>): UpdateInstanceRequest {
    return UpdateInstanceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateInstanceRequest>): UpdateInstanceRequest {
    const message = createBaseUpdateInstanceRequest();
    message.instanceId = object.instanceId ?? "";
    message.instanceName = object.instanceName ?? "";
    return message;
  },
};

function createBaseUpdateInstanceResponse(): UpdateInstanceResponse {
  return { details: undefined };
}

export const UpdateInstanceResponse = {
  encode(message: UpdateInstanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateInstanceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateInstanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<UpdateInstanceResponse>): UpdateInstanceResponse {
    return UpdateInstanceResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateInstanceResponse>): UpdateInstanceResponse {
    const message = createBaseUpdateInstanceResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseRemoveInstanceRequest(): RemoveInstanceRequest {
  return { instanceId: "" };
}

export const RemoveInstanceRequest = {
  encode(message: RemoveInstanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveInstanceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveInstanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<RemoveInstanceRequest>): RemoveInstanceRequest {
    return RemoveInstanceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RemoveInstanceRequest>): RemoveInstanceRequest {
    const message = createBaseRemoveInstanceRequest();
    message.instanceId = object.instanceId ?? "";
    return message;
  },
};

function createBaseRemoveInstanceResponse(): RemoveInstanceResponse {
  return { details: undefined };
}

export const RemoveInstanceResponse = {
  encode(message: RemoveInstanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveInstanceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveInstanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<RemoveInstanceResponse>): RemoveInstanceResponse {
    return RemoveInstanceResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RemoveInstanceResponse>): RemoveInstanceResponse {
    const message = createBaseRemoveInstanceResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseListIAMMembersRequest(): ListIAMMembersRequest {
  return { query: undefined, instanceId: "", queries: [] };
}

export const ListIAMMembersRequest = {
  encode(message: ListIAMMembersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.query !== undefined) {
      ListQuery.encode(message.query, writer.uint32(10).fork()).ldelim();
    }
    if (message.instanceId !== "") {
      writer.uint32(18).string(message.instanceId);
    }
    for (const v of message.queries) {
      SearchQuery.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListIAMMembersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListIAMMembersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.query = ListQuery.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.instanceId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  create(base?: DeepPartial<ListIAMMembersRequest>): ListIAMMembersRequest {
    return ListIAMMembersRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListIAMMembersRequest>): ListIAMMembersRequest {
    const message = createBaseListIAMMembersRequest();
    message.query = (object.query !== undefined && object.query !== null)
      ? ListQuery.fromPartial(object.query)
      : undefined;
    message.instanceId = object.instanceId ?? "";
    message.queries = object.queries?.map((e) => SearchQuery.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListIAMMembersResponse(): ListIAMMembersResponse {
  return { details: undefined, result: [] };
}

export const ListIAMMembersResponse = {
  encode(message: ListIAMMembersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ListDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.result) {
      Member.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListIAMMembersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListIAMMembersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ListDetails.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.result.push(Member.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListIAMMembersResponse>): ListIAMMembersResponse {
    return ListIAMMembersResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListIAMMembersResponse>): ListIAMMembersResponse {
    const message = createBaseListIAMMembersResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? ListDetails.fromPartial(object.details)
      : undefined;
    message.result = object.result?.map((e) => Member.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetUsageRequest(): GetUsageRequest {
  return { instanceId: "" };
}

export const GetUsageRequest = {
  encode(message: GetUsageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUsageRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUsageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetUsageRequest>): GetUsageRequest {
    return GetUsageRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetUsageRequest>): GetUsageRequest {
    const message = createBaseGetUsageRequest();
    message.instanceId = object.instanceId ?? "";
    return message;
  },
};

function createBaseAddQuotaRequest(): AddQuotaRequest {
  return {
    instanceId: "",
    unit: 0,
    from: undefined,
    resetInterval: undefined,
    amount: 0,
    limit: false,
    notifications: [],
  };
}

export const AddQuotaRequest = {
  encode(message: AddQuotaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.unit !== 0) {
      writer.uint32(16).int32(message.unit);
    }
    if (message.from !== undefined) {
      Timestamp.encode(toTimestamp(message.from), writer.uint32(26).fork()).ldelim();
    }
    if (message.resetInterval !== undefined) {
      Duration.encode(message.resetInterval, writer.uint32(34).fork()).ldelim();
    }
    if (message.amount !== 0) {
      writer.uint32(40).uint64(message.amount);
    }
    if (message.limit === true) {
      writer.uint32(48).bool(message.limit);
    }
    for (const v of message.notifications) {
      Notification.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddQuotaRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddQuotaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.unit = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.from = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.resetInterval = Duration.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.amount = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.limit = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.notifications.push(Notification.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AddQuotaRequest>): AddQuotaRequest {
    return AddQuotaRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddQuotaRequest>): AddQuotaRequest {
    const message = createBaseAddQuotaRequest();
    message.instanceId = object.instanceId ?? "";
    message.unit = object.unit ?? 0;
    message.from = object.from ?? undefined;
    message.resetInterval = (object.resetInterval !== undefined && object.resetInterval !== null)
      ? Duration.fromPartial(object.resetInterval)
      : undefined;
    message.amount = object.amount ?? 0;
    message.limit = object.limit ?? false;
    message.notifications = object.notifications?.map((e) => Notification.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAddQuotaResponse(): AddQuotaResponse {
  return { details: undefined };
}

export const AddQuotaResponse = {
  encode(message: AddQuotaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddQuotaResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddQuotaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AddQuotaResponse>): AddQuotaResponse {
    return AddQuotaResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddQuotaResponse>): AddQuotaResponse {
    const message = createBaseAddQuotaResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseSetQuotaRequest(): SetQuotaRequest {
  return {
    instanceId: "",
    unit: 0,
    from: undefined,
    resetInterval: undefined,
    amount: 0,
    limit: false,
    notifications: [],
  };
}

export const SetQuotaRequest = {
  encode(message: SetQuotaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.unit !== 0) {
      writer.uint32(16).int32(message.unit);
    }
    if (message.from !== undefined) {
      Timestamp.encode(toTimestamp(message.from), writer.uint32(26).fork()).ldelim();
    }
    if (message.resetInterval !== undefined) {
      Duration.encode(message.resetInterval, writer.uint32(34).fork()).ldelim();
    }
    if (message.amount !== 0) {
      writer.uint32(40).uint64(message.amount);
    }
    if (message.limit === true) {
      writer.uint32(48).bool(message.limit);
    }
    for (const v of message.notifications) {
      Notification.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetQuotaRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetQuotaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.unit = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.from = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.resetInterval = Duration.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.amount = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.limit = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.notifications.push(Notification.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SetQuotaRequest>): SetQuotaRequest {
    return SetQuotaRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetQuotaRequest>): SetQuotaRequest {
    const message = createBaseSetQuotaRequest();
    message.instanceId = object.instanceId ?? "";
    message.unit = object.unit ?? 0;
    message.from = object.from ?? undefined;
    message.resetInterval = (object.resetInterval !== undefined && object.resetInterval !== null)
      ? Duration.fromPartial(object.resetInterval)
      : undefined;
    message.amount = object.amount ?? 0;
    message.limit = object.limit ?? false;
    message.notifications = object.notifications?.map((e) => Notification.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSetQuotaResponse(): SetQuotaResponse {
  return { details: undefined };
}

export const SetQuotaResponse = {
  encode(message: SetQuotaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetQuotaResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetQuotaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SetQuotaResponse>): SetQuotaResponse {
    return SetQuotaResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetQuotaResponse>): SetQuotaResponse {
    const message = createBaseSetQuotaResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseRemoveQuotaRequest(): RemoveQuotaRequest {
  return { instanceId: "", unit: 0 };
}

export const RemoveQuotaRequest = {
  encode(message: RemoveQuotaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.unit !== 0) {
      writer.uint32(16).int32(message.unit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveQuotaRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveQuotaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.unit = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<RemoveQuotaRequest>): RemoveQuotaRequest {
    return RemoveQuotaRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RemoveQuotaRequest>): RemoveQuotaRequest {
    const message = createBaseRemoveQuotaRequest();
    message.instanceId = object.instanceId ?? "";
    message.unit = object.unit ?? 0;
    return message;
  },
};

function createBaseRemoveQuotaResponse(): RemoveQuotaResponse {
  return { details: undefined };
}

export const RemoveQuotaResponse = {
  encode(message: RemoveQuotaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveQuotaResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveQuotaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<RemoveQuotaResponse>): RemoveQuotaResponse {
    return RemoveQuotaResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RemoveQuotaResponse>): RemoveQuotaResponse {
    const message = createBaseRemoveQuotaResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseSetLimitsRequest(): SetLimitsRequest {
  return { instanceId: "", auditLogRetention: undefined };
}

export const SetLimitsRequest = {
  encode(message: SetLimitsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.auditLogRetention !== undefined) {
      Duration.encode(message.auditLogRetention, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetLimitsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetLimitsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.auditLogRetention = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SetLimitsRequest>): SetLimitsRequest {
    return SetLimitsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetLimitsRequest>): SetLimitsRequest {
    const message = createBaseSetLimitsRequest();
    message.instanceId = object.instanceId ?? "";
    message.auditLogRetention = (object.auditLogRetention !== undefined && object.auditLogRetention !== null)
      ? Duration.fromPartial(object.auditLogRetention)
      : undefined;
    return message;
  },
};

function createBaseSetLimitsResponse(): SetLimitsResponse {
  return { details: undefined };
}

export const SetLimitsResponse = {
  encode(message: SetLimitsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetLimitsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetLimitsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SetLimitsResponse>): SetLimitsResponse {
    return SetLimitsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetLimitsResponse>): SetLimitsResponse {
    const message = createBaseSetLimitsResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseResetLimitsRequest(): ResetLimitsRequest {
  return { instanceId: "" };
}

export const ResetLimitsRequest = {
  encode(message: ResetLimitsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResetLimitsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResetLimitsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ResetLimitsRequest>): ResetLimitsRequest {
    return ResetLimitsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ResetLimitsRequest>): ResetLimitsRequest {
    const message = createBaseResetLimitsRequest();
    message.instanceId = object.instanceId ?? "";
    return message;
  },
};

function createBaseResetLimitsResponse(): ResetLimitsResponse {
  return { details: undefined };
}

export const ResetLimitsResponse = {
  encode(message: ResetLimitsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResetLimitsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResetLimitsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ResetLimitsResponse>): ResetLimitsResponse {
    return ResetLimitsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ResetLimitsResponse>): ResetLimitsResponse {
    const message = createBaseResetLimitsResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseExistsDomainRequest(): ExistsDomainRequest {
  return { domain: "" };
}

export const ExistsDomainRequest = {
  encode(message: ExistsDomainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExistsDomainRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExistsDomainRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.domain = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ExistsDomainRequest>): ExistsDomainRequest {
    return ExistsDomainRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExistsDomainRequest>): ExistsDomainRequest {
    const message = createBaseExistsDomainRequest();
    message.domain = object.domain ?? "";
    return message;
  },
};

function createBaseExistsDomainResponse(): ExistsDomainResponse {
  return { exists: false };
}

export const ExistsDomainResponse = {
  encode(message: ExistsDomainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exists === true) {
      writer.uint32(8).bool(message.exists);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExistsDomainResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExistsDomainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.exists = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ExistsDomainResponse>): ExistsDomainResponse {
    return ExistsDomainResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExistsDomainResponse>): ExistsDomainResponse {
    const message = createBaseExistsDomainResponse();
    message.exists = object.exists ?? false;
    return message;
  },
};

function createBaseListDomainsRequest(): ListDomainsRequest {
  return { instanceId: "", query: undefined, sortingColumn: 0, queries: [] };
}

export const ListDomainsRequest = {
  encode(message: ListDomainsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.query !== undefined) {
      ListQuery.encode(message.query, writer.uint32(18).fork()).ldelim();
    }
    if (message.sortingColumn !== 0) {
      writer.uint32(24).int32(message.sortingColumn);
    }
    for (const v of message.queries) {
      DomainSearchQuery.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDomainsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDomainsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.query = ListQuery.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.sortingColumn = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.queries.push(DomainSearchQuery.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListDomainsRequest>): ListDomainsRequest {
    return ListDomainsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListDomainsRequest>): ListDomainsRequest {
    const message = createBaseListDomainsRequest();
    message.instanceId = object.instanceId ?? "";
    message.query = (object.query !== undefined && object.query !== null)
      ? ListQuery.fromPartial(object.query)
      : undefined;
    message.sortingColumn = object.sortingColumn ?? 0;
    message.queries = object.queries?.map((e) => DomainSearchQuery.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListDomainsResponse(): ListDomainsResponse {
  return { details: undefined, sortingColumn: 0, result: [] };
}

export const ListDomainsResponse = {
  encode(message: ListDomainsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ListDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.sortingColumn !== 0) {
      writer.uint32(16).int32(message.sortingColumn);
    }
    for (const v of message.result) {
      Domain.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDomainsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDomainsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ListDetails.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.sortingColumn = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.result.push(Domain.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListDomainsResponse>): ListDomainsResponse {
    return ListDomainsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListDomainsResponse>): ListDomainsResponse {
    const message = createBaseListDomainsResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? ListDetails.fromPartial(object.details)
      : undefined;
    message.sortingColumn = object.sortingColumn ?? 0;
    message.result = object.result?.map((e) => Domain.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAddDomainRequest(): AddDomainRequest {
  return { instanceId: "", domain: "" };
}

export const AddDomainRequest = {
  encode(message: AddDomainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.domain !== "") {
      writer.uint32(18).string(message.domain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddDomainRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddDomainRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.domain = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AddDomainRequest>): AddDomainRequest {
    return AddDomainRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddDomainRequest>): AddDomainRequest {
    const message = createBaseAddDomainRequest();
    message.instanceId = object.instanceId ?? "";
    message.domain = object.domain ?? "";
    return message;
  },
};

function createBaseAddDomainResponse(): AddDomainResponse {
  return { details: undefined };
}

export const AddDomainResponse = {
  encode(message: AddDomainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddDomainResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddDomainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AddDomainResponse>): AddDomainResponse {
    return AddDomainResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddDomainResponse>): AddDomainResponse {
    const message = createBaseAddDomainResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseRemoveDomainRequest(): RemoveDomainRequest {
  return { instanceId: "", domain: "" };
}

export const RemoveDomainRequest = {
  encode(message: RemoveDomainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.domain !== "") {
      writer.uint32(18).string(message.domain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveDomainRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveDomainRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.domain = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<RemoveDomainRequest>): RemoveDomainRequest {
    return RemoveDomainRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RemoveDomainRequest>): RemoveDomainRequest {
    const message = createBaseRemoveDomainRequest();
    message.instanceId = object.instanceId ?? "";
    message.domain = object.domain ?? "";
    return message;
  },
};

function createBaseRemoveDomainResponse(): RemoveDomainResponse {
  return { details: undefined };
}

export const RemoveDomainResponse = {
  encode(message: RemoveDomainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveDomainResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveDomainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<RemoveDomainResponse>): RemoveDomainResponse {
    return RemoveDomainResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RemoveDomainResponse>): RemoveDomainResponse {
    const message = createBaseRemoveDomainResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseSetPrimaryDomainRequest(): SetPrimaryDomainRequest {
  return { instanceId: "", domain: "" };
}

export const SetPrimaryDomainRequest = {
  encode(message: SetPrimaryDomainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.domain !== "") {
      writer.uint32(18).string(message.domain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetPrimaryDomainRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetPrimaryDomainRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.domain = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SetPrimaryDomainRequest>): SetPrimaryDomainRequest {
    return SetPrimaryDomainRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetPrimaryDomainRequest>): SetPrimaryDomainRequest {
    const message = createBaseSetPrimaryDomainRequest();
    message.instanceId = object.instanceId ?? "";
    message.domain = object.domain ?? "";
    return message;
  },
};

function createBaseSetPrimaryDomainResponse(): SetPrimaryDomainResponse {
  return { details: undefined };
}

export const SetPrimaryDomainResponse = {
  encode(message: SetPrimaryDomainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetPrimaryDomainResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetPrimaryDomainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SetPrimaryDomainResponse>): SetPrimaryDomainResponse {
    return SetPrimaryDomainResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetPrimaryDomainResponse>): SetPrimaryDomainResponse {
    const message = createBaseSetPrimaryDomainResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseChangeSubscriptionRequest(): ChangeSubscriptionRequest {
  return { domain: "", subscriptionName: "", requestLimit: 0, actionMinsLimit: 0 };
}

export const ChangeSubscriptionRequest = {
  encode(message: ChangeSubscriptionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.subscriptionName !== "") {
      writer.uint32(18).string(message.subscriptionName);
    }
    if (message.requestLimit !== 0) {
      writer.uint32(24).uint64(message.requestLimit);
    }
    if (message.actionMinsLimit !== 0) {
      writer.uint32(32).uint64(message.actionMinsLimit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeSubscriptionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeSubscriptionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.domain = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subscriptionName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.requestLimit = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.actionMinsLimit = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ChangeSubscriptionRequest>): ChangeSubscriptionRequest {
    return ChangeSubscriptionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ChangeSubscriptionRequest>): ChangeSubscriptionRequest {
    const message = createBaseChangeSubscriptionRequest();
    message.domain = object.domain ?? "";
    message.subscriptionName = object.subscriptionName ?? "";
    message.requestLimit = object.requestLimit ?? 0;
    message.actionMinsLimit = object.actionMinsLimit ?? 0;
    return message;
  },
};

function createBaseChangeSubscriptionResponse(): ChangeSubscriptionResponse {
  return { details: undefined };
}

export const ChangeSubscriptionResponse = {
  encode(message: ChangeSubscriptionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeSubscriptionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeSubscriptionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ChangeSubscriptionResponse>): ChangeSubscriptionResponse {
    return ChangeSubscriptionResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ChangeSubscriptionResponse>): ChangeSubscriptionResponse {
    const message = createBaseChangeSubscriptionResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseListViewsRequest(): ListViewsRequest {
  return {};
}

export const ListViewsRequest = {
  encode(_: ListViewsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListViewsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListViewsRequest();
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

  create(base?: DeepPartial<ListViewsRequest>): ListViewsRequest {
    return ListViewsRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ListViewsRequest>): ListViewsRequest {
    const message = createBaseListViewsRequest();
    return message;
  },
};

function createBaseListViewsResponse(): ListViewsResponse {
  return { result: [] };
}

export const ListViewsResponse = {
  encode(message: ListViewsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.result) {
      View.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListViewsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListViewsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result.push(View.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListViewsResponse>): ListViewsResponse {
    return ListViewsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListViewsResponse>): ListViewsResponse {
    const message = createBaseListViewsResponse();
    message.result = object.result?.map((e) => View.fromPartial(e)) || [];
    return message;
  },
};

function createBaseClearViewRequest(): ClearViewRequest {
  return { database: "", viewName: "" };
}

export const ClearViewRequest = {
  encode(message: ClearViewRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.database !== "") {
      writer.uint32(10).string(message.database);
    }
    if (message.viewName !== "") {
      writer.uint32(18).string(message.viewName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClearViewRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClearViewRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.database = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.viewName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ClearViewRequest>): ClearViewRequest {
    return ClearViewRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClearViewRequest>): ClearViewRequest {
    const message = createBaseClearViewRequest();
    message.database = object.database ?? "";
    message.viewName = object.viewName ?? "";
    return message;
  },
};

function createBaseClearViewResponse(): ClearViewResponse {
  return {};
}

export const ClearViewResponse = {
  encode(_: ClearViewResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClearViewResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClearViewResponse();
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

  create(base?: DeepPartial<ClearViewResponse>): ClearViewResponse {
    return ClearViewResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ClearViewResponse>): ClearViewResponse {
    const message = createBaseClearViewResponse();
    return message;
  },
};

function createBaseListFailedEventsRequest(): ListFailedEventsRequest {
  return {};
}

export const ListFailedEventsRequest = {
  encode(_: ListFailedEventsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFailedEventsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFailedEventsRequest();
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

  create(base?: DeepPartial<ListFailedEventsRequest>): ListFailedEventsRequest {
    return ListFailedEventsRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ListFailedEventsRequest>): ListFailedEventsRequest {
    const message = createBaseListFailedEventsRequest();
    return message;
  },
};

function createBaseListFailedEventsResponse(): ListFailedEventsResponse {
  return { result: [] };
}

export const ListFailedEventsResponse = {
  encode(message: ListFailedEventsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.result) {
      FailedEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFailedEventsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFailedEventsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result.push(FailedEvent.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListFailedEventsResponse>): ListFailedEventsResponse {
    return ListFailedEventsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListFailedEventsResponse>): ListFailedEventsResponse {
    const message = createBaseListFailedEventsResponse();
    message.result = object.result?.map((e) => FailedEvent.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRemoveFailedEventRequest(): RemoveFailedEventRequest {
  return { database: "", viewName: "", failedSequence: 0, instanceId: "" };
}

export const RemoveFailedEventRequest = {
  encode(message: RemoveFailedEventRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.database !== "") {
      writer.uint32(10).string(message.database);
    }
    if (message.viewName !== "") {
      writer.uint32(18).string(message.viewName);
    }
    if (message.failedSequence !== 0) {
      writer.uint32(24).uint64(message.failedSequence);
    }
    if (message.instanceId !== "") {
      writer.uint32(34).string(message.instanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveFailedEventRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveFailedEventRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.database = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.viewName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.failedSequence = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.instanceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<RemoveFailedEventRequest>): RemoveFailedEventRequest {
    return RemoveFailedEventRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RemoveFailedEventRequest>): RemoveFailedEventRequest {
    const message = createBaseRemoveFailedEventRequest();
    message.database = object.database ?? "";
    message.viewName = object.viewName ?? "";
    message.failedSequence = object.failedSequence ?? 0;
    message.instanceId = object.instanceId ?? "";
    return message;
  },
};

function createBaseRemoveFailedEventResponse(): RemoveFailedEventResponse {
  return {};
}

export const RemoveFailedEventResponse = {
  encode(_: RemoveFailedEventResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveFailedEventResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveFailedEventResponse();
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

  create(base?: DeepPartial<RemoveFailedEventResponse>): RemoveFailedEventResponse {
    return RemoveFailedEventResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<RemoveFailedEventResponse>): RemoveFailedEventResponse {
    const message = createBaseRemoveFailedEventResponse();
    return message;
  },
};

function createBaseView(): View {
  return {
    database: "",
    viewName: "",
    processedSequence: 0,
    eventTimestamp: undefined,
    lastSuccessfulSpoolerRun: undefined,
    instance: "",
  };
}

export const View = {
  encode(message: View, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.database !== "") {
      writer.uint32(10).string(message.database);
    }
    if (message.viewName !== "") {
      writer.uint32(18).string(message.viewName);
    }
    if (message.processedSequence !== 0) {
      writer.uint32(24).uint64(message.processedSequence);
    }
    if (message.eventTimestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.eventTimestamp), writer.uint32(34).fork()).ldelim();
    }
    if (message.lastSuccessfulSpoolerRun !== undefined) {
      Timestamp.encode(toTimestamp(message.lastSuccessfulSpoolerRun), writer.uint32(42).fork()).ldelim();
    }
    if (message.instance !== "") {
      writer.uint32(50).string(message.instance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): View {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseView();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.database = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.viewName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.processedSequence = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.eventTimestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.lastSuccessfulSpoolerRun = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.instance = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<View>): View {
    return View.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<View>): View {
    const message = createBaseView();
    message.database = object.database ?? "";
    message.viewName = object.viewName ?? "";
    message.processedSequence = object.processedSequence ?? 0;
    message.eventTimestamp = object.eventTimestamp ?? undefined;
    message.lastSuccessfulSpoolerRun = object.lastSuccessfulSpoolerRun ?? undefined;
    message.instance = object.instance ?? "";
    return message;
  },
};

function createBaseFailedEvent(): FailedEvent {
  return { database: "", viewName: "", failedSequence: 0, failureCount: 0, errorMessage: "", lastFailed: undefined };
}

export const FailedEvent = {
  encode(message: FailedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.database !== "") {
      writer.uint32(10).string(message.database);
    }
    if (message.viewName !== "") {
      writer.uint32(18).string(message.viewName);
    }
    if (message.failedSequence !== 0) {
      writer.uint32(24).uint64(message.failedSequence);
    }
    if (message.failureCount !== 0) {
      writer.uint32(32).uint64(message.failureCount);
    }
    if (message.errorMessage !== "") {
      writer.uint32(42).string(message.errorMessage);
    }
    if (message.lastFailed !== undefined) {
      Timestamp.encode(toTimestamp(message.lastFailed), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FailedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFailedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.database = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.viewName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.failedSequence = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.failureCount = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.errorMessage = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.lastFailed = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<FailedEvent>): FailedEvent {
    return FailedEvent.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FailedEvent>): FailedEvent {
    const message = createBaseFailedEvent();
    message.database = object.database ?? "";
    message.viewName = object.viewName ?? "";
    message.failedSequence = object.failedSequence ?? 0;
    message.failureCount = object.failureCount ?? 0;
    message.errorMessage = object.errorMessage ?? "";
    message.lastFailed = object.lastFailed ?? undefined;
    return message;
  },
};

function createBaseSetInstanceFeatureRequest(): SetInstanceFeatureRequest {
  return { instanceId: "", featureId: 0, bool: undefined };
}

export const SetInstanceFeatureRequest = {
  encode(message: SetInstanceFeatureRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceId !== "") {
      writer.uint32(10).string(message.instanceId);
    }
    if (message.featureId !== 0) {
      writer.uint32(16).int32(message.featureId);
    }
    if (message.bool !== undefined) {
      writer.uint32(24).bool(message.bool);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetInstanceFeatureRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetInstanceFeatureRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instanceId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.featureId = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.bool = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SetInstanceFeatureRequest>): SetInstanceFeatureRequest {
    return SetInstanceFeatureRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetInstanceFeatureRequest>): SetInstanceFeatureRequest {
    const message = createBaseSetInstanceFeatureRequest();
    message.instanceId = object.instanceId ?? "";
    message.featureId = object.featureId ?? 0;
    message.bool = object.bool ?? undefined;
    return message;
  },
};

function createBaseSetInstanceFeatureResponse(): SetInstanceFeatureResponse {
  return { details: undefined };
}

export const SetInstanceFeatureResponse = {
  encode(message: SetInstanceFeatureResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetInstanceFeatureResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetInstanceFeatureResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ObjectDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SetInstanceFeatureResponse>): SetInstanceFeatureResponse {
    return SetInstanceFeatureResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetInstanceFeatureResponse>): SetInstanceFeatureResponse {
    const message = createBaseSetInstanceFeatureResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    return message;
  },
};

export type SystemServiceDefinition = typeof SystemServiceDefinition;
export const SystemServiceDefinition = {
  name: "SystemService",
  fullName: "zitadel.system.v1.SystemService",
  methods: {
    /**
     * Indicates if ZITADEL is running.
     * It respondes as soon as ZITADEL started
     */
    healthz: {
      name: "Healthz",
      requestType: HealthzRequest,
      requestStream: false,
      responseType: HealthzResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            new Uint8Array([
              73,
              10,
              7,
              71,
              101,
              110,
              101,
              114,
              97,
              108,
              74,
              24,
              10,
              3,
              50,
              48,
              48,
              18,
              17,
              10,
              15,
              90,
              73,
              84,
              65,
              68,
              69,
              76,
              32,
              115,
              116,
              97,
              114,
              116,
              101,
              100,
              74,
              36,
              10,
              7,
              100,
              101,
              102,
              97,
              117,
              108,
              116,
              18,
              25,
              10,
              23,
              90,
              73,
              84,
              65,
              68,
              69,
              76,
              32,
              78,
              79,
              84,
              32,
              115,
              116,
              97,
              114,
              116,
              101,
              100,
              32,
              121,
              101,
              116,
            ]),
          ],
          578365826: [new Uint8Array([10, 18, 8, 47, 104, 101, 97, 108, 116, 104, 122])],
        },
      },
    },
    /** Returns a list of ZITADEL instances */
    listInstances: {
      name: "ListInstances",
      requestType: ListInstancesRequest,
      requestStream: false,
      responseType: ListInstancesResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          400002: [
            new Uint8Array([
              22,
              10,
              20,
              115,
              121,
              115,
              116,
              101,
              109,
              46,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              46,
              114,
              101,
              97,
              100,
            ]),
          ],
          578365826: [
            new Uint8Array([
              23,
              58,
              1,
              42,
              34,
              18,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              95,
              115,
              101,
              97,
              114,
              99,
              104,
            ]),
          ],
        },
      },
    },
    /** Returns the detail of an instance */
    getInstance: {
      name: "GetInstance",
      requestType: GetInstanceRequest,
      requestStream: false,
      responseType: GetInstanceResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          400002: [
            new Uint8Array([
              22,
              10,
              20,
              115,
              121,
              115,
              116,
              101,
              109,
              46,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              46,
              114,
              101,
              97,
              100,
            ]),
          ],
          578365826: [
            new Uint8Array([
              26,
              18,
              24,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              123,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              95,
              105,
              100,
              125,
            ]),
          ],
        },
      },
    },
    /**
     * Deprecated: Use CreateInstance instead
     * Creates a new instance with all needed setup data
     * This might take some time
     */
    addInstance: {
      name: "AddInstance",
      requestType: AddInstanceRequest,
      requestStream: false,
      responseType: AddInstanceResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          400002: [
            new Uint8Array([
              23,
              10,
              21,
              115,
              121,
              115,
              116,
              101,
              109,
              46,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              46,
              119,
              114,
              105,
              116,
              101,
            ]),
          ],
          578365826: [new Uint8Array([15, 58, 1, 42, 34, 10, 47, 105, 110, 115, 116, 97, 110, 99, 101, 115])],
        },
      },
    },
    /** Updates name of an existing instance */
    updateInstance: {
      name: "UpdateInstance",
      requestType: UpdateInstanceRequest,
      requestStream: false,
      responseType: UpdateInstanceResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          400002: [
            new Uint8Array([
              23,
              10,
              21,
              115,
              121,
              115,
              116,
              101,
              109,
              46,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              46,
              119,
              114,
              105,
              116,
              101,
            ]),
          ],
          578365826: [
            new Uint8Array([
              29,
              58,
              1,
              42,
              26,
              24,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              123,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              95,
              105,
              100,
              125,
            ]),
          ],
        },
      },
    },
    /**
     * Creates a new instance with all needed setup data
     * This might take some time
     */
    createInstance: {
      name: "CreateInstance",
      requestType: CreateInstanceRequest,
      requestStream: false,
      responseType: CreateInstanceResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          400002: [
            new Uint8Array([
              23,
              10,
              21,
              115,
              121,
              115,
              116,
              101,
              109,
              46,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              46,
              119,
              114,
              105,
              116,
              101,
            ]),
          ],
          578365826: [
            new Uint8Array([
              23,
              58,
              1,
              42,
              34,
              18,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              95,
              99,
              114,
              101,
              97,
              116,
              101,
            ]),
          ],
        },
      },
    },
    /**
     * Removes an instance
     * This might take some time
     */
    removeInstance: {
      name: "RemoveInstance",
      requestType: RemoveInstanceRequest,
      requestStream: false,
      responseType: RemoveInstanceResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          400002: [
            new Uint8Array([
              24,
              10,
              22,
              115,
              121,
              115,
              116,
              101,
              109,
              46,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              46,
              100,
              101,
              108,
              101,
              116,
              101,
            ]),
          ],
          578365826: [
            new Uint8Array([
              26,
              42,
              24,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              123,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              95,
              105,
              100,
              125,
            ]),
          ],
        },
      },
    },
    /**
     * Returns all instance members matching the request
     * all queries need to match (ANDed)
     * Deprecated: Use the Admin APIs ListIAMMembers instead
     */
    listIAMMembers: {
      name: "ListIAMMembers",
      requestType: ListIAMMembersRequest,
      requestStream: false,
      responseType: ListIAMMembersResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          400002: [
            new Uint8Array([
              24,
              10,
              22,
              115,
              121,
              115,
              116,
              101,
              109,
              46,
              105,
              97,
              109,
              46,
              109,
              101,
              109,
              98,
              101,
              114,
              46,
              114,
              101,
              97,
              100,
            ]),
          ],
          578365826: [
            new Uint8Array([
              45,
              58,
              1,
              42,
              34,
              40,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              123,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              95,
              105,
              100,
              125,
              47,
              109,
              101,
              109,
              98,
              101,
              114,
              115,
              47,
              95,
              115,
              101,
              97,
              114,
              99,
              104,
            ]),
          ],
        },
      },
    },
    /** Checks if a domain exists */
    existsDomain: {
      name: "ExistsDomain",
      requestType: ExistsDomainRequest,
      requestStream: false,
      responseType: ExistsDomainResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          400002: [
            new Uint8Array([
              20,
              10,
              18,
              115,
              121,
              115,
              116,
              101,
              109,
              46,
              100,
              111,
              109,
              97,
              105,
              110,
              46,
              114,
              101,
              97,
              100,
            ]),
          ],
          578365826: [
            new Uint8Array([
              30,
              58,
              1,
              42,
              34,
              25,
              47,
              100,
              111,
              109,
              97,
              105,
              110,
              115,
              47,
              123,
              100,
              111,
              109,
              97,
              105,
              110,
              125,
              47,
              95,
              101,
              120,
              105,
              115,
              116,
              115,
            ]),
          ],
        },
      },
    },
    /**
     * Returns the custom domains of an instance
     * Checks if a domain exists
     * Deprecated: Use the Admin APIs ListInstanceDomains on the admin API instead
     */
    listDomains: {
      name: "ListDomains",
      requestType: ListDomainsRequest,
      requestStream: false,
      responseType: ListDomainsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          400002: [
            new Uint8Array([
              20,
              10,
              18,
              115,
              121,
              115,
              116,
              101,
              109,
              46,
              100,
              111,
              109,
              97,
              105,
              110,
              46,
              114,
              101,
              97,
              100,
            ]),
          ],
          578365826: [
            new Uint8Array([
              45,
              58,
              1,
              42,
              34,
              40,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              123,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              95,
              105,
              100,
              125,
              47,
              100,
              111,
              109,
              97,
              105,
              110,
              115,
              47,
              95,
              115,
              101,
              97,
              114,
              99,
              104,
            ]),
          ],
        },
      },
    },
    /** Adds a domain to an instance */
    addDomain: {
      name: "AddDomain",
      requestType: AddDomainRequest,
      requestStream: false,
      responseType: AddDomainResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          400002: [
            new Uint8Array([
              21,
              10,
              19,
              115,
              121,
              115,
              116,
              101,
              109,
              46,
              100,
              111,
              109,
              97,
              105,
              110,
              46,
              119,
              114,
              105,
              116,
              101,
            ]),
          ],
          578365826: [
            new Uint8Array([
              37,
              58,
              1,
              42,
              34,
              32,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              123,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              95,
              105,
              100,
              125,
              47,
              100,
              111,
              109,
              97,
              105,
              110,
              115,
            ]),
          ],
        },
      },
    },
    /** Removes the domain of an instance */
    removeDomain: {
      name: "RemoveDomain",
      requestType: RemoveDomainRequest,
      requestStream: false,
      responseType: RemoveDomainResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          400002: [
            new Uint8Array([
              22,
              10,
              20,
              115,
              121,
              115,
              116,
              101,
              109,
              46,
              100,
              111,
              109,
              97,
              105,
              110,
              46,
              100,
              101,
              108,
              101,
              116,
              101,
            ]),
          ],
          578365826: [
            new Uint8Array([
              43,
              42,
              41,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              123,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              95,
              105,
              100,
              125,
              47,
              100,
              111,
              109,
              97,
              105,
              110,
              115,
              47,
              123,
              100,
              111,
              109,
              97,
              105,
              110,
              125,
            ]),
          ],
        },
      },
    },
    /** Sets the primary domain of an instance */
    setPrimaryDomain: {
      name: "SetPrimaryDomain",
      requestType: SetPrimaryDomainRequest,
      requestStream: false,
      responseType: SetPrimaryDomainResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          400002: [
            new Uint8Array([
              21,
              10,
              19,
              115,
              121,
              115,
              116,
              101,
              109,
              46,
              100,
              111,
              109,
              97,
              105,
              110,
              46,
              119,
              114,
              105,
              116,
              101,
            ]),
          ],
          578365826: [
            new Uint8Array([
              50,
              58,
              1,
              42,
              34,
              45,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              123,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              95,
              105,
              100,
              125,
              47,
              100,
              111,
              109,
              97,
              105,
              110,
              115,
              47,
              95,
              115,
              101,
              116,
              95,
              112,
              114,
              105,
              109,
              97,
              114,
              121,
            ]),
          ],
        },
      },
    },
    /**
     * Returns all stored read models of ZITADEL
     * views are used for search optimisation and optimise request latencies
     * they represent the delta of the event happend on the objects
     */
    listViews: {
      name: "ListViews",
      requestType: ListViewsRequest,
      requestStream: false,
      responseType: ListViewsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            new Uint8Array([
              44,
              10,
              5,
              118,
              105,
              101,
              119,
              115,
              74,
              35,
              10,
              3,
              50,
              48,
              48,
              18,
              28,
              10,
              26,
              86,
              105,
              101,
              119,
              115,
              32,
              102,
              111,
              114,
              32,
              113,
              117,
              101,
              114,
              121,
              32,
              111,
              112,
              101,
              114,
              97,
              116,
              105,
              111,
              110,
              115,
            ]),
          ],
          400002: [
            new Uint8Array([
              19,
              10,
              17,
              115,
              121,
              115,
              116,
              101,
              109,
              46,
              100,
              101,
              98,
              117,
              103,
              46,
              114,
              101,
              97,
              100,
            ]),
          ],
          578365826: [
            new Uint8Array([19, 58, 1, 42, 34, 14, 47, 118, 105, 101, 119, 115, 47, 95, 115, 101, 97, 114, 99, 104]),
          ],
        },
      },
    },
    /**
     * Truncates the delta of the change stream
     * be carefull with this function because ZITADEL has to
     * recompute the deltas after they got cleared.
     * Search requests will return wrong results until all deltas are recomputed
     */
    clearView: {
      name: "ClearView",
      requestType: ClearViewRequest,
      requestStream: false,
      responseType: ClearViewResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            new Uint8Array([
              30,
              10,
              5,
              118,
              105,
              101,
              119,
              115,
              74,
              21,
              10,
              3,
              50,
              48,
              48,
              18,
              14,
              10,
              12,
              86,
              105,
              101,
              119,
              32,
              99,
              108,
              101,
              97,
              114,
              101,
              100,
            ]),
          ],
          400002: [
            new Uint8Array([
              20,
              10,
              18,
              115,
              121,
              115,
              116,
              101,
              109,
              46,
              100,
              101,
              98,
              117,
              103,
              46,
              119,
              114,
              105,
              116,
              101,
            ]),
          ],
          578365826: [
            new Uint8Array([
              31,
              34,
              29,
              47,
              118,
              105,
              101,
              119,
              115,
              47,
              123,
              100,
              97,
              116,
              97,
              98,
              97,
              115,
              101,
              125,
              47,
              123,
              118,
              105,
              101,
              119,
              95,
              110,
              97,
              109,
              101,
              125,
            ]),
          ],
        },
      },
    },
    /**
     * Returns event descriptions which cannot be processed.
     * It's possible that some events need some retries.
     * For example if the SMTP-API wasn't able to send an email at the first time
     */
    listFailedEvents: {
      name: "ListFailedEvents",
      requestType: ListFailedEventsRequest,
      requestStream: false,
      responseType: ListFailedEventsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            new Uint8Array([
              70,
              10,
              13,
              102,
              97,
              105,
              108,
              101,
              100,
              32,
              101,
              118,
              101,
              110,
              116,
              115,
              74,
              53,
              10,
              3,
              50,
              48,
              48,
              18,
              46,
              10,
              44,
              69,
              118,
              101,
              110,
              116,
              115,
              32,
              119,
              104,
              105,
              99,
              104,
              32,
              119,
              101,
              114,
              101,
              32,
              110,
              111,
              116,
              32,
              112,
              114,
              111,
              99,
              101,
              115,
              115,
              101,
              100,
              32,
              98,
              121,
              32,
              116,
              104,
              101,
              32,
              118,
              105,
              101,
              119,
              115,
            ]),
          ],
          400002: [
            new Uint8Array([
              19,
              10,
              17,
              115,
              121,
              115,
              116,
              101,
              109,
              46,
              100,
              101,
              98,
              117,
              103,
              46,
              114,
              101,
              97,
              100,
            ]),
          ],
          578365826: [
            new Uint8Array([
              26,
              58,
              1,
              42,
              34,
              21,
              47,
              102,
              97,
              105,
              108,
              101,
              100,
              101,
              118,
              101,
              110,
              116,
              115,
              47,
              95,
              115,
              101,
              97,
              114,
              99,
              104,
            ]),
          ],
        },
      },
    },
    /**
     * Deletes the event from failed events view.
     * the event is not removed from the change stream
     * This call is usefull if the system was able to process the event later.
     * e.g. if the second try of sending an email was successful. the first try produced a
     * failed event. You can find out if it worked on the `failure_count`
     */
    removeFailedEvent: {
      name: "RemoveFailedEvent",
      requestType: RemoveFailedEventRequest,
      requestStream: false,
      responseType: RemoveFailedEventResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            new Uint8Array([
              116,
              10,
              13,
              102,
              97,
              105,
              108,
              101,
              100,
              32,
              101,
              118,
              101,
              110,
              116,
              115,
              74,
              37,
              10,
              3,
              50,
              48,
              48,
              18,
              30,
              10,
              28,
              69,
              118,
              101,
              110,
              116,
              115,
              32,
              114,
              101,
              109,
              111,
              118,
              101,
              100,
              32,
              102,
              114,
              111,
              109,
              32,
              116,
              104,
              101,
              32,
              108,
              105,
              115,
              116,
              74,
              60,
              10,
              3,
              52,
              48,
              48,
              18,
              53,
              10,
              22,
              102,
              97,
              105,
              108,
              101,
              100,
              32,
              101,
              118,
              101,
              110,
              116,
              32,
              110,
              111,
              116,
              32,
              102,
              111,
              117,
              110,
              100,
              18,
              27,
              10,
              25,
              26,
              23,
              35,
              47,
              100,
              101,
              102,
              105,
              110,
              105,
              116,
              105,
              111,
              110,
              115,
              47,
              114,
              112,
              99,
              83,
              116,
              97,
              116,
              117,
              115,
            ]),
          ],
          400002: [
            new Uint8Array([
              21,
              10,
              19,
              115,
              121,
              115,
              116,
              101,
              109,
              46,
              100,
              101,
              98,
              117,
              103,
              46,
              100,
              101,
              108,
              101,
              116,
              101,
            ]),
          ],
          578365826: [
            new Uint8Array([
              56,
              42,
              54,
              47,
              102,
              97,
              105,
              108,
              101,
              100,
              101,
              118,
              101,
              110,
              116,
              115,
              47,
              123,
              100,
              97,
              116,
              97,
              98,
              97,
              115,
              101,
              125,
              47,
              123,
              118,
              105,
              101,
              119,
              95,
              110,
              97,
              109,
              101,
              125,
              47,
              123,
              102,
              97,
              105,
              108,
              101,
              100,
              95,
              115,
              101,
              113,
              117,
              101,
              110,
              99,
              101,
              125,
            ]),
          ],
        },
      },
    },
    /**
     * Creates a new quota
     * Returns an error if the quota already exists for the specified unit
     * Deprecated: use SetQuota instead
     */
    addQuota: {
      name: "AddQuota",
      requestType: AddQuotaRequest,
      requestStream: false,
      responseType: AddQuotaResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            new Uint8Array([
              23,
              10,
              13,
              85,
              115,
              97,
              103,
              101,
              32,
              67,
              111,
              110,
              116,
              114,
              111,
              108,
              10,
              6,
              81,
              117,
              111,
              116,
              97,
              115,
            ]),
          ],
          400002: [
            new Uint8Array([
              20,
              10,
              18,
              115,
              121,
              115,
              116,
              101,
              109,
              46,
              113,
              117,
              111,
              116,
              97,
              46,
              119,
              114,
              105,
              116,
              101,
            ]),
          ],
          578365826: [
            new Uint8Array([
              36,
              58,
              1,
              42,
              34,
              31,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              123,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              95,
              105,
              100,
              125,
              47,
              113,
              117,
              111,
              116,
              97,
              115,
            ]),
          ],
        },
      },
    },
    /**
     * Sets quota configuration properties
     * Creates a new quota if it doesn't exist for the specified unit
     */
    setQuota: {
      name: "SetQuota",
      requestType: SetQuotaRequest,
      requestStream: false,
      responseType: SetQuotaResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            new Uint8Array([
              23,
              10,
              13,
              85,
              115,
              97,
              103,
              101,
              32,
              67,
              111,
              110,
              116,
              114,
              111,
              108,
              10,
              6,
              81,
              117,
              111,
              116,
              97,
              115,
            ]),
          ],
          400002: [
            new Uint8Array([
              20,
              10,
              18,
              115,
              121,
              115,
              116,
              101,
              109,
              46,
              113,
              117,
              111,
              116,
              97,
              46,
              119,
              114,
              105,
              116,
              101,
            ]),
          ],
          578365826: [
            new Uint8Array([
              36,
              58,
              1,
              42,
              26,
              31,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              123,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              95,
              105,
              100,
              125,
              47,
              113,
              117,
              111,
              116,
              97,
              115,
            ]),
          ],
        },
      },
    },
    /** Removes a quota */
    removeQuota: {
      name: "RemoveQuota",
      requestType: RemoveQuotaRequest,
      requestStream: false,
      responseType: RemoveQuotaResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            new Uint8Array([
              23,
              10,
              13,
              85,
              115,
              97,
              103,
              101,
              32,
              67,
              111,
              110,
              116,
              114,
              111,
              108,
              10,
              6,
              81,
              117,
              111,
              116,
              97,
              115,
            ]),
          ],
          400002: [
            new Uint8Array([
              21,
              10,
              19,
              115,
              121,
              115,
              116,
              101,
              109,
              46,
              113,
              117,
              111,
              116,
              97,
              46,
              100,
              101,
              108,
              101,
              116,
              101,
            ]),
          ],
          578365826: [
            new Uint8Array([
              40,
              42,
              38,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              123,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              95,
              105,
              100,
              125,
              47,
              113,
              117,
              111,
              116,
              97,
              115,
              47,
              123,
              117,
              110,
              105,
              116,
              125,
            ]),
          ],
        },
      },
    },
    /** Set a feature flag on an instance */
    setInstanceFeature: {
      name: "SetInstanceFeature",
      requestType: SetInstanceFeatureRequest,
      requestStream: false,
      responseType: SetInstanceFeatureResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          400002: [
            new Uint8Array([
              22,
              10,
              20,
              115,
              121,
              115,
              116,
              101,
              109,
              46,
              102,
              101,
              97,
              116,
              117,
              114,
              101,
              46,
              119,
              114,
              105,
              116,
              101,
            ]),
          ],
          578365826: [
            new Uint8Array([
              51,
              58,
              1,
              42,
              26,
              46,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              123,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              95,
              105,
              100,
              125,
              47,
              102,
              101,
              97,
              116,
              117,
              114,
              101,
              115,
              47,
              123,
              102,
              101,
              97,
              116,
              117,
              114,
              101,
              95,
              105,
              100,
              125,
            ]),
          ],
        },
      },
    },
    /** Sets instance level limits */
    setLimits: {
      name: "SetLimits",
      requestType: SetLimitsRequest,
      requestStream: false,
      responseType: SetLimitsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            new Uint8Array([
              129,
              1,
              10,
              13,
              85,
              115,
              97,
              103,
              101,
              32,
              67,
              111,
              110,
              116,
              114,
              111,
              108,
              10,
              6,
              76,
              105,
              109,
              105,
              116,
              115,
              74,
              28,
              10,
              3,
              50,
              48,
              48,
              18,
              21,
              10,
              19,
              73,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              32,
              108,
              105,
              109,
              105,
              116,
              115,
              32,
              115,
              101,
              116,
              74,
              74,
              10,
              3,
              52,
              48,
              48,
              18,
              67,
              10,
              36,
              65,
              116,
              32,
              108,
              101,
              97,
              115,
              116,
              32,
              111,
              110,
              101,
              32,
              108,
              105,
              109,
              105,
              116,
              32,
              109,
              117,
              115,
              116,
              32,
              98,
              101,
              32,
              115,
              112,
              101,
              99,
              105,
              102,
              105,
              101,
              100,
              18,
              27,
              10,
              25,
              26,
              23,
              35,
              47,
              100,
              101,
              102,
              105,
              110,
              105,
              116,
              105,
              111,
              110,
              115,
              47,
              114,
              112,
              99,
              83,
              116,
              97,
              116,
              117,
              115,
            ]),
          ],
          400002: [
            new Uint8Array([
              21,
              10,
              19,
              115,
              121,
              115,
              116,
              101,
              109,
              46,
              108,
              105,
              109,
              105,
              116,
              115,
              46,
              119,
              114,
              105,
              116,
              101,
            ]),
          ],
          578365826: [
            new Uint8Array([
              36,
              58,
              1,
              42,
              26,
              31,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              123,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              95,
              105,
              100,
              125,
              47,
              108,
              105,
              109,
              105,
              116,
              115,
            ]),
          ],
        },
      },
    },
    /** Resets instance level limits */
    resetLimits: {
      name: "ResetLimits",
      requestType: ResetLimitsRequest,
      requestStream: false,
      responseType: ResetLimitsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            new Uint8Array([
              158,
              1,
              10,
              13,
              85,
              115,
              97,
              103,
              101,
              32,
              67,
              111,
              110,
              116,
              114,
              111,
              108,
              10,
              6,
              76,
              105,
              109,
              105,
              116,
              115,
              74,
              48,
              10,
              3,
              50,
              48,
              48,
              18,
              41,
              10,
              39,
              76,
              105,
              109,
              105,
              116,
              115,
              32,
              97,
              114,
              101,
              32,
              114,
              101,
              115,
              101,
              116,
              32,
              116,
              111,
              32,
              116,
              104,
              101,
              32,
              115,
              121,
              115,
              116,
              101,
              109,
              32,
              100,
              101,
              102,
              97,
              117,
              108,
              116,
              115,
              74,
              83,
              10,
              3,
              52,
              48,
              52,
              18,
              76,
              10,
              45,
              76,
              105,
              109,
              105,
              116,
              115,
              32,
              97,
              114,
              101,
              32,
              97,
              108,
              114,
              101,
              97,
              100,
              121,
              32,
              115,
              101,
              116,
              32,
              116,
              111,
              32,
              116,
              104,
              101,
              32,
              115,
              121,
              115,
              116,
              101,
              109,
              32,
              100,
              101,
              102,
              97,
              117,
              108,
              116,
              115,
              18,
              27,
              10,
              25,
              26,
              23,
              35,
              47,
              100,
              101,
              102,
              105,
              110,
              105,
              116,
              105,
              111,
              110,
              115,
              47,
              114,
              112,
              99,
              83,
              116,
              97,
              116,
              117,
              115,
            ]),
          ],
          400002: [
            new Uint8Array([
              22,
              10,
              20,
              115,
              121,
              115,
              116,
              101,
              109,
              46,
              108,
              105,
              109,
              105,
              116,
              115,
              46,
              100,
              101,
              108,
              101,
              116,
              101,
            ]),
          ],
          578365826: [
            new Uint8Array([
              33,
              42,
              31,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              123,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              95,
              105,
              100,
              125,
              47,
              108,
              105,
              109,
              105,
              116,
              115,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface SystemServiceImplementation<CallContextExt = {}> {
  /**
   * Indicates if ZITADEL is running.
   * It respondes as soon as ZITADEL started
   */
  healthz(request: HealthzRequest, context: CallContext & CallContextExt): Promise<DeepPartial<HealthzResponse>>;
  /** Returns a list of ZITADEL instances */
  listInstances(
    request: ListInstancesRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListInstancesResponse>>;
  /** Returns the detail of an instance */
  getInstance(
    request: GetInstanceRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetInstanceResponse>>;
  /**
   * Deprecated: Use CreateInstance instead
   * Creates a new instance with all needed setup data
   * This might take some time
   */
  addInstance(
    request: AddInstanceRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AddInstanceResponse>>;
  /** Updates name of an existing instance */
  updateInstance(
    request: UpdateInstanceRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<UpdateInstanceResponse>>;
  /**
   * Creates a new instance with all needed setup data
   * This might take some time
   */
  createInstance(
    request: CreateInstanceRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CreateInstanceResponse>>;
  /**
   * Removes an instance
   * This might take some time
   */
  removeInstance(
    request: RemoveInstanceRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<RemoveInstanceResponse>>;
  /**
   * Returns all instance members matching the request
   * all queries need to match (ANDed)
   * Deprecated: Use the Admin APIs ListIAMMembers instead
   */
  listIAMMembers(
    request: ListIAMMembersRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListIAMMembersResponse>>;
  /** Checks if a domain exists */
  existsDomain(
    request: ExistsDomainRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ExistsDomainResponse>>;
  /**
   * Returns the custom domains of an instance
   * Checks if a domain exists
   * Deprecated: Use the Admin APIs ListInstanceDomains on the admin API instead
   */
  listDomains(
    request: ListDomainsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListDomainsResponse>>;
  /** Adds a domain to an instance */
  addDomain(request: AddDomainRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddDomainResponse>>;
  /** Removes the domain of an instance */
  removeDomain(
    request: RemoveDomainRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<RemoveDomainResponse>>;
  /** Sets the primary domain of an instance */
  setPrimaryDomain(
    request: SetPrimaryDomainRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SetPrimaryDomainResponse>>;
  /**
   * Returns all stored read models of ZITADEL
   * views are used for search optimisation and optimise request latencies
   * they represent the delta of the event happend on the objects
   */
  listViews(request: ListViewsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListViewsResponse>>;
  /**
   * Truncates the delta of the change stream
   * be carefull with this function because ZITADEL has to
   * recompute the deltas after they got cleared.
   * Search requests will return wrong results until all deltas are recomputed
   */
  clearView(request: ClearViewRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ClearViewResponse>>;
  /**
   * Returns event descriptions which cannot be processed.
   * It's possible that some events need some retries.
   * For example if the SMTP-API wasn't able to send an email at the first time
   */
  listFailedEvents(
    request: ListFailedEventsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListFailedEventsResponse>>;
  /**
   * Deletes the event from failed events view.
   * the event is not removed from the change stream
   * This call is usefull if the system was able to process the event later.
   * e.g. if the second try of sending an email was successful. the first try produced a
   * failed event. You can find out if it worked on the `failure_count`
   */
  removeFailedEvent(
    request: RemoveFailedEventRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<RemoveFailedEventResponse>>;
  /**
   * Creates a new quota
   * Returns an error if the quota already exists for the specified unit
   * Deprecated: use SetQuota instead
   */
  addQuota(request: AddQuotaRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddQuotaResponse>>;
  /**
   * Sets quota configuration properties
   * Creates a new quota if it doesn't exist for the specified unit
   */
  setQuota(request: SetQuotaRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetQuotaResponse>>;
  /** Removes a quota */
  removeQuota(
    request: RemoveQuotaRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<RemoveQuotaResponse>>;
  /** Set a feature flag on an instance */
  setInstanceFeature(
    request: SetInstanceFeatureRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SetInstanceFeatureResponse>>;
  /** Sets instance level limits */
  setLimits(request: SetLimitsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetLimitsResponse>>;
  /** Resets instance level limits */
  resetLimits(
    request: ResetLimitsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ResetLimitsResponse>>;
}

export interface SystemServiceClient<CallOptionsExt = {}> {
  /**
   * Indicates if ZITADEL is running.
   * It respondes as soon as ZITADEL started
   */
  healthz(request: DeepPartial<HealthzRequest>, options?: CallOptions & CallOptionsExt): Promise<HealthzResponse>;
  /** Returns a list of ZITADEL instances */
  listInstances(
    request: DeepPartial<ListInstancesRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListInstancesResponse>;
  /** Returns the detail of an instance */
  getInstance(
    request: DeepPartial<GetInstanceRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetInstanceResponse>;
  /**
   * Deprecated: Use CreateInstance instead
   * Creates a new instance with all needed setup data
   * This might take some time
   */
  addInstance(
    request: DeepPartial<AddInstanceRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AddInstanceResponse>;
  /** Updates name of an existing instance */
  updateInstance(
    request: DeepPartial<UpdateInstanceRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<UpdateInstanceResponse>;
  /**
   * Creates a new instance with all needed setup data
   * This might take some time
   */
  createInstance(
    request: DeepPartial<CreateInstanceRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CreateInstanceResponse>;
  /**
   * Removes an instance
   * This might take some time
   */
  removeInstance(
    request: DeepPartial<RemoveInstanceRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<RemoveInstanceResponse>;
  /**
   * Returns all instance members matching the request
   * all queries need to match (ANDed)
   * Deprecated: Use the Admin APIs ListIAMMembers instead
   */
  listIAMMembers(
    request: DeepPartial<ListIAMMembersRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListIAMMembersResponse>;
  /** Checks if a domain exists */
  existsDomain(
    request: DeepPartial<ExistsDomainRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ExistsDomainResponse>;
  /**
   * Returns the custom domains of an instance
   * Checks if a domain exists
   * Deprecated: Use the Admin APIs ListInstanceDomains on the admin API instead
   */
  listDomains(
    request: DeepPartial<ListDomainsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListDomainsResponse>;
  /** Adds a domain to an instance */
  addDomain(request: DeepPartial<AddDomainRequest>, options?: CallOptions & CallOptionsExt): Promise<AddDomainResponse>;
  /** Removes the domain of an instance */
  removeDomain(
    request: DeepPartial<RemoveDomainRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<RemoveDomainResponse>;
  /** Sets the primary domain of an instance */
  setPrimaryDomain(
    request: DeepPartial<SetPrimaryDomainRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SetPrimaryDomainResponse>;
  /**
   * Returns all stored read models of ZITADEL
   * views are used for search optimisation and optimise request latencies
   * they represent the delta of the event happend on the objects
   */
  listViews(request: DeepPartial<ListViewsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListViewsResponse>;
  /**
   * Truncates the delta of the change stream
   * be carefull with this function because ZITADEL has to
   * recompute the deltas after they got cleared.
   * Search requests will return wrong results until all deltas are recomputed
   */
  clearView(request: DeepPartial<ClearViewRequest>, options?: CallOptions & CallOptionsExt): Promise<ClearViewResponse>;
  /**
   * Returns event descriptions which cannot be processed.
   * It's possible that some events need some retries.
   * For example if the SMTP-API wasn't able to send an email at the first time
   */
  listFailedEvents(
    request: DeepPartial<ListFailedEventsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListFailedEventsResponse>;
  /**
   * Deletes the event from failed events view.
   * the event is not removed from the change stream
   * This call is usefull if the system was able to process the event later.
   * e.g. if the second try of sending an email was successful. the first try produced a
   * failed event. You can find out if it worked on the `failure_count`
   */
  removeFailedEvent(
    request: DeepPartial<RemoveFailedEventRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<RemoveFailedEventResponse>;
  /**
   * Creates a new quota
   * Returns an error if the quota already exists for the specified unit
   * Deprecated: use SetQuota instead
   */
  addQuota(request: DeepPartial<AddQuotaRequest>, options?: CallOptions & CallOptionsExt): Promise<AddQuotaResponse>;
  /**
   * Sets quota configuration properties
   * Creates a new quota if it doesn't exist for the specified unit
   */
  setQuota(request: DeepPartial<SetQuotaRequest>, options?: CallOptions & CallOptionsExt): Promise<SetQuotaResponse>;
  /** Removes a quota */
  removeQuota(
    request: DeepPartial<RemoveQuotaRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<RemoveQuotaResponse>;
  /** Set a feature flag on an instance */
  setInstanceFeature(
    request: DeepPartial<SetInstanceFeatureRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SetInstanceFeatureResponse>;
  /** Sets instance level limits */
  setLimits(request: DeepPartial<SetLimitsRequest>, options?: CallOptions & CallOptionsExt): Promise<SetLimitsResponse>;
  /** Resets instance level limits */
  resetLimits(
    request: DeepPartial<ResetLimitsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ResetLimitsResponse>;
}

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
