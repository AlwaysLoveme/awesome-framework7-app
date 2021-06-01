<template>
  <f7-page :page-content="false">
    <f7-toolbar tabbar labels bottom class="no-hairline">
      <f7-link
        :key="index"
        v-for="(item, index) of tabs"
        :tab-link="`#${item.id}`"
        :href="`.${item.path}`"
        :text="item.meta.text"
        :icon-f7="item.meta.icon"
        :route-tab-id="item.id"
      ></f7-link>
    </f7-toolbar>
    <!-- animated -->
    <f7-tabs animated swipeable routable :swiper-params="swiperParams">
      <f7-tab
        :key="index"
        :id="item.id"
        class="page-content"
        v-for="(item, index) of tabs"
      ></f7-tab>
    </f7-tabs>
  </f7-page>
</template>

<script lang="ts">
import { tabs } from "@/f7routes";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  props: {
    f7router: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const swiperParams = reactive({
      nested: true,
      speed: 400,
      shortSwipes: true,
      effect: window.localStorage.tabEffect || "slide",
    });

    return {
      tabs,
      swiperParams,
    };
  },
});
</script>
