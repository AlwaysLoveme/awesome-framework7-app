<template>
  <f7-page>
    <f7-navbar :title="title" back-link>
      <f7-subnavbar :inner="false">
        <f7-searchbar
          search-container=".virtual-list"
          search-item="li"
          search-in=".item-title"
          :disable-button="!theme.aurora"
        ></f7-searchbar>
      </f7-subnavbar>
    </f7-navbar>
    <f7-block strong>
      <p>
        更多用法参考：<f7-link
          href="https://framework7.io/vue/virtual-list.html"
          text="https://framework7.io/vue/virtual-list.html"
          external
        ></f7-link>
      </p>
    </f7-block>
    <f7-block>
      <p>
        虚拟列表是允许渲染具有大量元素的列表，而不会导致性能下降。
        它与所有Framework7列表完全兼容 组件，例如搜索栏，无限滚动，拉动刷新，
        滑动按钮（滑动删除）和可排序。
      </p>
      <p>下面是具有10000条数据的虚拟列表的示例:</p>
    </f7-block>
    <f7-list class="searchbar-not-found">
      <f7-list-item title="Nothing found"></f7-list-item>
    </f7-list>
    <f7-list
      class="searchbar-found"
      medial-list
      virtual-list
      :virtual-list-params="{
        items,
        searchAll,
        renderExternal,
        height: theme.ios ? 63 : theme.md ? 73 : 77,
      }"
    >
      <ul>
        <f7-list-item
          v-for="(item, index) in vlData.items"
          :key="index"
          media-item
          link="#"
          :title="item.title"
          :subtitle="item.subtitle"
          :style="`top: ${vlData.topPosition}px`"
        ></f7-list-item>
      </ul>
    </f7-list>
  </f7-page>
</template>

<script lang="ts">
import { theme } from "framework7-vue";
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  props: {
    title: String,
  },
  setup() {
    const items = [];
    for (let i = 1; i <= 10000; i += 1) {
      items.push({
        title: `Item ${i}`,
        subtitle: `Subtitle ${i}`,
      });
    }
    const state = reactive({
      theme,
      items,
      vlData: {
        items: [],
      },
    });
    const searchAll = function (query: any, items: any[]) {
      const found = [];
      for (let i = 0; i < items.length; i += 1) {
        if (
          items[i].title.toLowerCase().indexOf(query.toLowerCase()) >= 0 ||
          query.trim() === ""
        )
          found.push(i);
      }
      return found; // return array with mathced indexes
    };
    const renderExternal = function (vl: unknown, vlData: any) {
      state.vlData = vlData;
    };
    return {
      searchAll,
      renderExternal,
      ...toRefs(state),
    };
  },
});
</script>

<style scoped></style>
