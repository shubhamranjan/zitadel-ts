/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Duration } from "../google/protobuf/duration";
import { LocalizedMessage } from "./message";
import { ObjectDetails, TextQueryMethod } from "./object";

export const protobufPackage = "zitadel.action.v1";

export enum ActionState {
  ACTION_STATE_UNSPECIFIED = 0,
  ACTION_STATE_INACTIVE = 1,
  ACTION_STATE_ACTIVE = 2,
  UNRECOGNIZED = -1,
}

export enum ActionFieldName {
  ACTION_FIELD_NAME_UNSPECIFIED = 0,
  ACTION_FIELD_NAME_NAME = 1,
  ACTION_FIELD_NAME_ID = 2,
  ACTION_FIELD_NAME_STATE = 3,
  UNRECOGNIZED = -1,
}

export enum FlowState {
  FLOW_STATE_UNSPECIFIED = 0,
  FLOW_STATE_INACTIVE = 1,
  FLOW_STATE_ACTIVE = 2,
  UNRECOGNIZED = -1,
}

export interface Action {
  id: string;
  details: ObjectDetails | undefined;
  state: ActionState;
  name: string;
  script: string;
  timeout: Duration | undefined;
  allowedToFail: boolean;
}

export interface ActionIDQuery {
  id: string;
}

export interface ActionNameQuery {
  name: string;
  method: TextQueryMethod;
}

/** ActionStateQuery always equals */
export interface ActionStateQuery {
  state: ActionState;
}

export interface Flow {
  /** id of the flow type */
  type: FlowType | undefined;
  details: ObjectDetails | undefined;
  state: FlowState;
  triggerActions: TriggerAction[];
}

export interface FlowType {
  /** identifier of the type */
  id: string;
  /** key and name of the type */
  name: LocalizedMessage | undefined;
}

export interface TriggerType {
  /** identifier of the type */
  id: string;
  /** key and name of the type */
  name: LocalizedMessage | undefined;
}

export interface TriggerAction {
  /** id of the trigger type */
  triggerType: TriggerType | undefined;
  actions: Action[];
}

function createBaseAction(): Action {
  return { id: "", details: undefined, state: 0, name: "", script: "", timeout: undefined, allowedToFail: false };
}

export const Action = {
  encode(message: Action, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.script !== "") {
      writer.uint32(42).string(message.script);
    }
    if (message.timeout !== undefined) {
      Duration.encode(message.timeout, writer.uint32(50).fork()).ldelim();
    }
    if (message.allowedToFail === true) {
      writer.uint32(56).bool(message.allowedToFail);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction();
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

          message.script = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.timeout = Duration.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.allowedToFail = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Action>): Action {
    return Action.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Action>): Action {
    const message = createBaseAction();
    message.id = object.id ?? "";
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.state = object.state ?? 0;
    message.name = object.name ?? "";
    message.script = object.script ?? "";
    message.timeout = (object.timeout !== undefined && object.timeout !== null)
      ? Duration.fromPartial(object.timeout)
      : undefined;
    message.allowedToFail = object.allowedToFail ?? false;
    return message;
  },
};

function createBaseActionIDQuery(): ActionIDQuery {
  return { id: "" };
}

export const ActionIDQuery = {
  encode(message: ActionIDQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActionIDQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionIDQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ActionIDQuery>): ActionIDQuery {
    return ActionIDQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ActionIDQuery>): ActionIDQuery {
    const message = createBaseActionIDQuery();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseActionNameQuery(): ActionNameQuery {
  return { name: "", method: 0 };
}

export const ActionNameQuery = {
  encode(message: ActionNameQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActionNameQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionNameQuery();
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

  create(base?: DeepPartial<ActionNameQuery>): ActionNameQuery {
    return ActionNameQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ActionNameQuery>): ActionNameQuery {
    const message = createBaseActionNameQuery();
    message.name = object.name ?? "";
    message.method = object.method ?? 0;
    return message;
  },
};

function createBaseActionStateQuery(): ActionStateQuery {
  return { state: 0 };
}

export const ActionStateQuery = {
  encode(message: ActionStateQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActionStateQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionStateQuery();
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

  create(base?: DeepPartial<ActionStateQuery>): ActionStateQuery {
    return ActionStateQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ActionStateQuery>): ActionStateQuery {
    const message = createBaseActionStateQuery();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseFlow(): Flow {
  return { type: undefined, details: undefined, state: 0, triggerActions: [] };
}

export const Flow = {
  encode(message: Flow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== undefined) {
      FlowType.encode(message.type, writer.uint32(10).fork()).ldelim();
    }
    if (message.details !== undefined) {
      ObjectDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    for (const v of message.triggerActions) {
      TriggerAction.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Flow {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = FlowType.decode(reader, reader.uint32());
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

          message.triggerActions.push(TriggerAction.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Flow>): Flow {
    return Flow.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Flow>): Flow {
    const message = createBaseFlow();
    message.type = (object.type !== undefined && object.type !== null) ? FlowType.fromPartial(object.type) : undefined;
    message.details = (object.details !== undefined && object.details !== null)
      ? ObjectDetails.fromPartial(object.details)
      : undefined;
    message.state = object.state ?? 0;
    message.triggerActions = object.triggerActions?.map((e) => TriggerAction.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFlowType(): FlowType {
  return { id: "", name: undefined };
}

export const FlowType = {
  encode(message: FlowType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      LocalizedMessage.encode(message.name, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FlowType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlowType();
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

          message.name = LocalizedMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<FlowType>): FlowType {
    return FlowType.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FlowType>): FlowType {
    const message = createBaseFlowType();
    message.id = object.id ?? "";
    message.name = (object.name !== undefined && object.name !== null)
      ? LocalizedMessage.fromPartial(object.name)
      : undefined;
    return message;
  },
};

function createBaseTriggerType(): TriggerType {
  return { id: "", name: undefined };
}

export const TriggerType = {
  encode(message: TriggerType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      LocalizedMessage.encode(message.name, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TriggerType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerType();
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

          message.name = LocalizedMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<TriggerType>): TriggerType {
    return TriggerType.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TriggerType>): TriggerType {
    const message = createBaseTriggerType();
    message.id = object.id ?? "";
    message.name = (object.name !== undefined && object.name !== null)
      ? LocalizedMessage.fromPartial(object.name)
      : undefined;
    return message;
  },
};

function createBaseTriggerAction(): TriggerAction {
  return { triggerType: undefined, actions: [] };
}

export const TriggerAction = {
  encode(message: TriggerAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.triggerType !== undefined) {
      TriggerType.encode(message.triggerType, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.actions) {
      Action.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TriggerAction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.triggerType = TriggerType.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.actions.push(Action.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<TriggerAction>): TriggerAction {
    return TriggerAction.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TriggerAction>): TriggerAction {
    const message = createBaseTriggerAction();
    message.triggerType = (object.triggerType !== undefined && object.triggerType !== null)
      ? TriggerType.fromPartial(object.triggerType)
      : undefined;
    message.actions = object.actions?.map((e) => Action.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
