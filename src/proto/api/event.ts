/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Peer, Profile, Metadata } from "../../proto/common/core";
import {
  Payload,
  Direction,
  directionToNumber,
  directionFromJSON,
  directionToJSON,
} from "../../proto/common/data";

export const protobufPackage = "sonr.api";

/** DecisionEvent is emitted when a decision is made by Peer. */
export interface DecisionEvent {
  /** true = accept, false = reject */
  decision: boolean;
  /** Peer that made decision */
  from?: Peer;
  /** Timestamp */
  received: number;
}

/** Message Sent when peer messages Lobby */
export interface RefreshEvent {
  /** OLC Code of Topic */
  olc: string;
  /** User Information */
  peers: Peer[];
  /** Invite received Timestamp */
  received: number;
}

/** InviteEvent notifies Peer that an Invite has been received */
export interface InviteEvent {
  /** Invite received Timestamp */
  received: number;
  /** Peer that sent the Invite */
  from?: Peer;
  /** Attached Data */
  payload?: Payload;
}

/** Received Mail Event */
export interface MailboxEvent {
  /** ID is the Message ID */
  id: string;
  /** Buffer is the message data */
  buffer: Buffer;
  /** Users Peer Data */
  from?: Profile;
  /** Receivers Peer Data */
  to?: Profile;
  /** Metadata */
  metadata?: Metadata;
}

/** Transfer Progress Event */
export interface ProgressEvent {
  /** Current Transfer Item */
  current: number;
  /** Total Transfer Progress */
  total: number;
  /** Current Transfer Progress */
  progress: number;
  /** Timestamp */
  received: number;
  /** Direction of Transfer */
  direction: Direction;
}

/** Message Sent after Completed Transfer */
export interface CompleteEvent {
  /** Direction of Transfer */
  direction: Direction;
  /** Transfer Data */
  payload?: Payload;
  /** Peer that sent the Complete Event */
  from?: Peer;
  /** Peer that received the Complete Event */
  to?: Peer;
  /** Transfer Created Timestamp */
  createdAt: number;
  /** Transfer Received Timestamp */
  receivedAt: number;
}

const baseDecisionEvent: object = { decision: false, received: 0 };

export const DecisionEvent = {
  encode(
    message: DecisionEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.decision === true) {
      writer.uint32(8).bool(message.decision);
    }
    if (message.from !== undefined) {
      Peer.encode(message.from, writer.uint32(18).fork()).ldelim();
    }
    if (message.received !== 0) {
      writer.uint32(24).int64(message.received);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DecisionEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDecisionEvent } as DecisionEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.decision = reader.bool();
          break;
        case 2:
          message.from = Peer.decode(reader, reader.uint32());
          break;
        case 3:
          message.received = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DecisionEvent {
    const message = { ...baseDecisionEvent } as DecisionEvent;
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = Boolean(object.decision);
    } else {
      message.decision = false;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = Peer.fromJSON(object.from);
    } else {
      message.from = undefined;
    }
    if (object.received !== undefined && object.received !== null) {
      message.received = Number(object.received);
    } else {
      message.received = 0;
    }
    return message;
  },

  toJSON(message: DecisionEvent): unknown {
    const obj: any = {};
    message.decision !== undefined && (obj.decision = message.decision);
    message.from !== undefined &&
      (obj.from = message.from ? Peer.toJSON(message.from) : undefined);
    message.received !== undefined && (obj.received = message.received);
    return obj;
  },

  fromPartial(object: DeepPartial<DecisionEvent>): DecisionEvent {
    const message = { ...baseDecisionEvent } as DecisionEvent;
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = object.decision;
    } else {
      message.decision = false;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = Peer.fromPartial(object.from);
    } else {
      message.from = undefined;
    }
    if (object.received !== undefined && object.received !== null) {
      message.received = object.received;
    } else {
      message.received = 0;
    }
    return message;
  },
};

