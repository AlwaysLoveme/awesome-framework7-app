<template>
  <base-page :title="title">
    <template #nav-right>
      <f7-button
        text="确定"
        @click="uploadCropperImage"
        color="white"
      ></f7-button>
    </template>
    <div class="image-cropper">
      <img :src="imageSrc" alt="" ref="imageElement" />
    </div>
  </base-page>
</template>

<script lang="ts">
/**
 * @doc https://fengyuanchen.github.io/cropper.js/
 */
import Cropper from "cropperjs";
import { f7 } from "framework7-vue";
import { onMounted, ref, defineComponent } from "vue";
import { hideLoading, showLoading, toast } from "@/shared/f7api";
import Emitter from "tiny-emitter/instance";

export default defineComponent({
  props: {
    title: String,
    f7route: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const imageSrc = ref("");
    // eslint-disable-next-line vue/no-setup-props-destructure
    const { path, aspectRatio, events } = props.f7route.query;
    imageSrc.value = path || require("../../assets/cropper.jpg");

    let cropper: Cropper;
    let cropperData: any = null;
    const imageElement = ref(null);

    onMounted(async () => {
      cropper = new Cropper(imageElement.value as any, {
        viewMode: 1,
        aspectRatio,
        autoCropArea: 1,
        cropend: getCropperData,
        ready: getCropperData,
      });
    });

    function getCropperData() {
      cropperData = cropper.getCroppedCanvas({
        width: 750,
        imageSmoothingEnabled: true,
        imageSmoothingQuality: "high",
      });
    }

    function blobCovertToBase64(blob: Blob) {
      return new Promise((resolve) => {
        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
          var base64data = reader.result;
          console.log(base64data);
          resolve(base64data);
        };
      });
    }

    function uploadCropperImage() {
      if (!cropperData) return toast("请检查图像");
      cropperData.toBlob(async (blob: Blob) => {
        const formData = new FormData();
        formData.append("type", "0");
        formData.append("upload", blob, new Date().valueOf() + ".png");

        showLoading("保存中");

        // 模拟上传图片
        setTimeout(async () => {
          hideLoading();
          f7.views.main.router.back();
          Emitter.emit(events, await blobCovertToBase64(blob));
        }, 1000);
        // const { data, status } = await uploadImage(formData);
        // if (status) {
        //   f7.views.main.router.back();
        //   console.log(events);
        //   Emitter.emit(events, data);
        // }
      });
    }
    return {
      imageSrc,
      imageElement,
      uploadCropperImage,
    };
  },
});
</script>

<style scoped lang="less">
@import "~cropperjs/dist/cropper.min.css";

:deep(.page-content) {
  --f7-page-toolbar-bottom-offset: 0;
}
.image-cropper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    display: block;
    /* This rule is very important, please don't ignore this */
    max-width: 100%;
    min-width: 100%;
  }
}
</style>
