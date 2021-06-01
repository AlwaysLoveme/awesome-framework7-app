<template>
  <f7-page
    :page-content="false"
    @page:init="$emit('page:init')"
    @page:reinit="$emit('page:reinit')"
    @page:mounted="$emit('page:mounted')"
    @page:beforein="$emit('page:beforein')"
    @page:beforeout="$emit('page:beforeout')"
    @page:beforeremove="$emit('page:beforeremove')"
    @page:beforeunmount="$emit('page:beforeunmount')"
  >
    <f7-navbar :title="title" :back-link="backLink" no-hairline>
      <f7-nav-right>
        <slot name="nav-right"></slot>
      </f7-nav-right>
    </f7-navbar>
    <f7-page-content
      :ptr="ptr"
      ref="pageContent"
      :infinite="infinite"
      @infinite="$emit('infinite')"
      :infinite-distance="infiniteDistance"
      @ptr:refresh="$emit('refresh', $event)"
      :infinite-preloader="infinitePreloader"
    >
      <slot></slot>
    </f7-page-content>

    <slot name="outcontent" v-if="$slots.outcontent"></slot>

    <!-- toolbar -->
    <f7-toolbar
      bottom
      v-if="$slots.toolbar"
      :tabbar="tabbar"
      :labels="tabbarLabels"
    >
      <slot name="toolbar"></slot>
    </f7-toolbar>
    <!--fixed content-->
    <template #fixed>
      <slot name="fixed"></slot>
    </template>
  </f7-page>
</template>

<script lang="ts">
import { f7 } from "framework7-vue";
import { defineComponent, ref, nextTick, provide } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "",
    },
    backLink: {
      type: [Boolean, String],
      default: "",
    },
    tabbar: {
      type: Boolean,
      default: false,
    },
    tabbarLabels: {
      type: Boolean,
      default: false,
    },
    infinite: {
      type: Boolean,
      default: false,
    },
    infiniteDistance: {
      type: Number,
      default: 50,
    },
    infinitePreloader: {
      type: Boolean,
      default: true,
    },
    ptr: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    "refresh",
    "infinite",
    "page:init",
    "page:reinit",
    "page:mounted",
    "page:beforein",
    "page:beforeout",
    "page:beforeremove",
    "page:beforeunmount",
  ],
  setup(props, { emit }) {
    const pageContent = ref();
    const router = f7.views.main.router;
    const infiniteScroll = () => emit("infinite");

    const getPageContent = async () => {
      await nextTick();
      return pageContent.value.$el;
    };
    provide("scrollInstance", getPageContent); // 供需要监听page-content滚动事件的子组件使用

    return {
      router,
      pageContent,
      infiniteScroll,
    };
  },
});
</script>

<style lang="less">
.navbar {
  height: calc(
    var(--f7-navbar-height) + var(--f7-safe-area-top) +
      var(--f7-android-statusbar-height, 0px)
  ) !important;
  a {
    color: var(
      --f7-navbar-link-color,
      var(--f7-bars-link-color, var(--f7-theme-color))
    ) !important;
  }
}
.navbar-inner {
  padding: calc(
      var(--f7-safe-area-top) + var(--f7-android-statusbar-height, 0px)
    )
    calc(var(--f7-navbar-inner-padding-right) + var(--f7-safe-area-right)) 0
    calc(var(--f7-navbar-inner-padding-left) + var(--f7-safe-area-left)) !important;
}
</style>
