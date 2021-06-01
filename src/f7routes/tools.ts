import { RouterGroups, Routes } from "@/typings/router";

const safeArea: RouterGroups = {
  group_title: "安全区域",
  groups: [
    {
      path: "/safe-area",
      meta: {
        title: "SafeArea",
        desc: "IOS安全区域适配",
      },
      options: {
        props: {
          title: "SafeArea",
        },
      },
      asyncComponent: () => import("@/pages/tools/safe-area.vue"),
    },
  ],
};
const typography: RouterGroups = {
  group_title: "排版样式类名",
  groups: [
    {
      path: "/typography",
      meta: {
        title: "Typography",
        desc: "内置排版样式类名",
      },
      options: {
        props: {
          title: "Typography",
        },
      },
      asyncComponent: () => import("@/pages/tools/typography.vue"),
    },
  ],
};
const utilsPages: RouterGroups = {
  group_title: "工具函数",
  groups: [
    {
      path: "",
      meta: {
        title: "Utils",
        desc: "内置实用工具函数",
        website: "https://framework7.io/docs/utils.html",
      },
      options: {
        props: {
          title: "Utils",
        },
      },
    },
  ],
};
const devicePages: RouterGroups = {
  group_title: "设备信息",
  groups: [
    {
      path: "/device",
      meta: {
        title: "DeviceInfo",
        desc: "获取当前设备信息",
      },
      options: {
        props: {
          title: "Utils",
        },
      },
      asyncComponent: () => import("@/pages/tools/device.vue"),
    },
  ],
};
const otherPages: RouterGroups = {
  group_title: "第三方集成",
  groups: [
    {
      path: "/quill-editor",
      meta: {
        title: "Quill Editor",
        desc: "移动端富文本编辑器",
      },
      options: {
        props: {
          title: "QuillEditor",
        },
      },
      asyncComponent: () => import("@/pages/tools/quill-editor.vue"),
    },
    {
      path: "/image-cropper",
      meta: {
        title: "ImageCropper",
        desc: "图片裁剪,支持本地图片及网络图片",
      },
      options: {
        props: {
          title: "ImageCropper",
        },
      },
      asyncComponent: () => import("@/pages/tools/image-cropper.vue"),
    },
  ],
};
const groups = [safeArea, typography, utilsPages, devicePages, otherPages];

const toolRoutes: Routes[] = [];
groups.forEach((item) => {
  if (item.groups) {
    toolRoutes.push(...item.groups);
  }
});

export default toolRoutes;
export { groups };
