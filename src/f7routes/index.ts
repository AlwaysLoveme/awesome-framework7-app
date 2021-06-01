import tabs from "./tabs";
import homeRoutes from "./home";
import toolRoutes from "./tools";
import storage from "@/shared/storage";
import { Routes } from "@/typings/router";
import { cancelTokenSources } from "@/shared/axios";

const baseRoutes: Routes[] = [
  {
    path: "/tabs/",
    asyncComponent: () => import("@/pages/tabs/index.vue"),
    tabs,
  },
];

const commonRoutes: Routes[] = [
  {
    path: "/router-transition",
    asyncComponent: () => import("@/pages/components/router-transition.vue"),
  },
  {
    path: "/login",
    asyncComponent: () => import("@/pages/components/login.vue"),
  },
  {
    path: "/camera",
    asyncComponent: () => import("@/pages/native/camera.vue"),
  },
  {
    path: "/clipboard",
    asyncComponent: () => import("@/pages/native/clipboard.vue"),
  },
  {
    path: "/location",
    asyncComponent: () => import("@/pages/native/location.vue"),
  },
  {
    path: "/share",
    asyncComponent: () => import("@/pages/native/share.vue"),
  },
  {
    path: "/statusbar",
    asyncComponent: () => import("@/pages/native/statusbar.vue"),
  },
  {
    path: "/phone-call",
    asyncComponent: () => import("@/pages/native/phone-call.vue"),
  },
];

const routes: Routes[] = [
  ...baseRoutes,
  ...homeRoutes,
  ...toolRoutes,
  ...commonRoutes,
];

function handlerRoutes(routes: Routes[]) {
  return routes.forEach(async (item) => {
    // 批量设置Router Transition
    const options = item.options;
    if (!options) item.options = {};
    const transition = await storage.get("transition");
    if (transition)
      (item.options as Record<string, unknown>).transition = transition;

    // 页面路由变化取消当前正在请求的ajax
    item.beforeEnter = ({ resolve }) => {
      for (const [cancelToken, cancel] of cancelTokenSources) {
        cancel(cancelToken); // cancel 正在pending的请求
      }
      resolve();
    };
  });
}
handlerRoutes(routes);

export default routes;
export { homeRoutes, tabs };
