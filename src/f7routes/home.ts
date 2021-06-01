import { RouterGroups, Routes } from "@/typings/router";

const routerPages: RouterGroups = {
  group_title: "路由",
  groups: [
    {
      path: "/router",
      meta: {
        title: "Page Router",
        desc: "路由配置、跳转方式",
      },
      options: {
        props: {
          title: "Router API",
        },
      },
      asyncComponent: () => import("@/pages/components/router.vue"),
    },
    {
      path: "/link",
      meta: {
        title: "Router Link",
        desc: "导航组件",
      },
      options: {
        props: {
          title: "Router Link",
        },
      },
      asyncComponent: () => import("@/pages/components/link.vue"),
    },
  ],
};

const modalPages: RouterGroups = {
  group_title: "模态框",
  groups: [
    {
      path: "/modals",
      meta: {
        title: "Dialogs",
        desc: "吐司,模态框,通知框, 加载指示器",
      },
      options: {
        props: {
          title: "UI Modal",
        },
      },
      asyncComponent: () => import("@/pages/components/modals.vue"),
    },
    {
      path: "/actionsheet",
      meta: {
        title: "ActionSheet",
        desc: "下拉框",
      },
      options: {
        props: {
          title: "ActionSheet",
        },
      },
      asyncComponent: () => import("@/pages/components/actionsheet.vue"),
    },
    {
      path: "/popover",
      meta: {
        title: "Popover",
        desc: "跟随弹出框",
      },
      options: {
        props: {
          title: "Popover",
        },
      },
      asyncComponent: () => import("@/pages/components/popover.vue"),
    },
    {
      path: "/popup",
      meta: {
        title: "PopupModal",
        desc: "全屏弹框",
      },
      options: {
        props: {
          title: "PopupModal",
        },
      },
      asyncComponent: () => import("@/pages/components/popup.vue"),
    },
    {
      path: "/sheet-modal",
      meta: {
        title: "SheetModal",
        desc: "下拉面板弹框",
      },
      options: {
        props: {
          title: "SheetModal",
        },
      },
      asyncComponent: () => import("@/pages/components/sheet-modal.vue"),
    },
    {
      path: "/picker",
      meta: {
        title: "Picker",
        desc: "单列、多列选择器",
      },
      options: {
        props: {
          title: "Picker",
        },
      },
      asyncComponent: () => import("@/pages/components/picker.vue"),
    },
    {
      path: "/custom-dialog",
      meta: {
        title: "CustomDialog",
        desc: "自定义模态框",
      },
      options: {
        props: {
          title: "CustomDialog",
        },
      },
      asyncComponent: () => import("@/pages/components/custom-modal.vue"),
    },
  ],
};

const chartPages: RouterGroups = {
  group_title: "图形",
  groups: [
    {
      path: "/area-chart",
      meta: {
        title: "Area Chart",
        desc: "区域图",
      },
      options: {
        props: {
          title: "Area Chart",
        },
      },
      asyncComponent: () => import("@/pages/components/area-chart.vue"),
    },
    {
      path: "/pie-chart",
      meta: {
        title: "Pie Chart",
        desc: "饼图",
      },
      options: {
        props: {
          title: "Pie Chart",
        },
      },
      asyncComponent: () => import("@/pages/components/pie-chart.vue"),
    },
    {
      path: "/gauge",
      meta: {
        title: "Gauge",
        desc: "环形进度条",
      },
      options: {
        props: {
          title: "Gauge",
        },
      },
      asyncComponent: () => import("@/pages/components/gauge.vue"),
    },
    {
      path: "/progressbar",
      meta: {
        title: "Progressbar",
        desc: "线型进度条",
      },
      options: {
        props: {
          title: "Progressbar",
        },
      },
      asyncComponent: () => import("@/pages/components/progressbar.vue"),
    },
  ],
};

