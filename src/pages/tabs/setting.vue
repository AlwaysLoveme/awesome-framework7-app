<template>
  <base-page title="设置" :back-link="false">
    <f7-list accordion-list no-hairlines>
      <f7-list-item accordion-item title="主题设置">
        <f7-accordion-content>
          <f7-block>
            <p style="font-size: 12px; color: #99a0ae">
              主题色只需改变css变量即可（--f7-theme-color）
            </p>
          </f7-block>
          <p class="color" id="color-picker" @click="colorPicker"></p>
        </f7-accordion-content>
      </f7-list-item>
      <f7-list-item accordion-item title="设置路由转场动画">
        <f7-accordion-content>
          <f7-list>
            <f7-list-item
              :title="item"
              v-for="(item, index) of transitions"
              :key="index"
              @click="changeTranstion(item)"
            ></f7-list-item>
          </f7-list>
        </f7-accordion-content>
      </f7-list-item>
      <f7-list-item accordion-item title="设置Tabs切换动画">
        <f7-accordion-content>
          <f7-list>
            <f7-list-item
              :title="item"
              v-for="(item, index) of effects"
              :key="index"
              @click="changeEffects(item)"
            ></f7-list-item>
          </f7-list>
        </f7-accordion-content>
      </f7-list-item>
    </f7-list>
  </base-page>
</template>

<script lang="ts">
import { f7 } from "framework7-vue";
import { App } from "@capacitor/app";
import { defineComponent } from "vue";
import storage from "@/shared/storage";
import { dialogModal } from "@/shared/f7api";

export default defineComponent({
  props: {
    f7router: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const hexValue = "#EE3411";
    const colorPicker = () => {
      f7.colorPicker
        .create({
          targetEl: "#color-picker",
          targetElSetBackgroundColor: true,
          modules: ["sb-spectrum", "hue-slider"],
          openIn: "popover",
          navbarCloseText: "",
          navbarTitleText: "",
          navbarBackLinkText: "",
          value: {
            hex: hexValue,
          },
          on: {
            close(picker) {
              const { value }: any = picker;
              document.documentElement.style.setProperty(
                "--f7-theme-color",
                value.hex
              );
              document.documentElement.style.setProperty(
                "--f7-theme-color-rgb",
                value.rgb.join(",")
              );
            },
          },
        })
        .open();
    };

    const transitions = [
      "f7-circle",
      "f7-cover",
      "f7-cover-v",
      "f7-dive",
      "f7-flip",
      "f7-parallax",
      "f7-push",
    ];
    const changeTranstion = async (transition: string) => {
      storage.set("transition", transition);
      const alert = await dialogModal({
        content: "路由转场动画设置成功后，需要重新启动APP生效",
      });
      if (alert === 1) {
        App.exitApp();
      }
    };

    const effects = ["slide", "cube", "coverflow"];
    const changeEffects = async (effect: string) => {
      storage.set("tabEffect", effect);
      window.localStorage.tabEffect = effect;
      const alert = await dialogModal({
        content: "Tabs切换动画设置成功后，需要重新启动APP生效",
      });
      if (alert === 1) {
        App.exitApp();
      }
    };

    return {
      effects,
      changeEffects,
      transitions,
      colorPicker,
      changeTranstion,
    };
  },
});
</script>

<style scoped lang="less">
#color-picker {
  width: 70px;
  height: 70px;
  background: var(--f7-theme-color);
  margin: 15px;
  border-radius: 6px;
}
</style>
