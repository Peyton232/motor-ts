// -- Imports --
import child from "child_process";
import fs from "fs";
import path from "path";
import { LogError } from "./util/logger";
import { EventEmitter } from "events";

class Binary extends EventEmitter {
  private binDir: string;
  private binPath: string;
  private binProcess: child.ChildProcess;
  private logPath: string;
  private assetsDir: string;

  constructor(assetsDir: string) {
    super();
    // Set Known Paths
    this.assetsDir = assetsDir;
    this.binDir = path.join(this.assetsDir, "bin", this.operatingSystem);
    this.logPath = path.join(this.assetsDir, "cache", "out.log");

    fs.readdir(this.binDir, (err, files) => {
      if (err) {
        LogError("Error reading binary at path.", err);
        this.emit("error", err);
        return;
      }
      this.binPath = path.join(this.binDir, files[0]);
      this.launch();
    });
  }

  /**
   * Launches Binary as Child Process from Resources
   */
  private launch() {
    // Launch Binary
    let outLog = fs.openSync(this.logPath, "a");
    let errLog = fs.openSync(this.logPath, "a");

    // Launch Binary
    this.binProcess = child.spawn(
      this.binPath,
      [
        "serve",
        "--debug",
        "--vars",
        "4oCcVEVYVElMRV9LRVk9Ym5zb3NiYmJidDRyZXJlN2Z2eHZpandnNzVhLFRFWFRJTEVfU0VDUkVUPWJnb3BwNnZzdHc2dWR2NWZkNGptcWR4ZGI1d2htMjRrNm9rZGRkb3ksTE9DQVRJT05fS0VZPTg3M2RiZTMyMmFlYTQ3Zjg5ZGNmNzI5ZGNjOGY2MGU4LE5CX0tFWT04OWQ5MWY0Y2M0MDMxMTA2MDU0ZmY3NzkxZGYzNzRiODQxMzViMTFlN2E2ZGU4ZjA1ZGJmNzVmM2E2NjdiYjllLE5CX1NFQ1JFVD1mMjcxM2RiYmMwOTZkYmQwODM1MmEyODE0ZGRlZGUyODdkYjNhM2E4NjYyOGNhMzY5Y2FhNGI0YjI1YTVmMjkwLFJPTExCQVJfUE9TVF9TRVJWRVJfSVRFTT04YjQwNDc2NTU1Mzc0MTZhOTVlNDE3YjliNmI3N2RkZOKAnQ==",
      ],
      {
        stdio: ["ignore", outLog, errLog],
      }
    );

    // Unreference from Memory
    this.binProcess.unref();
    this.emit("ready");
  }

  /**
   * Kills Active Binary with OS Signals
   *
   */
  kill() {
    // Kill Subprocess
    if (this.binProcess) {
      this.binProcess.kill();
    }
  }

  get operatingSystem(): string {
    return OS_MAPPING[process.platform] as string;
  }

  get architecture(): string {
    return ARCH_MAPPING[process.arch] as string;
  }
}


type ArchMapType = {
  [key: string]: string;
};

// Mapping from Node's `process.arch` to Golang's `$GOARCH`
const ARCH_MAPPING: ArchMapType = {
  ia32: "386",
  x64: "amd64",
  arm: "arm",
  arm64: "arm64",
};

type OSMapType = {
  [key: string]: string;
};

// Mapping between Node's `process.platform` to Golang's
const OS_MAPPING: OSMapType = {
  darwin: "darwin",
  linux: "linux",
  win32: "windows",
};


export default Binary;
