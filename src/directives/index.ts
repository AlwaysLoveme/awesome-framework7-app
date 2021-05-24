import { App, Directive } from "vue";

const ctx = require.context("./global/", false, /\.vue$/);
const componentList: Record<string, Directive> = {};
for (const key of ctx.keys()) {
  const fileKey = key.replace(/\.\/|\.ts/g, "");
  componentList[fileKey] = ctx(key).default;
}

const install = (app: App) => {
  // 注册自定义组件
  Object.keys(componentList).forEach((item) => {
    app.directive(item, componentList[item]);
  });
  return app;
};
export default { install };
