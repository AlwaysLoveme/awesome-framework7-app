import { ObjectDirective } from "vue";

let timer: number | null;
const mobileCodeDirective: ObjectDirective = {
  async mounted(el, binding) {
    let time = 60;
    el.innerText = "获取验证码";
    el.addEventListener(
      "click",
      function () {
        binding.value(countDown);
      },
      false
    );

    function countDown() {
      timer = setInterval(() => {
        time--;
        el.innerText = `${time}s后重新获取`;
        el.disabled = true;
        if (time < 1) {
          el.disabled = false;
          el.innerText = "获取验证码";
          clearInterval(timer as number);
          timer = null;
          time = 10;
        }
      }, 1000);
    }
  },
  unmounted() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  },
};

export default mobileCodeDirective;
