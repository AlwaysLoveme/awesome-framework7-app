<template>
  <base-page :title="title">
    <f7-block strong>
      <p>
        更多用法参考：<f7-link
          href="https://framework7.io/vue/skeleton.html"
          text="https://framework7.io/vue/skeleton.html"
          external
        ></f7-link>
      </p>
    </f7-block>
    <f7-block-title>Skeleton List</f7-block-title>
    <f7-list media-list class="skeleton-text">
      <f7-list-item
        title="Title"
        subtitle="Subtitle"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum."
      >
        <template #media>
          <f7-skeleton-block
            style="width: 40px; height: 40px; border-radius: 50%"
          ></f7-skeleton-block>
        </template>
      </f7-list-item>
      <f7-list-item
        title="Title"
        subtitle="Subtitle"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum."
      >
        <template #media>
          <f7-skeleton-block
            style="width: 40px; height: 40px; border-radius: 50%"
          ></f7-skeleton-block>
        </template>
      </f7-list-item>
    </f7-list>

    <f7-block-title>Skeleton Card</f7-block-title>
    <f7-card
      class="skeleton-text"
      title="Card Header"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit."
      footer="Card Footer"
    ></f7-card>

    <f7-block strong>
      <p>It supports few loading effects:</p>
      <f7-row tag="p">
        <f7-button fill small round class="col" @click="load('fade')"
          >Fade</f7-button
        >
        <f7-button fill small round class="col" @click="load('wave')"
          >Wave</f7-button
        >
        <f7-button fill small round class="col" @click="load('pulse')"
          >Pulse</f7-button
        >
      </f7-row>
    </f7-block>
    <f7-list media-list v-if="loading">
      <f7-list-item
        v-show="loading"
        v-for="n in 3"
        :key="n"
        :class="`skeleton-text skeleton-effect-${effect}`"
        title="Full Name"
        subtitle="Position"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit. Aliquam vestibulum vitae lorem ac iaculis. Praesent nec pharetra massa, at blandit lectus. Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
      >
        <template #media>
          <f7-skeleton-block
            style="width: 40px; height: 40px; border-radius: 50%"
          ></f7-skeleton-block>
        </template>
      </f7-list-item>
    </f7-list>
    <f7-list media-list v-else>
      <f7-list-item
        title="John Doe"
        subtitle="CEO"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit. Aliquam vestibulum vitae lorem ac iaculis. Praesent nec pharetra massa, at blandit lectus. Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
      >
        <template #media>
          <img
            src="https://placeimg.com/80/80/people/1"
            style="width: 40px; height: 40px; border-radius: 50%"
          />
        </template>
      </f7-list-item>
      <f7-list-item
        title="Jane Doe"
        subtitle="Marketing"
        text="Cras consequat felis at consequat hendrerit. Aliquam vestibulum vitae lorem ac iaculis. Praesent nec pharetra massa, at blandit lectus. Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
      >
        <template #media>
          <img
            src="https://placeimg.com/80/80/people/2"
            style="width: 40px; height: 40px; border-radius: 50%"
          />
        </template>
      </f7-list-item>
      <f7-list-item
        title="Kate Johnson"
        subtitle="Admin"
        text="Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
      >
        <template #media>
          <img
            src="https://placeimg.com/80/80/people/3"
            style="width: 40px; height: 40px; border-radius: 50%"
          />
        </template>
      </f7-list-item>
    </f7-list>
  </base-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  props: {
    title: String,
  },
  setup() {
    const state = reactive({
      loading: false,
      effect: "",
    });
    const load = function (effect: string) {
      if (state.loading) return;
      state.effect = effect;
      state.loading = true;
      setTimeout(() => {
        state.loading = false;
      }, 3000);
    };
    return {
      load,
      ...toRefs(state),
    };
  },
});
</script>

<style scoped></style>
