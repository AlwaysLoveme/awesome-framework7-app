<template>
  <base-page :title="title">
    <f7-block strong>
      <p>
        随着iPhone X的发布，Apple引入了所谓的安全区域，后来由Google
        Chrome在Android的支持下实现。
      </p>
      <p>
        在具有安全区域的设备上（例如具有顶部屏幕凹口的设备），应用程序用户界面必须在纵向方向上包含额外的顶部/​​底部间距（以考虑顶部凹口和新的底部栏），并在其中包含额外的左侧/右侧间隔（以考虑左侧/右侧凹口）横向取向。
      </p>
      <p>
        在纵向模式下，Framework7将自动进行所需的样式修改，但在横向模式下，必须向元素添加一些其他类：
      </p>
      <ul>
        <li><span>safe-areas:</span> 添加到横向固定在屏幕左右两侧的元素</li>
        <li><span>safe-area-left:</span> 添加到横向固定在屏幕左边缘的元素</li>
        <li><span>safe-area-right:</span> 添加到横向固定在屏幕右边缘的元素</li>
        <li>
          <span>no-safe-areas:</span>
          添加到其内部的元素safe-areas以删除额外的水平间距
        </li>
        <li>
          <span>no-safe-area-left:</span>
          添加到其内部的元素safe-areas以删除额外的左间距
        </li>
        <li>
          <span>no-safe-area-right:</span>
          添加到其内部的元素safe-areas以删除额外的右间距
        </li>
      </ul>
    </f7-block>
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

<style scoped lang="less">
ul {
  background: #f8f8f8;
  padding: 15px 30px;
  border-radius: 8px;
  li {
    span {
      font-weight: bold;
      margin-right: 10px;
    }
  }
}
</style>
