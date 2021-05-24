<template>
  <base-page :title="title">
    <f7-block-title>官方文档地址</f7-block-title>
    <f7-block strong>
      <f7-link
        external
        text="F7Link"
        href="https://framework7.io/vue/link.html"
      ></f7-link>
    </f7-block>

    <f7-block-title>路由链接</f7-block-title>
    <f7-block strong>
      <f7-link href="/buttons" text="导航" class="margin-bottom"></f7-link>
      <mark-down-preview :text="link"></mark-down-preview>
    </f7-block>

    <f7-block-title>路由返回</f7-block-title>
    <f7-block strong>
      <f7-link back text="返回上一页" class="margin-bottom"></f7-link>
      <mark-down-preview :text="linkBack"></mark-down-preview>
    </f7-block>

    <f7-block-title>路由配置参数</f7-block-title>
    <f7-block strong>
      <f7-link
        href="/buttons"
        text="导航"
        :animate="false"
        :ignore-cache="true"
        class="margin-bottom"
      ></f7-link>
      <mark-down-preview :text="linkWidthParams"></mark-down-preview>
    </f7-block>

    <f7-block-title>外部链接</f7-block-title>
    <f7-block strong>
      <f7-link
        external
        text="百度"
        class="margin-bottom"
        href="http://www.baidu.com"
      ></f7-link>
      <mark-down-preview :text="linkExternal"></mark-down-preview>
    </f7-block>

    <f7-block-title>Tab导航</f7-block-title>
    <f7-block strong>
      <!-- Switch Between Tabs -->
      <p>
        <f7-link tab-link="#tab-1" tab-link-active class="margin-right">
          Tab 1
        </f7-link>
        <f7-link tab-link="#tab-2">Tab 2</f7-link>
      </p>

      <!-- Tabs -->
      <f7-tabs class="margin-top margin-bottom">
        <f7-tab id="tab-1" tab-active>Tab 1</f7-tab>
        <f7-tab id="tab-2">Tab 2</f7-tab>
      </f7-tabs>
      <mark-down-preview :text="linkTab"></mark-down-preview>
    </f7-block>
  </base-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MarkDownPreview from "@/components/shared/MarkdownPreview.vue";

export default defineComponent({
  props: {
    title: String,
  },
  components: {
    MarkDownPreview,
  },
  setup() {
    const link = `\`\`\`html
<f7-link href="/buttons" text="导航"></f7-link>  
    `;
    const linkBack = `\`\`\`html
<f7-link back text="返回上一页"></f7-link> 
    `;
    const linkWidthParams = `\`\`\`html
<f7-link href="/buttons" :animate="false" :ignore-cache="true" text="导航"></f7-link>
    `;
    const linkExternal = `\`\`\`html
<f7-link href="http://www.baidu.com" external text="百度"></f7-link>
    `;
    const linkTab = `\`\`\`html
<!-- Switch Between Tabs -->
<p>
  <f7-link tab-link="#tab-1" tab-link-active class="margin-right">
    Tab 1
  </f7-link>
  <f7-link tab-link="#tab-2">Tab 2</f7-link>
</p>
<!-- Tabs -->
<f7-tabs class="margin-top">
  <f7-tab id="tab-1" tab-active>Tab 1</f7-tab>
  <f7-tab id="tab-2">Tab 2</f7-tab>
</f7-tabs>
    `;

    return {
      link,
      linkTab,
      linkBack,
      linkExternal,
      linkWidthParams,
    };
  },
});
</script>

<style scoped></style>