const formPages: RouterGroups = {
  group_title: "表单",
  groups: [
    {
      path: "/buttons",
      meta: {
        title: "Buttons",
        desc: "按钮",
      },
      options: {
        props: {
          title: "Buttons",
        },
      },
      asyncComponent: () => import("@/pages/components/buttons.vue"),
    },
    {
      path: "/float-button",
      meta: {
        title: "Float Button",
        desc: "浮动按钮",
      },
      options: {
        props: {
          title: "Float Button",
        },
      },
      asyncComponent: () => import("@/pages/components/float-button.vue"),
    },
    {
      path: "/checkbox",
      meta: {
        title: "Checkbox",
        desc: "复选框",
      },
      options: {
        props: {
          title: "Checkbox",
        },
      },
      asyncComponent: () => import("@/pages/components/checkbox.vue"),
    },
    {
      path: "/radio",
      meta: {
        title: "Radio",
        desc: "单选框",
      },
      options: {
        props: {
          title: "Radio",
        },
      },
      asyncComponent: () => import("@/pages/components/radio.vue"),
    },
    {
      path: "/toggle",
      meta: {
        title: "Toggle",
        desc: "拨动按钮",
      },
      options: {
        props: {
          title: "Toggle",
        },
      },
      asyncComponent: () => import("@/pages/components/toggle.vue"),
    },
    {
      path: "/input",
      meta: {
        title: "Input",
        desc: "输入框",
      },
      options: {
        props: {
          title: "Input",
        },
      },
      asyncComponent: () => import("@/pages/components/input.vue"),
    },
    {
      path: "/slider",
      meta: {
        title: "Range Slider",
        desc: "范围滑块",
      },
      options: {
        props: {
          title: "Range Slider",
        },
      },
      asyncComponent: () => import("@/pages/components/range-slider.vue"),
    },
    {
      path: "/searchbar",
      meta: {
        title: "Searchbar",
        desc: "搜索框",
      },
      options: {
        props: {
          title: "Searchbar",
        },
      },
      asyncComponent: () => import("@/pages/components/searchbar.vue"),
    },
    {
      path: "/smart-select",
      meta: {
        title: "SmartSelect",
        desc: "智能选择组件",
      },
      options: {
        props: {
          title: "SmartSelect",
        },
      },
      asyncComponent: () => import("@/pages/components/smart-select.vue"),
    },
    {
      path: "/stepper",
      meta: {
        title: "Stepper",
        desc: "步进器",
      },
      options: {
        props: {
          title: "Stepper",
        },
      },
      asyncComponent: () => import("@/pages/components/stepper.vue"),
    },
  ],
};

const layoutPages: RouterGroups = {
  group_title: "布局结构",
  groups: [
    {
      path: "/block",
      meta: {
        title: "Block/Content Block",
        desc: "块级容器",
      },
      options: {
        props: {
          title: "Block",
        },
      },
      asyncComponent: () => import("@/pages/components/block.vue"),
    },
    {
      path: "/cards",
      meta: {
        title: "Cards",
        desc: "卡片组件",
      },
      options: {
        props: {
          title: "Cards",
        },
      },
      asyncComponent: () => import("@/pages/components/cards.vue"),
    },
    {
      path: "/grid",
      meta: {
        title: "Grid",
        desc: "网格组件",
      },
      options: {
        props: {
          title: "Grid",
        },
      },
      asyncComponent: () => import("@/pages/components/grid.vue"),
    },
    {
      path: "/list-item",
      meta: {
        title: "ListItem",
        desc: "列表项",
      },
      options: {
        props: {
          title: "ListItem",
        },
      },
      asyncComponent: () => import("@/pages/components/list-item.vue"),
    },
    {
      path: "/login-screen",
      meta: {
        title: "LoginScreen",
        desc: "登录页组件",
      },
      options: {
        props: {
          title: "登录组件",
        },
      },
      asyncComponent: () => import("@/pages/components/login-screen.vue"),
    },
    {
      path: "/menu",
      meta: {
        title: "Menu",
        desc: "菜单",
      },
      options: {
        props: {
          title: "菜单",
        },
      },
      asyncComponent: () => import("@/pages/components/menu.vue"),
    },
    {
      path: "/messagebar",
      meta: {
        title: "Messagebar",
        desc: "聊天室",
      },
      options: {
        props: {
          title: "聊天室",
        },
      },
      asyncComponent: () => import("@/pages/components/messagebar.vue"),
    },
    {
      path: "/navbar",
      meta: {
        title: "Navbar",
        desc: "导航栏",
      },
      options: {
        props: {
          title: "导航栏",
        },
      },
      asyncComponent: () => import("@/pages/components/navbar.vue"),
    },
    {
      path: "/page",
      meta: {
        title: "Page",
        desc: "页面容器",
      },
      options: {
        props: {
          title: "Page",
        },
      },
      asyncComponent: () => import("@/pages/components/page.vue"),
    },
    {
      path: "/skeleton",
      meta: {
        title: "Skeleton",
        desc: "骨架屏",
      },
      options: {
        props: {
          title: "Skeleton",
        },
      },
      asyncComponent: () => import("@/pages/components/skeleton.vue"),
    },
  ],
};

