// -- Modules --
import Binary from "./binary";
import { credentials, ClientReadableStream } from "@grpc/grpc-js";
import { LogError, LogDebug } from "./util/logger";
import { EventEmitter } from "events";
import {
  SupplyResponse,
  SupplyRequest,
  EditResponse,
  EditRequest,
  EditRequest_Type,
  FetchRequest_Key,
  FetchResponse,
  FetchRequest,
  ShareResponse,
  ShareRequest,
  RespondResponse,
  RespondRequest,
  SearchResponse,
  SearchRequest,
} from "./proto/api/call";
import {
  RefreshEvent,
  MailboxEvent,
  DecisionEvent,
  ProgressEvent,
  InviteEvent,
  CompleteEvent,
} from "./proto/api/event";
import { Peer, Profile } from "./proto/common/core";
import { ClientServiceClient } from "./proto/node/client";
import { AlertManager } from "notifier";
import { SupplyItem } from "./proto/common/data";
const RPC_SERVER_PORT = "26225";

class Sonr {
  static assetsDir: string;
  static binary: Binary;
  static logging: boolean;
  static client: ClientServiceClient;
  static emitter: EventEmitter;
  static localPeers: Peer[];

  /**
   * Initializes Sonr Service
   *
   * @param {string} assetsDir - For Cache/Bin Paths
   * @param {Boolean} logging - Enable/Disable Events in Console Log
   */
  static async init(path: string, logging: boolean) {
    // Set Known Paths
    this.assetsDir = path;
    this.logging = logging;
    this.emitter = new EventEmitter();
    this.localPeers = [];

    // Set Logging
    this.binary = new Binary(this.assetsDir);
    this.binary.on("ready", () => {
      Sonr.start();
    });
    this.binary.on("error", (err) => {
      LogError("Failed to launch binary.", err);
    });
  }

  /**
   * Begins RPC Client for Sonr.
   *
   * @param {string} port - port number (**required**)
   */
  static async start() {
    // Initialize Properties
    const address: string = `localhost:${RPC_SERVER_PORT}`;
    this.client = new ClientServiceClient(
      address,
      credentials.createInsecure()
    );

    // Set Stream Handlers
    this.onLobbyRefresh(this.client.onLobbyRefresh({}));
    this.onMailboxMessage(this.client.onMailboxMessage({}));
    this.onTransmitAccepted(this.client.onTransmitAccepted({}));
    this.onTransmitDeclined(this.client.onTransmitDeclined({}));
    this.onTransmitInvite(this.client.onTransmitInvite({}));
    this.onTransmitProgress(this.client.onTransmitProgress({}));
    this.onTransmitComplete(this.client.onTransmitComplete({}));
  }

  /**
   * Invites a Peer for a Transfer.
   * @param {Array<String>} paths - Paths to Supply
   * @param {Peer} peer - Peer to Invite
   *
   */
  static newSupplyItemList(paths: string[]): Array<SupplyItem> {
    // Convert Paths to Supply Items
    return paths.map((path) => {
      return {
        path: path,
        thumbnail: Buffer.from([]),
      };
    });
  }

  /**
   * Invites a Peer for a Transfer.
   * @param {Array<String>} paths - Paths to Supply
   * @param {Peer} peer - Peer to Invite
   *
   */
  static async supply(paths: string[], peer: Peer): Promise<SupplyResponse> {
    // Convert Paths to Supply Items and Supply Request
    const getSupplyRequest = (peer: Peer): SupplyRequest => {
      if (peer == null) {
        return {
          isPeerSupply: false,
          items: this.newSupplyItemList(paths),
        };
      }
      return {
        isPeerSupply: true,
        items: this.newSupplyItemList(paths),
        peer: peer,
      };
    };

    // Send Supply Request
    const supplyRequest = getSupplyRequest(peer);
    return new Promise((resolve, reject) => {
      this.client.supply(supplyRequest, (err, res) => {
        if (err !== undefined && err !== null) {
          if (this.logging) {
            LogError("Error calling Invite", err);
            reject(err);
          }
        }
        resolve(res);
      });
    });
  }

  /**
   * Edit Profile
   * @param {Profile} profile - Profile thats Updated
   */
  static async edit(profile: Profile): Promise<EditResponse> {
    const editRequest: EditRequest = {
      type: EditRequest_Type.MODIFY,
      profile: profile,
    };
    return new Promise((resolve, reject) => {
      this.client.edit(editRequest, (err, res) => {
        if (err !== undefined && err !== null) {
          if (this.logging) {
            LogError("Error calling decide", err);
            reject(err);
          }
        }
        resolve(res);
      });
    });
  }

  /**
   * Fetch data from store
   * @param {FetchRequest_Key} key - Key to fetch
   */
  static async fetch(key: FetchRequest_Key): Promise<FetchResponse> {
    const fetchRequest: FetchRequest = {
      key: key,
    };
    return new Promise((resolve, reject) => {
      this.client.fetch(fetchRequest, (err, res) => {
        if (err !== undefined && err !== null) {
          if (this.logging) {
            LogError("Error calling decide", err);
            reject(err);
          }
        }
        resolve(res);
      });
    });
  }

