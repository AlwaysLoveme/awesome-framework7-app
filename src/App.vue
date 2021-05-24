<template>
  <f7-app v-bind="f7params">
    <f7-view
      main
      url="/"
      stackPages
      class="safe-areas"
      :iosPageLoadDelay="100"
      browserHistorySeparator="#"
      :browser-history="browserHistory"
    ></f7-view>
  </f7-app>
</template>

<script lang="ts">
import routes from "@/f7routes";
import { getDevice } from "@/f7config/app";
import { f7, f7ready } from "framework7-vue";
import capacitorApp from "@/f7config/capacitor";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const device = getDevice();
    const browserHistory = process.env.NODE_ENV === "development";

    const f7params = {
      name: "Framework7App", // App name
      theme: "ios", // Automatic theme detection ios/md
      // App routes
      routes,
      lazy: {
        // set lazy image default, should be a pic
        placeholder: "",
        sequential: true,
      },
      touch: {
        iosTouchRipple: true,
      },
      iosTranslucentBars: false,
      iosTranslucentModals: false,
      // Input settings
      input: {
        scrollIntoViewOnFocus: device.capacitor,
        scrollIntoViewCentered: device.capacitor,
      },
      // Capacitor Statusbar settings ---> only for native app
      statusbar: {
        iosOverlaysWebView: true,
        androidOverlaysWebView: true,
      },
      dialog: {
        // set default title for all dialog shortcuts
        title: "提示",
        // change default "OK" button text
        buttonOk: "确定",
        buttonCancel: "取消",
      },
    };

    const f7Ready = () => {
      // Init capacitor APIs (see f7config/capacitor.js)
      if (device.capacitor) {
        capacitorApp.init(f7);
      }
    };

    onMounted(() => {
      f7ready(f7Ready);
    });

    return {
      f7params,
      browserHistory,
    };
  },
});
</script>
