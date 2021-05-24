<template>
  <base-page :title="title">
    <f7-block strong>
      <p>
        更多用法参考：<f7-link
          href="https://framework7.io/vue/swiper.html"
          text="https://framework7.io/vue/swiper.html"
          external
        ></f7-link>
      </p>
    </f7-block>
    <f7-block-title>Minimal Layout</f7-block-title>
    <f7-swiper>
      <f7-swiper-slide>Slide 1</f7-swiper-slide>
      <f7-swiper-slide>Slide 2</f7-swiper-slide>
      <f7-swiper-slide>Slide 3</f7-swiper-slide>
    </f7-swiper>

    <f7-block-title>With all controls</f7-block-title>
    <f7-swiper pagination navigation scrollbar>
      <f7-swiper-slide>Slide 1</f7-swiper-slide>
      <f7-swiper-slide>Slide 2</f7-swiper-slide>
      <f7-swiper-slide>Slide 3</f7-swiper-slide>
    </f7-swiper>

    <f7-block-title>With additional parameters</f7-block-title>
    <f7-swiper navigation :speed="500" :slidesPerView="3" :spaceBetween="20">
      <f7-swiper-slide>Slide 1</f7-swiper-slide>
      <f7-swiper-slide>Slide 2</f7-swiper-slide>
      <f7-swiper-slide>Slide 3</f7-swiper-slide>
      <f7-swiper-slide>Slide 4</f7-swiper-slide>
      <f7-swiper-slide>Slide 5</f7-swiper-slide>
      <f7-swiper-slide>Slide 6</f7-swiper-slide>
    </f7-swiper>
    <f7-block></f7-block>
  </base-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.swiper-slide {
  background: #fff;
  text-align: center;
  font-size: 18px;
  line-height: 200px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}
</style>
