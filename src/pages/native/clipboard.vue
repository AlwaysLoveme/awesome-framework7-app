<template>
  <base-page title="剪贴板">
    <f7-block strong>
      <f7-row>
        <f7-col>
          <f7-button fill large text="复制" @click="writeClipboard"></f7-button>
        </f7-col>
        <f7-col>
          <f7-button fill large text="粘贴" @click="readClipboard"></f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
    <f7-block strong>
      粘贴值：
      <p>{{ clipboardValue }}</p>
    </f7-block>
  </base-page>
</template>

<script lang="ts">
import { toast } from "@/shared/f7api";
import { defineComponent, ref } from "vue";
import { Clipboard } from "@capacitor/clipboard";

export default defineComponent({
  setup() {
    const writeClipboard = async () => {
      try {
        await Clipboard.write({ string: "Framework7 is cool!" });
        toast("复制成功");
      } catch (error) {
        toast(error);
      }
    };

    const clipboardValue = ref();
    const readClipboard = async () => {
      try {
        const { value } = await Clipboard.read();
        clipboardValue.value = value;
        toast("粘贴成功");
      } catch (error) {
        toast(error);
      }
    };
    return { clipboardValue, writeClipboard, readClipboard };
  },
});
</script>

<style scoped lang="less"></style>
