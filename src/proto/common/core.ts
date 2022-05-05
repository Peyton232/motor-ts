/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "sonr.core";

/** Internet Connection Type */
export enum Connection {
  /** WIFI - Wifi Connection */
  WIFI = "WIFI",
  /** ETHERNET - Ethernet Connection */
  ETHERNET = "ETHERNET",
  /** MOBILE - Mobile Connection */
  MOBILE = "MOBILE",
  /** OFFLINE - No Internet Connection */
  OFFLINE = "OFFLINE",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function connectionFromJSON(object: any): Connection {
  switch (object) {
    case 0:
    case "WIFI":
      return Connection.WIFI;
    case 1:
    case "ETHERNET":
      return Connection.ETHERNET;
    case 2:
    case "MOBILE":
      return Connection.MOBILE;
    case 3:
    case "OFFLINE":
      return Connection.OFFLINE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Connection.UNRECOGNIZED;
  }
}

export function connectionToJSON(object: Connection): string {
  switch (object) {
    case Connection.WIFI:
      return "WIFI";
    case Connection.ETHERNET:
      return "ETHERNET";
    case Connection.MOBILE:
      return "MOBILE";
    case Connection.OFFLINE:
      return "OFFLINE";
    default:
      return "UNKNOWN";
  }
}

export function connectionToNumber(object: Connection): number {
  switch (object) {
    case Connection.WIFI:
      return 0;
    case Connection.ETHERNET:
      return 1;
    case Connection.MOBILE:
      return 2;
    case Connection.OFFLINE:
      return 3;
    default:
      return 0;
  }
}

/** Environment Type Configuration */
export enum Environment {
  /** DEVELOPMENT - Development Environment */
  DEVELOPMENT = "DEVELOPMENT",
  /** PRODUCTION - Production Environment */
  PRODUCTION = "PRODUCTION",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function environmentFromJSON(object: any): Environment {
  switch (object) {
    case 0:
    case "DEVELOPMENT":
      return Environment.DEVELOPMENT;
    case 1:
    case "PRODUCTION":
      return Environment.PRODUCTION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Environment.UNRECOGNIZED;
  }
}

export function environmentToJSON(object: Environment): string {
  switch (object) {
    case Environment.DEVELOPMENT:
      return "DEVELOPMENT";
    case Environment.PRODUCTION:
      return "PRODUCTION";
    default:
      return "UNKNOWN";
  }
}

export function environmentToNumber(object: Environment): number {
  switch (object) {
    case Environment.DEVELOPMENT:
      return 0;
    case Environment.PRODUCTION:
      return 1;
    default:
      return 0;
  }
}

/** Location from GeoIP and OLC information */
export interface Location {
  /** Location Latitude */
  latitude: number;
  /** Location Longitude */
  longitude: number;
  /** Location Placemark Information - Generated */
  placemark?: Location_Placemark;
  /** Last Updated Time */
  lastModified: number;
}

/** Contains detailed placemark information. */
export interface Location_Placemark {
  /** The name associated with the placemark. */
  name: string;
  /** The street associated with the placemark. */
  street: string;
  /**
   * The abbreviated country name, according to the two letter (alpha-2) [ISO
   * standard](https://www.iso.org/iso-3166-country-codes.html).
   */
  isoCountryCode: string;
  /** The name of the country associated with the placemark. */
  country: string;
  /** The postal code associated with the placemark. */
  postalCode: string;
  /** The name of the state or province associated with the placemark. */
  administrativeArea: string;
  /** Additional administrative area information for the placemark. */
  subAdministrativeArea: string;
  /** The name of the city associated with the placemark. */
  locality: string;
  /** Additional city-level information for the placemark. */
  subLocality: string;
  /** The street address associated with the placemark. */
  thoroughfare: string;
  /** Additional street address information for the placemark. */
  subThoroughfare: string;
}

/** Shared Metadata for Messages on all Protocols */
export interface Metadata {
  /** Unix timestamp */
  timestamp: number;
  /** Node ID */
  nodeId: string;
  /** Signature of the message */
  signature: Buffer;
  /** Public Key of the message sender */
  publicKey: Buffer;
}

/** Standard MIME with Additional Extensions */
export interface MIME {
  /** Type of File */
  type: MIME_Type;
  /** Extension of File */
  subtype: string;
  /** Type/Subtype i.e. (image/jpeg) */
  value: string;
}

export enum MIME_Type {
  /** OTHER - Other File Type - If cannot derive from Subtype */
  OTHER = "OTHER",
  /** AUDIO - Sound, Audio Files */
  AUDIO = "AUDIO",
  /** DOCUMENT - Document Files - PDF, Word, Excel, etc. */
  DOCUMENT = "DOCUMENT",
  /** IMAGE - Image Files */
  IMAGE = "IMAGE",
  /** TEXT - Text Based Files */
  TEXT = "TEXT",
  /** VIDEO - Video Files */
  VIDEO = "VIDEO",
  /** URL - URL Links */
  URL = "URL",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function mIME_TypeFromJSON(object: any): MIME_Type {
  switch (object) {
    case 0:
    case "OTHER":
      return MIME_Type.OTHER;
    case 1:
    case "AUDIO":
      return MIME_Type.AUDIO;
    case 2:
    case "DOCUMENT":
      return MIME_Type.DOCUMENT;
    case 3:
    case "IMAGE":
      return MIME_Type.IMAGE;
    case 4:
    case "TEXT":
      return MIME_Type.TEXT;
    case 5:
    case "VIDEO":
      return MIME_Type.VIDEO;
    case 6:
    case "URL":
      return MIME_Type.URL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MIME_Type.UNRECOGNIZED;
  }
}

export function mIME_TypeToJSON(object: MIME_Type): string {
  switch (object) {
    case MIME_Type.OTHER:
      return "OTHER";
    case MIME_Type.AUDIO:
      return "AUDIO";
    case MIME_Type.DOCUMENT:
      return "DOCUMENT";
    case MIME_Type.IMAGE:
      return "IMAGE";
    case MIME_Type.TEXT:
      return "TEXT";
    case MIME_Type.VIDEO:
      return "VIDEO";
    case MIME_Type.URL:
      return "URL";
    default:
      return "UNKNOWN";
  }
}

export function mIME_TypeToNumber(object: MIME_Type): number {
  switch (object) {
    case MIME_Type.OTHER:
      return 0;
    case MIME_Type.AUDIO:
      return 1;
    case MIME_Type.DOCUMENT:
      return 2;
    case MIME_Type.IMAGE:
      return 3;
    case MIME_Type.TEXT:
      return 4;
    case MIME_Type.VIDEO:
      return 5;
    case MIME_Type.URL:
      return 6;
    default:
      return 0;
  }
}

/** Basic Info Sent to Peers to Establish Connections */
export interface Peer {
  /** User Sonr Domain */
  sName: string;
  /** Peer Status */
  status: Peer_Status;
  /** Peer Device Info */
  device?: Peer_Device;
  /** Peers General Information */
  profile?: Profile;
  /** Public Key of the Peer */
  publicKey: Buffer;
  /** Peer ID */
  peerID: string;
  /** Last Modified Timestamp */
  lastModified: number;
}

/** Peers Active Status */
export enum Peer_Status {
  /** OFFLINE - Offline - Not Online or Not a Full Node */
  OFFLINE = "OFFLINE",
  /** ONLINE - Online - Full Node Available */
  ONLINE = "ONLINE",
  /** AWAY - Away - Not Online, but has a full node */
  AWAY = "AWAY",
  /** BUSY - Busy - Online, but busy with Transfer */
  BUSY = "BUSY",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function peer_StatusFromJSON(object: any): Peer_Status {
  switch (object) {
    case 0:
    case "OFFLINE":
      return Peer_Status.OFFLINE;
    case 1:
    case "ONLINE":
      return Peer_Status.ONLINE;
    case 2:
    case "AWAY":
      return Peer_Status.AWAY;
    case 3:
    case "BUSY":
      return Peer_Status.BUSY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Peer_Status.UNRECOGNIZED;
  }
}

export function peer_StatusToJSON(object: Peer_Status): string {
  switch (object) {
    case Peer_Status.OFFLINE:
      return "OFFLINE";
    case Peer_Status.ONLINE:
      return "ONLINE";
    case Peer_Status.AWAY:
      return "AWAY";
    case Peer_Status.BUSY:
      return "BUSY";
    default:
      return "UNKNOWN";
  }
}

export function peer_StatusToNumber(object: Peer_Status): number {
  switch (object) {
    case Peer_Status.OFFLINE:
      return 0;
    case Peer_Status.ONLINE:
      return 1;
    case Peer_Status.AWAY:
      return 2;
    case Peer_Status.BUSY:
      return 3;
    default:
      return 0;
  }
}

/** Peer Info for Device */
export interface Peer_Device {
  /** Peer Device ID */
  id: string;
  /** Peer Host Name */
  hostName: string;
  /** Peer Operating System */
  os: string;
  /** Peer Architecture */
  arch: string;
  /** Peers Device Model */
  model: string;
}

/** General Information about Peer passed during Authentication */
export interface Profile {
  /** Sonr Based Username */
  sName: string;
  /** General Info */
  firstName: string;
  /** General Info */
  lastName: string;
  /** Profile Picture */
  picture: Buffer;
  /** User Biography */
  bio: string;
  /** Social Media */
  socials: Social[];
  /** Last Modified Timestamp */
  lastModified: number;
}

/** List of Profiles for Persistent Store */
export interface ProfileList {
  /** List of Profiles */
  profiles: Profile[];
  /** Creation Timestamp */
  createdAt: number;
  /** Key of the Payload List */
  key: string;
  /** Last Modified Timestamp */
  lastModified: number;
}

/** Social Media Item Information */
export interface Social {
  /** Whether this is a valid Social */
  valid: boolean;
  /** Username of Social */
  username: string;
  /** URL to Social */
  url: string;
  /** Profile Picture */
  picture: Buffer;
  /** Type of Social */
  media: Social_Media;
}

/** Social Type */
export enum Social_Media {
  /** OTHER - Other Social Network */
  OTHER = "OTHER",
  /** FACEBOOK - Facebook */
  FACEBOOK = "FACEBOOK",
  /** TWITTER - Twitter */
  TWITTER = "TWITTER",
  /** MEDIUM - Medium */
  MEDIUM = "MEDIUM",
  /** TIKTOK - TikTok */
  TIKTOK = "TIKTOK",
  /** INSTAGRAM - Instagram */
  INSTAGRAM = "INSTAGRAM",
  /** YOUTUBE - YouTube */
  YOUTUBE = "YOUTUBE",
  /** GITHUB - GitHub */
  GITHUB = "GITHUB",
  /** SNAPCHAT - Snapchat */
  SNAPCHAT = "SNAPCHAT",
  /** SPOTIFY - Spotify */
  SPOTIFY = "SPOTIFY",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function social_MediaFromJSON(object: any): Social_Media {
  switch (object) {
    case 0:
    case "OTHER":
      return Social_Media.OTHER;
    case 1:
    case "FACEBOOK":
      return Social_Media.FACEBOOK;
    case 2:
    case "TWITTER":
      return Social_Media.TWITTER;
    case 3:
    case "MEDIUM":
      return Social_Media.MEDIUM;
    case 4:
    case "TIKTOK":
      return Social_Media.TIKTOK;
    case 5:
    case "INSTAGRAM":
      return Social_Media.INSTAGRAM;
    case 6:
    case "YOUTUBE":
      return Social_Media.YOUTUBE;
    case 7:
    case "GITHUB":
      return Social_Media.GITHUB;
    case 8:
    case "SNAPCHAT":
      return Social_Media.SNAPCHAT;
    case 9:
    case "SPOTIFY":
      return Social_Media.SPOTIFY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Social_Media.UNRECOGNIZED;
  }
}

export function social_MediaToJSON(object: Social_Media): string {
  switch (object) {
    case Social_Media.OTHER:
      return "OTHER";
    case Social_Media.FACEBOOK:
      return "FACEBOOK";
    case Social_Media.TWITTER:
      return "TWITTER";
    case Social_Media.MEDIUM:
      return "MEDIUM";
    case Social_Media.TIKTOK:
      return "TIKTOK";
    case Social_Media.INSTAGRAM:
      return "INSTAGRAM";
    case Social_Media.YOUTUBE:
      return "YOUTUBE";
    case Social_Media.GITHUB:
      return "GITHUB";
    case Social_Media.SNAPCHAT:
      return "SNAPCHAT";
    case Social_Media.SPOTIFY:
      return "SPOTIFY";
    default:
      return "UNKNOWN";
  }
}

export function social_MediaToNumber(object: Social_Media): number {
  switch (object) {
    case Social_Media.OTHER:
      return 0;
    case Social_Media.FACEBOOK:
      return 1;
    case Social_Media.TWITTER:
      return 2;
    case Social_Media.MEDIUM:
      return 3;
    case Social_Media.TIKTOK:
      return 4;
    case Social_Media.INSTAGRAM:
      return 5;
    case Social_Media.YOUTUBE:
      return 6;
    case Social_Media.GITHUB:
      return 7;
    case Social_Media.SNAPCHAT:
      return 8;
    case Social_Media.SPOTIFY:
      return 9;
    default:
      return 0;
  }
}

const baseLocation: object = { latitude: 0, longitude: 0, lastModified: 0 };

export const Location = {
  encode(
    message: Location,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.latitude !== 0) {
      writer.uint32(9).double(message.latitude);
    }
    if (message.longitude !== 0) {
      writer.uint32(17).double(message.longitude);
    }
    if (message.placemark !== undefined) {
      Location_Placemark.encode(
        message.placemark,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.lastModified !== 0) {
      writer.uint32(32).int64(message.lastModified);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Location {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLocation } as Location;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.latitude = reader.double();
          break;
        case 2:
          message.longitude = reader.double();
          break;
        case 3:
          message.placemark = Location_Placemark.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.lastModified = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Location {
    const message = { ...baseLocation } as Location;
    if (object.latitude !== undefined && object.latitude !== null) {
      message.latitude = Number(object.latitude);
    } else {
      message.latitude = 0;
    }
    if (object.longitude !== undefined && object.longitude !== null) {
      message.longitude = Number(object.longitude);
    } else {
      message.longitude = 0;
    }
    if (object.placemark !== undefined && object.placemark !== null) {
      message.placemark = Location_Placemark.fromJSON(object.placemark);
    } else {
      message.placemark = undefined;
    }
    if (object.lastModified !== undefined && object.lastModified !== null) {
      message.lastModified = Number(object.lastModified);
    } else {
      message.lastModified = 0;
    }
    return message;
  },

  toJSON(message: Location): unknown {
    const obj: any = {};
    message.latitude !== undefined && (obj.latitude = message.latitude);
    message.longitude !== undefined && (obj.longitude = message.longitude);
    message.placemark !== undefined &&
      (obj.placemark = message.placemark
        ? Location_Placemark.toJSON(message.placemark)
        : undefined);
    message.lastModified !== undefined &&
      (obj.lastModified = message.lastModified);
    return obj;
  },

  fromPartial(object: DeepPartial<Location>): Location {
    const message = { ...baseLocation } as Location;
    if (object.latitude !== undefined && object.latitude !== null) {
      message.latitude = object.latitude;
    } else {
      message.latitude = 0;
    }
    if (object.longitude !== undefined && object.longitude !== null) {
      message.longitude = object.longitude;
    } else {
      message.longitude = 0;
    }
    if (object.placemark !== undefined && object.placemark !== null) {
      message.placemark = Location_Placemark.fromPartial(object.placemark);
    } else {
      message.placemark = undefined;
    }
    if (object.lastModified !== undefined && object.lastModified !== null) {
      message.lastModified = object.lastModified;
    } else {
      message.lastModified = 0;
    }
    return message;
  },
};

const baseLocation_Placemark: object = {
  name: "",
  street: "",
  isoCountryCode: "",
  country: "",
  postalCode: "",
  administrativeArea: "",
  subAdministrativeArea: "",
  locality: "",
  subLocality: "",
  thoroughfare: "",
  subThoroughfare: "",
};

export const Location_Placemark = {
  encode(
    message: Location_Placemark,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.street !== "") {
      writer.uint32(18).string(message.street);
    }
    if (message.isoCountryCode !== "") {
      writer.uint32(26).string(message.isoCountryCode);
    }
    if (message.country !== "") {
      writer.uint32(34).string(message.country);
    }
    if (message.postalCode !== "") {
      writer.uint32(42).string(message.postalCode);
    }
    if (message.administrativeArea !== "") {
      writer.uint32(50).string(message.administrativeArea);
    }
    if (message.subAdministrativeArea !== "") {
      writer.uint32(58).string(message.subAdministrativeArea);
    }
    if (message.locality !== "") {
      writer.uint32(66).string(message.locality);
    }
    if (message.subLocality !== "") {
      writer.uint32(74).string(message.subLocality);
    }
    if (message.thoroughfare !== "") {
      writer.uint32(82).string(message.thoroughfare);
    }
    if (message.subThoroughfare !== "") {
      writer.uint32(90).string(message.subThoroughfare);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Location_Placemark {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLocation_Placemark } as Location_Placemark;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.street = reader.string();
          break;
        case 3:
          message.isoCountryCode = reader.string();
          break;
        case 4:
          message.country = reader.string();
          break;
        case 5:
          message.postalCode = reader.string();
          break;
        case 6:
          message.administrativeArea = reader.string();
          break;
        case 7:
          message.subAdministrativeArea = reader.string();
          break;
        case 8:
          message.locality = reader.string();
          break;
        case 9:
          message.subLocality = reader.string();
          break;
        case 10:
          message.thoroughfare = reader.string();
          break;
        case 11:
          message.subThoroughfare = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Location_Placemark {
    const message = { ...baseLocation_Placemark } as Location_Placemark;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.street !== undefined && object.street !== null) {
      message.street = String(object.street);
    } else {
      message.street = "";
    }
    if (object.isoCountryCode !== undefined && object.isoCountryCode !== null) {
      message.isoCountryCode = String(object.isoCountryCode);
    } else {
      message.isoCountryCode = "";
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = String(object.country);
    } else {
      message.country = "";
    }
    if (object.postalCode !== undefined && object.postalCode !== null) {
      message.postalCode = String(object.postalCode);
    } else {
      message.postalCode = "";
    }
    if (
      object.administrativeArea !== undefined &&
      object.administrativeArea !== null
    ) {
      message.administrativeArea = String(object.administrativeArea);
    } else {
      message.administrativeArea = "";
    }
    if (
      object.subAdministrativeArea !== undefined &&
      object.subAdministrativeArea !== null
    ) {
      message.subAdministrativeArea = String(object.subAdministrativeArea);
    } else {
      message.subAdministrativeArea = "";
    }
    if (object.locality !== undefined && object.locality !== null) {
      message.locality = String(object.locality);
    } else {
      message.locality = "";
    }
    if (object.subLocality !== undefined && object.subLocality !== null) {
      message.subLocality = String(object.subLocality);
    } else {
      message.subLocality = "";
    }
    if (object.thoroughfare !== undefined && object.thoroughfare !== null) {
      message.thoroughfare = String(object.thoroughfare);
    } else {
      message.thoroughfare = "";
    }
    if (
      object.subThoroughfare !== undefined &&
      object.subThoroughfare !== null
    ) {
      message.subThoroughfare = String(object.subThoroughfare);
    } else {
      message.subThoroughfare = "";
    }
    return message;
  },

  toJSON(message: Location_Placemark): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.street !== undefined && (obj.street = message.street);
    message.isoCountryCode !== undefined &&
      (obj.isoCountryCode = message.isoCountryCode);
    message.country !== undefined && (obj.country = message.country);
    message.postalCode !== undefined && (obj.postalCode = message.postalCode);
    message.administrativeArea !== undefined &&
      (obj.administrativeArea = message.administrativeArea);
    message.subAdministrativeArea !== undefined &&
      (obj.subAdministrativeArea = message.subAdministrativeArea);
    message.locality !== undefined && (obj.locality = message.locality);
    message.subLocality !== undefined &&
      (obj.subLocality = message.subLocality);
    message.thoroughfare !== undefined &&
      (obj.thoroughfare = message.thoroughfare);
    message.subThoroughfare !== undefined &&
      (obj.subThoroughfare = message.subThoroughfare);
    return obj;
  },

  fromPartial(object: DeepPartial<Location_Placemark>): Location_Placemark {
    const message = { ...baseLocation_Placemark } as Location_Placemark;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.street !== undefined && object.street !== null) {
      message.street = object.street;
    } else {
      message.street = "";
    }
    if (object.isoCountryCode !== undefined && object.isoCountryCode !== null) {
      message.isoCountryCode = object.isoCountryCode;
    } else {
      message.isoCountryCode = "";
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = object.country;
    } else {
      message.country = "";
    }
    if (object.postalCode !== undefined && object.postalCode !== null) {
      message.postalCode = object.postalCode;
    } else {
      message.postalCode = "";
    }
    if (
      object.administrativeArea !== undefined &&
      object.administrativeArea !== null
    ) {
      message.administrativeArea = object.administrativeArea;
    } else {
      message.administrativeArea = "";
    }
    if (
      object.subAdministrativeArea !== undefined &&
      object.subAdministrativeArea !== null
    ) {
      message.subAdministrativeArea = object.subAdministrativeArea;
    } else {
      message.subAdministrativeArea = "";
    }
    if (object.locality !== undefined && object.locality !== null) {
      message.locality = object.locality;
    } else {
      message.locality = "";
    }
    if (object.subLocality !== undefined && object.subLocality !== null) {
      message.subLocality = object.subLocality;
    } else {
      message.subLocality = "";
    }
    if (object.thoroughfare !== undefined && object.thoroughfare !== null) {
      message.thoroughfare = object.thoroughfare;
    } else {
      message.thoroughfare = "";
    }
    if (
      object.subThoroughfare !== undefined &&
      object.subThoroughfare !== null
    ) {
      message.subThoroughfare = object.subThoroughfare;
    } else {
      message.subThoroughfare = "";
    }
    return message;
  },
};

const baseMetadata: object = { timestamp: 0, nodeId: "" };

export const Metadata = {
  encode(
    message: Metadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).int64(message.timestamp);
    }
    if (message.nodeId !== "") {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    if (message.publicKey.length !== 0) {
      writer.uint32(34).bytes(message.publicKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMetadata } as Metadata;
    message.signature = Buffer.alloc(0);
    message.publicKey = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.nodeId = reader.string();
          break;
        case 3:
          message.signature = reader.bytes() as Buffer;
          break;
        case 4:
          message.publicKey = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Metadata {
    const message = { ...baseMetadata } as Metadata;
    message.signature = Buffer.alloc(0);
    message.publicKey = Buffer.alloc(0);
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Number(object.timestamp);
    } else {
      message.timestamp = 0;
    }
    if (object.nodeId !== undefined && object.nodeId !== null) {
      message.nodeId = String(object.nodeId);
    } else {
      message.nodeId = "";
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = Buffer.from(bytesFromBase64(object.signature));
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = Buffer.from(bytesFromBase64(object.publicKey));
    }
    return message;
  },

  toJSON(message: Metadata): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : Buffer.alloc(0)
      ));
    message.publicKey !== undefined &&
      (obj.publicKey = base64FromBytes(
        message.publicKey !== undefined ? message.publicKey : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<Metadata>): Metadata {
    const message = { ...baseMetadata } as Metadata;
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = 0;
    }
    if (object.nodeId !== undefined && object.nodeId !== null) {
      message.nodeId = object.nodeId;
    } else {
      message.nodeId = "";
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    } else {
      message.signature = Buffer.alloc(0);
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = object.publicKey;
    } else {
      message.publicKey = Buffer.alloc(0);
    }
    return message;
  },
};

const baseMIME: object = { type: MIME_Type.OTHER, subtype: "", value: "" };

export const MIME = {
  encode(message: MIME, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== MIME_Type.OTHER) {
      writer.uint32(8).int32(mIME_TypeToNumber(message.type));
    }
    if (message.subtype !== "") {
      writer.uint32(18).string(message.subtype);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MIME {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMIME } as MIME;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = mIME_TypeFromJSON(reader.int32());
          break;
        case 2:
          message.subtype = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MIME {
    const message = { ...baseMIME } as MIME;
    if (object.type !== undefined && object.type !== null) {
      message.type = mIME_TypeFromJSON(object.type);
    } else {
      message.type = MIME_Type.OTHER;
    }
    if (object.subtype !== undefined && object.subtype !== null) {
      message.subtype = String(object.subtype);
    } else {
      message.subtype = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: MIME): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = mIME_TypeToJSON(message.type));
    message.subtype !== undefined && (obj.subtype = message.subtype);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<MIME>): MIME {
    const message = { ...baseMIME } as MIME;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = MIME_Type.OTHER;
    }
    if (object.subtype !== undefined && object.subtype !== null) {
      message.subtype = object.subtype;
    } else {
      message.subtype = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const basePeer: object = {
  sName: "",
  status: Peer_Status.OFFLINE,
  peerID: "",
  lastModified: 0,
};

export const Peer = {
  encode(message: Peer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sName !== "") {
      writer.uint32(10).string(message.sName);
    }
    if (message.status !== Peer_Status.OFFLINE) {
      writer.uint32(16).int32(peer_StatusToNumber(message.status));
    }
    if (message.device !== undefined) {
      Peer_Device.encode(message.device, writer.uint32(26).fork()).ldelim();
    }
    if (message.profile !== undefined) {
      Profile.encode(message.profile, writer.uint32(34).fork()).ldelim();
    }
    if (message.publicKey.length !== 0) {
      writer.uint32(42).bytes(message.publicKey);
    }
    if (message.peerID !== "") {
      writer.uint32(50).string(message.peerID);
    }
    if (message.lastModified !== 0) {
      writer.uint32(56).int64(message.lastModified);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Peer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePeer } as Peer;
    message.publicKey = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sName = reader.string();
          break;
        case 2:
          message.status = peer_StatusFromJSON(reader.int32());
          break;
        case 3:
          message.device = Peer_Device.decode(reader, reader.uint32());
          break;
        case 4:
          message.profile = Profile.decode(reader, reader.uint32());
          break;
        case 5:
          message.publicKey = reader.bytes() as Buffer;
          break;
        case 6:
          message.peerID = reader.string();
          break;
        case 7:
          message.lastModified = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Peer {
    const message = { ...basePeer } as Peer;
    message.publicKey = Buffer.alloc(0);
    if (object.sName !== undefined && object.sName !== null) {
      message.sName = String(object.sName);
    } else {
      message.sName = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = peer_StatusFromJSON(object.status);
    } else {
      message.status = Peer_Status.OFFLINE;
    }
    if (object.device !== undefined && object.device !== null) {
      message.device = Peer_Device.fromJSON(object.device);
    } else {
      message.device = undefined;
    }
    if (object.profile !== undefined && object.profile !== null) {
      message.profile = Profile.fromJSON(object.profile);
    } else {
      message.profile = undefined;
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = Buffer.from(bytesFromBase64(object.publicKey));
    }
    if (object.peerID !== undefined && object.peerID !== null) {
      message.peerID = String(object.peerID);
    } else {
      message.peerID = "";
    }
    if (object.lastModified !== undefined && object.lastModified !== null) {
      message.lastModified = Number(object.lastModified);
    } else {
      message.lastModified = 0;
    }
    return message;
  },

  toJSON(message: Peer): unknown {
    const obj: any = {};
    message.sName !== undefined && (obj.sName = message.sName);
    message.status !== undefined &&
      (obj.status = peer_StatusToJSON(message.status));
    message.device !== undefined &&
      (obj.device = message.device
        ? Peer_Device.toJSON(message.device)
        : undefined);
    message.profile !== undefined &&
      (obj.profile = message.profile
        ? Profile.toJSON(message.profile)
        : undefined);
    message.publicKey !== undefined &&
      (obj.publicKey = base64FromBytes(
        message.publicKey !== undefined ? message.publicKey : Buffer.alloc(0)
      ));
    message.peerID !== undefined && (obj.peerID = message.peerID);
    message.lastModified !== undefined &&
      (obj.lastModified = message.lastModified);
    return obj;
  },

  fromPartial(object: DeepPartial<Peer>): Peer {
    const message = { ...basePeer } as Peer;
    if (object.sName !== undefined && object.sName !== null) {
      message.sName = object.sName;
    } else {
      message.sName = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = Peer_Status.OFFLINE;
    }
    if (object.device !== undefined && object.device !== null) {
      message.device = Peer_Device.fromPartial(object.device);
    } else {
      message.device = undefined;
    }
    if (object.profile !== undefined && object.profile !== null) {
      message.profile = Profile.fromPartial(object.profile);
    } else {
      message.profile = undefined;
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = object.publicKey;
    } else {
      message.publicKey = Buffer.alloc(0);
    }
    if (object.peerID !== undefined && object.peerID !== null) {
      message.peerID = object.peerID;
    } else {
      message.peerID = "";
    }
    if (object.lastModified !== undefined && object.lastModified !== null) {
      message.lastModified = object.lastModified;
    } else {
      message.lastModified = 0;
    }
    return message;
  },
};

const basePeer_Device: object = {
  id: "",
  hostName: "",
  os: "",
  arch: "",
  model: "",
};

export const Peer_Device = {
  encode(
    message: Peer_Device,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.hostName !== "") {
      writer.uint32(18).string(message.hostName);
    }
    if (message.os !== "") {
      writer.uint32(26).string(message.os);
    }
    if (message.arch !== "") {
      writer.uint32(34).string(message.arch);
    }
    if (message.model !== "") {
      writer.uint32(42).string(message.model);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Peer_Device {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePeer_Device } as Peer_Device;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.hostName = reader.string();
          break;
        case 3:
          message.os = reader.string();
          break;
        case 4:
          message.arch = reader.string();
          break;
        case 5:
          message.model = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Peer_Device {
    const message = { ...basePeer_Device } as Peer_Device;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.hostName !== undefined && object.hostName !== null) {
      message.hostName = String(object.hostName);
    } else {
      message.hostName = "";
    }
    if (object.os !== undefined && object.os !== null) {
      message.os = String(object.os);
    } else {
      message.os = "";
    }
    if (object.arch !== undefined && object.arch !== null) {
      message.arch = String(object.arch);
    } else {
      message.arch = "";
    }
    if (object.model !== undefined && object.model !== null) {
      message.model = String(object.model);
    } else {
      message.model = "";
    }
    return message;
  },

  toJSON(message: Peer_Device): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.hostName !== undefined && (obj.hostName = message.hostName);
    message.os !== undefined && (obj.os = message.os);
    message.arch !== undefined && (obj.arch = message.arch);
    message.model !== undefined && (obj.model = message.model);
    return obj;
  },

  fromPartial(object: DeepPartial<Peer_Device>): Peer_Device {
    const message = { ...basePeer_Device } as Peer_Device;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.hostName !== undefined && object.hostName !== null) {
      message.hostName = object.hostName;
    } else {
      message.hostName = "";
    }
    if (object.os !== undefined && object.os !== null) {
      message.os = object.os;
    } else {
      message.os = "";
    }
    if (object.arch !== undefined && object.arch !== null) {
      message.arch = object.arch;
    } else {
      message.arch = "";
    }
    if (object.model !== undefined && object.model !== null) {
      message.model = object.model;
    } else {
      message.model = "";
    }
    return message;
  },
};

const baseProfile: object = {
  sName: "",
  firstName: "",
  lastName: "",
  bio: "",
  lastModified: 0,
};

export const Profile = {
  encode(
    message: Profile,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sName !== "") {
      writer.uint32(10).string(message.sName);
    }
    if (message.firstName !== "") {
      writer.uint32(18).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(26).string(message.lastName);
    }
    if (message.picture.length !== 0) {
      writer.uint32(34).bytes(message.picture);
    }
    if (message.bio !== "") {
      writer.uint32(50).string(message.bio);
    }
    for (const v of message.socials) {
      Social.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.lastModified !== 0) {
      writer.uint32(64).int64(message.lastModified);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Profile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProfile } as Profile;
    message.socials = [];
    message.picture = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sName = reader.string();
          break;
        case 2:
          message.firstName = reader.string();
          break;
        case 3:
          message.lastName = reader.string();
          break;
        case 4:
          message.picture = reader.bytes() as Buffer;
          break;
        case 6:
          message.bio = reader.string();
          break;
        case 7:
          message.socials.push(Social.decode(reader, reader.uint32()));
          break;
        case 8:
          message.lastModified = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Profile {
    const message = { ...baseProfile } as Profile;
    message.socials = [];
    message.picture = Buffer.alloc(0);
    if (object.sName !== undefined && object.sName !== null) {
      message.sName = String(object.sName);
    } else {
      message.sName = "";
    }
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = String(object.firstName);
    } else {
      message.firstName = "";
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = String(object.lastName);
    } else {
      message.lastName = "";
    }
    if (object.picture !== undefined && object.picture !== null) {
      message.picture = Buffer.from(bytesFromBase64(object.picture));
    }
    if (object.bio !== undefined && object.bio !== null) {
      message.bio = String(object.bio);
    } else {
      message.bio = "";
    }
    if (object.socials !== undefined && object.socials !== null) {
      for (const e of object.socials) {
        message.socials.push(Social.fromJSON(e));
      }
    }
    if (object.lastModified !== undefined && object.lastModified !== null) {
      message.lastModified = Number(object.lastModified);
    } else {
      message.lastModified = 0;
    }
    return message;
  },