const baseRefreshEvent: object = { olc: "", received: 0 };

export const RefreshEvent = {
  encode(
    message: RefreshEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.olc !== "") {
      writer.uint32(10).string(message.olc);
    }
    for (const v of message.peers) {
      Peer.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.received !== 0) {
      writer.uint32(24).int64(message.received);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefreshEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRefreshEvent } as RefreshEvent;
    message.peers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.olc = reader.string();
          break;
        case 2:
          message.peers.push(Peer.decode(reader, reader.uint32()));
          break;
        case 3:
          message.received = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RefreshEvent {
    const message = { ...baseRefreshEvent } as RefreshEvent;
    message.peers = [];
    if (object.olc !== undefined && object.olc !== null) {
      message.olc = String(object.olc);
    } else {
      message.olc = "";
    }
    if (object.peers !== undefined && object.peers !== null) {
      for (const e of object.peers) {
        message.peers.push(Peer.fromJSON(e));
      }
    }
    if (object.received !== undefined && object.received !== null) {
      message.received = Number(object.received);
    } else {
      message.received = 0;
    }
    return message;
  },

  toJSON(message: RefreshEvent): unknown {
    const obj: any = {};
    message.olc !== undefined && (obj.olc = message.olc);
    if (message.peers) {
      obj.peers = message.peers.map((e) => (e ? Peer.toJSON(e) : undefined));
    } else {
      obj.peers = [];
    }
    message.received !== undefined && (obj.received = message.received);
    return obj;
  },

  fromPartial(object: DeepPartial<RefreshEvent>): RefreshEvent {
    const message = { ...baseRefreshEvent } as RefreshEvent;
    message.peers = [];
    if (object.olc !== undefined && object.olc !== null) {
      message.olc = object.olc;
    } else {
      message.olc = "";
    }
    if (object.peers !== undefined && object.peers !== null) {
      for (const e of object.peers) {
        message.peers.push(Peer.fromPartial(e));
      }
    }
    if (object.received !== undefined && object.received !== null) {
      message.received = object.received;
    } else {
      message.received = 0;
    }
    return message;
  },
};

const baseInviteEvent: object = { received: 0 };

