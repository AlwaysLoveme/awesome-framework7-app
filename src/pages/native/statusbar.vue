<template>
  <base-page title="状态栏" @page:beforeout="defaultStyle">
    <f7-block strong>
      <f7-row>
        <f7-col>
          <f7-button fill text="隐藏状态栏" @click="hideStatusbar"></f7-button>
        </f7-col>
        <f7-col>
          <f7-button fill text="显示状态栏" @click="showStatusbar"></f7-button>
        </f7-col>
      </f7-row>
      <f7-row class="margin-top">
        <f7-col>
          <f7-button
            fill
            text="更改状态栏文字颜色"
            @click="setStatusbarStyle"
          ></f7-button>
        </f7-col>
      </f7-row>
      <f7-row class="margin-top">
        <f7-col>
          <f7-button
            fill
            text="更改状态栏背景颜色"
            @click="setStatusbarBackground"
          ></f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
  </base-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { StatusBar, StatusBarStyle } from "@capacitor/status-bar";

export default defineComponent({
  setup() {
    const showStatusbar = () => StatusBar.show();
    const hideStatusbar = () => StatusBar.hide();
    const setStatusbarBackground = () => {
      document.documentElement.style.setProperty(
        "--f7-navbar-bg-color",
        "#FFFFFF"
      );
      document.documentElement.style.setProperty(
        "--f7-bars-link-color",
        "#333333"
      );
      StatusBar.setStyle({
        style: StatusBarStyle.Light,
      });
    };

    const style = ref(false);
    const setStatusbarStyle = () => {
      StatusBar.setStyle({
        style: !style.value ? StatusBarStyle.Dark : StatusBarStyle.Light,
      });
      style.value = !style.value;
    };

    const defaultStyle = () => {
      document.documentElement.style.setProperty(
        "--f7-navbar-bg-color",
        "#EE3411"
      );
      document.documentElement.style.setProperty(
        "--f7-bars-link-color",
        "#ffffff"
      );
      StatusBar.setStyle({
        style: StatusBarStyle.Dark,
      });
    };

    return {
      defaultStyle,
      setStatusbarBackground,
      showStatusbar,
      hideStatusbar,
      setStatusbarStyle,
    };
  },
});
</script>

<style scoped></style>