  toJSON(message: Profile): unknown {
    const obj: any = {};
    message.sName !== undefined && (obj.sName = message.sName);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.picture !== undefined &&
      (obj.picture = base64FromBytes(
        message.picture !== undefined ? message.picture : Buffer.alloc(0)
      ));
    message.bio !== undefined && (obj.bio = message.bio);
    if (message.socials) {
      obj.socials = message.socials.map((e) =>
        e ? Social.toJSON(e) : undefined
      );
    } else {
      obj.socials = [];
    }
    message.lastModified !== undefined &&
      (obj.lastModified = message.lastModified);
    return obj;
  },

  fromPartial(object: DeepPartial<Profile>): Profile {
    const message = { ...baseProfile } as Profile;
    message.socials = [];
    if (object.sName !== undefined && object.sName !== null) {
      message.sName = object.sName;
    } else {
      message.sName = "";
    }
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = object.firstName;
    } else {
      message.firstName = "";
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = object.lastName;
    } else {
      message.lastName = "";
    }
    if (object.picture !== undefined && object.picture !== null) {
      message.picture = object.picture;
    } else {
      message.picture = Buffer.alloc(0);
    }
    if (object.bio !== undefined && object.bio !== null) {
      message.bio = object.bio;
    } else {
      message.bio = "";
    }
    if (object.socials !== undefined && object.socials !== null) {
      for (const e of object.socials) {
        message.socials.push(Social.fromPartial(e));
      }
    }
    if (object.lastModified !== undefined && object.lastModified !== null) {
      message.lastModified = object.lastModified;
    } else {
      message.lastModified = 0;
    }
    return message;
  },
};

const baseProfileList: object = { createdAt: 0, key: "", lastModified: 0 };

export const ProfileList = {
  encode(
    message: ProfileList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.profiles) {
      Profile.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).int64(message.createdAt);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    if (message.lastModified !== 0) {
      writer.uint32(32).int64(message.lastModified);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProfileList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProfileList } as ProfileList;
    message.profiles = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profiles.push(Profile.decode(reader, reader.uint32()));
          break;
        case 2:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.key = reader.string();
          break;
        case 4:
          message.lastModified = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProfileList {
    const message = { ...baseProfileList } as ProfileList;
    message.profiles = [];
    if (object.profiles !== undefined && object.profiles !== null) {
      for (const e of object.profiles) {
        message.profiles.push(Profile.fromJSON(e));
      }
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.lastModified !== undefined && object.lastModified !== null) {
      message.lastModified = Number(object.lastModified);
    } else {
      message.lastModified = 0;
    }
    return message;
  },

  toJSON(message: ProfileList): unknown {
    const obj: any = {};
    if (message.profiles) {
      obj.profiles = message.profiles.map((e) =>
        e ? Profile.toJSON(e) : undefined
      );
    } else {
      obj.profiles = [];
    }
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.key !== undefined && (obj.key = message.key);
    message.lastModified !== undefined &&
      (obj.lastModified = message.lastModified);
    return obj;
  },

  fromPartial(object: DeepPartial<ProfileList>): ProfileList {
    const message = { ...baseProfileList } as ProfileList;
    message.profiles = [];
    if (object.profiles !== undefined && object.profiles !== null) {
      for (const e of object.profiles) {
        message.profiles.push(Profile.fromPartial(e));
      }
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.lastModified !== undefined && object.lastModified !== null) {
      message.lastModified = object.lastModified;
    } else {
      message.lastModified = 0;
    }
    return message;
  },
};

const baseSocial: object = {
  valid: false,
  username: "",
  url: "",
  media: Social_Media.OTHER,
};

export const Social = {
  encode(
    message: Social,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.valid === true) {
      writer.uint32(8).bool(message.valid);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.url !== "") {
      writer.uint32(26).string(message.url);
    }
    if (message.picture.length !== 0) {
      writer.uint32(34).bytes(message.picture);
    }
    if (message.media !== Social_Media.OTHER) {
      writer.uint32(40).int32(social_MediaToNumber(message.media));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Social {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSocial } as Social;
    message.picture = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valid = reader.bool();
          break;
        case 2:
          message.username = reader.string();
          break;
        case 3:
          message.url = reader.string();
          break;
        case 4:
          message.picture = reader.bytes() as Buffer;
          break;
        case 5:
          message.media = social_MediaFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Social {
    const message = { ...baseSocial } as Social;
    message.picture = Buffer.alloc(0);
    if (object.valid !== undefined && object.valid !== null) {
      message.valid = Boolean(object.valid);
    } else {
      message.valid = false;
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = String(object.username);
    } else {
      message.username = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.picture !== undefined && object.picture !== null) {
      message.picture = Buffer.from(bytesFromBase64(object.picture));
    }
    if (object.media !== undefined && object.media !== null) {
      message.media = social_MediaFromJSON(object.media);
    } else {
      message.media = Social_Media.OTHER;
    }
    return message;
  },

  toJSON(message: Social): unknown {
    const obj: any = {};
    message.valid !== undefined && (obj.valid = message.valid);
    message.username !== undefined && (obj.username = message.username);
    message.url !== undefined && (obj.url = message.url);
    message.picture !== undefined &&
      (obj.picture = base64FromBytes(
        message.picture !== undefined ? message.picture : Buffer.alloc(0)
      ));
    message.media !== undefined &&
      (obj.media = social_MediaToJSON(message.media));
    return obj;
  },

  fromPartial(object: DeepPartial<Social>): Social {
    const message = { ...baseSocial } as Social;
    if (object.valid !== undefined && object.valid !== null) {
      message.valid = object.valid;
    } else {
      message.valid = false;
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    } else {
      message.username = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.picture !== undefined && object.picture !== null) {
      message.picture = object.picture;
    } else {
      message.picture = Buffer.alloc(0);
    }
    if (object.media !== undefined && object.media !== null) {
      message.media = object.media;
    } else {
      message.media = Social_Media.OTHER;
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
