<template>
  <v-md-preview :text="text"></v-md-preview>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VMdPreview from "@kangc/v-md-editor/lib/preview";
import githubTheme from "@kangc/v-md-editor/lib/theme/github.js";
VMdPreview.use(githubTheme);

export default defineComponent({
  components: {
    VMdPreview,
  },
  props: {
    text: {
      type: String,
      default: "",
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="less">
@import url("~@kangc/v-md-editor/lib/style/base-editor.css");
@import url("~@kangc/v-md-editor/lib/style/preview.css");
@import url("~@kangc/v-md-editor/lib/theme/style/github.css");
</style>
<style>
.github-markdown-body {
  padding: 0;
}
.github-markdown-body pre {
  padding: 20px 10px;
}
.github-markdown-body div[class*="v-md-pre-wrapper-"] {
  border-radius: 5px;
}
</style>