  /**
   * Share a File with a Peer
   * @param {Peer} peer - Peer to Share with
   * @param {Array<String>} paths - Paths to File(s)
   *
   */
  static async share(peer: Peer, filePaths: string[]): Promise<ShareResponse> {
    const shareRequest: ShareRequest = {
      peer: peer,
      items: this.newSupplyItemList(filePaths),
    };
    return new Promise((resolve, reject) => {
      this.client.share(shareRequest, (err, res) => {
        if (err !== undefined && err !== null) {
          if (this.logging) {
            LogError("Error calling decide", err);
            reject(err);
          }
        }
        resolve(res);
      });
    });
  }

  /**
   * Respond to an Invite Event
   * @param {boolean} decision - Decision to Accept or Decline
   * @param {Peer} to - Peer to Respond to
   */
  static async respond(decision: boolean, to: Peer): Promise<RespondResponse> {
    const respondRequest: RespondRequest = {
      decision: decision,
      peer: to,
    };
    return new Promise((resolve, reject) => {
      this.client.respond(respondRequest, (err, res) => {
        if (err !== undefined && err !== null) {
          if (this.logging) {
            LogError("Error calling decide", err);
            reject(err);
          }
        }
        resolve(res);
      });
    });
  }

  /**
   * Search for a Peer
   * @param {String} sname - Search Peer by SName
   */
  static async search(sname: string): Promise<SearchResponse> {
    const searchRequest: SearchRequest = {
      sName: sname,
      peerId: null,
    };

    return new Promise((resolve, reject) => {
      this.client.search(searchRequest, (err, res) => {
        if (err !== undefined && err !== null) {
          if (this.logging) {
            LogError("Error calling decide", err);
            reject(err);
          }
        }
        resolve(res);
      });
    });
  }

  /**
   * Handle Reply Stream
   *
   * @param {EventEmitter} call - GRPC Stream Call
   */
  private static onLobbyRefresh(call: ClientReadableStream<RefreshEvent>) {
    call.on("data", (data: RefreshEvent) => {
      Sonr.localPeers = data.peers;
      this.emitter.emit("refreshEvent", data);
    });
    call.on("error", this.logError);
  }

  /**
   * Handle Reply Stream
   *
   * @param {EventEmitter} call - GRPC Stream Call
   */
  private static onMailboxMessage(call: ClientReadableStream<MailboxEvent>) {
    call.on("data", (data: MailboxEvent) => {
      if (data !== undefined && data !== null) {
        this.emitter.emit("mailboxEvent", data);
      }
    });
    call.on("error", this.logError);
  }

  /**
   * Handle Mail Stream
   *
   * @param {EventEmitter} call - GRPC Stream Call
   */
  private static onTransmitAccepted(call: ClientReadableStream<DecisionEvent>) {
    call.on("data", (data: DecisionEvent) => {
      if (data !== undefined && data !== null) {
        this.emitter.emit("decisionEvent", data);
      }
    });
    call.on("error", this.logError);
  }

  /**
   * Handle Mail Stream
   *
   * @param {EventEmitter} call - GRPC Stream Call
   */
  private static onTransmitProgress(call: ClientReadableStream<ProgressEvent>) {
    call.on("data", (data: ProgressEvent) => {
      if (data !== undefined && data !== null) {
        this.emitter.emit("progressEvent", data);
      }
    });
    call.on("error", this.logError);
  }
  /**
   * Handle Mail Stream
   *
   * @param {EventEmitter} call - GRPC Stream Call
   */
  private static onTransmitDeclined(call: ClientReadableStream<DecisionEvent>) {
    call.on("data", (data: DecisionEvent) => {
      if (data !== undefined && data !== null) {
        this.emitter.emit("decisionEvent", data);
      }
    });
    call.on("error", this.logError);
  }

  /**
   * Handle Status Stream
   *
   * @param {EventEmitter} call - GRPC Stream Call
   */
  private static onTransmitInvite(call: ClientReadableStream<InviteEvent>) {
    call.on("data", (data: InviteEvent) => {
      if (data !== null && data !== undefined) {
        if (this.logging) {
          LogDebug(data);
        }
        AlertManager.presentInvite(data);
        this.emitter.emit("inviteEvent", data);
      }
    });
    call.on("error", this.logError);
  }

  /**
   * Handle Complete Stream
   *
   * @param {events.EventEmitter} call - GRPC Stream Call
   */
  private static onTransmitComplete(call: ClientReadableStream<CompleteEvent>) {
    call.on("data", (data: CompleteEvent) => {
      if (data !== undefined && data !== null) {
        this.emitter.emit("completeEvent", data);
      }
    });
    call.on("error", this.logError);
  }

  /**
   * Log Errors for Call Streams
   *
   * @param {Object} error - GRPC Stream Call Error
   */
  private static logError(error: Error) {
    if (this.logging) {
      LogError("Error Occurred handling callback/event", error);
    }
  }
}
export default Sonr;