export const InviteEvent = {
  encode(
    message: InviteEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.received !== 0) {
      writer.uint32(8).int64(message.received);
    }
    if (message.from !== undefined) {
      Peer.encode(message.from, writer.uint32(18).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      Payload.encode(message.payload, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InviteEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInviteEvent } as InviteEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.received = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.from = Peer.decode(reader, reader.uint32());
          break;
        case 3:
          message.payload = Payload.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InviteEvent {
    const message = { ...baseInviteEvent } as InviteEvent;
    if (object.received !== undefined && object.received !== null) {
      message.received = Number(object.received);
    } else {
      message.received = 0;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = Peer.fromJSON(object.from);
    } else {
      message.from = undefined;
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Payload.fromJSON(object.payload);
    } else {
      message.payload = undefined;
    }
    return message;
  },

  toJSON(message: InviteEvent): unknown {
    const obj: any = {};
    message.received !== undefined && (obj.received = message.received);
    message.from !== undefined &&
      (obj.from = message.from ? Peer.toJSON(message.from) : undefined);
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? Payload.toJSON(message.payload)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<InviteEvent>): InviteEvent {
    const message = { ...baseInviteEvent } as InviteEvent;
    if (object.received !== undefined && object.received !== null) {
      message.received = object.received;
    } else {
      message.received = 0;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = Peer.fromPartial(object.from);
    } else {
      message.from = undefined;
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Payload.fromPartial(object.payload);
    } else {
      message.payload = undefined;
    }
    return message;
  },
};

const baseMailboxEvent: object = { id: "" };

export const MailboxEvent = {
  encode(
    message: MailboxEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.buffer.length !== 0) {
      writer.uint32(18).bytes(message.buffer);
    }
    if (message.from !== undefined) {
      Profile.encode(message.from, writer.uint32(26).fork()).ldelim();
    }
    if (message.to !== undefined) {
      Profile.encode(message.to, writer.uint32(34).fork()).ldelim();
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MailboxEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMailboxEvent } as MailboxEvent;
    message.buffer = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.buffer = reader.bytes() as Buffer;
          break;
        case 3:
          message.from = Profile.decode(reader, reader.uint32());
          break;
        case 4:
          message.to = Profile.decode(reader, reader.uint32());
          break;
        case 5:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MailboxEvent {
    const message = { ...baseMailboxEvent } as MailboxEvent;
    message.buffer = Buffer.alloc(0);
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.buffer !== undefined && object.buffer !== null) {
      message.buffer = Buffer.from(bytesFromBase64(object.buffer));
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = Profile.fromJSON(object.from);
    } else {
      message.from = undefined;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = Profile.fromJSON(object.to);
    } else {
      message.to = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromJSON(object.metadata);
    } else {
      message.metadata = undefined;
    }
    return message;
  },

  toJSON(message: MailboxEvent): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.buffer !== undefined &&
      (obj.buffer = base64FromBytes(
        message.buffer !== undefined ? message.buffer : Buffer.alloc(0)
      ));
    message.from !== undefined &&
      (obj.from = message.from ? Profile.toJSON(message.from) : undefined);
    message.to !== undefined &&
      (obj.to = message.to ? Profile.toJSON(message.to) : undefined);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? Metadata.toJSON(message.metadata)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MailboxEvent>): MailboxEvent {
    const message = { ...baseMailboxEvent } as MailboxEvent;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.buffer !== undefined && object.buffer !== null) {
      message.buffer = object.buffer;
    } else {
      message.buffer = Buffer.alloc(0);
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = Profile.fromPartial(object.from);
    } else {
      message.from = undefined;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = Profile.fromPartial(object.to);
    } else {
      message.to = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromPartial(object.metadata);
    } else {
      message.metadata = undefined;
    }
    return message;
  },
};

const baseProgressEvent: object = {
  current: 0,
  total: 0,
  progress: 0,
  received: 0,
  direction: Direction.DEFAULT,
};

export const ProgressEvent = {
  encode(
    message: ProgressEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.current !== 0) {
      writer.uint32(8).int32(message.current);
    }
    if (message.total !== 0) {
      writer.uint32(16).int32(message.total);
    }
    if (message.progress !== 0) {
      writer.uint32(25).double(message.progress);
    }
    if (message.received !== 0) {
      writer.uint32(32).int64(message.received);
    }
    if (message.direction !== Direction.DEFAULT) {
      writer.uint32(40).int32(directionToNumber(message.direction));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProgressEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProgressEvent } as ProgressEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.current = reader.int32();
          break;
        case 2:
          message.total = reader.int32();
          break;
        case 3:
          message.progress = reader.double();
          break;
        case 4:
          message.received = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.direction = directionFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProgressEvent {
    const message = { ...baseProgressEvent } as ProgressEvent;
    if (object.current !== undefined && object.current !== null) {
      message.current = Number(object.current);
    } else {
      message.current = 0;
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = Number(object.total);
    } else {
      message.total = 0;
    }
    if (object.progress !== undefined && object.progress !== null) {
      message.progress = Number(object.progress);
    } else {
      message.progress = 0;
    }
    if (object.received !== undefined && object.received !== null) {
      message.received = Number(object.received);
    } else {
      message.received = 0;
    }
    if (object.direction !== undefined && object.direction !== null) {
      message.direction = directionFromJSON(object.direction);
    } else {
      message.direction = Direction.DEFAULT;
    }
    return message;
  },

  toJSON(message: ProgressEvent): unknown {
    const obj: any = {};
    message.current !== undefined && (obj.current = message.current);
    message.total !== undefined && (obj.total = message.total);
    message.progress !== undefined && (obj.progress = message.progress);
    message.received !== undefined && (obj.received = message.received);
    message.direction !== undefined &&
      (obj.direction = directionToJSON(message.direction));
    return obj;
  },

  fromPartial(object: DeepPartial<ProgressEvent>): ProgressEvent {
    const message = { ...baseProgressEvent } as ProgressEvent;
    if (object.current !== undefined && object.current !== null) {
      message.current = object.current;
    } else {
      message.current = 0;
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    } else {
      message.total = 0;
    }
    if (object.progress !== undefined && object.progress !== null) {
      message.progress = object.progress;
    } else {
      message.progress = 0;
    }
    if (object.received !== undefined && object.received !== null) {
      message.received = object.received;
    } else {
      message.received = 0;
    }
    if (object.direction !== undefined && object.direction !== null) {
      message.direction = object.direction;
    } else {
      message.direction = Direction.DEFAULT;
    }
    return message;
  },
};

