<template>
  <base-page :title="title">
    <f7-block-title>路由配置 (eg: /src/f7route/index.ts)</f7-block-title>
    <f7-block strong> { path: "", component: "" } </f7-block>
    <f7-block-title>JS路由跳转</f7-block-title>
    <f7-block strong>
      <p class="no-margin-top">1. 通过Page传递的props进行跳转</p>
      <mark-down-preview :text="navigateProps"></mark-down-preview>
      <p>
        2.
        通过Framework7-vue暴露的API进行跳转(在js文件中非常适合使用此方法进行页面跳转)
      </p>
      <mark-down-preview :text="navigateApi"></mark-down-preview>
      <p>3. 路由跳转其他参数配置</p>
      <mark-down-preview :text="navigateConfig"></mark-down-preview>
      <p>4. 路由返回</p>
      <mark-down-preview :text="navigateBack"></mark-down-preview>
    </f7-block>
    <f7-block-title>HTML路由跳转</f7-block-title>
    <f7-block strong>
      <mark-down-preview
        :text="`\`\`\`html
<a href='/login'>跳转</a>
      `"
      ></mark-down-preview>
    </f7-block>

    <f7-block-title>路由切换动画</f7-block-title>
    <f7-block strong>
      <f7-button
        fill
        raised
        large
        v-for="(item, index) of transitions"
        :key="index"
        :text="item"
        class="margin-bottom"
        @click="naviagte(item)"
      ></f7-button>
    </f7-block>
  </base-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MarkDownPreview from "@/components/shared/MarkdownPreview.vue";

export default defineComponent({
  props: {
    title: String,
    f7router: {
      type: Object,
      required: true,
    },
    f7route: Object,
  },
  components: {
    MarkDownPreview,
  },
  setup(props) {
    const navigateProps = `\`\`\`js
  export default {
    props: {
      // 路由跳转钩子
      f7router: Object,
      // 获取路由参数用到
      f7route: Object,
    }
    setup(props) {
      // 页面跳转
      const routerPage = () => props.f7router.navigate('/pages/login?type=login');
      // 获取参数 query: 通过query传递 parms: 通过params传递
      const {query, params} = props.f7route;

      return {
        routerPage
      }
    }
  }
  \`\`\`
  `;
    const navigateApi = `\`\`\`js
  import { f7 } from "framework7-vue";
  export default {
    setup() {
      // 页面跳转
      const routerPage = () => f7.views.main.router.navigate('/pages/login?type=login');
      // 获取参数 query: 通过query传递 parms: 通过params传递
      const {query, params} = f7.views.main.router.currentRoute;
    }
  }
  `;
    const navigateConfig = `\`\`\`js
  router.navigate(url, {
    reloadCurrent: true/false, // 用路由中的新页面替换当前页面，在这种情况下不使用动画
    reloadPrevious: true/false, //  用路由中的新页面替换历史记录中的上一页
    reloadAll: true/false, // 加载新页面并从历史记录和DOM中删除所有以前的页面
    clearPreviousHistory: true/false, // 重新加载/导航到指定的路线后，之前的页面历史记录将被清除
    animate: true/false, // 页面是否应设置动画（覆盖默认路由器设置）
    history: true/false, // 该页面是否应保存在路由器历史记录中
    browserHistory: true/false, // 页面是否应以浏览器状态保存。 如果您使用的是browserHistory，则可以在此处传递false以防止路由进入浏览器历史记录
    ignoreCache: true/false, // 如果设置为true，则它将忽略此类URL是否在缓存中，并再次使用XHR重新加载它。
    props: {}, // props将作为页面组件的props传递
    transition: "", // 路由自定义页面过渡名称
    openIn: true/false, // 允许以modal或panel形式打开页面路线，它可以是以下值之一: popup, popover, loginScreen, sheet, panel
  })
  `;
    const navigateBack = `\`\`\`js
  export default {
    props: {
      // 路由跳转钩子
      f7router: Object,
      // 获取路由参数用到
      f7route: Object,
    },
    setup(props) {
      // 路由返回上一页
      props.f7router.back();
      // 返回指定页面
      props.f7router.back("/path", {
        force: true, // 不设置此参数，无法返回指定页面
      })
    }
  }
  `;

    const transitions = [
      "f7-circle",
      "f7-cover",
      "f7-cover-v",
      "f7-dive",
      "f7-fade",
      "f7-flip",
      "f7-parallax",
      "f7-push",
    ];
    const naviagte = (transition: string) =>
      props.f7router.navigate("/router-transition?transition=" + transition, {
        transition,
      });

    return {
      naviagte,
      navigateApi,
      navigateBack,
      navigateProps,
      navigateConfig,
      transitions,
    };
  },
});
</script>
