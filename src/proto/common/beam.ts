/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "sonr.beam";

export enum EventType {
  NONE = "NONE",
  GET = "GET",
  SET = "SET",
  DELETE = "DELETE",
  PUT = "PUT",
  SYNC = "SYNC",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function eventTypeFromJSON(object: any): EventType {
  switch (object) {
    case 0:
    case "NONE":
      return EventType.NONE;
    case 1:
    case "GET":
      return EventType.GET;
    case 2:
    case "SET":
      return EventType.SET;
    case 3:
    case "DELETE":
      return EventType.DELETE;
    case 4:
    case "PUT":
      return EventType.PUT;
    case 5:
    case "SYNC":
      return EventType.SYNC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EventType.UNRECOGNIZED;
  }
}

export function eventTypeToJSON(object: EventType): string {
  switch (object) {
    case EventType.NONE:
      return "NONE";
    case EventType.GET:
      return "GET";
    case EventType.SET:
      return "SET";
    case EventType.DELETE:
      return "DELETE";
    case EventType.PUT:
      return "PUT";
    case EventType.SYNC:
      return "SYNC";
    default:
      return "UNKNOWN";
  }
}

export function eventTypeToNumber(object: EventType): number {
  switch (object) {
    case EventType.NONE:
      return 0;
    case EventType.GET:
      return 1;
    case EventType.SET:
      return 2;
    case EventType.DELETE:
      return 3;
    case EventType.PUT:
      return 4;
    case EventType.SYNC:
      return 5;
    default:
      return 0;
  }
}

export interface Event {
  peer: string;
  type: EventType;
  entry?: StoreEntry;
  store?: Store;
}

export interface Store {
  data: { [key: string]: StoreEntry };
  capacity: number;
  modified: number;
  ttl: number;
}

export interface Store_DataEntry {
  key: string;
  value?: StoreEntry;
}

export interface StoreEntry {
  peer: string;
  key: string;
  value: Buffer;
  expiration: number;
  created: number;
  modified: number;
}

const baseEvent: object = { peer: "", type: EventType.NONE };

export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.peer !== "") {
      writer.uint32(10).string(message.peer);
    }
    if (message.type !== EventType.NONE) {
      writer.uint32(16).int32(eventTypeToNumber(message.type));
    }
    if (message.entry !== undefined) {
      StoreEntry.encode(message.entry, writer.uint32(26).fork()).ldelim();
    }
    if (message.store !== undefined) {
      Store.encode(message.store, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEvent } as Event;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peer = reader.string();
          break;
        case 2:
          message.type = eventTypeFromJSON(reader.int32());
          break;
        case 3:
          message.entry = StoreEntry.decode(reader, reader.uint32());
          break;
        case 4:
          message.store = Store.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Event {
    const message = { ...baseEvent } as Event;
    if (object.peer !== undefined && object.peer !== null) {
      message.peer = String(object.peer);
    } else {
      message.peer = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = eventTypeFromJSON(object.type);
    } else {
      message.type = EventType.NONE;
    }
    if (object.entry !== undefined && object.entry !== null) {
      message.entry = StoreEntry.fromJSON(object.entry);
    } else {
      message.entry = undefined;
    }
    if (object.store !== undefined && object.store !== null) {
      message.store = Store.fromJSON(object.store);
    } else {
      message.store = undefined;
    }
    return message;
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    message.peer !== undefined && (obj.peer = message.peer);
    message.type !== undefined && (obj.type = eventTypeToJSON(message.type));
    message.entry !== undefined &&
      (obj.entry = message.entry
        ? StoreEntry.toJSON(message.entry)
        : undefined);
    message.store !== undefined &&
      (obj.store = message.store ? Store.toJSON(message.store) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Event>): Event {
    const message = { ...baseEvent } as Event;
    if (object.peer !== undefined && object.peer !== null) {
      message.peer = object.peer;
    } else {
      message.peer = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = EventType.NONE;
    }
    if (object.entry !== undefined && object.entry !== null) {
      message.entry = StoreEntry.fromPartial(object.entry);
    } else {
      message.entry = undefined;
    }
    if (object.store !== undefined && object.store !== null) {
      message.store = Store.fromPartial(object.store);
    } else {
      message.store = undefined;
    }
    return message;
  },
};

const baseStore: object = { capacity: 0, modified: 0, ttl: 0 };

export const Store = {
  encode(message: Store, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.data).forEach(([key, value]) => {
      Store_DataEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    if (message.capacity !== 0) {
      writer.uint32(16).int32(message.capacity);
    }
    if (message.modified !== 0) {
      writer.uint32(24).int64(message.modified);
    }
    if (message.ttl !== 0) {
      writer.uint32(32).int64(message.ttl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Store {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStore } as Store;
    message.data = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = Store_DataEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.data[entry1.key] = entry1.value;
          }
          break;
        case 2:
          message.capacity = reader.int32();
          break;
        case 3:
          message.modified = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.ttl = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Store {
    const message = { ...baseStore } as Store;
    message.data = {};
    if (object.data !== undefined && object.data !== null) {
      Object.entries(object.data).forEach(([key, value]) => {
        message.data[key] = StoreEntry.fromJSON(value);
      });
    }
    if (object.capacity !== undefined && object.capacity !== null) {
      message.capacity = Number(object.capacity);
    } else {
      message.capacity = 0;
    }
    if (object.modified !== undefined && object.modified !== null) {
      message.modified = Number(object.modified);
    } else {
      message.modified = 0;
    }
    if (object.ttl !== undefined && object.ttl !== null) {
      message.ttl = Number(object.ttl);
    } else {
      message.ttl = 0;
    }
    return message;
  },

  toJSON(message: Store): unknown {
    const obj: any = {};
    obj.data = {};
    if (message.data) {
      Object.entries(message.data).forEach(([k, v]) => {
        obj.data[k] = StoreEntry.toJSON(v);
      });
    }
    message.capacity !== undefined && (obj.capacity = message.capacity);
    message.modified !== undefined && (obj.modified = message.modified);
    message.ttl !== undefined && (obj.ttl = message.ttl);
    return obj;
  },

  fromPartial(object: DeepPartial<Store>): Store {
    const message = { ...baseStore } as Store;
    message.data = {};
    if (object.data !== undefined && object.data !== null) {
      Object.entries(object.data).forEach(([key, value]) => {
        if (value !== undefined) {
          message.data[key] = StoreEntry.fromPartial(value);
        }
      });
    }
    if (object.capacity !== undefined && object.capacity !== null) {
      message.capacity = object.capacity;
    } else {
      message.capacity = 0;
    }
    if (object.modified !== undefined && object.modified !== null) {
      message.modified = object.modified;
    } else {
      message.modified = 0;
    }
    if (object.ttl !== undefined && object.ttl !== null) {
      message.ttl = object.ttl;
    } else {
      message.ttl = 0;
    }
    return message;
  },
};

const baseStore_DataEntry: object = { key: "" };

export const Store_DataEntry = {
  encode(
    message: Store_DataEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      StoreEntry.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Store_DataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStore_DataEntry } as Store_DataEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = StoreEntry.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Store_DataEntry {
    const message = { ...baseStore_DataEntry } as Store_DataEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = StoreEntry.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: Store_DataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? StoreEntry.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Store_DataEntry>): Store_DataEntry {
    const message = { ...baseStore_DataEntry } as Store_DataEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = StoreEntry.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseStoreEntry: object = {
  peer: "",
  key: "",
  expiration: 0,
  created: 0,
  modified: 0,
};

export const StoreEntry = {
  encode(
    message: StoreEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.peer !== "") {
      writer.uint32(10).string(message.peer);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(26).bytes(message.value);
    }
    if (message.expiration !== 0) {
      writer.uint32(32).int64(message.expiration);
    }
    if (message.created !== 0) {
      writer.uint32(40).int64(message.created);
    }
    if (message.modified !== 0) {
      writer.uint32(48).int64(message.modified);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStoreEntry } as StoreEntry;
    message.value = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peer = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        case 3:
          message.value = reader.bytes() as Buffer;
          break;
        case 4:
          message.expiration = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.modified = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreEntry {
    const message = { ...baseStoreEntry } as StoreEntry;
    message.value = Buffer.alloc(0);
    if (object.peer !== undefined && object.peer !== null) {
      message.peer = String(object.peer);
    } else {
      message.peer = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Buffer.from(bytesFromBase64(object.value));
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = Number(object.expiration);
    } else {
      message.expiration = 0;
    }
    if (object.created !== undefined && object.created !== null) {
      message.created = Number(object.created);
    } else {
      message.created = 0;
    }
    if (object.modified !== undefined && object.modified !== null) {
      message.modified = Number(object.modified);
    } else {
      message.modified = 0;
    }
    return message;
  },

  toJSON(message: StoreEntry): unknown {
    const obj: any = {};
    message.peer !== undefined && (obj.peer = message.peer);
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : Buffer.alloc(0)
      ));
    message.expiration !== undefined && (obj.expiration = message.expiration);
    message.created !== undefined && (obj.created = message.created);
    message.modified !== undefined && (obj.modified = message.modified);
    return obj;
  },

  fromPartial(object: DeepPartial<StoreEntry>): StoreEntry {
    const message = { ...baseStoreEntry } as StoreEntry;
    if (object.peer !== undefined && object.peer !== null) {
      message.peer = object.peer;
    } else {
      message.peer = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = Buffer.alloc(0);
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = object.expiration;
    } else {
      message.expiration = 0;
    }
    if (object.created !== undefined && object.created !== null) {
      message.created = object.created;
    } else {
      message.created = 0;
    }
    if (object.modified !== undefined && object.modified !== null) {
      message.modified = object.modified;
    } else {
      message.modified = 0;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
