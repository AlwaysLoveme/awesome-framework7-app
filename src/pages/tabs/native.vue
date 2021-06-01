<template>
  <base-page title="原生能力" :backLink="false">
    <f7-list no-hairlines>
      <f7-list-item link="/camera" title="相机"></f7-list-item>
      <f7-list-item link title="浏览器" @click="browser"></f7-list-item>
      <f7-list-item link="/clipboard" title="剪贴板"></f7-list-item>
      <f7-list-item link="/location" title="手机定位"></f7-list-item>
      <f7-list-item link="/share" title="手机分享"></f7-list-item>
      <f7-list-item link title="二维码扫描" @click="openScanner"></f7-list-item>
      <f7-list-item link="/statusbar" title="状态栏"></f7-list-item>
      <f7-list-item link="/phone-call" title="拨打电话"></f7-list-item>
    </f7-list>
  </base-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Browser } from "@capacitor/browser";
import Emitter from "tiny-emitter/instance";

export default defineComponent({
  setup() {
    const browser = () => Browser.open({ url: "https://www.baidu.com" });
    const openScanner = () => Emitter.emit("showScanner", true);
    return {
      browser,
      openScanner,
    };
  },
});
</script>

<style scoped></style>
