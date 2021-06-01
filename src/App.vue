<template>
  <f7-app v-bind="f7params">
    <f7-view
      main
      url="/"
      :stackPages="true"
      class="safe-areas"
      v-show="!qrscannerShow"
      :iosPageLoadDelay="100"
      browserHistorySeparator="#"
      :browser-history="browserHistory"
    ></f7-view>

    <qr-scanner v-model:opened="qrscannerShow"></qr-scanner>
  </f7-app>
</template>

<script lang="ts">
import routes from "@/f7routes";
import { getDevice } from "@/f7config/app";
import { f7, f7ready } from "framework7-vue";
import Emitter from "tiny-emitter/instance";
import capacitorApp from "@/f7config/capacitor";
import { defineComponent, onMounted, defineAsyncComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  components: {
    QrScanner: defineAsyncComponent(
      () => import("@/components/shared/QrScanner.vue")
    ),
  },
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
      f7.views.main.router.navigate("/tabs/", {
        clearPreviousHistory: true,
      });
      // Init capacitor APIs (see f7config/capacitor.js)
      if (device.capacitor) {
        capacitorApp.init(f7);
      }
    };

    const qrscannerShow = ref(false);
    const emitterQrscanner = (val: boolean) => (qrscannerShow.value = val);

    onMounted(() => {
      f7ready(f7Ready);
      Emitter.on("showScanner", emitterQrscanner);
    });

    return {
      f7params,
      qrscannerShow,
      browserHistory,
    };
  },
});
</script>
