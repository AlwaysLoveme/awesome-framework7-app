<template>
  <base-page title="路由切换动画">
    <f7-block strong>
      路由参数：
      <p>{{ JSON.stringify(f7route.query) }}</p>
    </f7-block>
  </base-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    f7route: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
