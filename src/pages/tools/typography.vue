<template>
  <base-page :title="title">
    <f7-block strong>
      F7内置了一些常见的样式类名，方便进行页面快速排版, 更多查看：<f7-link
        href="https://framework7.io/docs/typography.html"
        text="https://framework7.io/docs/typography.html"
        external
      ></f7-link>
    </f7-block>

    <f7-block-title>
      <p>Margin(基值为--f7-typography-margin: 16px)</p>
      <p>类名包含half即该值为对应基值的一半</p>
    </f7-block-title>
    <div class="data-table card">
      <table>
        <thead>
          <tr>
            <th class="label-cell">类名</th>
            <th class="numeric-cell">功能</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="label-cell">margin</td>
            <td class="numeric-cell">将外边距应用与各个方向</td>
          </tr>
          <tr>
            <td class="label-cell">margin-left</td>
            <td class="numeric-cell">左外边距</td>
          </tr>
          <tr>
            <td class="label-cell">margin-right</td>
            <td class="numeric-cell">右外边距</td>
          </tr>
          <tr>
            <td class="label-cell">margin-top</td>
            <td class="numeric-cell">上外边距</td>
          </tr>
          <tr>
            <td class="label-cell">margin-bottom</td>
            <td class="numeric-cell">下外边距</td>
          </tr>
          <tr>
            <td class="label-cell">margin-horizontal</td>
            <td class="numeric-cell">水平方向外边距，即包含left/right</td>
          </tr>
          <tr>
            <td class="label-cell">margin-vertical</td>
            <td class="numeric-cell">垂直方向外边距，即包含top/bottom</td>
          </tr>
          <tr>
            <td class="label-cell">margin-half</td>
            <td class="numeric-cell">各外边距为基值的一半</td>
          </tr>
          <tr>
            <td class="label-cell">margin-left-half</td>
            <td class="numeric-cell">左外边距</td>
          </tr>
          <tr>
            <td class="label-cell">margin-right-half</td>
            <td class="numeric-cell">右外边距</td>
          </tr>
          <tr>
            <td class="label-cell">margin-top-half</td>
            <td class="numeric-cell">上外边距</td>
          </tr>
          <tr>
            <td class="label-cell">margin-bottom-half</td>
            <td class="numeric-cell">下外边距</td>
          </tr>
          <tr>
            <td class="label-cell">margin-horizontal-half</td>
            <td class="numeric-cell">水平方向外边距</td>
          </tr>
          <tr>
            <td class="label-cell">margin-vertical-half</td>
            <td class="numeric-cell">竖直方向外边距</td>
          </tr>
          <tr>
            <td class="label-cell">no-margin</td>
            <td class="numeric-cell">去除外边距</td>
          </tr>
          <tr>
            <td class="label-cell">no-margin-left</td>
            <td class="numeric-cell">去除左外边距</td>
          </tr>

          <tr>
            <td class="label-cell">no-margin-right</td>
            <td class="numeric-cell">去除右外边距</td>
          </tr>
          <tr>
            <td class="label-cell">no-margin-top</td>
            <td class="numeric-cell">去除上外边距</td>
          </tr>
          <tr>
            <td class="label-cell">no-margin-bottom</td>
            <td class="numeric-cell">去除下外边距</td>
          </tr>
          <tr>
            <td class="label-cell">no-margin-horizontal</td>
            <td class="numeric-cell">去除水平方向外边距</td>
          </tr>
          <tr>
            <td class="label-cell">no-margin-vertical</td>
            <td class="numeric-cell">去除竖直方向外边距</td>
          </tr>
        </tbody>
      </table>
    </div>

    <f7-block-title>
      <p>Padding(基值为--f7-typography-padding: 16px)</p>
      <p>类名包含half即该值为对应基值的一半</p>
    </f7-block-title>
    <f7-block strong> 将上述margin改成padding便是padding对应的类名 </f7-block>

    <f7-block-title>
      <p>Float（浮动）</p>
    </f7-block-title>
    <div class="data-table card">
      <table>
        <thead>
          <tr>
            <th class="label-cell">类名</th>
            <th class="numeric-cell">功能</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="label-cell">float-left</td>
            <td class="numeric-cell">应用左浮动</td>
          </tr>
          <tr>
            <td class="label-cell">float-right</td>
            <td class="numeric-cell">应用右浮动</td>
          </tr>
          <tr>
            <td class="label-cell">float-none</td>
            <td class="numeric-cell">清除浮动</td>
          </tr>
        </tbody>
      </table>
    </div>

    <f7-block-title>
      <p>Text Alignment(文本对齐方式)</p>
    </f7-block-title>
    <div class="data-table card">
      <table>
        <thead>
          <tr>
            <th class="label-cell">类名</th>
            <th class="numeric-cell">功能</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="label-cell">text-align-left</td>
            <td class="numeric-cell">文本左对齐</td>
          </tr>
          <tr>
            <td class="label-cell">text-align-right</td>
            <td class="numeric-cell">文本右对齐</td>
          </tr>
          <tr>
            <td class="label-cell">text-align-center</td>
            <td class="numeric-cell">文本居中</td>
          </tr>
          <tr>
            <td class="label-cell">text-align-justify</td>
            <td class="numeric-cell">文本水平两端对齐</td>
          </tr>
        </tbody>
      </table>
    </div>

    <f7-block-title>
      <p>Element Display(元素显示方式)</p>
    </f7-block-title>
    <div class="data-table card">
      <table>
        <thead>
          <tr>
            <th class="label-cell">类名</th>
            <th class="numeric-cell">功能</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="label-cell">display-block</td>
            <td class="numeric-cell">块元素</td>
          </tr>
          <tr>
            <td class="label-cell">display-inline</td>
            <td class="numeric-cell">行内元素，内联元素</td>
          </tr>
          <tr>
            <td class="label-cell">display-inline-block</td>
            <td class="numeric-cell">行内块元素</td>
          </tr>
          <tr>
            <td class="label-cell">display-flex</td>
            <td class="numeric-cell">flex元素</td>
          </tr>
          <tr>
            <td class="label-cell">display-inline-flex</td>
            <td class="numeric-cell">行内flex元素</td>
          </tr>
          <tr>
            <td class="label-cell">display-none</td>
            <td class="numeric-cell">隐藏元素</td>
          </tr>
        </tbody>
      </table>
    </div>
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

<style scoped></style>
