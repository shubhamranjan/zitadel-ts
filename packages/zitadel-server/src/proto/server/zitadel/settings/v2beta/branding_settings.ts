/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ResourceOwnerType } from "./settings";

export const protobufPackage = "zitadel.settings.v2beta";

export enum ThemeMode {
  THEME_MODE_UNSPECIFIED = 0,
  THEME_MODE_AUTO = 1,
  THEME_MODE_LIGHT = 2,
  THEME_MODE_DARK = 3,
  UNRECOGNIZED = -1,
}

export interface BrandingSettings {
  lightTheme: Theme | undefined;
  darkTheme: Theme | undefined;
  fontUrl: string;
  /** hides the org suffix on the login form if the scope \"urn:zitadel:iam:org:domain:primary:{domainname}\" is set */
  hideLoginNameSuffix: boolean;
  disableWatermark: boolean;
  /** resource_owner_type returns if the setting is managed on the organization or on the instance */
  resourceOwnerType: ResourceOwnerType;
  themeMode: ThemeMode;
}

export interface Theme {
  /** hex value for primary color */
  primaryColor: string;
  /** hex value for background color */
  backgroundColor: string;
  /** hex value for warning color */
  warnColor: string;
  /** hex value for font color */
  fontColor: string;
  /** url where the logo is served */
  logoUrl: string;
  /** url where the icon is served */
  iconUrl: string;
}

function createBaseBrandingSettings(): BrandingSettings {
  return {
    lightTheme: undefined,
    darkTheme: undefined,
    fontUrl: "",
    hideLoginNameSuffix: false,
    disableWatermark: false,
    resourceOwnerType: 0,
    themeMode: 0,
  };
}

export const BrandingSettings = {
  encode(message: BrandingSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lightTheme !== undefined) {
      Theme.encode(message.lightTheme, writer.uint32(10).fork()).ldelim();
    }
    if (message.darkTheme !== undefined) {
      Theme.encode(message.darkTheme, writer.uint32(18).fork()).ldelim();
    }
    if (message.fontUrl !== "") {
      writer.uint32(26).string(message.fontUrl);
    }
    if (message.hideLoginNameSuffix === true) {
      writer.uint32(32).bool(message.hideLoginNameSuffix);
    }
    if (message.disableWatermark === true) {
      writer.uint32(40).bool(message.disableWatermark);
    }
    if (message.resourceOwnerType !== 0) {
      writer.uint32(48).int32(message.resourceOwnerType);
    }
    if (message.themeMode !== 0) {
      writer.uint32(56).int32(message.themeMode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BrandingSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrandingSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lightTheme = Theme.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.darkTheme = Theme.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fontUrl = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.hideLoginNameSuffix = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.disableWatermark = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.resourceOwnerType = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.themeMode = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<BrandingSettings>): BrandingSettings {
    return BrandingSettings.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BrandingSettings>): BrandingSettings {
    const message = createBaseBrandingSettings();
    message.lightTheme = (object.lightTheme !== undefined && object.lightTheme !== null)
      ? Theme.fromPartial(object.lightTheme)
      : undefined;
    message.darkTheme = (object.darkTheme !== undefined && object.darkTheme !== null)
      ? Theme.fromPartial(object.darkTheme)
      : undefined;
    message.fontUrl = object.fontUrl ?? "";
    message.hideLoginNameSuffix = object.hideLoginNameSuffix ?? false;
    message.disableWatermark = object.disableWatermark ?? false;
    message.resourceOwnerType = object.resourceOwnerType ?? 0;
    message.themeMode = object.themeMode ?? 0;
    return message;
  },
};

function createBaseTheme(): Theme {
  return { primaryColor: "", backgroundColor: "", warnColor: "", fontColor: "", logoUrl: "", iconUrl: "" };
}

export const Theme = {
  encode(message: Theme, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.primaryColor !== "") {
      writer.uint32(10).string(message.primaryColor);
    }
    if (message.backgroundColor !== "") {
      writer.uint32(18).string(message.backgroundColor);
    }
    if (message.warnColor !== "") {
      writer.uint32(26).string(message.warnColor);
    }
    if (message.fontColor !== "") {
      writer.uint32(34).string(message.fontColor);
    }
    if (message.logoUrl !== "") {
      writer.uint32(42).string(message.logoUrl);
    }
    if (message.iconUrl !== "") {
      writer.uint32(50).string(message.iconUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Theme {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTheme();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.primaryColor = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.backgroundColor = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.warnColor = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fontColor = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.logoUrl = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.iconUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Theme>): Theme {
    return Theme.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Theme>): Theme {
    const message = createBaseTheme();
    message.primaryColor = object.primaryColor ?? "";
    message.backgroundColor = object.backgroundColor ?? "";
    message.warnColor = object.warnColor ?? "";
    message.fontColor = object.fontColor ?? "";
    message.logoUrl = object.logoUrl ?? "";
    message.iconUrl = object.iconUrl ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
