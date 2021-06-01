<template>
  <base-page title="分享">
    <f7-block strong>
      <f7-row>
        <f7-col>
          <f7-button fill large text="打开手机分享" @click="share"></f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
  </base-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Share } from "@capacitor/share";
export default defineComponent({
  setup() {
    const share = async () => {
      await Share.share({
        title: "这是分享的标题",
        text: "这是分享的文案",
        url: "https://framework7.io/",
        dialogTitle: "安卓分享标题",
      });
    };
    return {
      share,
    };
  },
});
</script>

<style scoped></style>
