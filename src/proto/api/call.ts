/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  Location,
  Profile,
  Connection,
  Environment,
  ProfileList,
  Peer,
  connectionToNumber,
  environmentToNumber,
  connectionFromJSON,
  environmentFromJSON,
  connectionToJSON,
  environmentToJSON,
} from "../../proto/common/core";
import {
  PayloadList,
  MessageItem,
  SupplyItem,
  Payload,
} from "../../proto/common/data";

export const protobufPackage = "sonr.api";

/** / This file has messages for describing a API Request/Responses with RPC. */

/** (Highway) AuthorizeRequest is Message for Verifying Request (Hmac Sha256) */
export interface AuthorizeRequest {
  /** SName combined with Device ID and Hashed */
  sName: string;
  /** Mnemonic Hashed with public key for fingerprint */
  mnemonic: string;
  /** Device ID */
  deviceId: string;
}

/** (Highway) AuthorizeResponse is Message for Verifying Response (Hmac Sha256) */
export interface AuthorizeResponse {
  /** If Values were Verified */
  success: boolean;
  /** Error Message */
  error: string;
  /** Updated Domain TXT Records */
  records: { [key: string]: string };
}

export interface AuthorizeResponse_RecordsEntry {
  key: string;
  value: string;
}

/** (Client) InitializeRequest Message to Establish Sonr Host/API/Room */
export interface InitializeRequest {
  /** Current Runtime Location */
  location?: Location;
  /** Users Contact Card */
  profile?: Profile;
  /** Internet Connection Type */
  connection: Connection;
  /** Libp2p Host config */
  hostOptions?: InitializeRequest_HostOptions;
  /** Service Config */
  serviceOptions?: InitializeRequest_ServiceOptions;
  /** File System Config */
  deviceOptions?: InitializeRequest_DeviceOptions;
  /** Environment Config */
  environment: Environment;
  /** Domain TXT Records */
  variables: { [key: string]: string };
}

export interface InitializeRequest_VariablesEntry {
  key: string;
  value: string;
}

/** Optional Message to Initialize FileSystem */
export interface InitializeRequest_DeviceOptions {
  /** Device ID */
  id: string;
  homeDir: string;
  supportDir: string;
  tempDir: string;
}

/** Libp2p Host Options */
export interface InitializeRequest_HostOptions {
  /** Enable QUIC Transport */
  quicTransport: boolean;
  /** Enable HTTP Transport */
  httpTransport: boolean;
  /** Enable IPv4 Only */
  ipv4Only: boolean;
  /** List of Listen Addresses (optional) */
  listenAddrs: InitializeRequest_IPAddress[];
}

/** Service Configuration */
export interface InitializeRequest_ServiceOptions {
  /** Enable Textile Client and Threads */
  textile: boolean;
  /** Enable Mailbox */
  mailbox: boolean;
  /** Enable Buckets */
  buckets: boolean;
  /** Auto Update Interval (seconds) - Default 5s */
  interval: number;
}

/** IP Address Interface */
export interface InitializeRequest_IPAddress {
  /** Name of Interface */
  name: string;
  /** IP Address of Interface */
  address: string;
  /** Wether it is a Loopback Interface */
  internal: boolean;
  /** Address Family */
  family: InitializeRequest_IPAddress_Family;
}

