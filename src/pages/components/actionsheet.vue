<template>
  <base-page :title="title">
    <p class="margin">
      官方文档地址:
      <f7-link
        href="https://framework7.io/vue/action-sheet.html"
        external
        text="https://framework7.io/vue/action-sheet.html"
      ></f7-link>
    </p>
    <f7-block-title>API方式</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col>
          <f7-button fill large text="下拉框" @click="oneGroup"></f7-button>
        </f7-col>
        <f7-col>
          <f7-button fill large text="九宫格" @click="gridAction"></f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>组件方式</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col>
          <f7-button
            fill
            large
            text="下拉框"
            actions-open="#actions-two-groups"
          ></f7-button>
        </f7-col>
        <f7-col>
          <f7-button
            fill
            large
            text="九宫格"
            @click="actionGridOpened = true"
          ></f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-actions id="actions-two-groups">
      <f7-actions-group>
        <f7-actions-label>提示</f7-actions-label>
        <f7-actions-button>操作1</f7-actions-button>
        <f7-actions-button>操作2</f7-actions-button>
      </f7-actions-group>
      <f7-actions-group>
        <f7-actions-button color="red">取消</f7-actions-button>
      </f7-actions-group>
    </f7-actions>
    <!-- Grid -->
    <f7-actions
      :grid="true"
      :opened="actionGridOpened"
      @actions:closed="actionGridOpened = false"
    >
      <f7-actions-group>
        <f7-actions-button>
          <template #media>
            <img
              src="https://cdn.framework7.io/placeholder/people-96x96-1.jpg"
              width="48"
            />
          </template>
          <span>Button 1</span>
        </f7-actions-button>
        <f7-actions-button>
          <template #media>
            <img
              src="https://cdn.framework7.io/placeholder/people-96x96-2.jpg"
              width="48"
            />
          </template>
          <span>Button 2</span>
        </f7-actions-button>
        <f7-actions-button>
          <template #media>
            <img
              src="https://cdn.framework7.io/placeholder/people-96x96-3.jpg"
              width="48"
            />
          </template>
          <span>Button 3</span>
        </f7-actions-button>
      </f7-actions-group>
      <f7-actions-group>
        <f7-actions-button>
          <template #media>
            <img
              src="https://cdn.framework7.io/placeholder/fashion-96x96-4.jpg"
              width="48"
            />
          </template>
          <span>Button 4</span>
        </f7-actions-button>
        <f7-actions-button>
          <template #media>
            <img
              src="https://cdn.framework7.io/placeholder/fashion-96x96-5.jpg"
              width="48"
            />
          </template>
          <span>Button 5</span>
        </f7-actions-button>
        <f7-actions-button>
          <template #media>
            <img
              src="https://cdn.framework7.io/placeholder/fashion-96x96-6.jpg"
              width="48"
            />
          </template>
          <span>Button 6</span>
        </f7-actions-button>
      </f7-actions-group>
    </f7-actions>
  </base-page>
</template>

<script>
import { actionCreate, dialogModal } from "@/shared/f7api";
import { defineComponent, ref } from "vue";
import { f7 } from "framework7-vue";

export default defineComponent({
  props: {
    title: String,
  },
  setup() {
    const actionGridOpened = ref(false);
    const oneGroup = () => {
      actionCreate({
        buttons: [
          {
            text: "提示",
            label: true,
          },
          {
            text: "操作1",
            onClick() {
              dialogModal({ content: "点击了操作1" });
            },
          },
          {
            text: "操作2",
            onClick() {
              dialogModal({ content: "点击了操作2" });
            },
          },
        ],
      });
    };
    const gridAction = () => {
      f7.actions
        .create({
          grid: true,
          buttons: [
            [
              {
                text: "Button 1",
                icon: '<img src="https://cdn.framework7.io/placeholder/people-96x96-1.jpg" width="48"/>',
              },
              {
                text: "Button 2",
                icon: '<img src="https://cdn.framework7.io/placeholder/people-96x96-2.jpg" width="48">',
              },
              {
                text: "Button 3",
                icon: '<img src="https://cdn.framework7.io/placeholder/people-96x96-3.jpg" width="48">',
              },
            ],
            [
              {
                text: "Button 1",
                icon: '<img src="https://cdn.framework7.io/placeholder/fashion-96x96-4.jpg" width="48"/>',
              },
              {
                text: "Button 2",
                icon: '<img src="https://cdn.framework7.io/placeholder/fashion-96x96-5.jpg" width="48">',
              },
              {
                text: "Button 3",
                icon: '<img src="https://cdn.framework7.io/placeholder/fashion-96x96-6.jpg" width="48">',
              },
            ],
          ],
        })
        .open();
    };

    return {
      actionGridOpened,
      oneGroup,
      gridAction,
    };
  },
});
</script>

<style scoped></style>
