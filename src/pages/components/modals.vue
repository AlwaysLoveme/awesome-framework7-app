<template>
  <base-page :title="title">
    <f7-block-title>Toast</f7-block-title>
    <f7-block strong>
      <f7-button
        fill
        large
        text="显示吐司"
        @click="toast('message')"
      ></f7-button>
    </f7-block>

    <f7-block-title>Dialog</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col>
          <f7-button fill large text="提示框" @click="showAlert"></f7-button>
        </f7-col>
        <f7-col>
          <f7-button fill large text="确认框" @click="showConfirm"></f7-button>
        </f7-col>
        <f7-col>
          <f7-button fill large text="输入框" @click="showPrompt"></f7-button>
        </f7-col>
      </f7-row>
      <f7-row class="margin-top margin-bottom">
        <f7-col>
          <f7-button fill large text="登录框" @click="showLogin"></f7-button>
        </f7-col>
        <f7-col>
          <f7-button fill large text="密码框" @click="showPassword"></f7-button>
        </f7-col>
      </f7-row>
      <f7-row>
        <f7-col>
          <f7-button
            fill
            large
            text="按钮组合"
            @click="showButtons"
          ></f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Loading Dialog</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col>
          <f7-button
            fill
            large
            text="默认Loading"
            @click="showLoadingModal()"
          ></f7-button>
        </f7-col>
        <f7-col>
          <f7-button
            fill
            large
            text="自定义提示语"
            @click="showLoadingModal('加载中')"
          ></f7-button>
        </f7-col>
      </f7-row>
      <f7-row class="margin-top">
        <f7-col>
          <f7-button
            fill
            large
            text="自定义Loading"
            @click="showSelfLoading"
          ></f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Progress Dialog</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col>
          <f7-button
            fill
            large
            text="进度条"
            @click="showProgressModal()"
          ></f7-button>
        </f7-col>
        <f7-col>
          <f7-button
            fill
            large
            text="循环进度"
            @click="showInfiniteModal"
          ></f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Notification</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col>
          <f7-button
            fill
            large
            text="全版通知"
            @click="fullLayoutNotification"
          ></f7-button>
        </f7-col>
        <f7-col>
          <f7-button
            fill
            large
            text="带关闭按钮"
            @click="fullLayoutNotification({ closeButton: true })"
          ></f7-button>
        </f7-col>
        <f7-col>
          <f7-button
            fill
            large
            text="点击才关闭"
            @click="fullLayoutNotification({ closeOnClick: true })"
          ></f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Loading spinner</f7-block-title>
    <f7-block strong>
      <f7-block-title>Default</f7-block-title>
      <f7-block
        strong
        class="row demo-preloaders align-items-stretch text-align-center"
      >
        <f7-col>
          <f7-preloader></f7-preloader>
        </f7-col>
        <f7-col style="background: #000">
          <f7-preloader color="white"></f7-preloader>
        </f7-col>
        <f7-col>
          <f7-preloader :size="42"></f7-preloader>
        </f7-col>
        <f7-col style="background: #000">
          <f7-preloader :size="42" color="white"></f7-preloader>
        </f7-col>
      </f7-block>

      <f7-block-title>Color Preloaders</f7-block-title>
      <f7-block strong class="row text-align-center">
        <f7-col>
          <f7-preloader color="red"></f7-preloader>
        </f7-col>
        <f7-col>
          <f7-preloader color="green"></f7-preloader>
        </f7-col>
        <f7-col>
          <f7-preloader color="orange"></f7-preloader>
        </f7-col>
        <f7-col>
          <f7-preloader color="blue"></f7-preloader>
        </f7-col>
      </f7-block>

      <f7-block-title>Multi-color</f7-block-title>
      <f7-block strong class="text-align-center">
        <f7-preloader color="multi"></f7-preloader>
      </f7-block>
    </f7-block>
  </base-page>
</template>

<script lang="ts">
import { f7 } from "framework7-vue";
import { defineComponent } from "vue";
import { showLoading, hideLoading, toast } from "@/shared/f7api";

export default defineComponent({
  props: {
    title: String,
  },
  setup() {
    const showAlert = () => {
      f7.dialog.alert("文本", "提示");
    };
    const showConfirm = () =>
      f7.dialog.confirm(
        "文本内容",
        "提示",
        () => {
          f7.dialog.alert("点击了确定", "提示");
        },
        () => f7.dialog.alert("点击了取消", "提示")
      );
    const showPrompt = () => {
      f7.dialog.prompt("您的名字是?", function (name) {
        f7.dialog.confirm("确定您的名字是： " + name + "?", function () {
          f7.dialog.alert("很好，您的名字是" + name);
        });
      });
    };
    const showLogin = () => {
      f7.dialog.login("请输入您的账号和密码", function (username, password) {
        f7.dialog.alert("感谢!<br>用户名:" + username + "<br>密码:" + password);
      });
    };
    const showPassword = () => {
      f7.dialog.password("请输入您的密码", function (password) {
        f7.dialog.alert("感谢!<br>你的密码是:" + password);
      });
    };
    const showButtons = () => {
      f7.dialog
        .create({
          title: "垂直按钮排列",
          text: "垂直按钮排列的模态框",
          buttons: [
            {
              text: "按钮1",
              onClick() {
                f7.dialog.alert("点击了按钮1", "提示");
              },
            },
            {
              text: "按钮2",
              onClick() {
                f7.dialog.alert("点击了按钮2", "提示");
              },
            },
            {
              text: "按钮3",
              onClick() {
                f7.dialog.alert("点击了按钮3", "提示");
              },
            },
          ],
          verticalButtons: true,
        })
        .open();
    };
    const showLoadingModal = (loadingText = "") => {
      f7.dialog.preloader(loadingText);
      setTimeout(function () {
        f7.dialog.close();
      }, 3000);
    };
    const showSelfLoading = () => {
      showLoading();
      setTimeout(function () {
        hideLoading();
      }, 1500);
    };

    const showProgressModal = () => {
      var progress = 0;
      var dialog = f7.dialog.progress("Loading assets", progress);
      dialog.setText("Image 1 of 10");
      var interval = setInterval(function () {
        progress += 10;
        dialog.setProgress(progress);
        dialog.setText("Image " + progress / 10 + " of 10");
        if (progress === 100) {
          clearInterval(interval);
          dialog.close();
        }
      }, 300);
    };
    const showInfiniteModal = () => {
      f7.dialog.progress("上传中");
      setTimeout(function () {
        f7.dialog.close();
      }, 3000);
    };

    const iconPath = "https://framework7.io/i/logo.svg";
    const fullLayoutNotification = ({
      closeButton = false,
      closeOnClick = false,
    }) => {
      f7.notification
        .create({
          icon: `<img src=${iconPath}>`,
          title: "这是标题",
          titleRightText: "刚刚",
          subtitle: "这是副标题",
          text: "您有一个消息待浏览",
          closeTimeout: closeOnClick ? 0 : 3000,
          closeButton,
          closeOnClick,
          on: {
            close() {
              f7.dialog.alert("通知框已关闭");
            },
          },
        })
        .open();
    };

    return {
      toast,
      showLogin,
      showAlert,
      showConfirm,
      showPrompt,
      showButtons,
      showPassword,
      showSelfLoading,
      showProgressModal,
      showLoadingModal,
      showInfiniteModal,
      fullLayoutNotification,
    };
  },
});
</script>
