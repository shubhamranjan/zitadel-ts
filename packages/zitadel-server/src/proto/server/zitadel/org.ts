/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ObjectDetails, TextQueryMethod } from "./object";

export const protobufPackage = "zitadel.org.v1";

export enum OrgState {
  ORG_STATE_UNSPECIFIED = 0,
  ORG_STATE_ACTIVE = 1,
  ORG_STATE_INACTIVE = 2,
  ORG_STATE_REMOVED = 3,
  UNRECOGNIZED = -1,
}

export enum DomainValidationType {
  DOMAIN_VALIDATION_TYPE_UNSPECIFIED = 0,
  DOMAIN_VALIDATION_TYPE_HTTP = 1,
  DOMAIN_VALIDATION_TYPE_DNS = 2,
  UNRECOGNIZED = -1,
}

export enum OrgFieldName {
  ORG_FIELD_NAME_UNSPECIFIED = 0,
  ORG_FIELD_NAME_NAME = 1,
  UNRECOGNIZED = -1,
}

export interface Org {
  id: string;
  details: ObjectDetails | undefined;
  state: OrgState;
  name: string;
  primaryDomain: string;
}

export interface Domain {
  orgId: string;
  details: ObjectDetails | undefined;
  domainName: string;
  isVerified: boolean;
  isPrimary: boolean;
  validationType: DomainValidationType;
}

export interface OrgQuery {
  nameQuery?: OrgNameQuery | undefined;
  domainQuery?: OrgDomainQuery | undefined;
  stateQuery?: OrgStateQuery | undefined;
}

export interface OrgNameQuery {
  name: string;
  method: TextQueryMethod;
}

export interface OrgDomainQuery {
  domain: string;
  method: TextQueryMethod;
}

export interface OrgStateQuery {
  state: OrgState;
}

export interface DomainSearchQuery {
  domainNameQuery?: DomainNameQuery | undefined;
}

export interface DomainNameQuery {
  name: string;
  method: TextQueryMethod;
}

function createBaseOrg(): Org {
  return { id: "", details: undefined, state: 0, name: "", primaryDomain: "" };
}

export const Org = {
  encode(message: Org, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.primaryDomain !== "") {
      writer.uint32(42).string(message.primaryDomain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Org {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrg();
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

          message.primaryDomain = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Org>): Org {
    return Org.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Org>): Org {
    const message = createBaseOrg();
    message.id = object.id ?? "";
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.state = object.state ?? 0;
    message.name = object.name ?? "";
    message.primaryDomain = object.primaryDomain ?? "";
    return message;
  },
};

function createBaseDomain(): Domain {
  return { orgId: "", details: undefined, domainName: "", isVerified: false, isPrimary: false, validationType: 0 };
}

export const Domain = {
  encode(message: Domain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orgId !== "") {
      writer.uint32(10).string(message.orgId);
    }
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
    }
    if (message.domainName !== "") {
      writer.uint32(26).string(message.domainName);
    }
    if (message.isVerified === true) {
      writer.uint32(32).bool(message.isVerified);
    }
    if (message.isPrimary === true) {
      writer.uint32(40).bool(message.isPrimary);
    }
    if (message.validationType !== 0) {
      writer.uint32(48).int32(message.validationType);
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

          message.orgId = reader.string();
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

          message.domainName = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isVerified = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.isPrimary = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.validationType = reader.int32() as any;
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
    message.orgId = object.orgId ?? "";
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.domainName = object.domainName ?? "";
    message.isVerified = object.isVerified ?? false;
    message.isPrimary = object.isPrimary ?? false;
    message.validationType = object.validationType ?? 0;
    return message;
  },
};

function createBaseOrgQuery(): OrgQuery {
  return { nameQuery: undefined, domainQuery: undefined, stateQuery: undefined };
}

export const OrgQuery = {
  encode(message: OrgQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nameQuery !== undefined) {
      OrgNameQuery.encode(message.nameQuery, writer.uint32(10).fork()).ldelim();
    }
    if (message.domainQuery !== undefined) {
      OrgDomainQuery.encode(message.domainQuery, writer.uint32(18).fork()).ldelim();
    }
    if (message.stateQuery !== undefined) {
      OrgStateQuery.encode(message.stateQuery, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrgQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrgQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nameQuery = OrgNameQuery.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.domainQuery = OrgDomainQuery.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.stateQuery = OrgStateQuery.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<OrgQuery>): OrgQuery {
    return OrgQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OrgQuery>): OrgQuery {
    const message = createBaseOrgQuery();
    message.nameQuery = (object.nameQuery !== undefined && object.nameQuery !== null)
      ? OrgNameQuery.fromPartial(object.nameQuery)
      : undefined;
    message.domainQuery = (object.domainQuery !== undefined && object.domainQuery !== null)
      ? OrgDomainQuery.fromPartial(object.domainQuery)
      : undefined;
    message.stateQuery = (object.stateQuery !== undefined && object.stateQuery !== null)
      ? OrgStateQuery.fromPartial(object.stateQuery)
      : undefined;
    return message;
  },
};

function createBaseOrgNameQuery(): OrgNameQuery {
  return { name: "", method: 0 };
}

export const OrgNameQuery = {
  encode(message: OrgNameQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrgNameQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrgNameQuery();
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

  create(base?: DeepPartial<OrgNameQuery>): OrgNameQuery {
    return OrgNameQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OrgNameQuery>): OrgNameQuery {
    const message = createBaseOrgNameQuery();
    message.name = object.name ?? "";
    message.method = object.method ?? 0;
    return message;
  },
};

function createBaseOrgDomainQuery(): OrgDomainQuery {
  return { domain: "", method: 0 };
}

export const OrgDomainQuery = {
  encode(message: OrgDomainQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrgDomainQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrgDomainQuery();
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

  create(base?: DeepPartial<OrgDomainQuery>): OrgDomainQuery {
    return OrgDomainQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OrgDomainQuery>): OrgDomainQuery {
    const message = createBaseOrgDomainQuery();
    message.domain = object.domain ?? "";
    message.method = object.method ?? 0;
    return message;
  },
};

function createBaseOrgStateQuery(): OrgStateQuery {
  return { state: 0 };
}

export const OrgStateQuery = {
  encode(message: OrgStateQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrgStateQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrgStateQuery();
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

  create(base?: DeepPartial<OrgStateQuery>): OrgStateQuery {
    return OrgStateQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OrgStateQuery>): OrgStateQuery {
    const message = createBaseOrgStateQuery();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseDomainSearchQuery(): DomainSearchQuery {
  return { domainNameQuery: undefined };
}

export const DomainSearchQuery = {
  encode(message: DomainSearchQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domainNameQuery !== undefined) {
      DomainNameQuery.encode(message.domainNameQuery, writer.uint32(10).fork()).ldelim();
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

          message.domainNameQuery = DomainNameQuery.decode(reader, reader.uint32());
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
    message.domainNameQuery = (object.domainNameQuery !== undefined && object.domainNameQuery !== null)
      ? DomainNameQuery.fromPartial(object.domainNameQuery)
      : undefined;
    return message;
  },
};

function createBaseDomainNameQuery(): DomainNameQuery {
  return { name: "", method: 0 };
}

export const DomainNameQuery = {
  encode(message: DomainNameQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DomainNameQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDomainNameQuery();
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

  create(base?: DeepPartial<DomainNameQuery>): DomainNameQuery {
    return DomainNameQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DomainNameQuery>): DomainNameQuery {
    const message = createBaseDomainNameQuery();
    message.name = object.name ?? "";
    message.method = object.method ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
