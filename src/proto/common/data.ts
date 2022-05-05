/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MIME, Profile } from "../../proto/common/core";

export const protobufPackage = "sonr.core";

export enum Direction {
  DEFAULT = "DEFAULT",
  INCOMING = "INCOMING",
  OUTGOING = "OUTGOING",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function directionFromJSON(object: any): Direction {
  switch (object) {
    case 0:
    case "DEFAULT":
      return Direction.DEFAULT;
    case 1:
    case "INCOMING":
      return Direction.INCOMING;
    case 2:
    case "OUTGOING":
      return Direction.OUTGOING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Direction.UNRECOGNIZED;
  }
}

export function directionToJSON(object: Direction): string {
  switch (object) {
    case Direction.DEFAULT:
      return "DEFAULT";
    case Direction.INCOMING:
      return "INCOMING";
    case Direction.OUTGOING:
      return "OUTGOING";
    default:
      return "UNKNOWN";
  }
}

export function directionToNumber(object: Direction): number {
  switch (object) {
    case Direction.DEFAULT:
      return 0;
    case Direction.INCOMING:
      return 1;
    case Direction.OUTGOING:
      return 2;
    default:
      return 0;
  }
}

/** For Transfer File Payload */
export interface FileItem {
  /** Standard Mime Type */
  mime?: MIME;
  /** File Name without Path */
  name: string;
  /** File Location */
  path: string;
  /** File Size in Bytes */
  size: number;
  /** Thumbnail of File */
  thumbnail?: Thumbnail;
  /** Last Modified Time in Seconds */
  lastModified: number;
}

/** For Transfer Text Payload */
export interface MessageItem {
  /** Standard Mime Type */
  mime?: MIME;
  /** Subject of Message */
  subject: string;
  /** Body of Message */
  body: string;
  /** Created Time in Seconds */
  createdAt: number;
  /** Attachments of Message */
  attachments: FileItem[];
}

/** Sonr Url Link Contains metadata of provided URL */
export interface UrlItem {
  /** Standard Mime Type */
  mime?: MIME;
  /** OG URL Link */
  link: string;
  /** Meta Field for Title */
  title: string;
  /** Meta field for site */
  site: string;
  /** Meta field for sitename */
  siteName: string;
  /** Meta field for description */
  description: string;
  /** OpenGraph Object */
  openGraph?: OpenGraph;
}

/** OpenGraph is a generic OpenGraph object */
export interface OpenGraph {
  /** Primary OpenGraph Object */
  primary?: OpenGraph_Primary;
  /** Images */
  images: OpenGraph_Image[];
  /** Videos */
  videos: OpenGraph_Video[];
  /** Audios */
  audios: OpenGraph_Audio[];
  /** Twitter Card */
  twitter?: OpenGraph_Twitter;
}

/** Url Opengraph Preview Type - In order of Priority */
export enum OpenGraph_Type {
  /** IMAGE - Image Preview */
  IMAGE = "IMAGE",
  /** VIDEO - Video Preview */
  VIDEO = "VIDEO",
  /** TWITTER - Twitter Card Preview */
  TWITTER = "TWITTER",
  /** AUDIO - Audio Preview */
  AUDIO = "AUDIO",
  /** NONE - No Type, Preview not set. */
  NONE = "NONE",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function openGraph_TypeFromJSON(object: any): OpenGraph_Type {
  switch (object) {
    case 0:
    case "IMAGE":
      return OpenGraph_Type.IMAGE;
    case 1:
    case "VIDEO":
      return OpenGraph_Type.VIDEO;
    case 2:
    case "TWITTER":
      return OpenGraph_Type.TWITTER;
    case 3:
    case "AUDIO":
      return OpenGraph_Type.AUDIO;
    case 4:
    case "NONE":
      return OpenGraph_Type.NONE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OpenGraph_Type.UNRECOGNIZED;
  }
}

export function openGraph_TypeToJSON(object: OpenGraph_Type): string {
  switch (object) {
    case OpenGraph_Type.IMAGE:
      return "IMAGE";
    case OpenGraph_Type.VIDEO:
      return "VIDEO";
    case OpenGraph_Type.TWITTER:
      return "TWITTER";
    case OpenGraph_Type.AUDIO:
      return "AUDIO";
    case OpenGraph_Type.NONE:
      return "NONE";
    default:
      return "UNKNOWN";
  }
}

export function openGraph_TypeToNumber(object: OpenGraph_Type): number {
  switch (object) {
    case OpenGraph_Type.IMAGE:
      return 0;
    case OpenGraph_Type.VIDEO:
      return 1;
    case OpenGraph_Type.TWITTER:
      return 2;
    case OpenGraph_Type.AUDIO:
      return 3;
    case OpenGraph_Type.NONE:
      return 4;
    default:
      return 0;
  }
}

/** Primary Opengraph Preview */
export interface OpenGraph_Primary {
  /** Type of Primary */
  type: OpenGraph_Type;
  /** Image */
  image?: OpenGraph_Image | undefined;
  /** Video */
  video?: OpenGraph_Video | undefined;
  /** Audio */
  audio?: OpenGraph_Audio | undefined;
  /** Twitter Card */
  twitter?: OpenGraph_Twitter | undefined;
}

/** OpenGraph Image */
export interface OpenGraph_Image {
  /** `meta:"og:image,og:image:url"` */
  url: string;
  /** `meta:"og:image:secure_url"` */
  secureUrl: string;
  /** `meta:"og:image:width"` */
  width: number;
  /** `meta:"og:image:height"` */
  height: number;
  /** `meta:"og:image:type"` */
  type: string;
}

/** OpenGraph Video */
export interface OpenGraph_Video {
  /** `meta:"og:video,og:video:url"` */
  url: string;
  /** `meta:"og:video:secure_url"` */
  secureUrl: string;
  /** `meta:"og:video:width"` */
  width: number;
  /** `meta:"og:video:height"` */
  height: number;
  /** `meta:"og:video:type"` */
  type: string;
}

/** OpenGraph Audio */
export interface OpenGraph_Audio {
  /** `meta:"og:audio,og:audio:url"` */
  url: string;
  /** `meta:"og:audio:secure_url"` */
  secureUrl: string;
  /** `meta:"og:audio:type"` */
  type: string;
}

/** Twitter Card */
export interface OpenGraph_Twitter {
  /** `meta:"twitter:card"` */
  card: string;
  /** `meta:"twitter:site"` */
  site: string;
  /** `meta:"twitter:site:id"` */
  siteId: string;
  /** `meta:"twitter:creator"` */
  creator: string;
  /** `meta:"twitter:creator:id"` */
  creatorId: string;
  /** `meta:"twitter:description"` */
  description: string;
  /** `meta:"twitter:title"` */
  title: string;
  /** `meta:"twitter:image,twitter:image:src"` */
  image: string;
  /** `meta:"twitter:image:alt"` */
  imageAlt: string;
  /** `meta:"twitter:url"` */
  url: string;
  /** Twitter Item Player */
  player?: OpenGraph_Twitter_Player;
  /** Twitter iPhone Data */
  iphone?: OpenGraph_Twitter_IPhone;
  /** Twitter iPad Data */
  ipad?: OpenGraph_Twitter_IPad;
  /** Twitter Android Data */
  googlePlay?: OpenGraph_Twitter_GooglePlay;
}

export interface OpenGraph_Twitter_Player {
  /** `meta:"twitter:player"` */
  url: string;
  /** `meta:"twitter:width"` */
  width: number;
  /** `meta:"twitter:height"` */
  height: number;
  /** `meta:"twitter:stream"` */
  stream: string;
}

export interface OpenGraph_Twitter_IPhone {
  /** `meta:"twitter:app:name:iphone"` */
  name: string;
  /** `meta:"twitter:app:id:iphone"` */
  id: string;
  /** `meta:"twitter:app:url:iphone"` */
  url: string;
}

export interface OpenGraph_Twitter_IPad {
  /** `meta:"twitter:app:name:ipad"` */
  name: string;
  /** `meta:"twitter:app:id:ipad"` */
  id: string;
  /** `meta:"twitter:app:url:ipad"` */
  url: string;
}

export interface OpenGraph_Twitter_GooglePlay {
  /** `meta:"twitter:app:name:googleplay"` */
  name: string;
  /** `meta:"twitter:app:id:googleplay"` */
  id: string;
  /** `meta:"twitter:app:url:googleplay"` */
  url: string;
}

/** Thumbnail of File */
export interface Thumbnail {
  /** Thumbnail Buffer */
  buffer: Buffer;
  /** Mime Type */
  mime?: MIME;
}

/** Payload is Data thats being Passed */
export interface Payload {
  /** Payload Items */
  items: Payload_Item[];
  /** PROFILE: General Sender Info */
  owner?: Profile;
  /** Payload Size in Bytes */
  size: number;
  /** Payload Creation Time in Seconds */
  createdAt: number;
}

/** Item in Payload */
export interface Payload_Item {
  /** MIME of the Item */
  mime?: MIME;
  /** Size of the Item in Bytes */
  size: number;
  /** FILE: File Item */
  file?: FileItem | undefined;
  /** URL: Url Item */
  url?: UrlItem | undefined;
  /** MESSAGE: Message Item */
  message?: MessageItem | undefined;
  /** Thumbnail of the Item */
  thumbnail?: Thumbnail | undefined;
  /** Open Graph Image */
  openGraph?: OpenGraph_Primary | undefined;
}

/** PayloadItemList is a list of Payload.Item's for Persistent Store */
export interface PayloadList {
  /** Payload List */
  payloads: Payload[];
  /** Key of the Payload List */
  key: string;
  /** Last Modified Time in Seconds */
  lastModified: number;
}

/** SupplyItem is an item supplied to be a payload */
export interface SupplyItem {
  /** Supply Path */
  path: string;
  /** Supply Path of the Thumbnail */
  thumbnail?: Buffer | undefined;
}

const baseFileItem: object = { name: "", path: "", size: 0, lastModified: 0 };

export const FileItem = {
  encode(
    message: FileItem,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mime !== undefined) {
      MIME.encode(message.mime, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    if (message.size !== 0) {
      writer.uint32(32).int64(message.size);
    }
    if (message.thumbnail !== undefined) {
      Thumbnail.encode(message.thumbnail, writer.uint32(42).fork()).ldelim();
    }
    if (message.lastModified !== 0) {
      writer.uint32(48).int64(message.lastModified);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFileItem } as FileItem;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mime = MIME.decode(reader, reader.uint32());
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.path = reader.string();
          break;
        case 4:
          message.size = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.thumbnail = Thumbnail.decode(reader, reader.uint32());
          break;
        case 6:
          message.lastModified = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileItem {
    const message = { ...baseFileItem } as FileItem;
    if (object.mime !== undefined && object.mime !== null) {
      message.mime = MIME.fromJSON(object.mime);
    } else {
      message.mime = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = String(object.path);
    } else {
      message.path = "";
    }
    if (object.size !== undefined && object.size !== null) {
      message.size = Number(object.size);
    } else {
      message.size = 0;
    }
    if (object.thumbnail !== undefined && object.thumbnail !== null) {
      message.thumbnail = Thumbnail.fromJSON(object.thumbnail);
    } else {
      message.thumbnail = undefined;
    }
    if (object.lastModified !== undefined && object.lastModified !== null) {
      message.lastModified = Number(object.lastModified);
    } else {
      message.lastModified = 0;
    }
    return message;
  },

  toJSON(message: FileItem): unknown {
    const obj: any = {};
    message.mime !== undefined &&
      (obj.mime = message.mime ? MIME.toJSON(message.mime) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.path !== undefined && (obj.path = message.path);
    message.size !== undefined && (obj.size = message.size);
    message.thumbnail !== undefined &&
      (obj.thumbnail = message.thumbnail
        ? Thumbnail.toJSON(message.thumbnail)
        : undefined);
    message.lastModified !== undefined &&
      (obj.lastModified = message.lastModified);
    return obj;
  },

  fromPartial(object: DeepPartial<FileItem>): FileItem {
    const message = { ...baseFileItem } as FileItem;
    if (object.mime !== undefined && object.mime !== null) {
      message.mime = MIME.fromPartial(object.mime);
    } else {
      message.mime = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    } else {
      message.path = "";
    }
    if (object.size !== undefined && object.size !== null) {
      message.size = object.size;
    } else {
      message.size = 0;
    }
    if (object.thumbnail !== undefined && object.thumbnail !== null) {
      message.thumbnail = Thumbnail.fromPartial(object.thumbnail);
    } else {
      message.thumbnail = undefined;
    }
    if (object.lastModified !== undefined && object.lastModified !== null) {
      message.lastModified = object.lastModified;
    } else {
      message.lastModified = 0;
    }
    return message;
  },
};

const baseMessageItem: object = { subject: "", body: "", createdAt: 0 };

export const MessageItem = {
  encode(
    message: MessageItem,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mime !== undefined) {
      MIME.encode(message.mime, writer.uint32(10).fork()).ldelim();
    }
    if (message.subject !== "") {
      writer.uint32(18).string(message.subject);
    }
    if (message.body !== "") {
      writer.uint32(26).string(message.body);
    }
    if (message.createdAt !== 0) {
      writer.uint32(32).int64(message.createdAt);
    }
    for (const v of message.attachments) {
      FileItem.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMessageItem } as MessageItem;
    message.attachments = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mime = MIME.decode(reader, reader.uint32());
          break;
        case 2:
          message.subject = reader.string();
          break;
        case 3:
          message.body = reader.string();
          break;
        case 4:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.attachments.push(FileItem.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageItem {
    const message = { ...baseMessageItem } as MessageItem;
    message.attachments = [];
    if (object.mime !== undefined && object.mime !== null) {
      message.mime = MIME.fromJSON(object.mime);
    } else {
      message.mime = undefined;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = String(object.subject);
    } else {
      message.subject = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body);
    } else {
      message.body = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.attachments !== undefined && object.attachments !== null) {
      for (const e of object.attachments) {
        message.attachments.push(FileItem.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MessageItem): unknown {
    const obj: any = {};
    message.mime !== undefined &&
      (obj.mime = message.mime ? MIME.toJSON(message.mime) : undefined);
    message.subject !== undefined && (obj.subject = message.subject);
    message.body !== undefined && (obj.body = message.body);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) =>
        e ? FileItem.toJSON(e) : undefined
      );
    } else {
      obj.attachments = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MessageItem>): MessageItem {
    const message = { ...baseMessageItem } as MessageItem;
    message.attachments = [];
    if (object.mime !== undefined && object.mime !== null) {
      message.mime = MIME.fromPartial(object.mime);
    } else {
      message.mime = undefined;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = object.subject;
    } else {
      message.subject = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.attachments !== undefined && object.attachments !== null) {
      for (const e of object.attachments) {
        message.attachments.push(FileItem.fromPartial(e));
      }
    }
    return message;
  },
};

const baseUrlItem: object = {
  link: "",
  title: "",
  site: "",
  siteName: "",
  description: "",
};

export const UrlItem = {
  encode(
    message: UrlItem,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mime !== undefined) {
      MIME.encode(message.mime, writer.uint32(10).fork()).ldelim();
    }
    if (message.link !== "") {
      writer.uint32(18).string(message.link);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.site !== "") {
      writer.uint32(34).string(message.site);
    }
    if (message.siteName !== "") {
      writer.uint32(42).string(message.siteName);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.openGraph !== undefined) {
      OpenGraph.encode(message.openGraph, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UrlItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUrlItem } as UrlItem;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mime = MIME.decode(reader, reader.uint32());
          break;
        case 2:
          message.link = reader.string();
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.site = reader.string();
          break;
        case 5:
          message.siteName = reader.string();
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          message.openGraph = OpenGraph.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UrlItem {
    const message = { ...baseUrlItem } as UrlItem;
    if (object.mime !== undefined && object.mime !== null) {
      message.mime = MIME.fromJSON(object.mime);
    } else {
      message.mime = undefined;
    }
    if (object.link !== undefined && object.link !== null) {
      message.link = String(object.link);
    } else {
      message.link = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.site !== undefined && object.site !== null) {
      message.site = String(object.site);
    } else {
      message.site = "";
    }
    if (object.siteName !== undefined && object.siteName !== null) {
      message.siteName = String(object.siteName);
    } else {
      message.siteName = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.openGraph !== undefined && object.openGraph !== null) {
      message.openGraph = OpenGraph.fromJSON(object.openGraph);
    } else {
      message.openGraph = undefined;
    }
    return message;
  },

  toJSON(message: UrlItem): unknown {
    const obj: any = {};
    message.mime !== undefined &&
      (obj.mime = message.mime ? MIME.toJSON(message.mime) : undefined);
    message.link !== undefined && (obj.link = message.link);
    message.title !== undefined && (obj.title = message.title);
    message.site !== undefined && (obj.site = message.site);
    message.siteName !== undefined && (obj.siteName = message.siteName);
    message.description !== undefined &&
      (obj.description = message.description);
    message.openGraph !== undefined &&
      (obj.openGraph = message.openGraph
        ? OpenGraph.toJSON(message.openGraph)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UrlItem>): UrlItem {
    const message = { ...baseUrlItem } as UrlItem;
    if (object.mime !== undefined && object.mime !== null) {
      message.mime = MIME.fromPartial(object.mime);
    } else {
      message.mime = undefined;
    }
    if (object.link !== undefined && object.link !== null) {
      message.link = object.link;
    } else {
      message.link = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.site !== undefined && object.site !== null) {
      message.site = object.site;
    } else {
      message.site = "";
    }
    if (object.siteName !== undefined && object.siteName !== null) {
      message.siteName = object.siteName;
    } else {
      message.siteName = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.openGraph !== undefined && object.openGraph !== null) {
      message.openGraph = OpenGraph.fromPartial(object.openGraph);
    } else {
      message.openGraph = undefined;
    }
    return message;
  },
};

const baseOpenGraph: object = {};

export const OpenGraph = {
  encode(
    message: OpenGraph,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.primary !== undefined) {
      OpenGraph_Primary.encode(
        message.primary,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.images) {
      OpenGraph_Image.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.videos) {
      OpenGraph_Video.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.audios) {
      OpenGraph_Audio.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.twitter !== undefined) {
      OpenGraph_Twitter.encode(
        message.twitter,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenGraph {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOpenGraph } as OpenGraph;
    message.images = [];
    message.videos = [];
    message.audios = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.primary = OpenGraph_Primary.decode(reader, reader.uint32());
          break;
        case 2:
          message.images.push(OpenGraph_Image.decode(reader, reader.uint32()));
          break;
        case 3:
          message.videos.push(OpenGraph_Video.decode(reader, reader.uint32()));
          break;
        case 4:
          message.audios.push(OpenGraph_Audio.decode(reader, reader.uint32()));
          break;
        case 5:
          message.twitter = OpenGraph_Twitter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenGraph {
    const message = { ...baseOpenGraph } as OpenGraph;
    message.images = [];
    message.videos = [];
    message.audios = [];
    if (object.primary !== undefined && object.primary !== null) {
      message.primary = OpenGraph_Primary.fromJSON(object.primary);
    } else {
      message.primary = undefined;
    }
    if (object.images !== undefined && object.images !== null) {
      for (const e of object.images) {
        message.images.push(OpenGraph_Image.fromJSON(e));
      }
    }
    if (object.videos !== undefined && object.videos !== null) {
      for (const e of object.videos) {
        message.videos.push(OpenGraph_Video.fromJSON(e));
      }
    }
    if (object.audios !== undefined && object.audios !== null) {
      for (const e of object.audios) {
        message.audios.push(OpenGraph_Audio.fromJSON(e));
      }
    }
    if (object.twitter !== undefined && object.twitter !== null) {
      message.twitter = OpenGraph_Twitter.fromJSON(object.twitter);
    } else {
      message.twitter = undefined;
    }
    return message;
  },

  toJSON(message: OpenGraph): unknown {
    const obj: any = {};
    message.primary !== undefined &&
      (obj.primary = message.primary
        ? OpenGraph_Primary.toJSON(message.primary)
        : undefined);
    if (message.images) {
      obj.images = message.images.map((e) =>
        e ? OpenGraph_Image.toJSON(e) : undefined
      );
    } else {
      obj.images = [];
    }
    if (message.videos) {
      obj.videos = message.videos.map((e) =>
        e ? OpenGraph_Video.toJSON(e) : undefined
      );
    } else {
      obj.videos = [];
    }
    if (message.audios) {
      obj.audios = message.audios.map((e) =>
        e ? OpenGraph_Audio.toJSON(e) : undefined
      );
    } else {
      obj.audios = [];
    }
    message.twitter !== undefined &&
      (obj.twitter = message.twitter
        ? OpenGraph_Twitter.toJSON(message.twitter)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<OpenGraph>): OpenGraph {
    const message = { ...baseOpenGraph } as OpenGraph;
    message.images = [];
    message.videos = [];
    message.audios = [];
    if (object.primary !== undefined && object.primary !== null) {
      message.primary = OpenGraph_Primary.fromPartial(object.primary);
    } else {
      message.primary = undefined;
    }
    if (object.images !== undefined && object.images !== null) {
      for (const e of object.images) {
        message.images.push(OpenGraph_Image.fromPartial(e));
      }
    }
    if (object.videos !== undefined && object.videos !== null) {
      for (const e of object.videos) {
        message.videos.push(OpenGraph_Video.fromPartial(e));
      }
    }
    if (object.audios !== undefined && object.audios !== null) {
      for (const e of object.audios) {
        message.audios.push(OpenGraph_Audio.fromPartial(e));
      }
    }
    if (object.twitter !== undefined && object.twitter !== null) {
      message.twitter = OpenGraph_Twitter.fromPartial(object.twitter);
    } else {
      message.twitter = undefined;
    }
    return message;
  },
};

const baseOpenGraph_Primary: object = { type: OpenGraph_Type.IMAGE };

export const OpenGraph_Primary = {
  encode(
    message: OpenGraph_Primary,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== OpenGraph_Type.IMAGE) {
      writer.uint32(8).int32(openGraph_TypeToNumber(message.type));
    }
    if (message.image !== undefined) {
      OpenGraph_Image.encode(message.image, writer.uint32(18).fork()).ldelim();
    }
    if (message.video !== undefined) {
      OpenGraph_Video.encode(message.video, writer.uint32(26).fork()).ldelim();
    }
    if (message.audio !== undefined) {
      OpenGraph_Audio.encode(message.audio, writer.uint32(34).fork()).ldelim();
    }
    if (message.twitter !== undefined) {
      OpenGraph_Twitter.encode(
        message.twitter,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenGraph_Primary {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOpenGraph_Primary } as OpenGraph_Primary;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = openGraph_TypeFromJSON(reader.int32());
          break;
        case 2:
          message.image = OpenGraph_Image.decode(reader, reader.uint32());
          break;
        case 3:
          message.video = OpenGraph_Video.decode(reader, reader.uint32());
          break;
        case 4:
          message.audio = OpenGraph_Audio.decode(reader, reader.uint32());
          break;
        case 5:
          message.twitter = OpenGraph_Twitter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenGraph_Primary {
    const message = { ...baseOpenGraph_Primary } as OpenGraph_Primary;
    if (object.type !== undefined && object.type !== null) {
      message.type = openGraph_TypeFromJSON(object.type);
    } else {
      message.type = OpenGraph_Type.IMAGE;
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = OpenGraph_Image.fromJSON(object.image);
    } else {
      message.image = undefined;
    }
    if (object.video !== undefined && object.video !== null) {
      message.video = OpenGraph_Video.fromJSON(object.video);
    } else {
      message.video = undefined;
    }
    if (object.audio !== undefined && object.audio !== null) {
      message.audio = OpenGraph_Audio.fromJSON(object.audio);
    } else {
      message.audio = undefined;
    }
    if (object.twitter !== undefined && object.twitter !== null) {
      message.twitter = OpenGraph_Twitter.fromJSON(object.twitter);
    } else {
      message.twitter = undefined;
    }
    return message;
  },

  toJSON(message: OpenGraph_Primary): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = openGraph_TypeToJSON(message.type));
    message.image !== undefined &&
      (obj.image = message.image
        ? OpenGraph_Image.toJSON(message.image)
        : undefined);
    message.video !== undefined &&
      (obj.video = message.video
        ? OpenGraph_Video.toJSON(message.video)
        : undefined);
    message.audio !== undefined &&
      (obj.audio = message.audio
        ? OpenGraph_Audio.toJSON(message.audio)
        : undefined);
    message.twitter !== undefined &&
      (obj.twitter = message.twitter
        ? OpenGraph_Twitter.toJSON(message.twitter)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<OpenGraph_Primary>): OpenGraph_Primary {
    const message = { ...baseOpenGraph_Primary } as OpenGraph_Primary;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = OpenGraph_Type.IMAGE;
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = OpenGraph_Image.fromPartial(object.image);
    } else {
      message.image = undefined;
    }
    if (object.video !== undefined && object.video !== null) {
      message.video = OpenGraph_Video.fromPartial(object.video);
    } else {
      message.video = undefined;
    }
    if (object.audio !== undefined && object.audio !== null) {
      message.audio = OpenGraph_Audio.fromPartial(object.audio);
    } else {
      message.audio = undefined;
    }
    if (object.twitter !== undefined && object.twitter !== null) {
      message.twitter = OpenGraph_Twitter.fromPartial(object.twitter);
    } else {
      message.twitter = undefined;
    }
    return message;
  },
};

const baseOpenGraph_Image: object = {
  url: "",
  secureUrl: "",
  width: 0,
  height: 0,
  type: "",
};

export const OpenGraph_Image = {
  encode(
    message: OpenGraph_Image,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.secureUrl !== "") {
      writer.uint32(18).string(message.secureUrl);
    }
    if (message.width !== 0) {
      writer.uint32(24).int32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(32).int32(message.height);
    }
    if (message.type !== "") {
      writer.uint32(42).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenGraph_Image {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOpenGraph_Image } as OpenGraph_Image;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        case 2:
          message.secureUrl = reader.string();
          break;
        case 3:
          message.width = reader.int32();
          break;
        case 4:
          message.height = reader.int32();
          break;
        case 5:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenGraph_Image {
    const message = { ...baseOpenGraph_Image } as OpenGraph_Image;
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.secureUrl !== undefined && object.secureUrl !== null) {
      message.secureUrl = String(object.secureUrl);
    } else {
      message.secureUrl = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = Number(object.width);
    } else {
      message.width = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    return message;
  },

  toJSON(message: OpenGraph_Image): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.secureUrl !== undefined && (obj.secureUrl = message.secureUrl);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: DeepPartial<OpenGraph_Image>): OpenGraph_Image {
    const message = { ...baseOpenGraph_Image } as OpenGraph_Image;
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.secureUrl !== undefined && object.secureUrl !== null) {
      message.secureUrl = object.secureUrl;
    } else {
      message.secureUrl = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = object.width;
    } else {
      message.width = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    return message;
  },
};

const baseOpenGraph_Video: object = {
  url: "",
  secureUrl: "",
  width: 0,
  height: 0,
  type: "",
};

export const OpenGraph_Video = {
  encode(
    message: OpenGraph_Video,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.secureUrl !== "") {
      writer.uint32(18).string(message.secureUrl);
    }
    if (message.width !== 0) {
      writer.uint32(24).int32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(32).int32(message.height);
    }
    if (message.type !== "") {
      writer.uint32(42).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenGraph_Video {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOpenGraph_Video } as OpenGraph_Video;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        case 2:
          message.secureUrl = reader.string();
          break;
        case 3:
          message.width = reader.int32();
          break;
        case 4:
          message.height = reader.int32();
          break;
        case 5:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenGraph_Video {
    const message = { ...baseOpenGraph_Video } as OpenGraph_Video;
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.secureUrl !== undefined && object.secureUrl !== null) {
      message.secureUrl = String(object.secureUrl);
    } else {
      message.secureUrl = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = Number(object.width);
    } else {
      message.width = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    return message;
  },

  toJSON(message: OpenGraph_Video): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.secureUrl !== undefined && (obj.secureUrl = message.secureUrl);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: DeepPartial<OpenGraph_Video>): OpenGraph_Video {
    const message = { ...baseOpenGraph_Video } as OpenGraph_Video;
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.secureUrl !== undefined && object.secureUrl !== null) {
      message.secureUrl = object.secureUrl;
    } else {
      message.secureUrl = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = object.width;
    } else {
      message.width = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    return message;
  },
};

const baseOpenGraph_Audio: object = { url: "", secureUrl: "", type: "" };

export const OpenGraph_Audio = {
  encode(
    message: OpenGraph_Audio,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.secureUrl !== "") {
      writer.uint32(18).string(message.secureUrl);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenGraph_Audio {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOpenGraph_Audio } as OpenGraph_Audio;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        case 2:
          message.secureUrl = reader.string();
          break;
        case 3:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenGraph_Audio {
    const message = { ...baseOpenGraph_Audio } as OpenGraph_Audio;
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.secureUrl !== undefined && object.secureUrl !== null) {
      message.secureUrl = String(object.secureUrl);
    } else {
      message.secureUrl = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    return message;
  },

  toJSON(message: OpenGraph_Audio): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.secureUrl !== undefined && (obj.secureUrl = message.secureUrl);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: DeepPartial<OpenGraph_Audio>): OpenGraph_Audio {
    const message = { ...baseOpenGraph_Audio } as OpenGraph_Audio;
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.secureUrl !== undefined && object.secureUrl !== null) {
      message.secureUrl = object.secureUrl;
    } else {
      message.secureUrl = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    return message;
  },
};

const baseOpenGraph_Twitter: object = {
  card: "",
  site: "",
  siteId: "",
  creator: "",
  creatorId: "",
  description: "",
  title: "",
  image: "",
  imageAlt: "",
  url: "",
};

export const OpenGraph_Twitter = {
  encode(
    message: OpenGraph_Twitter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.card !== "") {
      writer.uint32(10).string(message.card);
    }
    if (message.site !== "") {
      writer.uint32(18).string(message.site);
    }
    if (message.siteId !== "") {
      writer.uint32(26).string(message.siteId);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    if (message.creatorId !== "") {
      writer.uint32(42).string(message.creatorId);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.title !== "") {
      writer.uint32(58).string(message.title);
    }
    if (message.image !== "") {
      writer.uint32(66).string(message.image);
    }
    if (message.imageAlt !== "") {
      writer.uint32(74).string(message.imageAlt);
    }
    if (message.url !== "") {
      writer.uint32(82).string(message.url);
    }
    if (message.player !== undefined) {
      OpenGraph_Twitter_Player.encode(
        message.player,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.iphone !== undefined) {
      OpenGraph_Twitter_IPhone.encode(
        message.iphone,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.ipad !== undefined) {
      OpenGraph_Twitter_IPad.encode(
        message.ipad,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.googlePlay !== undefined) {
      OpenGraph_Twitter_GooglePlay.encode(
        message.googlePlay,
        writer.uint32(114).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenGraph_Twitter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOpenGraph_Twitter } as OpenGraph_Twitter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.card = reader.string();
          break;
        case 2:
          message.site = reader.string();
          break;
        case 3:
          message.siteId = reader.string();
          break;
        case 4:
          message.creator = reader.string();
          break;
        case 5:
          message.creatorId = reader.string();
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          message.title = reader.string();
          break;
        case 8:
          message.image = reader.string();
          break;
        case 9:
          message.imageAlt = reader.string();
          break;
        case 10:
          message.url = reader.string();
          break;
        case 11:
          message.player = OpenGraph_Twitter_Player.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.iphone = OpenGraph_Twitter_IPhone.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.ipad = OpenGraph_Twitter_IPad.decode(reader, reader.uint32());
          break;
        case 14:
          message.googlePlay = OpenGraph_Twitter_GooglePlay.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenGraph_Twitter {
    const message = { ...baseOpenGraph_Twitter } as OpenGraph_Twitter;
    if (object.card !== undefined && object.card !== null) {
      message.card = String(object.card);
    } else {
      message.card = "";
    }
    if (object.site !== undefined && object.site !== null) {
      message.site = String(object.site);
    } else {
      message.site = "";
    }
    if (object.siteId !== undefined && object.siteId !== null) {
      message.siteId = String(object.siteId);
    } else {
      message.siteId = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.creatorId !== undefined && object.creatorId !== null) {
      message.creatorId = String(object.creatorId);
    } else {
      message.creatorId = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = String(object.image);
    } else {
      message.image = "";
    }
    if (object.imageAlt !== undefined && object.imageAlt !== null) {
      message.imageAlt = String(object.imageAlt);
    } else {
      message.imageAlt = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.player !== undefined && object.player !== null) {
      message.player = OpenGraph_Twitter_Player.fromJSON(object.player);
    } else {
      message.player = undefined;
    }
    if (object.iphone !== undefined && object.iphone !== null) {
      message.iphone = OpenGraph_Twitter_IPhone.fromJSON(object.iphone);
    } else {
      message.iphone = undefined;
    }
    if (object.ipad !== undefined && object.ipad !== null) {
      message.ipad = OpenGraph_Twitter_IPad.fromJSON(object.ipad);
    } else {
      message.ipad = undefined;
    }
    if (object.googlePlay !== undefined && object.googlePlay !== null) {
      message.googlePlay = OpenGraph_Twitter_GooglePlay.fromJSON(
        object.googlePlay
      );
    } else {
      message.googlePlay = undefined;
    }
    return message;
  },

  toJSON(message: OpenGraph_Twitter): unknown {
    const obj: any = {};
    message.card !== undefined && (obj.card = message.card);
    message.site !== undefined && (obj.site = message.site);
    message.siteId !== undefined && (obj.siteId = message.siteId);
    message.creator !== undefined && (obj.creator = message.creator);
    message.creatorId !== undefined && (obj.creatorId = message.creatorId);
    message.description !== undefined &&
      (obj.description = message.description);
    message.title !== undefined && (obj.title = message.title);
    message.image !== undefined && (obj.image = message.image);
    message.imageAlt !== undefined && (obj.imageAlt = message.imageAlt);
    message.url !== undefined && (obj.url = message.url);
    message.player !== undefined &&
      (obj.player = message.player
        ? OpenGraph_Twitter_Player.toJSON(message.player)
        : undefined);
    message.iphone !== undefined &&
      (obj.iphone = message.iphone
        ? OpenGraph_Twitter_IPhone.toJSON(message.iphone)
        : undefined);
    message.ipad !== undefined &&
      (obj.ipad = message.ipad
        ? OpenGraph_Twitter_IPad.toJSON(message.ipad)
        : undefined);
    message.googlePlay !== undefined &&
      (obj.googlePlay = message.googlePlay
        ? OpenGraph_Twitter_GooglePlay.toJSON(message.googlePlay)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<OpenGraph_Twitter>): OpenGraph_Twitter {
    const message = { ...baseOpenGraph_Twitter } as OpenGraph_Twitter;
    if (object.card !== undefined && object.card !== null) {
      message.card = object.card;
    } else {
      message.card = "";
    }
    if (object.site !== undefined && object.site !== null) {
      message.site = object.site;
    } else {
      message.site = "";
    }
    if (object.siteId !== undefined && object.siteId !== null) {
      message.siteId = object.siteId;
    } else {
      message.siteId = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.creatorId !== undefined && object.creatorId !== null) {
      message.creatorId = object.creatorId;
    } else {
      message.creatorId = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = object.image;
    } else {
      message.image = "";
    }
    if (object.imageAlt !== undefined && object.imageAlt !== null) {
      message.imageAlt = object.imageAlt;
    } else {
      message.imageAlt = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.player !== undefined && object.player !== null) {
      message.player = OpenGraph_Twitter_Player.fromPartial(object.player);
    } else {
      message.player = undefined;
    }
    if (object.iphone !== undefined && object.iphone !== null) {
      message.iphone = OpenGraph_Twitter_IPhone.fromPartial(object.iphone);
    } else {
      message.iphone = undefined;
    }
    if (object.ipad !== undefined && object.ipad !== null) {
      message.ipad = OpenGraph_Twitter_IPad.fromPartial(object.ipad);
    } else {
      message.ipad = undefined;
    }
    if (object.googlePlay !== undefined && object.googlePlay !== null) {
      message.googlePlay = OpenGraph_Twitter_GooglePlay.fromPartial(
        object.googlePlay
      );
    } else {
      message.googlePlay = undefined;
    }
    return message;
  },
};

const baseOpenGraph_Twitter_Player: object = {
  url: "",
  width: 0,
  height: 0,
  stream: "",
};

export const OpenGraph_Twitter_Player = {
  encode(
    message: OpenGraph_Twitter_Player,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.width !== 0) {
      writer.uint32(16).int32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(24).int32(message.height);
    }
    if (message.stream !== "") {
      writer.uint32(34).string(message.stream);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OpenGraph_Twitter_Player {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseOpenGraph_Twitter_Player,
    } as OpenGraph_Twitter_Player;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        case 2:
          message.width = reader.int32();
          break;
        case 3:
          message.height = reader.int32();
          break;
        case 4:
          message.stream = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenGraph_Twitter_Player {
    const message = {
      ...baseOpenGraph_Twitter_Player,
    } as OpenGraph_Twitter_Player;
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = Number(object.width);
    } else {
      message.width = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.stream !== undefined && object.stream !== null) {
      message.stream = String(object.stream);
    } else {
      message.stream = "";
    }
    return message;
  },

  toJSON(message: OpenGraph_Twitter_Player): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.stream !== undefined && (obj.stream = message.stream);
    return obj;
  },

  fromPartial(
    object: DeepPartial<OpenGraph_Twitter_Player>
  ): OpenGraph_Twitter_Player {
    const message = {
      ...baseOpenGraph_Twitter_Player,
    } as OpenGraph_Twitter_Player;
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = object.width;
    } else {
      message.width = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.stream !== undefined && object.stream !== null) {
      message.stream = object.stream;
    } else {
      message.stream = "";
    }
    return message;
  },
};

const baseOpenGraph_Twitter_IPhone: object = { name: "", id: "", url: "" };

export const OpenGraph_Twitter_IPhone = {
  encode(
    message: OpenGraph_Twitter_IPhone,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.url !== "") {
      writer.uint32(26).string(message.url);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OpenGraph_Twitter_IPhone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseOpenGraph_Twitter_IPhone,
    } as OpenGraph_Twitter_IPhone;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenGraph_Twitter_IPhone {
    const message = {
      ...baseOpenGraph_Twitter_IPhone,
    } as OpenGraph_Twitter_IPhone;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    return message;
  },

  toJSON(message: OpenGraph_Twitter_IPhone): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.id !== undefined && (obj.id = message.id);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial(
    object: DeepPartial<OpenGraph_Twitter_IPhone>
  ): OpenGraph_Twitter_IPhone {
    const message = {
      ...baseOpenGraph_Twitter_IPhone,
    } as OpenGraph_Twitter_IPhone;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    return message;
  },
};

const baseOpenGraph_Twitter_IPad: object = { name: "", id: "", url: "" };

export const OpenGraph_Twitter_IPad = {
  encode(
    message: OpenGraph_Twitter_IPad,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.url !== "") {
      writer.uint32(26).string(message.url);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OpenGraph_Twitter_IPad {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOpenGraph_Twitter_IPad } as OpenGraph_Twitter_IPad;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenGraph_Twitter_IPad {
    const message = { ...baseOpenGraph_Twitter_IPad } as OpenGraph_Twitter_IPad;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    return message;
  },

  toJSON(message: OpenGraph_Twitter_IPad): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.id !== undefined && (obj.id = message.id);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial(
    object: DeepPartial<OpenGraph_Twitter_IPad>
  ): OpenGraph_Twitter_IPad {
    const message = { ...baseOpenGraph_Twitter_IPad } as OpenGraph_Twitter_IPad;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    return message;
  },
};

const baseOpenGraph_Twitter_GooglePlay: object = { name: "", id: "", url: "" };

export const OpenGraph_Twitter_GooglePlay = {
  encode(
    message: OpenGraph_Twitter_GooglePlay,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.url !== "") {
      writer.uint32(26).string(message.url);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OpenGraph_Twitter_GooglePlay {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseOpenGraph_Twitter_GooglePlay,
    } as OpenGraph_Twitter_GooglePlay;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenGraph_Twitter_GooglePlay {
    const message = {
      ...baseOpenGraph_Twitter_GooglePlay,
    } as OpenGraph_Twitter_GooglePlay;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    return message;
  },

  toJSON(message: OpenGraph_Twitter_GooglePlay): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.id !== undefined && (obj.id = message.id);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial(
    object: DeepPartial<OpenGraph_Twitter_GooglePlay>
  ): OpenGraph_Twitter_GooglePlay {
    const message = {
      ...baseOpenGraph_Twitter_GooglePlay,
    } as OpenGraph_Twitter_GooglePlay;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    return message;
  },
};

const baseThumbnail: object = {};

export const Thumbnail = {
  encode(
    message: Thumbnail,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.buffer.length !== 0) {
      writer.uint32(10).bytes(message.buffer);
    }
    if (message.mime !== undefined) {
      MIME.encode(message.mime, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Thumbnail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseThumbnail } as Thumbnail;
    message.buffer = Buffer.alloc(0);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buffer = reader.bytes() as Buffer;
          break;
        case 2:
          message.mime = MIME.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Thumbnail {
    const message = { ...baseThumbnail } as Thumbnail;
    message.buffer = Buffer.alloc(0);
    if (object.buffer !== undefined && object.buffer !== null) {
      message.buffer = Buffer.from(bytesFromBase64(object.buffer));
    }
    if (object.mime !== undefined && object.mime !== null) {
      message.mime = MIME.fromJSON(object.mime);
    } else {
      message.mime = undefined;
    }
    return message;
  },

  toJSON(message: Thumbnail): unknown {
    const obj: any = {};
    message.buffer !== undefined &&
      (obj.buffer = base64FromBytes(
        message.buffer !== undefined ? message.buffer : Buffer.alloc(0)
      ));
    message.mime !== undefined &&
      (obj.mime = message.mime ? MIME.toJSON(message.mime) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Thumbnail>): Thumbnail {
    const message = { ...baseThumbnail } as Thumbnail;
    if (object.buffer !== undefined && object.buffer !== null) {
      message.buffer = object.buffer;
    } else {
      message.buffer = Buffer.alloc(0);
    }
    if (object.mime !== undefined && object.mime !== null) {
      message.mime = MIME.fromPartial(object.mime);
    } else {
      message.mime = undefined;
    }
    return message;
  },
};

const basePayload: object = { size: 0, createdAt: 0 };

export const Payload = {
  encode(
    message: Payload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      Payload_Item.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.owner !== undefined) {
      Profile.encode(message.owner, writer.uint32(18).fork()).ldelim();
    }
    if (message.size !== 0) {
      writer.uint32(24).int64(message.size);
    }
    if (message.createdAt !== 0) {
      writer.uint32(32).int64(message.createdAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Payload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePayload } as Payload;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Payload_Item.decode(reader, reader.uint32()));
          break;
        case 2:
          message.owner = Profile.decode(reader, reader.uint32());
          break;
        case 3:
          message.size = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Payload {
    const message = { ...basePayload } as Payload;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Payload_Item.fromJSON(e));
      }
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = Profile.fromJSON(object.owner);
    } else {
      message.owner = undefined;
    }
    if (object.size !== undefined && object.size !== null) {
      message.size = Number(object.size);
    } else {
      message.size = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    return message;
  },

  toJSON(message: Payload): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? Payload_Item.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.owner !== undefined &&
      (obj.owner = message.owner ? Profile.toJSON(message.owner) : undefined);
    message.size !== undefined && (obj.size = message.size);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    return obj;
  },

  fromPartial(object: DeepPartial<Payload>): Payload {
    const message = { ...basePayload } as Payload;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Payload_Item.fromPartial(e));
      }
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = Profile.fromPartial(object.owner);
    } else {
      message.owner = undefined;
    }
    if (object.size !== undefined && object.size !== null) {
      message.size = object.size;
    } else {
      message.size = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    return message;
  },
};

const basePayload_Item: object = { size: 0 };

export const Payload_Item = {
  encode(
    message: Payload_Item,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mime !== undefined) {
      MIME.encode(message.mime, writer.uint32(10).fork()).ldelim();
    }
    if (message.size !== 0) {
      writer.uint32(16).int64(message.size);
    }
    if (message.file !== undefined) {
      FileItem.encode(message.file, writer.uint32(26).fork()).ldelim();
    }
    if (message.url !== undefined) {
      UrlItem.encode(message.url, writer.uint32(34).fork()).ldelim();
    }
    if (message.message !== undefined) {
      MessageItem.encode(message.message, writer.uint32(42).fork()).ldelim();
    }
    if (message.thumbnail !== undefined) {
      Thumbnail.encode(message.thumbnail, writer.uint32(50).fork()).ldelim();
    }
    if (message.openGraph !== undefined) {
      OpenGraph_Primary.encode(
        message.openGraph,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Payload_Item {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePayload_Item } as Payload_Item;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mime = MIME.decode(reader, reader.uint32());
          break;
        case 2:
          message.size = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.file = FileItem.decode(reader, reader.uint32());
          break;
        case 4:
          message.url = UrlItem.decode(reader, reader.uint32());
          break;
        case 5:
          message.message = MessageItem.decode(reader, reader.uint32());
          break;
        case 6:
          message.thumbnail = Thumbnail.decode(reader, reader.uint32());
          break;
        case 7:
          message.openGraph = OpenGraph_Primary.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Payload_Item {
    const message = { ...basePayload_Item } as Payload_Item;
    if (object.mime !== undefined && object.mime !== null) {
      message.mime = MIME.fromJSON(object.mime);
    } else {
      message.mime = undefined;
    }
    if (object.size !== undefined && object.size !== null) {
      message.size = Number(object.size);
    } else {
      message.size = 0;
    }
    if (object.file !== undefined && object.file !== null) {
      message.file = FileItem.fromJSON(object.file);
    } else {
      message.file = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = UrlItem.fromJSON(object.url);
    } else {
      message.url = undefined;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = MessageItem.fromJSON(object.message);
    } else {
      message.message = undefined;
    }
    if (object.thumbnail !== undefined && object.thumbnail !== null) {
      message.thumbnail = Thumbnail.fromJSON(object.thumbnail);
    } else {
      message.thumbnail = undefined;
    }
    if (object.openGraph !== undefined && object.openGraph !== null) {
      message.openGraph = OpenGraph_Primary.fromJSON(object.openGraph);
    } else {
      message.openGraph = undefined;
    }
    return message;
  },

  toJSON(message: Payload_Item): unknown {
    const obj: any = {};
    message.mime !== undefined &&
      (obj.mime = message.mime ? MIME.toJSON(message.mime) : undefined);
    message.size !== undefined && (obj.size = message.size);
    message.file !== undefined &&
      (obj.file = message.file ? FileItem.toJSON(message.file) : undefined);
    message.url !== undefined &&
      (obj.url = message.url ? UrlItem.toJSON(message.url) : undefined);
    message.message !== undefined &&
      (obj.message = message.message
        ? MessageItem.toJSON(message.message)
        : undefined);
    message.thumbnail !== undefined &&
      (obj.thumbnail = message.thumbnail
        ? Thumbnail.toJSON(message.thumbnail)
        : undefined);
    message.openGraph !== undefined &&
      (obj.openGraph = message.openGraph
        ? OpenGraph_Primary.toJSON(message.openGraph)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Payload_Item>): Payload_Item {
    const message = { ...basePayload_Item } as Payload_Item;
    if (object.mime !== undefined && object.mime !== null) {
      message.mime = MIME.fromPartial(object.mime);
    } else {
      message.mime = undefined;
    }
    if (object.size !== undefined && object.size !== null) {
      message.size = object.size;
    } else {
      message.size = 0;
    }
    if (object.file !== undefined && object.file !== null) {
      message.file = FileItem.fromPartial(object.file);
    } else {
      message.file = undefined;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = UrlItem.fromPartial(object.url);
    } else {
      message.url = undefined;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = MessageItem.fromPartial(object.message);
    } else {
      message.message = undefined;
    }
    if (object.thumbnail !== undefined && object.thumbnail !== null) {
      message.thumbnail = Thumbnail.fromPartial(object.thumbnail);
    } else {
      message.thumbnail = undefined;
    }
    if (object.openGraph !== undefined && object.openGraph !== null) {
      message.openGraph = OpenGraph_Primary.fromPartial(object.openGraph);
    } else {
      message.openGraph = undefined;
    }
    return message;
  },
};

const basePayloadList: object = { key: "", lastModified: 0 };

export const PayloadList = {
  encode(
    message: PayloadList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.payloads) {
      Payload.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    if (message.lastModified !== 0) {
      writer.uint32(24).int64(message.lastModified);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PayloadList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePayloadList } as PayloadList;
    message.payloads = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloads.push(Payload.decode(reader, reader.uint32()));
          break;
        case 2:
          message.key = reader.string();
          break;
        case 3:
          message.lastModified = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PayloadList {
    const message = { ...basePayloadList } as PayloadList;
    message.payloads = [];
    if (object.payloads !== undefined && object.payloads !== null) {
      for (const e of object.payloads) {
        message.payloads.push(Payload.fromJSON(e));
      }
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

  toJSON(message: PayloadList): unknown {
    const obj: any = {};
    if (message.payloads) {
      obj.payloads = message.payloads.map((e) =>
        e ? Payload.toJSON(e) : undefined
      );
    } else {
      obj.payloads = [];
    }
    message.key !== undefined && (obj.key = message.key);
    message.lastModified !== undefined &&
      (obj.lastModified = message.lastModified);
    return obj;
  },

  fromPartial(object: DeepPartial<PayloadList>): PayloadList {
    const message = { ...basePayloadList } as PayloadList;
    message.payloads = [];
    if (object.payloads !== undefined && object.payloads !== null) {
      for (const e of object.payloads) {
        message.payloads.push(Payload.fromPartial(e));
      }
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

const baseSupplyItem: object = { path: "" };

export const SupplyItem = {
  encode(
    message: SupplyItem,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.thumbnail !== undefined) {
      writer.uint32(18).bytes(message.thumbnail);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SupplyItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSupplyItem } as SupplyItem;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.thumbnail = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SupplyItem {
    const message = { ...baseSupplyItem } as SupplyItem;
    if (object.path !== undefined && object.path !== null) {
      message.path = String(object.path);
    } else {
      message.path = "";
    }
    if (object.thumbnail !== undefined && object.thumbnail !== null) {
      message.thumbnail = Buffer.from(bytesFromBase64(object.thumbnail));
    }
    return message;
  },

  toJSON(message: SupplyItem): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.thumbnail !== undefined &&
      (obj.thumbnail =
        message.thumbnail !== undefined
          ? base64FromBytes(message.thumbnail)
          : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SupplyItem>): SupplyItem {
    const message = { ...baseSupplyItem } as SupplyItem;
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    } else {
      message.path = "";
    }
    if (object.thumbnail !== undefined && object.thumbnail !== null) {
      message.thumbnail = object.thumbnail;
    } else {
      message.thumbnail = undefined;
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
