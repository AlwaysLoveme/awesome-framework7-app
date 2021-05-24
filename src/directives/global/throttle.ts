import { ObjectDirective } from "vue";
import { throttle } from "lodash/function";

const throttleDirective: ObjectDirective = {
  mounted(el, binding) {
    const bindClick = throttle(function () {
      if (typeof binding.value !== "function") throw Error("指令值需是函数");
      binding.value();
    }, 2000);
    el.__function = bindClick;
    el.addEventListener("click", bindClick, false);
  },
  unmounted(el) {
    if (el.__function) {
      el.removeEventListener("click", el.__function, false);
    }
  },
};
export default throttleDirective;
