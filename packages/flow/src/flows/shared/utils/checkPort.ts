import { settingManager } from "../../..";

export default class PortManager {
  private currentPort?: number;
  constructor() {
    settingManager.emitter.on(
      "init",
      (settings) => (this.currentPort = settings.network.ports.startPort)
    );
  }
  getPort = async (starting?: number) => {
    if (starting) {
      let currentPort = starting;
      let isPortIsAvilable = false;
      while (!isPortIsAvilable) {
        isPortIsAvilable = await portIsAvilable(currentPort);
        if (!isPortIsAvilable) {
          currentPort++;
        }
      }
      return currentPort;
    } else if (this.currentPort) {
      let isPortIsAvilable = false;
      while (!isPortIsAvilable) {
        this.currentPort++;
        isPortIsAvilable = await portIsAvilable(this.currentPort);
      }
      return this.currentPort;
    }
  };
}

export const portIsAvilable = (port: number): Promise<boolean> => {
  return new Promise((resolve) => {
    const net = require("net");
    const server = net.createServer();

    server.once("error", function (err) {
      if (err.code === "EADDRINUSE") {
        resolve(false);
      }
    });

    server.once("listening", function () {
      server.close();
      resolve(true);
    });

    server.listen(port);
  });
};
