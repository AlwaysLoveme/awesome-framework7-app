<template>
  <!-- 懒加载图片 -->
  <img
    alt=""
    ref="lazy"
    :data-src="handlerSrc(src)"
    v-bind="$attrs"
    class="lazy lazy-fade-in"
  />
</template>

<script lang="ts">
import { f7 } from "framework7-vue";
import { defineComponent, onMounted, ref } from "vue";

function handlerSrc(src: string): string {
  if (src.startsWith("https://") || src.startsWith("http://")) return src;
  return require(src);
}
export default defineComponent({
  props: {
    src: {
      type: String,
      default: "",
    },
  },
  setup() {
    const lazy = ref();
    const createLazy = () => f7.lazy.create(lazy.value);
    onMounted(createLazy);
    return {
      lazy,
      handlerSrc,
    };
  },
});
</script>
