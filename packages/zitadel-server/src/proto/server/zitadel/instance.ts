/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ObjectDetails, TextQueryMethod } from "./object";

export const protobufPackage = "zitadel.instance.v1";

export enum State {
  STATE_UNSPECIFIED = 0,
  STATE_CREATING = 1,
  STATE_RUNNING = 2,
  STATE_STOPPING = 3,
  STATE_STOPPED = 4,
  UNRECOGNIZED = -1,
}

export enum FieldName {
  FIELD_NAME_UNSPECIFIED = 0,
  FIELD_NAME_ID = 1,
  FIELD_NAME_NAME = 2,
  FIELD_NAME_CREATION_DATE = 3,
  UNRECOGNIZED = -1,
}

export enum DomainFieldName {
  DOMAIN_FIELD_NAME_UNSPECIFIED = 0,
  DOMAIN_FIELD_NAME_DOMAIN = 1,
  DOMAIN_FIELD_NAME_PRIMARY = 2,
  DOMAIN_FIELD_NAME_GENERATED = 3,
  DOMAIN_FIELD_NAME_CREATION_DATE = 4,
  UNRECOGNIZED = -1,
}

export interface Instance {
  id: string;
  details: ObjectDetails | undefined;
  state: State;
  name: string;
  version: string;
  domains: Domain[];
}

export interface InstanceDetail {
  id: string;
  details: ObjectDetails | undefined;
  state: State;
  name: string;
  version: string;
  domains: Domain[];
}

export interface Query {
  idQuery?: IdsQuery | undefined;
  domainQuery?: DomainsQuery | undefined;
}

/** IdQuery always equals */
export interface IdsQuery {
  ids: string[];
}

export interface DomainsQuery {
  domains: string[];
}

export interface Domain {
  details: ObjectDetails | undefined;
  domain: string;
  primary: boolean;
  generated: boolean;
}

export interface DomainSearchQuery {
  domainQuery?: DomainQuery | undefined;
  generatedQuery?: DomainGeneratedQuery | undefined;
  primaryQuery?: DomainPrimaryQuery | undefined;
}

export interface DomainQuery {
  domain: string;
  method: TextQueryMethod;
}

/** DomainGeneratedQuery is always equals */
export interface DomainGeneratedQuery {
  generated: boolean;
}

/** DomainPrimaryQuery is always equals */
export interface DomainPrimaryQuery {
  primary: boolean;
}

function createBaseInstance(): Instance {
  return { id: "", details: undefined, state: 0, name: "", version: "", domains: [] };
}

