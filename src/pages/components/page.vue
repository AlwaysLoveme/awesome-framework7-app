<template>
  <base-page
    :title="title"
    infinite
    ptr
    @infinite="loadmore"
    @refresh="refresh"
    :infinitePreloader="showPreloader"
  >
    <p class="margin">
      此处的page组件经过了二次封装(eg：src/components/BasePage.vue),
      更多用法，详见doc:
      <f7-link
        external
        href="https://framework7.io/vue/page.html"
        text="https://framework7.io/vue/page.html"
      ></f7-link>
    </p>
    <f7-block-title>一般用法</f7-block-title>
    <f7-block strong>
      <mark-down-preview :text="commonUse"></mark-down-preview>
    </f7-block>

    <f7-block-title>without Navbar/Page-content</f7-block-title>
    <f7-block strong>
      <mark-down-preview :text="withoutNavbar"></mark-down-preview>
    </f7-block>

    <f7-block-title>上拉加载、下拉刷新</f7-block-title>
    <f7-list media-list>
      <f7-list-item
        v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :subtitle="item.author"
      >
        <template #media>
          <img :src="item.cover" width="44" />
        </template>
      </f7-list-item>
      <f7-block-footer>
        <p>
          Just pull page down to let the magic happen.<br />Note that
          pull-to-refresh feature is optimised for touch and native scrolling so
          it may not work on desktop browser.
        </p>
      </f7-block-footer>
    </f7-list>
  </base-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import MarkDownPreview from "@/components/shared/MarkdownPreview.vue";

export default defineComponent({
  props: {
    title: String,
  },
  components: {
    MarkDownPreview,
  },
  setup() {
    const commonUse = `\`\`\`html
<f7-page>
  <f7-navbar title="NavTitle"></f7-navbar>
  ···
</f7-page>
    `;
    const withoutNavbar = `\`\`\`html
<f7-page no-navbar :page-content="false">
  <f7-page-content></f7-page-content>
  ...
</f7-page>
    `;

    const state = reactive({
      items: [
        {
          title: "Yellow Submarine",
          author: "Beatles",
          cover: "https://cdn.framework7.io/placeholder/abstract-88x88-1.jpg",
        },
        {
          title: "Don't Stop Me Now",
          author: "Queen",
          cover: "https://cdn.framework7.io/placeholder/abstract-88x88-2.jpg",
        },
        {
          title: "Billie Jean",
          author: "Michael Jackson",
          cover: "https://cdn.framework7.io/placeholder/abstract-88x88-3.jpg",
        },
        {
          title: "Billie Jean",
          author: "Michael Jackson",
          cover: "https://cdn.framework7.io/placeholder/abstract-88x88-3.jpg",
        },
        {
          title: "Billie Jean",
          author: "Michael Jackson",
          cover: "https://cdn.framework7.io/placeholder/abstract-88x88-3.jpg",
        },
      ],
      songs: [
        "Yellow Submarine",
        "Don't Stop Me Now",
        "Billie Jean",
        "Californication",
      ],
      authors: ["Beatles", "Queen", "Michael Jackson", "Red Hot Chili Peppers"],
      allowInfinite: true,
      showPreloader: false,
    });
    const loadmore = () => {
      if (!state.allowInfinite) return;
      state.showPreloader = true;
      state.allowInfinite = false;

      setTimeout(() => {
        if (state.items.length >= 20) {
          state.showPreloader = false;
          return;
        }

        const picURL = `https://cdn.framework7.io/placeholder/abstract-88x88-${
          Math.floor(Math.random() * 10) + 1
        }.jpg`;
        const song =
          state.songs[Math.floor(Math.random() * state.songs.length)];
        const author =
          state.authors[Math.floor(Math.random() * state.authors.length)];

        state.items.push(
          ...[
            {
              title: song,
              author,
              cover: picURL,
            },
            {
              title: song,
              author,
              cover: picURL,
            },
            {
              title: song,
              author,
              cover: picURL,
            },
            {
              title: song,
              author,
              cover: picURL,
            },
          ]
        );

        state.allowInfinite = true;
      }, 1000);
    };
    const refresh = (done: () => void) => {
      setTimeout(() => done(), 1500);
      state.allowInfinite = true;
    };
    return {
      commonUse,
      loadmore,
      refresh,
      withoutNavbar,
      ...toRefs(state),
    };
  },
});
</script>

<style scoped></style>
