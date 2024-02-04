/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "zitadel.object.v2beta";

/** Deprecated: use Organization */
export interface Organisation {
  orgId?: string | undefined;
  orgDomain?: string | undefined;
}

export interface Organization {
  orgId?: string | undefined;
  orgDomain?: string | undefined;
}

export interface RequestContext {
  orgId?: string | undefined;
  instance?: boolean | undefined;
}

export interface ListQuery {
  offset: number;
  limit: number;
  asc: boolean;
}

export interface Details {
  /**
   * sequence represents the order of events. It's always counting
   *
   * on read: the sequence of the last event reduced by the projection
   *
   * on manipulation: the timestamp of the event(s) added by the manipulation
   */
  sequence: number;
  /**
   * change_date is the timestamp when the object was changed
   *
   * on read: the timestamp of the last event reduced by the projection
   *
   * on manipulation: the timestamp of the event(s) added by the manipulation
   */
  changeDate:
    | Date
    | undefined;
  /** resource_owner is the organization or instance_id an object belongs to */
  resourceOwner: string;
}

export interface ListDetails {
  totalResult: number;
  processedSequence: number;
  timestamp: Date | undefined;
}

function createBaseOrganisation(): Organisation {
  return { orgId: undefined, orgDomain: undefined };
}

export const Organisation = {
  encode(message: Organisation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orgId !== undefined) {
      writer.uint32(10).string(message.orgId);
    }
    if (message.orgDomain !== undefined) {
      writer.uint32(18).string(message.orgDomain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Organisation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrganisation();
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

          message.orgDomain = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Organisation>): Organisation {
    return Organisation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Organisation>): Organisation {
    const message = createBaseOrganisation();
    message.orgId = object.orgId ?? undefined;
    message.orgDomain = object.orgDomain ?? undefined;
    return message;
  },
};

function createBaseOrganization(): Organization {
  return { orgId: undefined, orgDomain: undefined };
}

export const Organization = {
  encode(message: Organization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orgId !== undefined) {
      writer.uint32(10).string(message.orgId);
    }
    if (message.orgDomain !== undefined) {
      writer.uint32(18).string(message.orgDomain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Organization {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrganization();
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

          message.orgDomain = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Organization>): Organization {
    return Organization.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Organization>): Organization {
    const message = createBaseOrganization();
    message.orgId = object.orgId ?? undefined;
    message.orgDomain = object.orgDomain ?? undefined;
    return message;
  },
};

function createBaseRequestContext(): RequestContext {
  return { orgId: undefined, instance: undefined };
}

export const RequestContext = {
  encode(message: RequestContext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orgId !== undefined) {
      writer.uint32(10).string(message.orgId);
    }
    if (message.instance !== undefined) {
      writer.uint32(16).bool(message.instance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestContext {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestContext();
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
          if (tag !== 16) {
            break;
          }

          message.instance = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<RequestContext>): RequestContext {
    return RequestContext.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RequestContext>): RequestContext {
    const message = createBaseRequestContext();
    message.orgId = object.orgId ?? undefined;
    message.instance = object.instance ?? undefined;
    return message;
  },
};

function createBaseListQuery(): ListQuery {
  return { offset: 0, limit: 0, asc: false };
}

export const ListQuery = {
  encode(message: ListQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    if (message.limit !== 0) {
      writer.uint32(16).uint32(message.limit);
    }
    if (message.asc === true) {
      writer.uint32(24).bool(message.asc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.limit = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.asc = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListQuery>): ListQuery {
    return ListQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListQuery>): ListQuery {
    const message = createBaseListQuery();
    message.offset = object.offset ?? 0;
    message.limit = object.limit ?? 0;
    message.asc = object.asc ?? false;
    return message;
  },
};

function createBaseDetails(): Details {
  return { sequence: 0, changeDate: undefined, resourceOwner: "" };
}

export const Details = {
  encode(message: Details, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sequence !== 0) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.changeDate !== undefined) {
      Timestamp.encode(toTimestamp(message.changeDate), writer.uint32(18).fork()).ldelim();
    }
    if (message.resourceOwner !== "") {
      writer.uint32(26).string(message.resourceOwner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Details {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.sequence = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.changeDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resourceOwner = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Details>): Details {
    return Details.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Details>): Details {
    const message = createBaseDetails();
    message.sequence = object.sequence ?? 0;
    message.changeDate = object.changeDate ?? undefined;
    message.resourceOwner = object.resourceOwner ?? "";
    return message;
  },
};

function createBaseListDetails(): ListDetails {
  return { totalResult: 0, processedSequence: 0, timestamp: undefined };
}

export const ListDetails = {
  encode(message: ListDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalResult !== 0) {
      writer.uint32(8).uint64(message.totalResult);
    }
    if (message.processedSequence !== 0) {
      writer.uint32(16).uint64(message.processedSequence);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.totalResult = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.processedSequence = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListDetails>): ListDetails {
    return ListDetails.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListDetails>): ListDetails {
    const message = createBaseListDetails();
    message.totalResult = object.totalResult ?? 0;
    message.processedSequence = object.processedSequence ?? 0;
    message.timestamp = object.timestamp ?? undefined;
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
