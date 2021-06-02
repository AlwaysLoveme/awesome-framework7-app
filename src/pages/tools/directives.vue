<template>
  <base-page :title="title">
    <f7-block-title>Debounce：防抖,多用于输入框输入搜索</f7-block-title>
    <f7-block strong no-hairlines>
      <f7-searchbar
        :form="false"
        v-debounce="doSearch"
        placeholder="请输入任意字,1.5s后会执行input事件"
        v-model:value="searchVal"
        disable-button-text="取消"
      ></f7-searchbar>
    </f7-block>

    <f7-block-title>
      Throttle: 截流，多用于防止用户点击发送请求频繁
    </f7-block-title>
    <f7-block strong no-hairlines>
      <p>可以进行快速点击查看效果</p>
      <f7-button fill large text="发送" v-throttle="throttle"></f7-button>
    </f7-block>

    <f7-block-title> 限制输入框输入小数位数，默认限制2位 </f7-block-title>
    <f7-block strong no-hairlines>
      <p>输入框值：{{ digit }}</p>
      <f7-input
        outline
        v-digit
        type="number"
        @input="getVal"
        placeholder="只能输入带2位小数位数字"
        class="margin-bottom padding-top padding-bottom"
      ></f7-input>
      <f7-input
        outline
        type="number"
        @input="getVal"
        v-digit="{ digit: 4 }"
        placeholder="只能输入带4位小数位数字"
        class="padding-top padding-bottom margin-bottom"
      ></f7-input>
      <f7-input
        outline
        type="number"
        @input="getVal"
        v-digit="{ digit: 2, max: 2500 }"
        class="padding-top padding-bottom"
        placeholder="只能输入带2位小数位数字, 并且最大值为2500"
      ></f7-input>
    </f7-block>
  </base-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { toast } from "@/shared/f7api";

export default defineComponent({
  props: {
    title: String,
  },
  setup() {
    const searchVal = ref();
    const doSearch = () => {
      toast(searchVal.value);
    };
    const throttle = () => toast("模拟发送请求");

    const digit = ref();
    const getVal = (e: Event) =>
      setTimeout(() => (digit.value = (e.target as any).value), 0);
    return {
      digit,
      getVal,
      doSearch,
      searchVal,
      throttle,
    };
  },
});
</script>

<style>
:root {
  --f7-searchbar-border-color: none;
  --f7-searchbar-bg-color: #fff;
  --f7-searchbar-input-font-size: 14px;
  --f7-searchbar-in-page-content-input-border-radius: 6px;
  --f7-searchbar-link-color: #000;
}
.searchbar-disable-button {
  font-size: 14px !important;
}
</style>
