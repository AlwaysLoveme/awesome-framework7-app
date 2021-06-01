import { CapacitorConfig } from "@capacitor/cli";
const os = require("os");
/*
获取本机IP
*/
function getIPAdress() {
  let localIPAddress = "";
  const interfaces = os.networkInterfaces();
  for (const devName in interfaces) {
    const iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if (
        alias.family === "IPv4" &&
        alias.address !== "127.0.0.1" &&
        !alias.internal
      ) {
        localIPAddress = alias.address;
      }
    }
  }
  return localIPAddress;
}

const config: CapacitorConfig = {
  appId: "com.framework7.app",
  appName: "AwesomeFramework7APP",
  webDir: "dist",
  bundledWebRuntime: false,
  backgroundColor: "#FFFFFF",
  plugins: {
    Keyboard: {
      resize: "body",
    },
    SplashScreen: {
      launchShowDuration: 3000,
      autoHide: false,
      splashFullScreen: true,
      androidScaleType: "CENTER_CROP",
    },
  },
  loggingBehavior: "production",
  // server: {
  //   cleartext: true,
  //   url: `http://192.168.1.99:8080`,
  // },
};

export default config;
