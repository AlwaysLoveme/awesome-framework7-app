<template>
  <base-page :title="title">
    <div id="editor" placeholder="请填写描述" ref="editor"></div>
  </base-page>
</template>

<script lang="ts">
import Quill from "quill";
import getFile from "@/shared/getFile";
import Emitter from "tiny-emitter/instance";
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

export default defineComponent({
  props: {
    title: String,
  },
  setup() {
    const editor = ref();
    const editorContent = ref();

    const initQuill = () => {
      const toolbarOptions = [
        ["bold", "underline", "strike"], // toggled buttons 'italic'
        [{ header: "1" }, { header: "2" }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ color: [] }], // dropdown with defaults from theme
        [{ align: [] }],
        ["image"],
      ];
      const editorInstance = new Quill(editor.value, {
        modules: {
          toolbar: toolbarOptions,
        },
        placeholder: "请输入商品描述...",
        scrollingContainer: ".editor-content",
        theme: "snow",
      });
      const toolbar = editorInstance.getModule("toolbar");
      toolbar.addHandler("image", () => {
        editorInstance.blur();
        getFile.createAction("pic", 1, "text-editor");
      });
      // 设置内容
      editorInstance.root.innerHTML = "";

      const getUploadImage = (res: string) => {
        editorInstance.root.innerHTML += `<p><img width="100%" alt="" src=${res}><p>`;
      };
      const getEditorContent = () => {
        console.log(editorInstance.root.innerHTML);
        editorContent.value = editorInstance.root.innerHTML;
      };
      Emitter.on("text-editor", getUploadImage);
      editorInstance.on("text-change", getEditorContent);
    };

    onMounted(() => {
      initQuill();
    });
    onUnmounted(() => {
      Emitter.off("text-editor");
    });
    return {
      editor,
    };
  },
});
</script>

<style scoped lang="less">
@import url("~quill/dist/quill.core.css");
@import url("~quill/dist/quill.snow.css");
:deep(.page-content) {
  display: flex;
  flex-direction: column;
  --f7-page-toolbar-bottom-offset: 0;
}
</style>
<style lang="less">
.ql-editor.ql-blank::before {
  font-style: normal !important;
}

.ql-toolbar.ql-snow {
  position: relative;
  border: none !important;
  .border-bottom() {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--f7-list-item-border-color);
    transform-origin: 50% 100%;
    transform: scaleY(calc(1 / var(--f7-device-pixel-ratio)));
  }
  &:after {
    .border-bottom;
  }
}

.ql-container {
  height: calc(100% - 64px) !important;
  overflow-y: auto;
  border: none !important;
}
</style>
