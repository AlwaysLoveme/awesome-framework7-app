<template>
  <base-page :title="title">
    <f7-block>
      <p>
        Framework7附带了随时可以使用的登录布局。
        可以用在页面内部或弹出窗口内部（嵌入式）或作为独立覆盖层:
      </p>
    </f7-block>

    <f7-list>
      <f7-list-item link="/login" title="作为单独的页面"></f7-list-item>
    </f7-list>

    <f7-block>
      <f7-button raised large fill login-screen-open=".demo-login-screen">
        使用类名打开
      </f7-button>
    </f7-block>

    <f7-block>
      <f7-button raised large fill @click="loginScreenOpened = true">
        使用属性打开
      </f7-button>
    </f7-block>

    <f7-login-screen
      class="demo-login-screen"
      :opened="loginScreenOpened"
      @loginscreen:closed="loginScreenOpened = false"
    >
      <f7-page login-screen>
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
    </f7-login-screen>
  </base-page>
</template>

<script lang="ts">
import { f7 } from "framework7-vue";
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  props: {
    title: String,
  },
  setup() {
    const state = reactive({
      loginScreenOpened: false,
      username: "",
      password: "",
    });
    const signIn = () => {
      f7.dialog.alert(
        `用户名: ${state.username}<br>密码: ${state.password}`,
        () => {
          f7.loginScreen.close();
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
