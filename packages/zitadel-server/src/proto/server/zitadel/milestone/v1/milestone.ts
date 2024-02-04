/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "zitadel.milestone.v1";

export enum MilestoneType {
  MILESTONE_TYPE_UNSPECIFIED = 0,
  MILESTONE_TYPE_INSTANCE_CREATED = 1,
  MILESTONE_TYPE_AUTHENTICATION_SUCCEEDED_ON_INSTANCE = 2,
  MILESTONE_TYPE_PROJECT_CREATED = 3,
  MILESTONE_TYPE_APPLICATION_CREATED = 4,
  MILESTONE_TYPE_AUTHENTICATION_SUCCEEDED_ON_APPLICATION = 5,
  MILESTONE_TYPE_INSTANCE_DELETED = 6,
  UNRECOGNIZED = -1,
}

export enum MilestoneFieldName {
  MILESTONE_FIELD_NAME_UNSPECIFIED = 0,
  MILESTONE_FIELD_NAME_TYPE = 1,
  MILESTONE_FIELD_NAME_REACHED_DATE = 2,
  UNRECOGNIZED = -1,
}

export interface Milestone {
  type: MilestoneType;
  reachedDate: Date | undefined;
}

export interface MilestoneQuery {
  isReachedQuery?: IsReachedQuery | undefined;
}

export interface IsReachedQuery {
  reached: boolean;
}

function createBaseMilestone(): Milestone {
  return { type: 0, reachedDate: undefined };
}

export const Milestone = {
  encode(message: Milestone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.reachedDate !== undefined) {
      Timestamp.encode(toTimestamp(message.reachedDate), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Milestone {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMilestone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.reachedDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Milestone>): Milestone {
    return Milestone.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Milestone>): Milestone {
    const message = createBaseMilestone();
    message.type = object.type ?? 0;
    message.reachedDate = object.reachedDate ?? undefined;
    return message;
  },
};

function createBaseMilestoneQuery(): MilestoneQuery {
  return { isReachedQuery: undefined };
}

export const MilestoneQuery = {
  encode(message: MilestoneQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isReachedQuery !== undefined) {
      IsReachedQuery.encode(message.isReachedQuery, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MilestoneQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMilestoneQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.isReachedQuery = IsReachedQuery.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<MilestoneQuery>): MilestoneQuery {
    return MilestoneQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MilestoneQuery>): MilestoneQuery {
    const message = createBaseMilestoneQuery();
    message.isReachedQuery = (object.isReachedQuery !== undefined && object.isReachedQuery !== null)
      ? IsReachedQuery.fromPartial(object.isReachedQuery)
      : undefined;
    return message;
  },
};

function createBaseIsReachedQuery(): IsReachedQuery {
  return { reached: false };
}

export const IsReachedQuery = {
  encode(message: IsReachedQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reached === true) {
      writer.uint32(8).bool(message.reached);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IsReachedQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsReachedQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.reached = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<IsReachedQuery>): IsReachedQuery {
    return IsReachedQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<IsReachedQuery>): IsReachedQuery {
    const message = createBaseIsReachedQuery();
    message.reached = object.reached ?? false;
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