export const Instance = {
  encode(message: Instance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    for (const v of message.domains) {
      Domain.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Instance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstance();
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

          message.version = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.domains.push(Domain.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Instance>): Instance {
    return Instance.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Instance>): Instance {
    const message = createBaseInstance();
    message.id = object.id ?? "";
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.state = object.state ?? 0;
    message.name = object.name ?? "";
    message.version = object.version ?? "";
    message.domains = object.domains?.map((e) => Domain.fromPartial(e)) || [];
    return message;
  },
};

function createBaseInstanceDetail(): InstanceDetail {
  return { id: "", details: undefined, state: 0, name: "", version: "", domains: [] };
}

export const InstanceDetail = {
  encode(message: InstanceDetail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    for (const v of message.domains) {
      Domain.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstanceDetail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstanceDetail();
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

          message.version = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.domains.push(Domain.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<InstanceDetail>): InstanceDetail {
    return InstanceDetail.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<InstanceDetail>): InstanceDetail {
    const message = createBaseInstanceDetail();
    message.id = object.id ?? "";
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.state = object.state ?? 0;
    message.name = object.name ?? "";
    message.version = object.version ?? "";
    message.domains = object.domains?.map((e) => Domain.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQuery(): Query {
  return { idQuery: undefined, domainQuery: undefined };
}

export const Query = {
  encode(message: Query, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.idQuery !== undefined) {
      IdsQuery.encode(message.idQuery, writer.uint32(10).fork()).ldelim();
    }
    if (message.domainQuery !== undefined) {
      DomainsQuery.encode(message.domainQuery, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Query {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.idQuery = IdsQuery.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.domainQuery = DomainsQuery.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Query>): Query {
    return Query.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Query>): Query {
    const message = createBaseQuery();
    message.idQuery = (object.idQuery !== undefined && object.idQuery !== null)
      ? IdsQuery.fromPartial(object.idQuery)
      : undefined;
    message.domainQuery = (object.domainQuery !== undefined && object.domainQuery !== null)
      ? DomainsQuery.fromPartial(object.domainQuery)
      : undefined;
    return message;
  },
};

function createBaseIdsQuery(): IdsQuery {
  return { ids: [] };
}

export const IdsQuery = {
  encode(message: IdsQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IdsQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdsQuery();
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

  create(base?: DeepPartial<IdsQuery>): IdsQuery {
    return IdsQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<IdsQuery>): IdsQuery {
    const message = createBaseIdsQuery();
    message.ids = object.ids?.map((e) => e) || [];
    return message;
  },
};

function createBaseDomainsQuery(): DomainsQuery {
  return { domains: [] };
}

export const DomainsQuery = {
  encode(message: DomainsQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.domains) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DomainsQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDomainsQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.domains.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<DomainsQuery>): DomainsQuery {
    return DomainsQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DomainsQuery>): DomainsQuery {
    const message = createBaseDomainsQuery();
    message.domains = object.domains?.map((e) => e) || [];
    return message;
  },
};

function createBaseDomain(): Domain {
  return { details: undefined, domain: "", primary: false, generated: false };
}

export const Domain = {
  encode(message: Domain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.domain !== "") {
      writer.uint32(18).string(message.domain);
    }
    if (message.primary === true) {
      writer.uint32(24).bool(message.primary);
    }
    if (message.generated === true) {
      writer.uint32(32).bool(message.generated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Domain {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDomain();
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

          message.domain = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.primary = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.generated = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Domain>): Domain {
    return Domain.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Domain>): Domain {
    const message = createBaseDomain();
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.domain = object.domain ?? "";
    message.primary = object.primary ?? false;
    message.generated = object.generated ?? false;
    return message;
  },
};

function createBaseDomainSearchQuery(): DomainSearchQuery {
  return { domainQuery: undefined, generatedQuery: undefined, primaryQuery: undefined };
}

export const DomainSearchQuery = {
  encode(message: DomainSearchQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domainQuery !== undefined) {
      DomainQuery.encode(message.domainQuery, writer.uint32(10).fork()).ldelim();
    }
    if (message.generatedQuery !== undefined) {
      DomainGeneratedQuery.encode(message.generatedQuery, writer.uint32(18).fork()).ldelim();
    }
    if (message.primaryQuery !== undefined) {
      DomainPrimaryQuery.encode(message.primaryQuery, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DomainSearchQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDomainSearchQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.domainQuery = DomainQuery.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.generatedQuery = DomainGeneratedQuery.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.primaryQuery = DomainPrimaryQuery.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<DomainSearchQuery>): DomainSearchQuery {
    return DomainSearchQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DomainSearchQuery>): DomainSearchQuery {
    const message = createBaseDomainSearchQuery();
    message.domainQuery = (object.domainQuery !== undefined && object.domainQuery !== null)
      ? DomainQuery.fromPartial(object.domainQuery)
      : undefined;
    message.generatedQuery = (object.generatedQuery !== undefined && object.generatedQuery !== null)
      ? DomainGeneratedQuery.fromPartial(object.generatedQuery)
      : undefined;
    message.primaryQuery = (object.primaryQuery !== undefined && object.primaryQuery !== null)
      ? DomainPrimaryQuery.fromPartial(object.primaryQuery)
      : undefined;
    return message;
  },
};

function createBaseDomainQuery(): DomainQuery {
  return { domain: "", method: 0 };
}

export const DomainQuery = {
  encode(message: DomainQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DomainQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDomainQuery();
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

  create(base?: DeepPartial<DomainQuery>): DomainQuery {
    return DomainQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DomainQuery>): DomainQuery {
    const message = createBaseDomainQuery();
    message.domain = object.domain ?? "";
    message.method = object.method ?? 0;
    return message;
  },
};

function createBaseDomainGeneratedQuery(): DomainGeneratedQuery {
  return { generated: false };
}

export const DomainGeneratedQuery = {
  encode(message: DomainGeneratedQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.generated === true) {
      writer.uint32(8).bool(message.generated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DomainGeneratedQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDomainGeneratedQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.generated = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<DomainGeneratedQuery>): DomainGeneratedQuery {
    return DomainGeneratedQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DomainGeneratedQuery>): DomainGeneratedQuery {
    const message = createBaseDomainGeneratedQuery();
    message.generated = object.generated ?? false;
    return message;
  },
};

function createBaseDomainPrimaryQuery(): DomainPrimaryQuery {
  return { primary: false };
}

export const DomainPrimaryQuery = {
  encode(message: DomainPrimaryQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.primary === true) {
      writer.uint32(8).bool(message.primary);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DomainPrimaryQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDomainPrimaryQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.primary = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<DomainPrimaryQuery>): DomainPrimaryQuery {
    return DomainPrimaryQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DomainPrimaryQuery>): DomainPrimaryQuery {
    const message = createBaseDomainPrimaryQuery();
    message.primary = object.primary ?? false;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
