import { Routes } from "@/typings/router";

const tabs: Routes[] = [
  {
    path: "/",
    id: "home",
    meta: {
      text: "组件",
      icon: "house_alt_fill",
    },
    asyncComponent: () => import("@/pages/tabs/home.vue"),
  },
  {
    path: "/shared",
    id: "shared",
    meta: {
      text: "工具",
      icon: "ellipsis_circle_fill",
    },
    asyncComponent: () => import("@/pages/tabs/shared.vue"),
  },
  {
    path: "/native",
    id: "native",
    meta: {
      text: "原生能力",
      icon: "hexagon_fill",
    },
    asyncComponent: () => import("@/pages/tabs/native.vue"),
  },
  {
    path: "/setting",
    id: "setting",
    meta: {
      text: "设置",
      icon: "gear_alt_fill",
    },
    asyncComponent: () => import("@/pages/tabs/setting.vue"),
  },
];

export default tabs;
