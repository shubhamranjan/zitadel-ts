/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Struct } from "../google/protobuf/struct";
import { Timestamp } from "../google/protobuf/timestamp";
import { LocalizedMessage } from "./message";

export const protobufPackage = "zitadel.event.v1";

export interface Event {
  editor: Editor | undefined;
  aggregate: Aggregate | undefined;
  sequence: number;
  creationDate: Date | undefined;
  payload: { [key: string]: any } | undefined;
  type: EventType | undefined;
}

export interface Editor {
  userId: string;
  displayName: string;
  service: string;
}

export interface Aggregate {
  id: string;
  type: AggregateType | undefined;
  resourceOwner: string;
}

export interface EventType {
  type: string;
  localized: LocalizedMessage | undefined;
}

export interface AggregateType {
  type: string;
  localized: LocalizedMessage | undefined;
}

function createBaseEvent(): Event {
  return {
    editor: undefined,
    aggregate: undefined,
    sequence: 0,
    creationDate: undefined,
    payload: undefined,
    type: undefined,
  };
}

export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.editor !== undefined) {
      Editor.encode(message.editor, writer.uint32(10).fork()).ldelim();
    }
    if (message.aggregate !== undefined) {
      Aggregate.encode(message.aggregate, writer.uint32(18).fork()).ldelim();
    }
    if (message.sequence !== 0) {
      writer.uint32(24).uint64(message.sequence);
    }
    if (message.creationDate !== undefined) {
      Timestamp.encode(toTimestamp(message.creationDate), writer.uint32(34).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      Struct.encode(Struct.wrap(message.payload), writer.uint32(42).fork()).ldelim();
    }
    if (message.type !== undefined) {
      EventType.encode(message.type, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.editor = Editor.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.aggregate = Aggregate.decode(reader, reader.uint32());
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

          message.creationDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.payload = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.type = EventType.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Event>): Event {
    return Event.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Event>): Event {
    const message = createBaseEvent();
    message.editor = (object.editor !== undefined && object.editor !== null)
      ? Editor.fromPartial(object.editor)
      : undefined;
    message.aggregate = (object.aggregate !== undefined && object.aggregate !== null)
      ? Aggregate.fromPartial(object.aggregate)
      : undefined;
    message.sequence = object.sequence ?? 0;
    message.creationDate = object.creationDate ?? undefined;
    message.payload = object.payload ?? undefined;
    message.type = (object.type !== undefined && object.type !== null) ? EventType.fromPartial(object.type) : undefined;
    return message;
  },
};

function createBaseEditor(): Editor {
  return { userId: "", displayName: "", service: "" };
}

export const Editor = {
  encode(message: Editor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.service !== "") {
      writer.uint32(26).string(message.service);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Editor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEditor();
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

          message.displayName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.service = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Editor>): Editor {
    return Editor.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Editor>): Editor {
    const message = createBaseEditor();
    message.userId = object.userId ?? "";
    message.displayName = object.displayName ?? "";
    message.service = object.service ?? "";
    return message;
  },
};

function createBaseAggregate(): Aggregate {
  return { id: "", type: undefined, resourceOwner: "" };
}

export const Aggregate = {
  encode(message: Aggregate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== undefined) {
      AggregateType.encode(message.type, writer.uint32(18).fork()).ldelim();
    }
    if (message.resourceOwner !== "") {
      writer.uint32(26).string(message.resourceOwner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Aggregate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregate();
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

          message.type = AggregateType.decode(reader, reader.uint32());
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

  create(base?: DeepPartial<Aggregate>): Aggregate {
    return Aggregate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Aggregate>): Aggregate {
    const message = createBaseAggregate();
    message.id = object.id ?? "";
    message.type = (object.type !== undefined && object.type !== null)
      ? AggregateType.fromPartial(object.type)
      : undefined;
    message.resourceOwner = object.resourceOwner ?? "";
    return message;
  },
};

function createBaseEventType(): EventType {
  return { type: "", localized: undefined };
}

export const EventType = {
  encode(message: EventType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.localized !== undefined) {
      LocalizedMessage.encode(message.localized, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.localized = LocalizedMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<EventType>): EventType {
    return EventType.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventType>): EventType {
    const message = createBaseEventType();
    message.type = object.type ?? "";
    message.localized = (object.localized !== undefined && object.localized !== null)
      ? LocalizedMessage.fromPartial(object.localized)
      : undefined;
    return message;
  },
};

function createBaseAggregateType(): AggregateType {
  return { type: "", localized: undefined };
}

export const AggregateType = {
  encode(message: AggregateType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.localized !== undefined) {
      LocalizedMessage.encode(message.localized, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AggregateType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregateType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.localized = LocalizedMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AggregateType>): AggregateType {
    return AggregateType.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AggregateType>): AggregateType {
    const message = createBaseAggregateType();
    message.type = object.type ?? "";
    message.localized = (object.localized !== undefined && object.localized !== null)
      ? LocalizedMessage.fromPartial(object.localized)
      : undefined;
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
