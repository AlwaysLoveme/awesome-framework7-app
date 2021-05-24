<template>
  <f7-page :page-content="false">
    <f7-toolbar tabbar labels bottom class="no-hairline">
      <f7-link
        :key="index"
        v-for="(item, index) of tabs"
        :tab-link="`#${item.id}`"
        :href="`/${item.path}`"
        :text="item.meta.text"
        :icon-f7="item.meta.icon"
        :route-tab-id="item.id"
      ></f7-link>
    </f7-toolbar>
    <f7-tabs animated routable>
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
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      tabs,
    };
  },
});
</script>
