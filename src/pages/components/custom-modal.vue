<template>
  <custom-modal
    v-model:show="dialogShow"
    :closeable="closeable"
    :animation="animation"
    :width="width"
    :height="height"
  >
    <f7-block>
      <p>content</p>
      <f7-button fill text="关闭" @click="dialogShow = false"></f7-button>
    </f7-block>
  </custom-modal>
  <base-page title="自定义模态框">
    <f7-block-title>非内置模态框，多用于操作类定制显示</f7-block-title>
    <f7-block strong>
      <p>可自定义动画，宽高，以及Modal header</p>
      <f7-button
        fill
        large
        text="默认"
        @click="
          openDialog();
          closeable = false;
        "
      ></f7-button>
      <f7-button
        fill
        large
        text="带关闭按钮"
        @click="
          openDialog();
          closeable = true;
        "
        class="margin-top"
      ></f7-button>
    </f7-block>

    <f7-block-title>动画效果</f7-block-title>
    <f7-block strong>
      <p>默认动画效果为scaleIn</p>
      <div class="display-flex align-items-center flex-wrap animates-box">
        <div
          v-for="(item, index) of animates"
          :key="index"
          @click="openWidthAnimate(index)"
        >
          <div class="animate-name">
            {{ index }}
            <f7-button fill large :text="index"></f7-button>
          </div>
        </div>
      </div>
    </f7-block>
  </base-page>
</template>

<script lang="ts">
import animates from "@/shared/animates";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const dialogShow = ref(false);
    const closeable = ref(false);
    const openDialog = () => (dialogShow.value = !dialogShow.value);

    const animation = ref("fadeIn");
    const openWidthAnimate = (animate: string) => {
      animation.value = animate;
      openDialog();
    };

    const width = ref("80%");
    const height = ref("240px");

    return {
      width,
      height,
      animation,
      animates,
      closeable,
      dialogShow,
      openDialog,
      openWidthAnimate,
    };
  },
});
</script>

<style scoped lang="less">
.animates-box {
  flex-wrap: wrap;
  justify-content: space-between;
  > div {
    margin-bottom: var(--f7-typography-margin);
    margin-right: var(--f7-typography-margin);
  }
  .animate-name {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 40vw;
    height: 40vw;
    box-shadow: 0 0 20px #aaa;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
    .button {
      margin-top: 10px;
      font-size: 12px;
    }
  }
}
</style>
