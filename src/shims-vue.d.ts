/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "@kangc/v-md-editor/lib/theme/vuepress.js";
declare module "@kangc/v-md-editor/lib/theme/github.js";
declare module "@kangc/v-md-editor/lib/preview"
declare module "lodash/function";
declare module "tiny-emitter/instance";
interface Window {
  Capacitor: CapacitorGlobal;
  Cordova: any;
}
