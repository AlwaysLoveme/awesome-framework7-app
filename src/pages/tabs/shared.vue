<template>
  <base-page title="拓展工具" :backLink="false">
    <template v-for="(item, index) of groups" :key="index">
      <f7-block-title>{{ item.group_title }}</f7-block-title>
      <f7-list class="no-margin no-hairlines margin-bottom">
        <f7-list-item
          link
          :key="index"
          :title="item.meta.title"
          :footer="item.meta.desc"
          @click="navigatePage(item)"
          v-for="(item, index) of item.groups"
        ></f7-list-item>
      </f7-list>
    </template>
  </base-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { groups } from "@/f7routes/tools";
import { Browser } from "@capacitor/browser";

export default defineComponent({
  props: {
    f7router: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const navigatePage = (item: any) => {
      if (item.path) return props.f7router.navigate(item.path);
      return Browser.open({
        url: item.meta.website,
        toolbarColor: "#FFFFFF",
        windowName: "_self",
      });
    };
    return {
      groups,
      navigatePage,
    };
  },
});
</script>

<style scoped></style>
