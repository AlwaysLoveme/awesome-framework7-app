<template>
  <base-page title="相机">
    <f7-block strong>
      <f7-row>
        <f7-col>
          <f7-button
            fill
            large
            text="打开相机"
            @click="openCamera(CameraSource.Camera)"
          ></f7-button>
        </f7-col>
        <f7-col>
          <f7-button
            fill
            large
            text="打开相册"
            @click="openCamera(CameraSource.Photos)"
          ></f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
    <f7-block strong>
      <img :src="imageSrc" alt="" width="200" />
    </f7-block>
  </base-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

export default defineComponent({
  setup() {
    const imageSrc = ref("");

    const openCamera = async (source: CameraSource) => {
      const image = await Camera.getPhoto({
        source,
        quality: 100,
        correctOrientation: true,
        promptLabelCancel: "取消",
        promptLabelHeader: "选择图片",
        promptLabelPhoto: "从相册选择",
        promptLabelPicture: "从相机选择",
        resultType: CameraResultType.Uri,
      });
      imageSrc.value = image.webPath as string;
    };
    return {
      imageSrc,
      openCamera,
      CameraSource,
    };
  },
});
</script>

<style scoped>
img {
  width: 200px;
  height: auto;
}
</style>
