/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "zitadel.quota.v1";

export enum Unit {
  UNIT_UNIMPLEMENTED = 0,
  /**
   * UNIT_REQUESTS_ALL_AUTHENTICATED - The sum of all requests to the ZITADEL API with an authorization header,
   * excluding the following exceptions
   * - Calls to the System API
   * - Calls that cause internal server errors
   * - Failed authorizations
   * - Requests after the quota already exceeded
   */
  UNIT_REQUESTS_ALL_AUTHENTICATED = 1,
  /** UNIT_ACTIONS_ALL_RUN_SECONDS - The sum of all actions run durations in seconds */
  UNIT_ACTIONS_ALL_RUN_SECONDS = 2,
  UNRECOGNIZED = -1,
}

export interface Notification {
  /** The percentage relative to the quotas amount on which the call_url should be called. */
  percent: number;
  /** If true, the call_url is called each time a factor of percentage is reached. */
  repeat: boolean;
  /** The URL, which is called with HTTP method POST and a JSON payload with the properties "unit", "id" (notification id), "callURL", "periodStart", "threshold" and "usage". */
  callUrl: string;
}

function createBaseNotification(): Notification {
  return { percent: 0, repeat: false, callUrl: "" };
}

export const Notification = {
  encode(message: Notification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.percent !== 0) {
      writer.uint32(8).uint32(message.percent);
    }
    if (message.repeat === true) {
      writer.uint32(16).bool(message.repeat);
    }
    if (message.callUrl !== "") {
      writer.uint32(26).string(message.callUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Notification {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.percent = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.repeat = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.callUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Notification>): Notification {
    return Notification.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Notification>): Notification {
    const message = createBaseNotification();
    message.percent = object.percent ?? 0;
    message.repeat = object.repeat ?? false;
    message.callUrl = object.callUrl ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