export enum InitializeRequest_IPAddress_Family {
  /** IPV4 - IPv4 Address */
  IPV4 = "IPV4",
  /** IPV6 - IPv6 Address */
  IPV6 = "IPV6",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function initializeRequest_IPAddress_FamilyFromJSON(
  object: any
): InitializeRequest_IPAddress_Family {
  switch (object) {
    case 0:
    case "IPV4":
      return InitializeRequest_IPAddress_Family.IPV4;
    case 1:
    case "IPV6":
      return InitializeRequest_IPAddress_Family.IPV6;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InitializeRequest_IPAddress_Family.UNRECOGNIZED;
  }
}

export function initializeRequest_IPAddress_FamilyToJSON(
  object: InitializeRequest_IPAddress_Family
): string {
  switch (object) {
    case InitializeRequest_IPAddress_Family.IPV4:
      return "IPV4";
    case InitializeRequest_IPAddress_Family.IPV6:
      return "IPV6";
    default:
      return "UNKNOWN";
  }
}

export function initializeRequest_IPAddress_FamilyToNumber(
  object: InitializeRequest_IPAddress_Family
): number {
  switch (object) {
    case InitializeRequest_IPAddress_Family.IPV4:
      return 0;
    case InitializeRequest_IPAddress_Family.IPV6:
      return 1;
    default:
      return 0;
  }
}

/** (Client) InitializeResponse is Response from Initialize Request */
export interface InitializeResponse {
  /** True if Host is Active */
  success: boolean;
  /** Error Message if Host is not Active */
  error: string;
  /** Users Profile from store */
  profile?: Profile;
  /** Recent Peers from store */
  recents: { [key: string]: ProfileList };
  /** File transfer history from store */
  history: { [key: string]: PayloadList };
  /** User Status from store' */
  userStatus: InitializeResponse_UserStatus;
}

/** User Status */
export enum InitializeResponse_UserStatus {
  /** RETURNING - User is Returning */
  RETURNING = "RETURNING",
  /** NEW - User is New */
  NEW = "NEW",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function initializeResponse_UserStatusFromJSON(
  object: any
): InitializeResponse_UserStatus {
  switch (object) {
    case 0:
    case "RETURNING":
      return InitializeResponse_UserStatus.RETURNING;
    case 1:
    case "NEW":
      return InitializeResponse_UserStatus.NEW;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InitializeResponse_UserStatus.UNRECOGNIZED;
  }
}

export function initializeResponse_UserStatusToJSON(
  object: InitializeResponse_UserStatus
): string {
  switch (object) {
    case InitializeResponse_UserStatus.RETURNING:
      return "RETURNING";
    case InitializeResponse_UserStatus.NEW:
      return "NEW";
    default:
      return "UNKNOWN";
  }
}

export function initializeResponse_UserStatusToNumber(
  object: InitializeResponse_UserStatus
): number {
  switch (object) {
    case InitializeResponse_UserStatus.RETURNING:
      return 0;
    case InitializeResponse_UserStatus.NEW:
      return 1;
    default:
      return 0;
  }
}

export interface InitializeResponse_RecentsEntry {
  key: string;
  value?: ProfileList;
}

export interface InitializeResponse_HistoryEntry {
  key: string;
  value?: PayloadList;
}

/** (Client) SupplyRequest supplies path to files or urls and optionally a Peer */
export interface SupplyRequest {
  /** Supply Paths */
  items: SupplyItem[];
  /** Supply Peer */
  peer?: Peer | undefined;
  /** Supply Peer */
  isPeerSupply: boolean;
}

/** (Client) SupplyResponse is response to SupplyRequest */
export interface SupplyResponse {
  /** True if Supply is Active */
  success: boolean;
  /** Error Message if Supply is not Active */
  error: string;
}

/** (Client) EditRequest is request to edit user profile */
export interface EditRequest {
  /** Type of Edit */
  type: EditRequest_Type;
  /** Profile to Edit */
  profile?: Profile;
  /** Payload to Delete */
  history?: Payload | undefined;
  /** Profile to Delete */
  recent?: Profile | undefined;
}

export enum EditRequest_Type {
  /** NONE - No Delete */
  NONE = "NONE",
  /** DELETE - Delete Profile, Payload, or File */
  DELETE = "DELETE",
  /** MODIFY - Modify Profile */
  MODIFY = "MODIFY",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function editRequest_TypeFromJSON(object: any): EditRequest_Type {
  switch (object) {
    case 0:
    case "NONE":
      return EditRequest_Type.NONE;
    case 1:
    case "DELETE":
      return EditRequest_Type.DELETE;
    case 2:
    case "MODIFY":
      return EditRequest_Type.MODIFY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EditRequest_Type.UNRECOGNIZED;
  }
}

export function editRequest_TypeToJSON(object: EditRequest_Type): string {
  switch (object) {
    case EditRequest_Type.NONE:
      return "NONE";
    case EditRequest_Type.DELETE:
      return "DELETE";
    case EditRequest_Type.MODIFY:
      return "MODIFY";
    default:
      return "UNKNOWN";
  }
}

export function editRequest_TypeToNumber(object: EditRequest_Type): number {
  switch (object) {
    case EditRequest_Type.NONE:
      return 0;
    case EditRequest_Type.DELETE:
      return 1;
    case EditRequest_Type.MODIFY:
      return 2;
    default:
      return 0;
  }
}

/** (Client) EditResponse is response to EditRequest */
export interface EditResponse {
  /** True if Supply is Active */
  success: boolean;
  /** Error Message if Supply is not Active */
  error: string;
}

/** Fetch Request to Fetch a Property from Key/Value Store */
export interface FetchRequest {
  /** Key to Fetch */
  key: FetchRequest_Key;
}

export enum FetchRequest_Key {
  /** ALL - Fetch All Keys */
  ALL = "ALL",
  /** PROFILE - User Profile */
  PROFILE = "PROFILE",
  /** DEVICES - Linked Devices */
  DEVICES = "DEVICES",
  /** RECENTS - Recent Peers */
  RECENTS = "RECENTS",
  /** HISTORY - File Transfer History */
  HISTORY = "HISTORY",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function fetchRequest_KeyFromJSON(object: any): FetchRequest_Key {
  switch (object) {
    case 0:
    case "ALL":
      return FetchRequest_Key.ALL;
    case 1:
    case "PROFILE":
      return FetchRequest_Key.PROFILE;
    case 2:
    case "DEVICES":
      return FetchRequest_Key.DEVICES;
    case 3:
    case "RECENTS":
      return FetchRequest_Key.RECENTS;
    case 4:
    case "HISTORY":
      return FetchRequest_Key.HISTORY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FetchRequest_Key.UNRECOGNIZED;
  }
}

export function fetchRequest_KeyToJSON(object: FetchRequest_Key): string {
  switch (object) {
    case FetchRequest_Key.ALL:
      return "ALL";
    case FetchRequest_Key.PROFILE:
      return "PROFILE";
    case FetchRequest_Key.DEVICES:
      return "DEVICES";
    case FetchRequest_Key.RECENTS:
      return "RECENTS";
    case FetchRequest_Key.HISTORY:
      return "HISTORY";
    default:
      return "UNKNOWN";
  }
}

export function fetchRequest_KeyToNumber(object: FetchRequest_Key): number {
  switch (object) {
    case FetchRequest_Key.ALL:
      return 0;
    case FetchRequest_Key.PROFILE:
      return 1;
    case FetchRequest_Key.DEVICES:
      return 2;
    case FetchRequest_Key.RECENTS:
      return 3;
    case FetchRequest_Key.HISTORY:
      return 4;
    default:
      return 0;
  }
}

/** (Client) Fetch Response to Fetch Request */
export interface FetchResponse {
  /** True if Fetch is Active */
  success: boolean;
  /** Error Message if Fetch is not Active */
  error: string;
  /** Profile */
  profile?: Profile;
  /** Linked Devices */
  devices: { [key: string]: Peer };
  /** map<string, sonr.core.ProfileList> recents = 5; // Recent Peers */
  recents?: ProfileList;
  /** map<string, sonr.core.PayloadList> history = 6; // File Transfer History */
  history?: PayloadList;
}

export interface FetchResponse_DevicesEntry {
  key: string;
  value?: Peer;
}

/** (Highway) LinkRequest handles Linked Devices on DNS Table */
export interface LinkRequest {
  /** SName combined with Device ID and Hashed */
  sName: string;
  /** Mnemonic Hashed with public key for fingerprint */
  mnemonic: string;
  /** Device ID */
  deviceId: string;
  /** Method for Linking */
  method: LinkRequest_Method;
}

/** Method for Linking */
export enum LinkRequest_Method {
  /** ADD - Add Device ID to SName on DNS Table */
  ADD = "ADD",
  /** REMOVE - Remove Device ID from SName on DNS Table */
  REMOVE = "REMOVE",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function linkRequest_MethodFromJSON(object: any): LinkRequest_Method {
  switch (object) {
    case 0:
    case "ADD":
      return LinkRequest_Method.ADD;
    case 1:
    case "REMOVE":
      return LinkRequest_Method.REMOVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LinkRequest_Method.UNRECOGNIZED;
  }
}

export function linkRequest_MethodToJSON(object: LinkRequest_Method): string {
  switch (object) {
    case LinkRequest_Method.ADD:
      return "ADD";
    case LinkRequest_Method.REMOVE:
      return "REMOVE";
    default:
      return "UNKNOWN";
  }
}

export function linkRequest_MethodToNumber(object: LinkRequest_Method): number {
  switch (object) {
    case LinkRequest_Method.ADD:
      return 0;
    case LinkRequest_Method.REMOVE:
      return 1;
    default:
      return 0;
  }
}

/** (Highway) LinkResponse is Message for Linking Response (Hmac Sha256) */
export interface LinkResponse {
  /** If Values were Signed */
  success: boolean;
  /** Error Message */
  error: string;
  /** Updated Domain TXT Records */
  records: { [key: string]: string };
}

export interface LinkResponse_RecordsEntry {
  key: string;
  value: string;
}

/** (Client) ShareRequest is request to share supplied files/urls with a peer */
export interface ShareRequest {
  /** Peer to Share with */
  peer?: Peer;
  /** Message to Share */
  message?: MessageItem;
  /** Supply Items to share */
  items: SupplyItem[];
}

/** (Client) ShareResponse is response to ShareRequest */
export interface ShareResponse {
  /** True if Supply is Active */
  success: boolean;
  /** Error Message if Supply is not Active */
  error: string;
}

/** (Highway) RegisterRequest is Message for Signing Request (Hmac Sha256) */
export interface RegisterRequest {
  /** SName combined with Device ID and Hashed */
  sName: string;
  /** Mnemonic Hashed with private key for fingerprint */
  prefix: string;
  /** Fingerprint of Public Key */
  fingerprint: string;
}

/** (Highway) RegisterResponse is Message for Signing Response (Hmac Sha256) */
export interface RegisterResponse {
  /** If Values were Signed */
  success: boolean;
  /** Error Message */
  error: string;
  /** Signed Domain TXT Records */
  records: { [key: string]: string };
}

export interface RegisterResponse_RecordsEntry {
  key: string;
  value: string;
}

/** (Client) RespondRequest is request to respond to a share request */
export interface RespondRequest {
  /** True if Supply is Active */
  decision: boolean;
  /** Peer to Share with */
  peer?: Peer;
}

/** (Client) RespondResponse is response to RespondRequest */
export interface RespondResponse {
  /** True if Supply is Active */
  success: boolean;
  /** Error Message if Supply is not Active */
  error: string;
}

/** (Client) SearchRequest is Message for Searching for Peer */
export interface SearchRequest {
  /** SName combined with Device ID and Hashed */
  sName: string | undefined;
  /** Peer ID */
  peerId: string | undefined;
}

/** (Client) SearchResponse is Message for Searching for Peer */
export interface SearchResponse {
  /** Success */
  success: boolean;
  /** Error Message */
  error: string;
  /** Peer Data */
  peer?: Peer;
  /** Peer ID */
  peerId: string;
  /** SName */
  sName: string;
}

const baseAuthorizeRequest: object = { sName: "", mnemonic: "", deviceId: "" };

export const AuthorizeRequest = {
  encode(
    message: AuthorizeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sName !== "") {
      writer.uint32(10).string(message.sName);
    }
    if (message.mnemonic !== "") {
      writer.uint32(18).string(message.mnemonic);
    }
    if (message.deviceId !== "") {
      writer.uint32(26).string(message.deviceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAuthorizeRequest } as AuthorizeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sName = reader.string();
          break;
        case 2:
          message.mnemonic = reader.string();
          break;
        case 3:
          message.deviceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthorizeRequest {
    const message = { ...baseAuthorizeRequest } as AuthorizeRequest;
    if (object.sName !== undefined && object.sName !== null) {
      message.sName = String(object.sName);
    } else {
      message.sName = "";
    }
    if (object.mnemonic !== undefined && object.mnemonic !== null) {
      message.mnemonic = String(object.mnemonic);
    } else {
      message.mnemonic = "";
    }
    if (object.deviceId !== undefined && object.deviceId !== null) {
      message.deviceId = String(object.deviceId);
    } else {
      message.deviceId = "";
    }
    return message;
  },

  toJSON(message: AuthorizeRequest): unknown {
    const obj: any = {};
    message.sName !== undefined && (obj.sName = message.sName);
    message.mnemonic !== undefined && (obj.mnemonic = message.mnemonic);
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    return obj;
  },

  fromPartial(object: DeepPartial<AuthorizeRequest>): AuthorizeRequest {
    const message = { ...baseAuthorizeRequest } as AuthorizeRequest;
    if (object.sName !== undefined && object.sName !== null) {
      message.sName = object.sName;
    } else {
      message.sName = "";
    }
    if (object.mnemonic !== undefined && object.mnemonic !== null) {
      message.mnemonic = object.mnemonic;
    } else {
      message.mnemonic = "";
    }
    if (object.deviceId !== undefined && object.deviceId !== null) {
      message.deviceId = object.deviceId;
    } else {
      message.deviceId = "";
    }
    return message;
  },
};

const baseAuthorizeResponse: object = { success: false, error: "" };

export const AuthorizeResponse = {
  encode(
    message: AuthorizeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    Object.entries(message.records).forEach(([key, value]) => {
      AuthorizeResponse_RecordsEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAuthorizeResponse } as AuthorizeResponse;
    message.records = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 2:
          message.error = reader.string();
          break;
        case 3:
          const entry3 = AuthorizeResponse_RecordsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.records[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthorizeResponse {
    const message = { ...baseAuthorizeResponse } as AuthorizeResponse;
    message.records = {};
    if (object.success !== undefined && object.success !== null) {
      message.success = Boolean(object.success);
    } else {
      message.success = false;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = String(object.error);
    } else {
      message.error = "";
    }
    if (object.records !== undefined && object.records !== null) {
      Object.entries(object.records).forEach(([key, value]) => {
        message.records[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: AuthorizeResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.error !== undefined && (obj.error = message.error);
    obj.records = {};
    if (message.records) {
      Object.entries(message.records).forEach(([k, v]) => {
        obj.records[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<AuthorizeResponse>): AuthorizeResponse {
    const message = { ...baseAuthorizeResponse } as AuthorizeResponse;
    message.records = {};
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    } else {
      message.success = false;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    } else {
      message.error = "";
    }
    if (object.records !== undefined && object.records !== null) {
      Object.entries(object.records).forEach(([key, value]) => {
        if (value !== undefined) {
          message.records[key] = String(value);
        }
      });
    }
    return message;
  },
};

const baseAuthorizeResponse_RecordsEntry: object = { key: "", value: "" };

export const AuthorizeResponse_RecordsEntry = {
  encode(
    message: AuthorizeResponse_RecordsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthorizeResponse_RecordsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAuthorizeResponse_RecordsEntry,
    } as AuthorizeResponse_RecordsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthorizeResponse_RecordsEntry {
    const message = {
      ...baseAuthorizeResponse_RecordsEntry,
    } as AuthorizeResponse_RecordsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: AuthorizeResponse_RecordsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AuthorizeResponse_RecordsEntry>
  ): AuthorizeResponse_RecordsEntry {
    const message = {
      ...baseAuthorizeResponse_RecordsEntry,
    } as AuthorizeResponse_RecordsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseInitializeRequest: object = {
  connection: Connection.WIFI,
  environment: Environment.DEVELOPMENT,
};

export const InitializeRequest = {
  encode(
    message: InitializeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.location !== undefined) {
      Location.encode(message.location, writer.uint32(10).fork()).ldelim();
    }
    if (message.profile !== undefined) {
      Profile.encode(message.profile, writer.uint32(18).fork()).ldelim();
    }
    if (message.connection !== Connection.WIFI) {
      writer.uint32(24).int32(connectionToNumber(message.connection));
    }
    if (message.hostOptions !== undefined) {
      InitializeRequest_HostOptions.encode(
        message.hostOptions,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.serviceOptions !== undefined) {
      InitializeRequest_ServiceOptions.encode(
        message.serviceOptions,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.deviceOptions !== undefined) {
      InitializeRequest_DeviceOptions.encode(
        message.deviceOptions,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.environment !== Environment.DEVELOPMENT) {
      writer.uint32(56).int32(environmentToNumber(message.environment));
    }
    Object.entries(message.variables).forEach(([key, value]) => {
      InitializeRequest_VariablesEntry.encode(
        { key: key as any, value },
        writer.uint32(66).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitializeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInitializeRequest } as InitializeRequest;
    message.variables = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.location = Location.decode(reader, reader.uint32());
          break;
        case 2:
          message.profile = Profile.decode(reader, reader.uint32());
          break;
        case 3:
          message.connection = connectionFromJSON(reader.int32());
          break;
        case 4:
          message.hostOptions = InitializeRequest_HostOptions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.serviceOptions = InitializeRequest_ServiceOptions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.deviceOptions = InitializeRequest_DeviceOptions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.environment = environmentFromJSON(reader.int32());
          break;
        case 8:
          const entry8 = InitializeRequest_VariablesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry8.value !== undefined) {
            message.variables[entry8.key] = entry8.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InitializeRequest {
    const message = { ...baseInitializeRequest } as InitializeRequest;
    message.variables = {};
    if (object.location !== undefined && object.location !== null) {
      message.location = Location.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    if (object.profile !== undefined && object.profile !== null) {
      message.profile = Profile.fromJSON(object.profile);
    } else {
      message.profile = undefined;
    }
    if (object.connection !== undefined && object.connection !== null) {
      message.connection = connectionFromJSON(object.connection);
    } else {
      message.connection = Connection.WIFI;
    }
    if (object.hostOptions !== undefined && object.hostOptions !== null) {
      message.hostOptions = InitializeRequest_HostOptions.fromJSON(
        object.hostOptions
      );
    } else {
      message.hostOptions = undefined;
    }
    if (object.serviceOptions !== undefined && object.serviceOptions !== null) {
      message.serviceOptions = InitializeRequest_ServiceOptions.fromJSON(
        object.serviceOptions
      );
    } else {
      message.serviceOptions = undefined;
    }
    if (object.deviceOptions !== undefined && object.deviceOptions !== null) {
      message.deviceOptions = InitializeRequest_DeviceOptions.fromJSON(
        object.deviceOptions
      );
    } else {
      message.deviceOptions = undefined;
    }
    if (object.environment !== undefined && object.environment !== null) {
      message.environment = environmentFromJSON(object.environment);
    } else {
      message.environment = Environment.DEVELOPMENT;
    }
    if (object.variables !== undefined && object.variables !== null) {
      Object.entries(object.variables).forEach(([key, value]) => {
        message.variables[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: InitializeRequest): unknown {
    const obj: any = {};
    message.location !== undefined &&
      (obj.location = message.location
        ? Location.toJSON(message.location)
        : undefined);
    message.profile !== undefined &&
      (obj.profile = message.profile
        ? Profile.toJSON(message.profile)
        : undefined);
    message.connection !== undefined &&
      (obj.connection = connectionToJSON(message.connection));
    message.hostOptions !== undefined &&
      (obj.hostOptions = message.hostOptions
        ? InitializeRequest_HostOptions.toJSON(message.hostOptions)
        : undefined);
    message.serviceOptions !== undefined &&
      (obj.serviceOptions = message.serviceOptions
        ? InitializeRequest_ServiceOptions.toJSON(message.serviceOptions)
        : undefined);
    message.deviceOptions !== undefined &&
      (obj.deviceOptions = message.deviceOptions
        ? InitializeRequest_DeviceOptions.toJSON(message.deviceOptions)
        : undefined);
    message.environment !== undefined &&
      (obj.environment = environmentToJSON(message.environment));
    obj.variables = {};
    if (message.variables) {
      Object.entries(message.variables).forEach(([k, v]) => {
        obj.variables[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<InitializeRequest>): InitializeRequest {
    const message = { ...baseInitializeRequest } as InitializeRequest;
    message.variables = {};
    if (object.location !== undefined && object.location !== null) {
      message.location = Location.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    if (object.profile !== undefined && object.profile !== null) {
      message.profile = Profile.fromPartial(object.profile);
    } else {
      message.profile = undefined;
    }
    if (object.connection !== undefined && object.connection !== null) {
      message.connection = object.connection;
    } else {
      message.connection = Connection.WIFI;
    }
    if (object.hostOptions !== undefined && object.hostOptions !== null) {
      message.hostOptions = InitializeRequest_HostOptions.fromPartial(
        object.hostOptions
      );
    } else {
      message.hostOptions = undefined;
    }
    if (object.serviceOptions !== undefined && object.serviceOptions !== null) {
      message.serviceOptions = InitializeRequest_ServiceOptions.fromPartial(
        object.serviceOptions
      );
    } else {
      message.serviceOptions = undefined;
    }
    if (object.deviceOptions !== undefined && object.deviceOptions !== null) {
      message.deviceOptions = InitializeRequest_DeviceOptions.fromPartial(
        object.deviceOptions
      );
    } else {
      message.deviceOptions = undefined;
    }
    if (object.environment !== undefined && object.environment !== null) {
      message.environment = object.environment;
    } else {
      message.environment = Environment.DEVELOPMENT;
    }
    if (object.variables !== undefined && object.variables !== null) {
      Object.entries(object.variables).forEach(([key, value]) => {
        if (value !== undefined) {
          message.variables[key] = String(value);
        }
      });
    }
    return message;
  },
};

const baseInitializeRequest_VariablesEntry: object = { key: "", value: "" };

export const InitializeRequest_VariablesEntry = {
  encode(
    message: InitializeRequest_VariablesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InitializeRequest_VariablesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInitializeRequest_VariablesEntry,
    } as InitializeRequest_VariablesEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InitializeRequest_VariablesEntry {
    const message = {
      ...baseInitializeRequest_VariablesEntry,
    } as InitializeRequest_VariablesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: InitializeRequest_VariablesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<InitializeRequest_VariablesEntry>
  ): InitializeRequest_VariablesEntry {
    const message = {
      ...baseInitializeRequest_VariablesEntry,
    } as InitializeRequest_VariablesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseInitializeRequest_DeviceOptions: object = {
  id: "",
  homeDir: "",
  supportDir: "",
  tempDir: "",
};

export const InitializeRequest_DeviceOptions = {
  encode(
    message: InitializeRequest_DeviceOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.homeDir !== "") {
      writer.uint32(18).string(message.homeDir);
    }
    if (message.supportDir !== "") {
      writer.uint32(26).string(message.supportDir);
    }
    if (message.tempDir !== "") {
      writer.uint32(34).string(message.tempDir);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InitializeRequest_DeviceOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInitializeRequest_DeviceOptions,
    } as InitializeRequest_DeviceOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.homeDir = reader.string();
          break;
        case 3:
          message.supportDir = reader.string();
          break;
        case 4:
          message.tempDir = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InitializeRequest_DeviceOptions {
    const message = {
      ...baseInitializeRequest_DeviceOptions,
    } as InitializeRequest_DeviceOptions;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.homeDir !== undefined && object.homeDir !== null) {
      message.homeDir = String(object.homeDir);
    } else {
      message.homeDir = "";
    }
    if (object.supportDir !== undefined && object.supportDir !== null) {
      message.supportDir = String(object.supportDir);
    } else {
      message.supportDir = "";
    }
    if (object.tempDir !== undefined && object.tempDir !== null) {
      message.tempDir = String(object.tempDir);
    } else {
      message.tempDir = "";
    }
    return message;
  },

  toJSON(message: InitializeRequest_DeviceOptions): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.homeDir !== undefined && (obj.homeDir = message.homeDir);
    message.supportDir !== undefined && (obj.supportDir = message.supportDir);
    message.tempDir !== undefined && (obj.tempDir = message.tempDir);
    return obj;
  },

  fromPartial(
    object: DeepPartial<InitializeRequest_DeviceOptions>
  ): InitializeRequest_DeviceOptions {
    const message = {
      ...baseInitializeRequest_DeviceOptions,
    } as InitializeRequest_DeviceOptions;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.homeDir !== undefined && object.homeDir !== null) {
      message.homeDir = object.homeDir;
    } else {
      message.homeDir = "";
    }
    if (object.supportDir !== undefined && object.supportDir !== null) {
      message.supportDir = object.supportDir;
    } else {
      message.supportDir = "";
    }
    if (object.tempDir !== undefined && object.tempDir !== null) {
      message.tempDir = object.tempDir;
    } else {
      message.tempDir = "";
    }
    return message;
  },
};

const baseInitializeRequest_HostOptions: object = {
  quicTransport: false,
  httpTransport: false,
  ipv4Only: false,
};

export const InitializeRequest_HostOptions = {
  encode(
    message: InitializeRequest_HostOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.quicTransport === true) {
      writer.uint32(8).bool(message.quicTransport);
    }
    if (message.httpTransport === true) {
      writer.uint32(16).bool(message.httpTransport);
    }
    if (message.ipv4Only === true) {
      writer.uint32(24).bool(message.ipv4Only);
    }
    for (const v of message.listenAddrs) {
      InitializeRequest_IPAddress.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InitializeRequest_HostOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInitializeRequest_HostOptions,
    } as InitializeRequest_HostOptions;
    message.listenAddrs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quicTransport = reader.bool();
          break;
        case 2:
          message.httpTransport = reader.bool();
          break;
        case 3:
          message.ipv4Only = reader.bool();
          break;
        case 4:
          message.listenAddrs.push(
            InitializeRequest_IPAddress.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InitializeRequest_HostOptions {
    const message = {
      ...baseInitializeRequest_HostOptions,
    } as InitializeRequest_HostOptions;
    message.listenAddrs = [];
    if (object.quicTransport !== undefined && object.quicTransport !== null) {
      message.quicTransport = Boolean(object.quicTransport);
    } else {
      message.quicTransport = false;
    }
    if (object.httpTransport !== undefined && object.httpTransport !== null) {
      message.httpTransport = Boolean(object.httpTransport);
    } else {
      message.httpTransport = false;
    }
    if (object.ipv4Only !== undefined && object.ipv4Only !== null) {
      message.ipv4Only = Boolean(object.ipv4Only);
    } else {
      message.ipv4Only = false;
    }
    if (object.listenAddrs !== undefined && object.listenAddrs !== null) {
      for (const e of object.listenAddrs) {
        message.listenAddrs.push(InitializeRequest_IPAddress.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: InitializeRequest_HostOptions): unknown {
    const obj: any = {};
    message.quicTransport !== undefined &&
      (obj.quicTransport = message.quicTransport);
    message.httpTransport !== undefined &&
      (obj.httpTransport = message.httpTransport);
    message.ipv4Only !== undefined && (obj.ipv4Only = message.ipv4Only);
    if (message.listenAddrs) {
      obj.listenAddrs = message.listenAddrs.map((e) =>
        e ? InitializeRequest_IPAddress.toJSON(e) : undefined
      );
    } else {
      obj.listenAddrs = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<InitializeRequest_HostOptions>
  ): InitializeRequest_HostOptions {
    const message = {
      ...baseInitializeRequest_HostOptions,
    } as InitializeRequest_HostOptions;
    message.listenAddrs = [];
    if (object.quicTransport !== undefined && object.quicTransport !== null) {
      message.quicTransport = object.quicTransport;
    } else {
      message.quicTransport = false;
    }
    if (object.httpTransport !== undefined && object.httpTransport !== null) {
      message.httpTransport = object.httpTransport;
    } else {
      message.httpTransport = false;
    }
    if (object.ipv4Only !== undefined && object.ipv4Only !== null) {
      message.ipv4Only = object.ipv4Only;
    } else {
      message.ipv4Only = false;
    }
    if (object.listenAddrs !== undefined && object.listenAddrs !== null) {
      for (const e of object.listenAddrs) {
        message.listenAddrs.push(InitializeRequest_IPAddress.fromPartial(e));
      }
    }
    return message;
  },
};

const baseInitializeRequest_ServiceOptions: object = {
  textile: false,
  mailbox: false,
  buckets: false,
  interval: 0,
};

export const InitializeRequest_ServiceOptions = {
  encode(
    message: InitializeRequest_ServiceOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.textile === true) {
      writer.uint32(8).bool(message.textile);
    }
    if (message.mailbox === true) {
      writer.uint32(16).bool(message.mailbox);
    }
    if (message.buckets === true) {
      writer.uint32(24).bool(message.buckets);
    }
    if (message.interval !== 0) {
      writer.uint32(32).int32(message.interval);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InitializeRequest_ServiceOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInitializeRequest_ServiceOptions,
    } as InitializeRequest_ServiceOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.textile = reader.bool();
          break;
        case 2:
          message.mailbox = reader.bool();
          break;
        case 3:
          message.buckets = reader.bool();
          break;
        case 4:
          message.interval = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InitializeRequest_ServiceOptions {
    const message = {
      ...baseInitializeRequest_ServiceOptions,
    } as InitializeRequest_ServiceOptions;
    if (object.textile !== undefined && object.textile !== null) {
      message.textile = Boolean(object.textile);
    } else {
      message.textile = false;
    }
    if (object.mailbox !== undefined && object.mailbox !== null) {
      message.mailbox = Boolean(object.mailbox);
    } else {
      message.mailbox = false;
    }
    if (object.buckets !== undefined && object.buckets !== null) {
      message.buckets = Boolean(object.buckets);
    } else {
      message.buckets = false;
    }
    if (object.interval !== undefined && object.interval !== null) {
      message.interval = Number(object.interval);
    } else {
      message.interval = 0;
    }
    return message;
  },

  toJSON(message: InitializeRequest_ServiceOptions): unknown {
    const obj: any = {};
    message.textile !== undefined && (obj.textile = message.textile);
    message.mailbox !== undefined && (obj.mailbox = message.mailbox);
    message.buckets !== undefined && (obj.buckets = message.buckets);
    message.interval !== undefined && (obj.interval = message.interval);
    return obj;
  },

  fromPartial(
    object: DeepPartial<InitializeRequest_ServiceOptions>
  ): InitializeRequest_ServiceOptions {
    const message = {
      ...baseInitializeRequest_ServiceOptions,
    } as InitializeRequest_ServiceOptions;
    if (object.textile !== undefined && object.textile !== null) {
      message.textile = object.textile;
    } else {
      message.textile = false;
    }
    if (object.mailbox !== undefined && object.mailbox !== null) {
      message.mailbox = object.mailbox;
    } else {
      message.mailbox = false;
    }
    if (object.buckets !== undefined && object.buckets !== null) {
      message.buckets = object.buckets;
    } else {
      message.buckets = false;
    }
    if (object.interval !== undefined && object.interval !== null) {
      message.interval = object.interval;
    } else {
      message.interval = 0;
    }
    return message;
  },
};

const baseInitializeRequest_IPAddress: object = {
  name: "",
  address: "",
  internal: false,
  family: InitializeRequest_IPAddress_Family.IPV4,
};

export const InitializeRequest_IPAddress = {
  encode(
    message: InitializeRequest_IPAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.internal === true) {
      writer.uint32(24).bool(message.internal);
    }
    if (message.family !== InitializeRequest_IPAddress_Family.IPV4) {
      writer
        .uint32(32)
        .int32(initializeRequest_IPAddress_FamilyToNumber(message.family));
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InitializeRequest_IPAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInitializeRequest_IPAddress,
    } as InitializeRequest_IPAddress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.internal = reader.bool();
          break;
        case 4:
          message.family = initializeRequest_IPAddress_FamilyFromJSON(
            reader.int32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InitializeRequest_IPAddress {
    const message = {
      ...baseInitializeRequest_IPAddress,
    } as InitializeRequest_IPAddress;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.internal !== undefined && object.internal !== null) {
      message.internal = Boolean(object.internal);
    } else {
      message.internal = false;
    }
    if (object.family !== undefined && object.family !== null) {
      message.family = initializeRequest_IPAddress_FamilyFromJSON(
        object.family
      );
    } else {
      message.family = InitializeRequest_IPAddress_Family.IPV4;
    }
    return message;
  },

  toJSON(message: InitializeRequest_IPAddress): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.address !== undefined && (obj.address = message.address);
    message.internal !== undefined && (obj.internal = message.internal);
    message.family !== undefined &&
      (obj.family = initializeRequest_IPAddress_FamilyToJSON(message.family));
    return obj;
  },

  fromPartial(
    object: DeepPartial<InitializeRequest_IPAddress>
  ): InitializeRequest_IPAddress {
    const message = {
      ...baseInitializeRequest_IPAddress,
    } as InitializeRequest_IPAddress;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.internal !== undefined && object.internal !== null) {
      message.internal = object.internal;
    } else {
      message.internal = false;
    }
    if (object.family !== undefined && object.family !== null) {
      message.family = object.family;
    } else {
      message.family = InitializeRequest_IPAddress_Family.IPV4;
    }
    return message;
  },
};

const baseInitializeResponse: object = {
  success: false,
  error: "",
  userStatus: InitializeResponse_UserStatus.RETURNING,
};

export const InitializeResponse = {
  encode(
    message: InitializeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    if (message.profile !== undefined) {
      Profile.encode(message.profile, writer.uint32(26).fork()).ldelim();
    }
    Object.entries(message.recents).forEach(([key, value]) => {
      InitializeResponse_RecentsEntry.encode(
        { key: key as any, value },
        writer.uint32(34).fork()
      ).ldelim();
    });
    Object.entries(message.history).forEach(([key, value]) => {
      InitializeResponse_HistoryEntry.encode(
        { key: key as any, value },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.userStatus !== InitializeResponse_UserStatus.RETURNING) {
      writer
        .uint32(48)
        .int32(initializeResponse_UserStatusToNumber(message.userStatus));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitializeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInitializeResponse } as InitializeResponse;
    message.recents = {};
    message.history = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 2:
          message.error = reader.string();
          break;
        case 3:
          message.profile = Profile.decode(reader, reader.uint32());
          break;
        case 4:
          const entry4 = InitializeResponse_RecentsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.recents[entry4.key] = entry4.value;
          }
          break;
        case 5:
          const entry5 = InitializeResponse_HistoryEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.history[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.userStatus = initializeResponse_UserStatusFromJSON(
            reader.int32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InitializeResponse {
    const message = { ...baseInitializeResponse } as InitializeResponse;
    message.recents = {};
    message.history = {};
    if (object.success !== undefined && object.success !== null) {
      message.success = Boolean(object.success);
    } else {
      message.success = false;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = String(object.error);
    } else {
      message.error = "";
    }
    if (object.profile !== undefined && object.profile !== null) {
      message.profile = Profile.fromJSON(object.profile);
    } else {
      message.profile = undefined;
    }
    if (object.recents !== undefined && object.recents !== null) {
      Object.entries(object.recents).forEach(([key, value]) => {
        message.recents[key] = ProfileList.fromJSON(value);
      });
    }
    if (object.history !== undefined && object.history !== null) {
      Object.entries(object.history).forEach(([key, value]) => {
        message.history[key] = PayloadList.fromJSON(value);
      });
    }
    if (object.userStatus !== undefined && object.userStatus !== null) {
      message.userStatus = initializeResponse_UserStatusFromJSON(
        object.userStatus
      );
    } else {
      message.userStatus = InitializeResponse_UserStatus.RETURNING;
    }
    return message;
  },

  toJSON(message: InitializeResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.error !== undefined && (obj.error = message.error);
    message.profile !== undefined &&
      (obj.profile = message.profile
        ? Profile.toJSON(message.profile)
        : undefined);
    obj.recents = {};
    if (message.recents) {
      Object.entries(message.recents).forEach(([k, v]) => {
        obj.recents[k] = ProfileList.toJSON(v);
      });
    }
    obj.history = {};
    if (message.history) {
      Object.entries(message.history).forEach(([k, v]) => {
        obj.history[k] = PayloadList.toJSON(v);
      });
    }
    message.userStatus !== undefined &&
      (obj.userStatus = initializeResponse_UserStatusToJSON(
        message.userStatus
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<InitializeResponse>): InitializeResponse {
    const message = { ...baseInitializeResponse } as InitializeResponse;
    message.recents = {};
    message.history = {};
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    } else {
      message.success = false;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    } else {
      message.error = "";
    }
    if (object.profile !== undefined && object.profile !== null) {
      message.profile = Profile.fromPartial(object.profile);
    } else {
      message.profile = undefined;
    }
    if (object.recents !== undefined && object.recents !== null) {
      Object.entries(object.recents).forEach(([key, value]) => {
        if (value !== undefined) {
          message.recents[key] = ProfileList.fromPartial(value);
        }
      });
    }
    if (object.history !== undefined && object.history !== null) {
      Object.entries(object.history).forEach(([key, value]) => {
        if (value !== undefined) {
          message.history[key] = PayloadList.fromPartial(value);
        }
      });
    }
    if (object.userStatus !== undefined && object.userStatus !== null) {
      message.userStatus = object.userStatus;
    } else {
      message.userStatus = InitializeResponse_UserStatus.RETURNING;
    }
    return message;
  },
};

const baseInitializeResponse_RecentsEntry: object = { key: "" };

export const InitializeResponse_RecentsEntry = {
  encode(
    message: InitializeResponse_RecentsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ProfileList.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InitializeResponse_RecentsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInitializeResponse_RecentsEntry,
    } as InitializeResponse_RecentsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ProfileList.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InitializeResponse_RecentsEntry {
    const message = {
      ...baseInitializeResponse_RecentsEntry,
    } as InitializeResponse_RecentsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ProfileList.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: InitializeResponse_RecentsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? ProfileList.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<InitializeResponse_RecentsEntry>
  ): InitializeResponse_RecentsEntry {
    const message = {
      ...baseInitializeResponse_RecentsEntry,
    } as InitializeResponse_RecentsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ProfileList.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseInitializeResponse_HistoryEntry: object = { key: "" };

export const InitializeResponse_HistoryEntry = {
  encode(
    message: InitializeResponse_HistoryEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      PayloadList.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InitializeResponse_HistoryEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInitializeResponse_HistoryEntry,
    } as InitializeResponse_HistoryEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = PayloadList.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InitializeResponse_HistoryEntry {
    const message = {
      ...baseInitializeResponse_HistoryEntry,
    } as InitializeResponse_HistoryEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = PayloadList.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: InitializeResponse_HistoryEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? PayloadList.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<InitializeResponse_HistoryEntry>
  ): InitializeResponse_HistoryEntry {
    const message = {
      ...baseInitializeResponse_HistoryEntry,
    } as InitializeResponse_HistoryEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = PayloadList.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseSupplyRequest: object = { isPeerSupply: false };

export const SupplyRequest = {
  encode(
    message: SupplyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      SupplyItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.peer !== undefined) {
      Peer.encode(message.peer, writer.uint32(18).fork()).ldelim();
    }
    if (message.isPeerSupply === true) {
      writer.uint32(24).bool(message.isPeerSupply);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SupplyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSupplyRequest } as SupplyRequest;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(SupplyItem.decode(reader, reader.uint32()));
          break;
        case 2:
          message.peer = Peer.decode(reader, reader.uint32());
          break;
        case 3:
          message.isPeerSupply = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SupplyRequest {
    const message = { ...baseSupplyRequest } as SupplyRequest;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(SupplyItem.fromJSON(e));
      }
    }
    if (object.peer !== undefined && object.peer !== null) {
      message.peer = Peer.fromJSON(object.peer);
    } else {
      message.peer = undefined;
    }
    if (object.isPeerSupply !== undefined && object.isPeerSupply !== null) {
      message.isPeerSupply = Boolean(object.isPeerSupply);
    } else {
      message.isPeerSupply = false;
    }
    return message;
  },

  toJSON(message: SupplyRequest): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? SupplyItem.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.peer !== undefined &&
      (obj.peer = message.peer ? Peer.toJSON(message.peer) : undefined);
    message.isPeerSupply !== undefined &&
      (obj.isPeerSupply = message.isPeerSupply);
    return obj;
  },

  fromPartial(object: DeepPartial<SupplyRequest>): SupplyRequest {
    const message = { ...baseSupplyRequest } as SupplyRequest;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(SupplyItem.fromPartial(e));
      }
    }
    if (object.peer !== undefined && object.peer !== null) {
      message.peer = Peer.fromPartial(object.peer);
    } else {
      message.peer = undefined;
    }
    if (object.isPeerSupply !== undefined && object.isPeerSupply !== null) {
      message.isPeerSupply = object.isPeerSupply;
    } else {
      message.isPeerSupply = false;
    }
    return message;
  },
};

const baseSupplyResponse: object = { success: false, error: "" };

export const SupplyResponse = {
  encode(
    message: SupplyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSupplyResponse } as SupplyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 2:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SupplyResponse {
    const message = { ...baseSupplyResponse } as SupplyResponse;
    if (object.success !== undefined && object.success !== null) {
      message.success = Boolean(object.success);
    } else {
      message.success = false;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = String(object.error);
    } else {
      message.error = "";
    }
    return message;
  },

  toJSON(message: SupplyResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial(object: DeepPartial<SupplyResponse>): SupplyResponse {
    const message = { ...baseSupplyResponse } as SupplyResponse;
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    } else {
      message.success = false;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    } else {
      message.error = "";
    }
    return message;
  },
};

const baseEditRequest: object = { type: EditRequest_Type.NONE };

export const EditRequest = {
  encode(
    message: EditRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== EditRequest_Type.NONE) {
      writer.uint32(8).int32(editRequest_TypeToNumber(message.type));
    }
    if (message.profile !== undefined) {
      Profile.encode(message.profile, writer.uint32(18).fork()).ldelim();
    }
    if (message.history !== undefined) {
      Payload.encode(message.history, writer.uint32(26).fork()).ldelim();
    }
    if (message.recent !== undefined) {
      Profile.encode(message.recent, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEditRequest } as EditRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = editRequest_TypeFromJSON(reader.int32());
          break;
        case 2:
          message.profile = Profile.decode(reader, reader.uint32());
          break;
        case 3:
          message.history = Payload.decode(reader, reader.uint32());
          break;
        case 4:
          message.recent = Profile.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EditRequest {
    const message = { ...baseEditRequest } as EditRequest;
    if (object.type !== undefined && object.type !== null) {
      message.type = editRequest_TypeFromJSON(object.type);
    } else {
      message.type = EditRequest_Type.NONE;
    }
    if (object.profile !== undefined && object.profile !== null) {
      message.profile = Profile.fromJSON(object.profile);
    } else {
      message.profile = undefined;
    }
    if (object.history !== undefined && object.history !== null) {
      message.history = Payload.fromJSON(object.history);
    } else {
      message.history = undefined;
    }
    if (object.recent !== undefined && object.recent !== null) {
      message.recent = Profile.fromJSON(object.recent);
    } else {
      message.recent = undefined;
    }
    return message;
  },

  toJSON(message: EditRequest): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = editRequest_TypeToJSON(message.type));
    message.profile !== undefined &&
      (obj.profile = message.profile
        ? Profile.toJSON(message.profile)
        : undefined);
    message.history !== undefined &&
      (obj.history = message.history
        ? Payload.toJSON(message.history)
        : undefined);
    message.recent !== undefined &&
      (obj.recent = message.recent
        ? Profile.toJSON(message.recent)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<EditRequest>): EditRequest {
    const message = { ...baseEditRequest } as EditRequest;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = EditRequest_Type.NONE;
    }
    if (object.profile !== undefined && object.profile !== null) {
      message.profile = Profile.fromPartial(object.profile);
    } else {
      message.profile = undefined;
    }
    if (object.history !== undefined && object.history !== null) {
      message.history = Payload.fromPartial(object.history);
    } else {
      message.history = undefined;
    }
    if (object.recent !== undefined && object.recent !== null) {
      message.recent = Profile.fromPartial(object.recent);
    } else {
      message.recent = undefined;
    }
    return message;
  },
};

const baseEditResponse: object = { success: false, error: "" };

export const EditResponse = {
  encode(
    message: EditResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEditResponse } as EditResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 2:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EditResponse {
    const message = { ...baseEditResponse } as EditResponse;
    if (object.success !== undefined && object.success !== null) {
      message.success = Boolean(object.success);
    } else {
      message.success = false;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = String(object.error);
    } else {
      message.error = "";
    }
    return message;
  },

  toJSON(message: EditResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial(object: DeepPartial<EditResponse>): EditResponse {
    const message = { ...baseEditResponse } as EditResponse;
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    } else {
      message.success = false;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    } else {
      message.error = "";
    }
    return message;
  },
};

const baseFetchRequest: object = { key: FetchRequest_Key.ALL };

export const FetchRequest = {
  encode(
    message: FetchRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== FetchRequest_Key.ALL) {
      writer.uint32(8).int32(fetchRequest_KeyToNumber(message.key));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFetchRequest } as FetchRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = fetchRequest_KeyFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FetchRequest {
    const message = { ...baseFetchRequest } as FetchRequest;
    if (object.key !== undefined && object.key !== null) {
      message.key = fetchRequest_KeyFromJSON(object.key);
    } else {
      message.key = FetchRequest_Key.ALL;
    }
    return message;
  },

  toJSON(message: FetchRequest): unknown {
    const obj: any = {};
    message.key !== undefined &&
      (obj.key = fetchRequest_KeyToJSON(message.key));
    return obj;
  },

  fromPartial(object: DeepPartial<FetchRequest>): FetchRequest {
    const message = { ...baseFetchRequest } as FetchRequest;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = FetchRequest_Key.ALL;
    }
    return message;
  },
};

const baseFetchResponse: object = { success: false, error: "" };

export const FetchResponse = {
  encode(
    message: FetchResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    if (message.profile !== undefined) {
      Profile.encode(message.profile, writer.uint32(26).fork()).ldelim();
    }
    Object.entries(message.devices).forEach(([key, value]) => {
      FetchResponse_DevicesEntry.encode(
        { key: key as any, value },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.recents !== undefined) {
      ProfileList.encode(message.recents, writer.uint32(42).fork()).ldelim();
    }
    if (message.history !== undefined) {
      PayloadList.encode(message.history, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFetchResponse } as FetchResponse;
    message.devices = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 2:
          message.error = reader.string();
          break;
        case 3:
          message.profile = Profile.decode(reader, reader.uint32());
          break;
        case 4:
          const entry4 = FetchResponse_DevicesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.devices[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.recents = ProfileList.decode(reader, reader.uint32());
          break;
        case 6:
          message.history = PayloadList.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FetchResponse {
    const message = { ...baseFetchResponse } as FetchResponse;
    message.devices = {};
    if (object.success !== undefined && object.success !== null) {
      message.success = Boolean(object.success);
    } else {
      message.success = false;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = String(object.error);
    } else {
      message.error = "";
    }
    if (object.profile !== undefined && object.profile !== null) {
      message.profile = Profile.fromJSON(object.profile);
    } else {
      message.profile = undefined;
    }
    if (object.devices !== undefined && object.devices !== null) {
      Object.entries(object.devices).forEach(([key, value]) => {
        message.devices[key] = Peer.fromJSON(value);
      });
    }
    if (object.recents !== undefined && object.recents !== null) {
      message.recents = ProfileList.fromJSON(object.recents);
    } else {
      message.recents = undefined;
    }
    if (object.history !== undefined && object.history !== null) {
      message.history = PayloadList.fromJSON(object.history);
    } else {
      message.history = undefined;
    }
    return message;
  },

  toJSON(message: FetchResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.error !== undefined && (obj.error = message.error);
    message.profile !== undefined &&
      (obj.profile = message.profile
        ? Profile.toJSON(message.profile)
        : undefined);
    obj.devices = {};
    if (message.devices) {
      Object.entries(message.devices).forEach(([k, v]) => {
        obj.devices[k] = Peer.toJSON(v);
      });
    }
    message.recents !== undefined &&
      (obj.recents = message.recents
        ? ProfileList.toJSON(message.recents)
        : undefined);
    message.history !== undefined &&
      (obj.history = message.history
        ? PayloadList.toJSON(message.history)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FetchResponse>): FetchResponse {
    const message = { ...baseFetchResponse } as FetchResponse;
    message.devices = {};
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    } else {
      message.success = false;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    } else {
      message.error = "";
    }
    if (object.profile !== undefined && object.profile !== null) {
      message.profile = Profile.fromPartial(object.profile);
    } else {
      message.profile = undefined;
    }
    if (object.devices !== undefined && object.devices !== null) {
      Object.entries(object.devices).forEach(([key, value]) => {
        if (value !== undefined) {
          message.devices[key] = Peer.fromPartial(value);
        }
      });
    }
    if (object.recents !== undefined && object.recents !== null) {
      message.recents = ProfileList.fromPartial(object.recents);
    } else {
      message.recents = undefined;
    }
    if (object.history !== undefined && object.history !== null) {
      message.history = PayloadList.fromPartial(object.history);
    } else {
      message.history = undefined;
    }
    return message;
  },
};

const baseFetchResponse_DevicesEntry: object = { key: "" };

export const FetchResponse_DevicesEntry = {
  encode(
    message: FetchResponse_DevicesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Peer.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FetchResponse_DevicesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFetchResponse_DevicesEntry,
    } as FetchResponse_DevicesEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Peer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FetchResponse_DevicesEntry {
    const message = {
      ...baseFetchResponse_DevicesEntry,
    } as FetchResponse_DevicesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Peer.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: FetchResponse_DevicesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Peer.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<FetchResponse_DevicesEntry>
  ): FetchResponse_DevicesEntry {
    const message = {
      ...baseFetchResponse_DevicesEntry,
    } as FetchResponse_DevicesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Peer.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseLinkRequest: object = {
  sName: "",
  mnemonic: "",
  deviceId: "",
  method: LinkRequest_Method.ADD,
};

export const LinkRequest = {
  encode(
    message: LinkRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sName !== "") {
      writer.uint32(10).string(message.sName);
    }
    if (message.mnemonic !== "") {
      writer.uint32(18).string(message.mnemonic);
    }
    if (message.deviceId !== "") {
      writer.uint32(26).string(message.deviceId);
    }
    if (message.method !== LinkRequest_Method.ADD) {
      writer.uint32(32).int32(linkRequest_MethodToNumber(message.method));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLinkRequest } as LinkRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sName = reader.string();
          break;
        case 2:
          message.mnemonic = reader.string();
          break;
        case 3:
          message.deviceId = reader.string();
          break;
        case 4:
          message.method = linkRequest_MethodFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LinkRequest {
    const message = { ...baseLinkRequest } as LinkRequest;
    if (object.sName !== undefined && object.sName !== null) {
      message.sName = String(object.sName);
    } else {
      message.sName = "";
    }
    if (object.mnemonic !== undefined && object.mnemonic !== null) {
      message.mnemonic = String(object.mnemonic);
    } else {
      message.mnemonic = "";
    }
    if (object.deviceId !== undefined && object.deviceId !== null) {
      message.deviceId = String(object.deviceId);
    } else {
      message.deviceId = "";
    }
    if (object.method !== undefined && object.method !== null) {
      message.method = linkRequest_MethodFromJSON(object.method);
    } else {
      message.method = LinkRequest_Method.ADD;
    }
    return message;
  },

  toJSON(message: LinkRequest): unknown {
    const obj: any = {};
    message.sName !== undefined && (obj.sName = message.sName);
    message.mnemonic !== undefined && (obj.mnemonic = message.mnemonic);
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    message.method !== undefined &&
      (obj.method = linkRequest_MethodToJSON(message.method));
    return obj;
  },

  fromPartial(object: DeepPartial<LinkRequest>): LinkRequest {
    const message = { ...baseLinkRequest } as LinkRequest;
    if (object.sName !== undefined && object.sName !== null) {
      message.sName = object.sName;
    } else {
      message.sName = "";
    }
    if (object.mnemonic !== undefined && object.mnemonic !== null) {
      message.mnemonic = object.mnemonic;
    } else {
      message.mnemonic = "";
    }
    if (object.deviceId !== undefined && object.deviceId !== null) {
      message.deviceId = object.deviceId;
    } else {
      message.deviceId = "";
    }
    if (object.method !== undefined && object.method !== null) {
      message.method = object.method;
    } else {
      message.method = LinkRequest_Method.ADD;
    }
    return message;
  },
};

const baseLinkResponse: object = { success: false, error: "" };

export const LinkResponse = {
  encode(
    message: LinkResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    Object.entries(message.records).forEach(([key, value]) => {
      LinkResponse_RecordsEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLinkResponse } as LinkResponse;
    message.records = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 2:
          message.error = reader.string();
          break;
        case 3:
          const entry3 = LinkResponse_RecordsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.records[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LinkResponse {
    const message = { ...baseLinkResponse } as LinkResponse;
    message.records = {};
    if (object.success !== undefined && object.success !== null) {
      message.success = Boolean(object.success);
    } else {
      message.success = false;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = String(object.error);
    } else {
      message.error = "";
    }
    if (object.records !== undefined && object.records !== null) {
      Object.entries(object.records).forEach(([key, value]) => {
        message.records[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: LinkResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.error !== undefined && (obj.error = message.error);
    obj.records = {};
    if (message.records) {
      Object.entries(message.records).forEach(([k, v]) => {
        obj.records[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<LinkResponse>): LinkResponse {
    const message = { ...baseLinkResponse } as LinkResponse;
    message.records = {};
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    } else {
      message.success = false;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    } else {
      message.error = "";
    }
    if (object.records !== undefined && object.records !== null) {
      Object.entries(object.records).forEach(([key, value]) => {
        if (value !== undefined) {
          message.records[key] = String(value);
        }
      });
    }
    return message;
  },
};

const baseLinkResponse_RecordsEntry: object = { key: "", value: "" };

export const LinkResponse_RecordsEntry = {
  encode(
    message: LinkResponse_RecordsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LinkResponse_RecordsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseLinkResponse_RecordsEntry,
    } as LinkResponse_RecordsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LinkResponse_RecordsEntry {
    const message = {
      ...baseLinkResponse_RecordsEntry,
    } as LinkResponse_RecordsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: LinkResponse_RecordsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<LinkResponse_RecordsEntry>
  ): LinkResponse_RecordsEntry {
    const message = {
      ...baseLinkResponse_RecordsEntry,
    } as LinkResponse_RecordsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseShareRequest: object = {};

export const ShareRequest = {
  encode(
    message: ShareRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.peer !== undefined) {
      Peer.encode(message.peer, writer.uint32(10).fork()).ldelim();
    }
    if (message.message !== undefined) {
      MessageItem.encode(message.message, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.items) {
      SupplyItem.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShareRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseShareRequest } as ShareRequest;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peer = Peer.decode(reader, reader.uint32());
          break;
        case 2:
          message.message = MessageItem.decode(reader, reader.uint32());
          break;
        case 3:
          message.items.push(SupplyItem.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShareRequest {
    const message = { ...baseShareRequest } as ShareRequest;
    message.items = [];
    if (object.peer !== undefined && object.peer !== null) {
      message.peer = Peer.fromJSON(object.peer);
    } else {
      message.peer = undefined;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = MessageItem.fromJSON(object.message);
    } else {
      message.message = undefined;
    }
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(SupplyItem.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ShareRequest): unknown {
    const obj: any = {};
    message.peer !== undefined &&
      (obj.peer = message.peer ? Peer.toJSON(message.peer) : undefined);
    message.message !== undefined &&
      (obj.message = message.message
        ? MessageItem.toJSON(message.message)
        : undefined);
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? SupplyItem.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ShareRequest>): ShareRequest {
    const message = { ...baseShareRequest } as ShareRequest;
    message.items = [];
    if (object.peer !== undefined && object.peer !== null) {
      message.peer = Peer.fromPartial(object.peer);
    } else {
      message.peer = undefined;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = MessageItem.fromPartial(object.message);
    } else {
      message.message = undefined;
    }
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(SupplyItem.fromPartial(e));
      }
    }
    return message;
  },
};

const baseShareResponse: object = { success: false, error: "" };

export const ShareResponse = {
  encode(
    message: ShareResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShareResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseShareResponse } as ShareResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 2:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShareResponse {
    const message = { ...baseShareResponse } as ShareResponse;
    if (object.success !== undefined && object.success !== null) {
      message.success = Boolean(object.success);
    } else {
      message.success = false;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = String(object.error);
    } else {
      message.error = "";
    }
    return message;
  },

  toJSON(message: ShareResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial(object: DeepPartial<ShareResponse>): ShareResponse {
    const message = { ...baseShareResponse } as ShareResponse;
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    } else {
      message.success = false;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    } else {
      message.error = "";
    }
    return message;
  },
};

const baseRegisterRequest: object = { sName: "", prefix: "", fingerprint: "" };

export const RegisterRequest = {
  encode(
    message: RegisterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sName !== "") {
      writer.uint32(10).string(message.sName);
    }
    if (message.prefix !== "") {
      writer.uint32(18).string(message.prefix);
    }
    if (message.fingerprint !== "") {
      writer.uint32(26).string(message.fingerprint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegisterRequest } as RegisterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sName = reader.string();
          break;
        case 2:
          message.prefix = reader.string();
          break;
        case 3:
          message.fingerprint = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterRequest {
    const message = { ...baseRegisterRequest } as RegisterRequest;
    if (object.sName !== undefined && object.sName !== null) {
      message.sName = String(object.sName);
    } else {
      message.sName = "";
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = String(object.prefix);
    } else {
      message.prefix = "";
    }
    if (object.fingerprint !== undefined && object.fingerprint !== null) {
      message.fingerprint = String(object.fingerprint);
    } else {
      message.fingerprint = "";
    }
    return message;
  },

  toJSON(message: RegisterRequest): unknown {
    const obj: any = {};
    message.sName !== undefined && (obj.sName = message.sName);
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.fingerprint !== undefined &&
      (obj.fingerprint = message.fingerprint);
    return obj;
  },

  fromPartial(object: DeepPartial<RegisterRequest>): RegisterRequest {
    const message = { ...baseRegisterRequest } as RegisterRequest;
    if (object.sName !== undefined && object.sName !== null) {
      message.sName = object.sName;
    } else {
      message.sName = "";
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = object.prefix;
    } else {
      message.prefix = "";
    }
    if (object.fingerprint !== undefined && object.fingerprint !== null) {
      message.fingerprint = object.fingerprint;
    } else {
      message.fingerprint = "";
    }
    return message;
  },
};

const baseRegisterResponse: object = { success: false, error: "" };

export const RegisterResponse = {
  encode(
    message: RegisterResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    Object.entries(message.records).forEach(([key, value]) => {
      RegisterResponse_RecordsEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegisterResponse } as RegisterResponse;
    message.records = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 2:
          message.error = reader.string();
          break;
        case 3:
          const entry3 = RegisterResponse_RecordsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.records[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterResponse {
    const message = { ...baseRegisterResponse } as RegisterResponse;
    message.records = {};
    if (object.success !== undefined && object.success !== null) {
      message.success = Boolean(object.success);
    } else {
      message.success = false;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = String(object.error);
    } else {
      message.error = "";
    }
    if (object.records !== undefined && object.records !== null) {
      Object.entries(object.records).forEach(([key, value]) => {
        message.records[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: RegisterResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.error !== undefined && (obj.error = message.error);
    obj.records = {};
    if (message.records) {
      Object.entries(message.records).forEach(([k, v]) => {
        obj.records[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<RegisterResponse>): RegisterResponse {
    const message = { ...baseRegisterResponse } as RegisterResponse;
    message.records = {};
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    } else {
      message.success = false;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    } else {
      message.error = "";
    }
    if (object.records !== undefined && object.records !== null) {
      Object.entries(object.records).forEach(([key, value]) => {
        if (value !== undefined) {
          message.records[key] = String(value);
        }
      });
    }
    return message;
  },
};

const baseRegisterResponse_RecordsEntry: object = { key: "", value: "" };

export const RegisterResponse_RecordsEntry = {
  encode(
    message: RegisterResponse_RecordsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegisterResponse_RecordsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRegisterResponse_RecordsEntry,
    } as RegisterResponse_RecordsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterResponse_RecordsEntry {
    const message = {
      ...baseRegisterResponse_RecordsEntry,
    } as RegisterResponse_RecordsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: RegisterResponse_RecordsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RegisterResponse_RecordsEntry>
  ): RegisterResponse_RecordsEntry {
    const message = {
      ...baseRegisterResponse_RecordsEntry,
    } as RegisterResponse_RecordsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseRespondRequest: object = { decision: false };

export const RespondRequest = {
  encode(
    message: RespondRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.decision === true) {
      writer.uint32(8).bool(message.decision);
    }
    if (message.peer !== undefined) {
      Peer.encode(message.peer, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RespondRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRespondRequest } as RespondRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.decision = reader.bool();
          break;
        case 2:
          message.peer = Peer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RespondRequest {
    const message = { ...baseRespondRequest } as RespondRequest;
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = Boolean(object.decision);
    } else {
      message.decision = false;
    }
    if (object.peer !== undefined && object.peer !== null) {
      message.peer = Peer.fromJSON(object.peer);
    } else {
      message.peer = undefined;
    }
    return message;
  },

  toJSON(message: RespondRequest): unknown {
    const obj: any = {};
    message.decision !== undefined && (obj.decision = message.decision);
    message.peer !== undefined &&
      (obj.peer = message.peer ? Peer.toJSON(message.peer) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RespondRequest>): RespondRequest {
    const message = { ...baseRespondRequest } as RespondRequest;
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = object.decision;
    } else {
      message.decision = false;
    }
    if (object.peer !== undefined && object.peer !== null) {
      message.peer = Peer.fromPartial(object.peer);
    } else {
      message.peer = undefined;
    }
    return message;
  },
};

const baseRespondResponse: object = { success: false, error: "" };

export const RespondResponse = {
  encode(
    message: RespondResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RespondResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRespondResponse } as RespondResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 2:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RespondResponse {
    const message = { ...baseRespondResponse } as RespondResponse;
    if (object.success !== undefined && object.success !== null) {
      message.success = Boolean(object.success);
    } else {
      message.success = false;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = String(object.error);
    } else {
      message.error = "";
    }
    return message;
  },

  toJSON(message: RespondResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial(object: DeepPartial<RespondResponse>): RespondResponse {
    const message = { ...baseRespondResponse } as RespondResponse;
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    } else {
      message.success = false;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    } else {
      message.error = "";
    }
    return message;
  },
};

const baseSearchRequest: object = {};

export const SearchRequest = {
  encode(
    message: SearchRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sName !== undefined) {
      writer.uint32(10).string(message.sName);
    }
    if (message.peerId !== undefined) {
      writer.uint32(18).string(message.peerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SearchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSearchRequest } as SearchRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sName = reader.string();
          break;
        case 2:
          message.peerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SearchRequest {
    const message = { ...baseSearchRequest } as SearchRequest;
    if (object.sName !== undefined && object.sName !== null) {
      message.sName = String(object.sName);
    } else {
      message.sName = undefined;
    }
    if (object.peerId !== undefined && object.peerId !== null) {
      message.peerId = String(object.peerId);
    } else {
      message.peerId = undefined;
    }
    return message;
  },

  toJSON(message: SearchRequest): unknown {
    const obj: any = {};
    message.sName !== undefined && (obj.sName = message.sName);
    message.peerId !== undefined && (obj.peerId = message.peerId);
    return obj;
  },

  fromPartial(object: DeepPartial<SearchRequest>): SearchRequest {
    const message = { ...baseSearchRequest } as SearchRequest;
    if (object.sName !== undefined && object.sName !== null) {
      message.sName = object.sName;
    } else {
      message.sName = undefined;
    }
    if (object.peerId !== undefined && object.peerId !== null) {
      message.peerId = object.peerId;
    } else {
      message.peerId = undefined;
    }
    return message;
  },
};

const baseSearchResponse: object = {
  success: false,
  error: "",
  peerId: "",
  sName: "",
};

export const SearchResponse = {
  encode(
    message: SearchResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    if (message.peer !== undefined) {
      Peer.encode(message.peer, writer.uint32(26).fork()).ldelim();
    }
    if (message.peerId !== "") {
      writer.uint32(34).string(message.peerId);
    }
    if (message.sName !== "") {
      writer.uint32(42).string(message.sName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SearchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSearchResponse } as SearchResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 2:
          message.error = reader.string();
          break;
        case 3:
          message.peer = Peer.decode(reader, reader.uint32());
          break;
        case 4:
          message.peerId = reader.string();
          break;
        case 5:
          message.sName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SearchResponse {
    const message = { ...baseSearchResponse } as SearchResponse;
    if (object.success !== undefined && object.success !== null) {
      message.success = Boolean(object.success);
    } else {
      message.success = false;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = String(object.error);
    } else {
      message.error = "";
    }
    if (object.peer !== undefined && object.peer !== null) {
      message.peer = Peer.fromJSON(object.peer);
    } else {
      message.peer = undefined;
    }
    if (object.peerId !== undefined && object.peerId !== null) {
      message.peerId = String(object.peerId);
    } else {
      message.peerId = "";
    }
    if (object.sName !== undefined && object.sName !== null) {
      message.sName = String(object.sName);
    } else {
      message.sName = "";
    }
    return message;
  },

  toJSON(message: SearchResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.error !== undefined && (obj.error = message.error);
    message.peer !== undefined &&
      (obj.peer = message.peer ? Peer.toJSON(message.peer) : undefined);
    message.peerId !== undefined && (obj.peerId = message.peerId);
    message.sName !== undefined && (obj.sName = message.sName);
    return obj;
  },

  fromPartial(object: DeepPartial<SearchResponse>): SearchResponse {
    const message = { ...baseSearchResponse } as SearchResponse;
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    } else {
      message.success = false;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    } else {
      message.error = "";
    }
    if (object.peer !== undefined && object.peer !== null) {
      message.peer = Peer.fromPartial(object.peer);
    } else {
      message.peer = undefined;
    }
    if (object.peerId !== undefined && object.peerId !== null) {
      message.peerId = object.peerId;
    } else {
      message.peerId = "";
    }
    if (object.sName !== undefined && object.sName !== null) {
      message.sName = object.sName;
    } else {
      message.sName = "";
    }
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
