/* eslint-disable */
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleUnaryCall,
  handleServerStreamingCall,
  Client,
  ClientUnaryCall,
  Metadata,
  CallOptions,
  ClientReadableStream,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import {
  SupplyRequest,
  SupplyResponse,
  EditRequest,
  EditResponse,
  FetchRequest,
  FetchResponse,
  ShareRequest,
  ShareResponse,
  RespondRequest,
  RespondResponse,
  SearchRequest,
  SearchResponse,
} from "../../proto/api/call";
import {
  RefreshEvent,
  MailboxEvent,
  DecisionEvent,
  InviteEvent,
  ProgressEvent,
  CompleteEvent,
} from "../../proto/api/event";

export const protobufPackage = "sonr.node";

/** / This file contains service for the Node RPC Server */

export interface Empty {}

const baseEmpty: object = {};

export const Empty = {
  encode(_: Empty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Empty {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEmpty } as Empty;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): Empty {
    const message = { ...baseEmpty } as Empty;
    return message;
  },

  toJSON(_: Empty): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<Empty>): Empty {
    const message = { ...baseEmpty } as Empty;
    return message;
  },
};

/** RPC Service with Equivalent Methods of a binded Node */
export const ClientServiceService = {
  /**
   * Node Methods
   * Signing Method Request for Data
   */
  supply: {
    path: "/sonr.node.ClientService/Supply",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SupplyRequest) =>
      Buffer.from(SupplyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SupplyRequest.decode(value),
    responseSerialize: (value: SupplyResponse) =>
      Buffer.from(SupplyResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SupplyResponse.decode(value),
  },
  /** Verification Method Request for Signed Data */
  edit: {
    path: "/sonr.node.ClientService/Edit",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EditRequest) =>
      Buffer.from(EditRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EditRequest.decode(value),
    responseSerialize: (value: EditResponse) =>
      Buffer.from(EditResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EditResponse.decode(value),
  },
  /** Fetch method finds data from Key/Value store */
  fetch: {
    path: "/sonr.node.ClientService/Fetch",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: FetchRequest) =>
      Buffer.from(FetchRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => FetchRequest.decode(value),
    responseSerialize: (value: FetchResponse) =>
      Buffer.from(FetchResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => FetchResponse.decode(value),
  },
  /** Respond Method to an Invite with Decision */
  share: {
    path: "/sonr.node.ClientService/Share",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ShareRequest) =>
      Buffer.from(ShareRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ShareRequest.decode(value),
    responseSerialize: (value: ShareResponse) =>
      Buffer.from(ShareResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ShareResponse.decode(value),
  },
  /** Respond Method to an Invite with Decision */
  respond: {
    path: "/sonr.node.ClientService/Respond",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RespondRequest) =>
      Buffer.from(RespondRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RespondRequest.decode(value),
    responseSerialize: (value: RespondResponse) =>
      Buffer.from(RespondResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RespondResponse.decode(value),
  },
  /** Search Method to find a Peer by SName or PeerID */
  search: {
    path: "/sonr.node.ClientService/Search",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SearchRequest) =>
      Buffer.from(SearchRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SearchRequest.decode(value),
    responseSerialize: (value: SearchResponse) =>
      Buffer.from(SearchResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SearchResponse.decode(value),
  },
  /**
   * Events Streams
   * Returns a stream of Lobby Refresh Events
   */
  onLobbyRefresh: {
    path: "/sonr.node.ClientService/OnLobbyRefresh",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: RefreshEvent) =>
      Buffer.from(RefreshEvent.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RefreshEvent.decode(value),
  },
  /** Returns a stream of Mailbox Message Events */
  onMailboxMessage: {
    path: "/sonr.node.ClientService/OnMailboxMessage",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: MailboxEvent) =>
      Buffer.from(MailboxEvent.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MailboxEvent.decode(value),
  },
  /** Returns a stream of DecisionEvent's for Accepted Invites */
  onTransmitAccepted: {
    path: "/sonr.node.ClientService/OnTransmitAccepted",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: DecisionEvent) =>
      Buffer.from(DecisionEvent.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DecisionEvent.decode(value),
  },
  /** Returns a stream of DecisionEvent's for Rejected Invites */
  onTransmitDeclined: {
    path: "/sonr.node.ClientService/OnTransmitDeclined",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: DecisionEvent) =>
      Buffer.from(DecisionEvent.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DecisionEvent.decode(value),
  },
  /** Returns a stream of DecisionEvent's for Invites */
  onTransmitInvite: {
    path: "/sonr.node.ClientService/OnTransmitInvite",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: InviteEvent) =>
      Buffer.from(InviteEvent.encode(value).finish()),
    responseDeserialize: (value: Buffer) => InviteEvent.decode(value),
  },
  /** Returns a stream of ProgressEvent's for Sessions */
  onTransmitProgress: {
    path: "/sonr.node.ClientService/OnTransmitProgress",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: ProgressEvent) =>
      Buffer.from(ProgressEvent.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ProgressEvent.decode(value),
  },
  /** Returns a stream of Completed Transfers */
  onTransmitComplete: {
    path: "/sonr.node.ClientService/OnTransmitComplete",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: Empty) =>
      Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: CompleteEvent) =>
      Buffer.from(CompleteEvent.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CompleteEvent.decode(value),
  },
} as const;

export interface ClientServiceServer extends UntypedServiceImplementation {
  /**
   * Node Methods
   * Signing Method Request for Data
   */
  supply: handleUnaryCall<SupplyRequest, SupplyResponse>;
  /** Verification Method Request for Signed Data */
  edit: handleUnaryCall<EditRequest, EditResponse>;
  /** Fetch method finds data from Key/Value store */
  fetch: handleUnaryCall<FetchRequest, FetchResponse>;
  /** Respond Method to an Invite with Decision */
  share: handleUnaryCall<ShareRequest, ShareResponse>;
  /** Respond Method to an Invite with Decision */
  respond: handleUnaryCall<RespondRequest, RespondResponse>;
  /** Search Method to find a Peer by SName or PeerID */
  search: handleUnaryCall<SearchRequest, SearchResponse>;
  /**
   * Events Streams
   * Returns a stream of Lobby Refresh Events
   */
  onLobbyRefresh: handleServerStreamingCall<Empty, RefreshEvent>;
  /** Returns a stream of Mailbox Message Events */
  onMailboxMessage: handleServerStreamingCall<Empty, MailboxEvent>;
  /** Returns a stream of DecisionEvent's for Accepted Invites */
  onTransmitAccepted: handleServerStreamingCall<Empty, DecisionEvent>;
  /** Returns a stream of DecisionEvent's for Rejected Invites */
  onTransmitDeclined: handleServerStreamingCall<Empty, DecisionEvent>;
  /** Returns a stream of DecisionEvent's for Invites */
  onTransmitInvite: handleServerStreamingCall<Empty, InviteEvent>;
  /** Returns a stream of ProgressEvent's for Sessions */
  onTransmitProgress: handleServerStreamingCall<Empty, ProgressEvent>;
  /** Returns a stream of Completed Transfers */
  onTransmitComplete: handleServerStreamingCall<Empty, CompleteEvent>;
}

export interface ClientServiceClient extends Client {
  /**
   * Node Methods
   * Signing Method Request for Data
   */
  supply(
    request: SupplyRequest,
    callback: (error: ServiceError | null, response: SupplyResponse) => void
  ): ClientUnaryCall;
  supply(
    request: SupplyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: SupplyResponse) => void
  ): ClientUnaryCall;
  supply(
    request: SupplyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: SupplyResponse) => void
  ): ClientUnaryCall;
  /** Verification Method Request for Signed Data */
  edit(
    request: EditRequest,
    callback: (error: ServiceError | null, response: EditResponse) => void
  ): ClientUnaryCall;
  edit(
    request: EditRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EditResponse) => void
  ): ClientUnaryCall;
  edit(
    request: EditRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EditResponse) => void
  ): ClientUnaryCall;
  /** Fetch method finds data from Key/Value store */
  fetch(
    request: FetchRequest,
    callback: (error: ServiceError | null, response: FetchResponse) => void
  ): ClientUnaryCall;
  fetch(
    request: FetchRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: FetchResponse) => void
  ): ClientUnaryCall;
  fetch(
    request: FetchRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: FetchResponse) => void
  ): ClientUnaryCall;
  /** Respond Method to an Invite with Decision */
  share(
    request: ShareRequest,
    callback: (error: ServiceError | null, response: ShareResponse) => void
  ): ClientUnaryCall;
  share(
    request: ShareRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ShareResponse) => void
  ): ClientUnaryCall;
  share(
    request: ShareRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ShareResponse) => void
  ): ClientUnaryCall;
  /** Respond Method to an Invite with Decision */
  respond(
    request: RespondRequest,
    callback: (error: ServiceError | null, response: RespondResponse) => void
  ): ClientUnaryCall;
  respond(
    request: RespondRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: RespondResponse) => void
  ): ClientUnaryCall;
  respond(
    request: RespondRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: RespondResponse) => void
  ): ClientUnaryCall;
  /** Search Method to find a Peer by SName or PeerID */
  search(
    request: SearchRequest,
    callback: (error: ServiceError | null, response: SearchResponse) => void
  ): ClientUnaryCall;
  search(
    request: SearchRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: SearchResponse) => void
  ): ClientUnaryCall;
  search(
    request: SearchRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: SearchResponse) => void
  ): ClientUnaryCall;
  /**
   * Events Streams
   * Returns a stream of Lobby Refresh Events
   */
  onLobbyRefresh(
    request: Empty,
    options?: Partial<CallOptions>
  ): ClientReadableStream<RefreshEvent>;
  onLobbyRefresh(
    request: Empty,
    metadata?: Metadata,
    options?: Partial<CallOptions>
  ): ClientReadableStream<RefreshEvent>;
  /** Returns a stream of Mailbox Message Events */
  onMailboxMessage(
    request: Empty,
    options?: Partial<CallOptions>
  ): ClientReadableStream<MailboxEvent>;
  onMailboxMessage(
    request: Empty,
    metadata?: Metadata,
    options?: Partial<CallOptions>
  ): ClientReadableStream<MailboxEvent>;
  /** Returns a stream of DecisionEvent's for Accepted Invites */
  onTransmitAccepted(
    request: Empty,
    options?: Partial<CallOptions>
  ): ClientReadableStream<DecisionEvent>;
  onTransmitAccepted(
    request: Empty,
    metadata?: Metadata,
    options?: Partial<CallOptions>
  ): ClientReadableStream<DecisionEvent>;
  /** Returns a stream of DecisionEvent's for Rejected Invites */
  onTransmitDeclined(
    request: Empty,
    options?: Partial<CallOptions>
  ): ClientReadableStream<DecisionEvent>;
  onTransmitDeclined(
    request: Empty,
    metadata?: Metadata,
    options?: Partial<CallOptions>
  ): ClientReadableStream<DecisionEvent>;
  /** Returns a stream of DecisionEvent's for Invites */
  onTransmitInvite(
    request: Empty,
    options?: Partial<CallOptions>
  ): ClientReadableStream<InviteEvent>;
  onTransmitInvite(
    request: Empty,
    metadata?: Metadata,
    options?: Partial<CallOptions>
  ): ClientReadableStream<InviteEvent>;
  /** Returns a stream of ProgressEvent's for Sessions */
  onTransmitProgress(
    request: Empty,
    options?: Partial<CallOptions>
  ): ClientReadableStream<ProgressEvent>;
  onTransmitProgress(
    request: Empty,
    metadata?: Metadata,
    options?: Partial<CallOptions>
  ): ClientReadableStream<ProgressEvent>;
  /** Returns a stream of Completed Transfers */
  onTransmitComplete(
    request: Empty,
    options?: Partial<CallOptions>
  ): ClientReadableStream<CompleteEvent>;
  onTransmitComplete(
    request: Empty,
    metadata?: Metadata,
    options?: Partial<CallOptions>
  ): ClientReadableStream<CompleteEvent>;
}

export const ClientServiceClient = makeGenericClientConstructor(
  ClientServiceService,
  "sonr.node.ClientService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): ClientServiceClient;
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
