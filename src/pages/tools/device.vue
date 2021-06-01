<template>
  <base-page title="设备信息">
    <f7-block strong>
      更多查看：<f7-link
        href="https://framework7.io/docs/device.html"
        text="https://framework7.io/docs/device.html"
        external
      ></f7-link>
    </f7-block>
    <f7-block strong>
      <mark-down-preview :text="device"></mark-down-preview>
    </f7-block>
    <f7-block strong>
      <mark-down-preview :text="code"></mark-down-preview>
    </f7-block>
  </base-page>
</template>

<script lang="ts">
import { getDevice } from "framework7";
import { defineComponent } from "vue";
import MarkDownPreview from "@/components/shared/MarkdownPreview.vue";

export default defineComponent({
  components: {
    MarkDownPreview,
  },
  setup() {
    const device = getDevice();
    console.log(device);

    const code = `\`\`\`js
import { getDevice } from "framework7";
const device = getDevice();
console.log(device);
    `;
    return {
      code,
      device: `\`\`\`js
${JSON.stringify(device)}`,
    };
  },
});
</script>

<style scoped></style>
