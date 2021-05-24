import tabs from "./tabs";
import homeRoutes from "./home";
import { Routes } from "./router.typings";
import { cancelTokenSources } from "@/utils/axios";

const pageTransition = "f7-parallax"; // 页面切换动画名称

const baseRoutes: Routes[] = [
  {
    path: "/",
    redirect: "home/",
  },
  {
    path: "/",
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
];

const routes: Routes[] = [...baseRoutes, ...homeRoutes, ...commonRoutes];

function handlerRoutes(routes: Routes[]) {
  return routes.forEach((item) => {
    // 批量设置Router Transition
    const options = item.options;
    if (!options) item.options = {};
    (item.options as Record<string, unknown>).transition = pageTransition;

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