const baseCompleteEvent: object = {
  direction: Direction.DEFAULT,
  createdAt: 0,
  receivedAt: 0,
};

export const CompleteEvent = {
  encode(
    message: CompleteEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.direction !== Direction.DEFAULT) {
      writer.uint32(8).int32(directionToNumber(message.direction));
    }
    if (message.payload !== undefined) {
      Payload.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    if (message.from !== undefined) {
      Peer.encode(message.from, writer.uint32(26).fork()).ldelim();
    }
    if (message.to !== undefined) {
      Peer.encode(message.to, writer.uint32(34).fork()).ldelim();
    }
    if (message.createdAt !== 0) {
      writer.uint32(40).int64(message.createdAt);
    }
    if (message.receivedAt !== 0) {
      writer.uint32(48).int64(message.receivedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompleteEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCompleteEvent } as CompleteEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.direction = directionFromJSON(reader.int32());
          break;
        case 2:
          message.payload = Payload.decode(reader, reader.uint32());
          break;
        case 3:
          message.from = Peer.decode(reader, reader.uint32());
          break;
        case 4:
          message.to = Peer.decode(reader, reader.uint32());
          break;
        case 5:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.receivedAt = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompleteEvent {
    const message = { ...baseCompleteEvent } as CompleteEvent;
    if (object.direction !== undefined && object.direction !== null) {
      message.direction = directionFromJSON(object.direction);
    } else {
      message.direction = Direction.DEFAULT;
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Payload.fromJSON(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = Peer.fromJSON(object.from);
    } else {
      message.from = undefined;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = Peer.fromJSON(object.to);
    } else {
      message.to = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.receivedAt !== undefined && object.receivedAt !== null) {
      message.receivedAt = Number(object.receivedAt);
    } else {
      message.receivedAt = 0;
    }
    return message;
  },

  toJSON(message: CompleteEvent): unknown {
    const obj: any = {};
    message.direction !== undefined &&
      (obj.direction = directionToJSON(message.direction));
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? Payload.toJSON(message.payload)
        : undefined);
    message.from !== undefined &&
      (obj.from = message.from ? Peer.toJSON(message.from) : undefined);
    message.to !== undefined &&
      (obj.to = message.to ? Peer.toJSON(message.to) : undefined);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.receivedAt !== undefined && (obj.receivedAt = message.receivedAt);
    return obj;
  },

  fromPartial(object: DeepPartial<CompleteEvent>): CompleteEvent {
    const message = { ...baseCompleteEvent } as CompleteEvent;
    if (object.direction !== undefined && object.direction !== null) {
      message.direction = object.direction;
    } else {
      message.direction = Direction.DEFAULT;
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Payload.fromPartial(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = Peer.fromPartial(object.from);
    } else {
      message.from = undefined;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = Peer.fromPartial(object.to);
    } else {
      message.to = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.receivedAt !== undefined && object.receivedAt !== null) {
      message.receivedAt = object.receivedAt;
    } else {
      message.receivedAt = 0;
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
