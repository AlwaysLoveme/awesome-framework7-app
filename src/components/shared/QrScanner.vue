<template>
  <f7-popup
    :opened="opened"
    :backdrop="false"
    class="bg-transparent"
    @popup:opened="startScanner"
    @popup:close="stopScanner"
  >
    <f7-page :class="{ 'bg-transparent': active }">
      <f7-navbar title="扫码" class="bg-white">
        <f7-nav-right>
          <f7-icon
            @click="$emit('update:opened', false)"
            f7="xmark"
            size="20"
          ></f7-icon>
        </f7-nav-right>
      </f7-navbar>

      <div class="camera-lines">
        <div class="line-top"></div>
        <div class="line-right"></div>
        <div class="line-bottom"></div>
        <div class="line-left"></div>
      </div>
      <f7-row class="tools">
        <f7-col width="50" class="flex-center">
          <f7-button :icon-f7="lightIcon" @click="toggleLights"></f7-button>
        </f7-col>
        <f7-col width="50" class="flex-center">
          <f7-button
            icon-f7="camera_rotate_fill"
            @click="toggleCamera"
          ></f7-button>
        </f7-col>
      </f7-row>
    </f7-page>
  </f7-popup>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent } from "vue";
import { dialogModal, toast, showLoading, hideLoading } from "@/shared/f7api";

export default defineComponent({
  props: {
    f7router: Object,
    f7route: Object,
    opened: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:opened"],
  setup(props, { emit }) {
    const state = reactive({
      active: false,
      lightIcon: "lightbulb_slash_fill",
      toggleLight: false,
      previewCamera: false,
    });

    const scannerPrepare = () => {
      showLoading();
      (window as any).QRScanner.prepare(onDone);
      async function onDone(
        err: { code: number; _message: string },
        status: { authorized: boolean; denied: boolean }
      ) {
        if (err) {
          hideLoading();
          // here we can handle errors and clean up any loose ends.
          console.log(err);
          if (err.code === 1) {
            const res = await dialogModal({
              content: "请前往手机设置中，允许应用开启相机使用权限",
            });
            if (res) (window as any).QRScanner.openSettings();
            return;
          }
          toast(err._message);
        }
        if (status.authorized) {
          setTimeout(() => {
            hideLoading();
            state.active = true;
            (window as any).QRScanner.show();
            (window as any).QRScanner.scan(function (
              err: string,
              text: string
            ) {
              toast("扫描结果: " + text);
              (window as any).QRScanner.pausePreview();
              (window as any).QRScanner.cancelScan();
              emit("update:opened", false);
            });
          }, 0);
        } else if (status.denied) {
          hideLoading();
          const res = await dialogModal({
            content: "请前往手机设置中，允许应用开启相机使用权限",
          });
          if (res) (window as any).QRScanner.openSettings();
          // The video preview will remain black, and scanning is disabled. We can
          // try to ask the user to change their mind, but we'll have to send them
          // to their device settings with `QRScanner.openSettings()`.
        } else {
          hideLoading();
          // we didn't get permission, but we didn't get permanently denied. (On
          // Android, a denial isn't permanent unless the user checks the "Don't
          // ask again" box.) We can ask again at the next relevant opportunity.
        }
      }
    };

    const toggleLights = () => {
      state.toggleLight = !state.toggleLight;
      if (state.toggleLight) {
        state.lightIcon = "lightbulb_fill";
        (window as any).QRScanner && (window as any).QRScanner.enableLight();
      } else {
        state.lightIcon = "lightbulb_slash_fill";
        (window as any).QRScanner && (window as any).QRScanner.disableLight();
      }
    };
    const toggleCamera = () => {
      state.previewCamera = !state.previewCamera;
      if (state.previewCamera) {
        (window as any).QRScanner && (window as any).QRScanner.useFrontCamera();
      } else {
        (window as any).QRScanner && (window as any).QRScanner.useBackCamera();
      }
    };

    const startScanner = () => {
      document.addEventListener("deviceready", scannerPrepare, false);
    };
    const stopScanner = () => {
      state.active = false;
      emit("update:opened", false);
      (window as any).QRScanner && (window as any).QRScanner.destroy();
      document.removeEventListener("deviceready", scannerPrepare, false);
    };

    return {
      toggleCamera,
      toggleLights,
      startScanner,
      stopScanner,
      ...toRefs(state),
    };
  },
});
</script>

<style scoped lang="less">
.tools {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 9999;
  .button {
    width: 80px;
    height: 80px;
    background: #fff;
    border-radius: 50%;
    overflow: hidden;
  }
}
.camera-lines {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
  z-index: 9999;
  @keyframes height {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.3);
    }
  }
  .inner {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 110%;
    height: 5px;
    z-index: 89;
    background: deepskyblue;

    // background-image: repeating-linear-gradient(
    //     red 0%,
    //     red 0.1%,
    //     rgba(0, 0, 0, 0) 0.5%,
    //     rgba(0, 0, 0, 0) 7.1%
    //   ),
    //   repeating-linear-gradient(
    //     to right,
    //     red 0%,
    //     red 0.1%,
    //     rgba(0, 0, 0, 0) 0.5%,
    //     rgba(0, 0, 0, 0) 7.1%
    //   );
  }
  .line-common() {
    position: absolute;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    width: 15%;
    height: 10%;
    z-index: 99;
    animation: height 0.8s ease-in-out infinite alternate;
  }
  .line-top {
    .line-common();
    border-top: solid 4px #fff;
    border-left: solid 4px #fff;
  }
  .line-right {
    .line-common();
    right: 0;
    top: 0;
    border-top: solid 4px #fff;
    border-right: solid 4px #fff;
  }
  .line-bottom {
    .line-common();
    right: 0;
    bottom: 0;
    border-bottom: solid 4px #fff;
    border-right: solid 4px #fff;
  }
  .line-left {
    .line-common();
    left: 0;
    bottom: 0;
    border-bottom: solid 4px #fff;
    border-left: solid 4px #fff;
  }
}
</style>