const editorPages: RouterGroups = {
  group_title: "富文本编辑器",
  groups: [
    {
      path: "/text-editor",
      meta: {
        title: "TextEditor",
        desc: "内置文本编辑器",
      },
      options: {
        props: {
          title: "TextEditor",
        },
      },
      asyncComponent: () => import("@/pages/components/text-editor.vue"),
    },
  ],
};

const otherPages: RouterGroups = {
  group_title: "其他组件",
  groups: [
    {
      path: "/appbar",
      meta: {
        title: "Appbar",
        desc: "appbar",
      },
      asyncComponent: () => import("@/pages/components/appbar.vue"),
    },
    {
      path: "/accordion",
      meta: {
        title: "Accordion",
        desc: "手风琴",
      },
      options: {
        props: {
          title: "Accordion",
        },
      },
      asyncComponent: () => import("@/pages/components/accordion.vue"),
    },
    {
      path: "/badge",
      meta: {
        title: "Badge",
        desc: "徽章",
      },
      options: {
        props: {
          title: "Badge",
        },
      },
      asyncComponent: () => import("@/pages/components/badge.vue"),
    },

    {
      path: "/chips",
      meta: {
        title: "Chips/Tags",
        desc: "标签",
      },
      options: {
        props: {
          title: "Chips/Tags",
        },
      },
      asyncComponent: () => import("@/pages/components/chips.vue"),
    },
    {
      path: "/contacts-list",
      meta: {
        title: "Contact List",
        desc: "通讯列表",
      },
      options: {
        props: {
          title: "Contact List",
        },
      },
      asyncComponent: () => import("@/pages/components/contacts-list.vue"),
    },
    {
      path: "/icons",
      meta: {
        title: "Icons",
        desc: "内置图标",
      },
      options: {
        props: {
          title: "Icons",
        },
      },
      asyncComponent: () => import("@/pages/components/icon.vue"),
    },
    {
      path: "/panel",
      meta: {
        title: "Panel/Side Panels",
        desc: "侧边栏面板",
      },
      options: {
        props: {
          title: "Panel",
        },
      },
      asyncComponent: () => import("@/pages/components/panel.vue"),
    },
    {
      path: "/photo-browser",
      meta: {
        title: "Photo Browser",
        desc: "图片查看器",
      },
      options: {
        props: {
          title: "Photo Browser",
        },
      },
      asyncComponent: () => import("@/pages/components/photo-browser.vue"),
    },
    {
      path: "/sortable",
      meta: {
        title: "Sortable",
        desc: "拖拽排序",
      },
      options: {
        props: {
          title: "Sortable",
        },
      },
      asyncComponent: () => import("@/pages/components/sortable.vue"),
    },
    {
      path: "/swipeout",
      meta: {
        title: "Swipeout",
        desc: "滑动按钮组件",
      },
      options: {
        props: {
          title: "Swipeout",
        },
      },
      asyncComponent: () => import("@/pages/components/swipeout.vue"),
    },
    {
      path: "/swiper",
      meta: {
        title: "Swiper",
        desc: "滑动轮播组件",
      },
      options: {
        props: {
          title: "Swiper",
        },
      },
      asyncComponent: () => import("@/pages/components/swiper.vue"),
    },
    {
      path: "/tabs",
      meta: {
        title: "Tabs",
        desc: "标签切换",
      },
      options: {
        props: {
          title: "Tabs",
        },
      },
      asyncComponent: () => import("@/pages/components/tabs.vue"),
    },
    {
      path: "/treeview",
      meta: {
        title: "TreeView",
        desc: "树形组件",
      },
      options: {
        props: {
          title: "TreeView",
        },
      },
      asyncComponent: () => import("@/pages/components/treeview.vue"),
    },
    {
      path: "/virtual-list",
      meta: {
        title: "VirtualList",
        desc: "虚拟列表",
      },
      options: {
        props: {
          title: "VirtualList",
        },
      },
      asyncComponent: () => import("@/pages/components/virtual-list.vue"),
    },
  ],
};

const groups: RouterGroups[] = [
  routerPages,
  modalPages,
  chartPages,
  formPages,
  editorPages,
  layoutPages,
  otherPages,
];

const homeRoutes: Routes[] = [];
groups.forEach((item) => {
  if (item.groups) {
    homeRoutes.push(...item.groups);
  }
});

export default homeRoutes;
export { groups };
