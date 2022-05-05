/* eslint-disable */
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleUnaryCall,
  Client,
  ClientUnaryCall,
  Metadata,
  CallOptions,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import {
  AuthorizeRequest,
  AuthorizeResponse,
  LinkRequest,
  LinkResponse,
  RegisterRequest,
  RegisterResponse,
} from "../../proto/api/call";

export const protobufPackage = "sonr.node";

/** / This file contains service for the Node RPC Server */

/** RPC Service with Equivalent Methods of a binded Node */
export const HighwayServiceService = {
  /** Authorize Signing Method Request for Data */
  authorize: {
    path: "/sonr.node.HighwayService/Authorize",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AuthorizeRequest) =>
      Buffer.from(AuthorizeRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AuthorizeRequest.decode(value),
    responseSerialize: (value: AuthorizeResponse) =>
      Buffer.from(AuthorizeResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AuthorizeResponse.decode(value),
  },
  /** Link Links an Additional Device to User */
  link: {
    path: "/sonr.node.HighwayService/Link",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LinkRequest) =>
      Buffer.from(LinkRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LinkRequest.decode(value),
    responseSerialize: (value: LinkResponse) =>
      Buffer.from(LinkResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LinkResponse.decode(value),
  },
  /** Register creates new user in DNS Table */
  register: {
    path: "/sonr.node.HighwayService/Register",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RegisterRequest) =>
      Buffer.from(RegisterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RegisterRequest.decode(value),
    responseSerialize: (value: RegisterResponse) =>
      Buffer.from(RegisterResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RegisterResponse.decode(value),
  },
} as const;

export interface HighwayServiceServer extends UntypedServiceImplementation {
  /** Authorize Signing Method Request for Data */
  authorize: handleUnaryCall<AuthorizeRequest, AuthorizeResponse>;
  /** Link Links an Additional Device to User */
  link: handleUnaryCall<LinkRequest, LinkResponse>;
  /** Register creates new user in DNS Table */
  register: handleUnaryCall<RegisterRequest, RegisterResponse>;
}

export interface HighwayServiceClient extends Client {
  /** Authorize Signing Method Request for Data */
  authorize(
    request: AuthorizeRequest,
    callback: (error: ServiceError | null, response: AuthorizeResponse) => void
  ): ClientUnaryCall;
  authorize(
    request: AuthorizeRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AuthorizeResponse) => void
  ): ClientUnaryCall;
  authorize(
    request: AuthorizeRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AuthorizeResponse) => void
  ): ClientUnaryCall;
  /** Link Links an Additional Device to User */
  link(
    request: LinkRequest,
    callback: (error: ServiceError | null, response: LinkResponse) => void
  ): ClientUnaryCall;
  link(
    request: LinkRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LinkResponse) => void
  ): ClientUnaryCall;
  link(
    request: LinkRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LinkResponse) => void
  ): ClientUnaryCall;
  /** Register creates new user in DNS Table */
  register(
    request: RegisterRequest,
    callback: (error: ServiceError | null, response: RegisterResponse) => void
  ): ClientUnaryCall;
  register(
    request: RegisterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: RegisterResponse) => void
  ): ClientUnaryCall;
  register(
    request: RegisterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: RegisterResponse) => void
  ): ClientUnaryCall;
}

export const HighwayServiceClient = makeGenericClientConstructor(
  HighwayServiceService,
  "sonr.node.HighwayService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): HighwayServiceClient;
};

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
