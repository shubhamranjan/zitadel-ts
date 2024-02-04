/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";
import { LocalizedMessage } from "./message";

export const protobufPackage = "zitadel.change.v1";

export interface Change {
  changeDate: Date | undefined;
  eventType: LocalizedMessage | undefined;
  sequence: number;
  editorId: string;
  editorDisplayName: string;
  resourceOwnerId: string;
  editorPreferredLoginName: string;
  editorAvatarUrl: string;
}

export interface ChangeQuery {
  sequence: number;
  limit: number;
  asc: boolean;
}

function createBaseChange(): Change {
  return {
    changeDate: undefined,
    eventType: undefined,
    sequence: 0,
    editorId: "",
    editorDisplayName: "",
    resourceOwnerId: "",
    editorPreferredLoginName: "",
    editorAvatarUrl: "",
  };
}

export const Change = {
  encode(message: Change, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.changeDate !== undefined) {
      Timestamp.encode(toTimestamp(message.changeDate), writer.uint32(10).fork()).ldelim();
    }
    if (message.eventType !== undefined) {
      LocalizedMessage.encode(message.eventType, writer.uint32(18).fork()).ldelim();
    }
    if (message.sequence !== 0) {
      writer.uint32(24).uint64(message.sequence);
    }
    if (message.editorId !== "") {
      writer.uint32(34).string(message.editorId);
    }
    if (message.editorDisplayName !== "") {
      writer.uint32(42).string(message.editorDisplayName);
    }
    if (message.resourceOwnerId !== "") {
      writer.uint32(50).string(message.resourceOwnerId);
    }
    if (message.editorPreferredLoginName !== "") {
      writer.uint32(58).string(message.editorPreferredLoginName);
    }
    if (message.editorAvatarUrl !== "") {
      writer.uint32(66).string(message.editorAvatarUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Change {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.changeDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.eventType = LocalizedMessage.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.sequence = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.editorId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.editorDisplayName = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.resourceOwnerId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.editorPreferredLoginName = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.editorAvatarUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Change>): Change {
    return Change.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Change>): Change {
    const message = createBaseChange();
    message.changeDate = object.changeDate ?? undefined;
    message.eventType = (object.eventType !== undefined && object.eventType !== null)
      ? LocalizedMessage.fromPartial(object.eventType)
      : undefined;
    message.sequence = object.sequence ?? 0;
    message.editorId = object.editorId ?? "";
    message.editorDisplayName = object.editorDisplayName ?? "";
    message.resourceOwnerId = object.resourceOwnerId ?? "";
    message.editorPreferredLoginName = object.editorPreferredLoginName ?? "";
    message.editorAvatarUrl = object.editorAvatarUrl ?? "";
    return message;
  },
};

function createBaseChangeQuery(): ChangeQuery {
  return { sequence: 0, limit: 0, asc: false };
}

export const ChangeQuery = {
  encode(message: ChangeQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sequence !== 0) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.limit !== 0) {
      writer.uint32(16).uint32(message.limit);
    }
    if (message.asc === true) {
      writer.uint32(24).bool(message.asc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeQuery();
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

  create(base?: DeepPartial<ChangeQuery>): ChangeQuery {
    return ChangeQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ChangeQuery>): ChangeQuery {
    const message = createBaseChangeQuery();
    message.sequence = object.sequence ?? 0;
    message.limit = object.limit ?? 0;
    message.asc = object.asc ?? false;
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
