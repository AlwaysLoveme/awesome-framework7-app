import { ObjectDirective } from "vue";
import { debounce } from "lodash/function";
import { Dom7 } from "framework7";

const debounceDirective: ObjectDirective = {
  mounted(el, binding) {
    let inputEle: any = el;
    if (el.nodeName !== "INPUT") {
      const $$ = Dom7;
      const className = el.className.split(" ")[0];
      inputEle = $$(`.${className}`).find("input")[0];
      if (!inputEle) throw Error("找不到input");
    }
    const bindClick = debounce(function () {
      if (typeof binding.value !== "function") {
        throw Error("指令值需是函数");
      } else {
        binding.value();
      }
    }, 1500);
    el.__function = bindClick;
    inputEle.addEventListener("input", bindClick, false);
  },
  unmounted(el) {
    if (el.__function) {
      el.removeEventListener("input", el.__function, false);
    }
  },
};

export default debounceDirective;
