import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.framework7.app",
  appName: "f7-Vue3",
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
  hideLogs: false,
  // server: {
  //   cleartext: true,
  //   url: "http://192.168.1.83:8080",
  // },
};

export default config;
