<template>
  <base-page :title="title">
    <f7-block strong>
      <p>
        可以通过三种方式打开照片浏览器-作为独立版组件（弹出窗口修改），在弹出窗口中，并作为单独的页面:
      </p>
      <p>
        <f7-photo-browser
          :photos="photos"
          ref="standalone"
          :routable-modals="false"
          page-back-link-text="返回"
          popup-close-link-text="关闭"
        ></f7-photo-browser>
        <f7-button fill large raised @click="$refs.standalone.open()">
          Standalone
        </f7-button>
      </p>
      <p>
        <f7-photo-browser
          :photos="photos"
          type="popup"
          ref="popup"
          :routable-modals="false"
          page-back-link-text="返回"
          popup-close-link-text="关闭"
        ></f7-photo-browser>
        <f7-button fill large raised @click="$refs.popup.open()">
          Popup
        </f7-button>
      </p>
      <p>
        <f7-photo-browser
          :photos="photos"
          type="page"
          back-link-text="返回"
          ref="page"
          page-back-link-text="返回"
          popup-close-link-text="关闭"
          :routable-modals="false"
        ></f7-photo-browser>
        <f7-button fill large raised @click="$refs.page.open()">Page</f7-button>
      </p>
    </f7-block>

    <f7-block strong>
      <p>
        Photo Browser支持2个默认主题-默认Light（例如 前面的示例）和黑暗主题。
        这是一个黑暗主题的例子:
      </p>
      <p>
        <f7-photo-browser
          :photos="photos"
          theme="dark"
          page-back-link-text="返回"
          popup-close-link-text="关闭"
          ref="standaloneDark"
          :routable-modals="false"
        ></f7-photo-browser>
        <f7-button fill large raised @click="$refs.standaloneDark.open()">
          Standalone
        </f7-button>
      </p>
      <p>
        <f7-photo-browser
          :photos="photos"
          theme="dark"
          type="popup"
          ref="popupDark"
          page-back-link-text="返回"
          popup-close-link-text="关闭"
          :routable-modals="false"
        ></f7-photo-browser>
        <f7-button fill large raised @click="$refs.popupDark.open()">
          Popup
        </f7-button>
      </p>
      <p>
        <f7-photo-browser
          :photos="photos"
          theme="dark"
          type="page"
          ref="pageDark"
          :routable-modals="false"
          page-back-link-text="返回"
          popup-close-link-text="关闭"
        ></f7-photo-browser>
        <f7-button fill large raised @click="$refs.pageDark.open()">
          Page
        </f7-button>
      </p>
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
    return {
      photos: [
        "https://placekitten.com/800/800",
        "https://placekitten.com/1024/1024",
      ],
    };
  },
});
</script>

<style scoped></style>
