import { ObjectDirective } from "vue";

/**
 * @Description: 限制input输入数字格式，{ max: 输入最大值，digit: 保留的小数位}
 * 使用方法：v-digit or v-digit = { max: xxx, digit: 3}
 **/
const digitDirective: ObjectDirective = {
  mounted(el, binding) {
    const value = binding.value;
    let input = el;
    if (el.nodeName !== "INPUT") {
      input = el.firstChild;
    }
    input.__function = ({ target }: any) => {
      const num = target.value;
      if (num.indexOf(".") !== -1) {
        const int = num.split(".")[0];
        const digit = num.split(".")[1];
        input.value = int + "." + digit.substring(0, value?.digit ?? 2);
      }
      if (value?.max && Number(num) > Number(value?.max)) {
        return (input.value = value.max);
      }
    };
    input.addEventListener("input", input.__function, false);
    input.addEventListener("blur", input.__function, false);
    input.addEventListener("focus", input.__function, false);
  },
  unmounted(el) {
    let input = el;
    if (el.nodeName !== "INPUT") {
      input = el.firstChild;
    }
    if (input.__function) {
      input.removeEventListener("input", input.__function, false);
      input.removeEventListener("blur", input.__function, false);
      input.removeEventListener("focus", input.__function, false);
      input.__function = null;
    }
  },
};

export default digitDirective;
