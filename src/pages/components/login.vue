<template>
  <f7-page no-toolbar no-navbar no-swipeback login-screen>
    <p class="text-align-center">
      <img src="@/assets/logo.svg" alt="" width="80" />
    </p>
    <f7-login-screen-title>Framework7</f7-login-screen-title>
    <f7-list form>
      <f7-list-input
        label="用户名"
        type="text"
        placeholder="请输入您的用户名"
        :value="username"
        @input="username = $event.target.value"
      ></f7-list-input>
      <f7-list-input
        label="密码"
        type="password"
        placeholder="请输入您的密码"
        :value="password"
        @input="password = $event.target.value"
      ></f7-list-input>
    </f7-list>
    <f7-list>
      <f7-list-button fill @click="signIn">登录</f7-list-button>
      <f7-block-footer
        >Some text about login information.<br />Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.</f7-block-footer
      >
    </f7-list>
  </f7-page>
</template>

<script lang="ts">
import { f7 } from "framework7-vue";
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  props: {
    f7router: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      loginScreenOpened: false,
      username: "",
      password: "",
    });
    const signIn = () => {
      f7.dialog.alert(
        `用户名: ${state.username}<br>密码: ${state.password}`,
        () => {
          props.f7router.back();
        }
      );
    };
    return {
      signIn,
      ...toRefs(state),
    };
  },
});
</script>

<style scoped></style>
