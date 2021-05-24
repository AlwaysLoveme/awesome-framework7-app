<template>
  <base-page :title="title">
    <f7-block-title>普通菜单项</f7-block-title>
    <f7-block strong>
      <f7-menu>
        <f7-menu-item href="#" text="选项1"></f7-menu-item>
        <f7-menu-item href="#" text="选项2"></f7-menu-item>
        <f7-menu-item href="#" icon-f7="pencil"></f7-menu-item>
        <f7-menu-item href="#" icon-f7="square_arrow_up"></f7-menu-item>
      </f7-menu>
    </f7-block>

    <f7-block-title>带有下拉框的菜单</f7-block-title>
    <f7-block strong style="z-index: 99">
      <f7-menu>
        <f7-menu-item text="左边位置" dropdown>
          <f7-menu-dropdown left>
            <f7-menu-dropdown-item
              href="#"
              text="Menu Item 1"
            ></f7-menu-dropdown-item>
            <f7-menu-dropdown-item
              href="#"
              text="Menu Item 2"
            ></f7-menu-dropdown-item>
            <f7-menu-dropdown-item
              href="#"
              text="Menu Item 3"
            ></f7-menu-dropdown-item>
            <f7-menu-dropdown-item
              href="#"
              text="Menu Item 4"
            ></f7-menu-dropdown-item>
            <f7-menu-dropdown-item divider></f7-menu-dropdown-item>
            <f7-menu-dropdown-item
              href="#"
              text="Menu Item 5"
            ></f7-menu-dropdown-item>
            <f7-menu-dropdown-item
              href="#"
              text="Menu Item 6"
            ></f7-menu-dropdown-item>
          </f7-menu-dropdown>
        </f7-menu-item>

        <f7-menu-item text="中间位置" dropdown>
          <f7-menu-dropdown center content-height="200px">
            <f7-menu-dropdown-item
              href="#"
              text="Menu Item 1"
            ></f7-menu-dropdown-item>
            <f7-menu-dropdown-item
              href="#"
              text="Menu Item 2"
            ></f7-menu-dropdown-item>
            <f7-menu-dropdown-item
              href="#"
              text="Menu Item 3"
            ></f7-menu-dropdown-item>
            <f7-menu-dropdown-item
              href="#"
              text="Menu Item 4"
            ></f7-menu-dropdown-item>
            <f7-menu-dropdown-item divider></f7-menu-dropdown-item>
            <f7-menu-dropdown-item
              href="#"
              text="Menu Item 5"
            ></f7-menu-dropdown-item>
            <f7-menu-dropdown-item
              href="#"
              text="Menu Item 6"
            ></f7-menu-dropdown-item>
            <f7-menu-dropdown-item
              href="#"
              text="Menu Item 7"
            ></f7-menu-dropdown-item>
            <f7-menu-dropdown-item divider></f7-menu-dropdown-item>
            <f7-menu-dropdown-item
              href="#"
              text="Menu Item 8"
            ></f7-menu-dropdown-item>
            <f7-menu-dropdown-item
              href="#"
              text="Menu Item 9"
            ></f7-menu-dropdown-item>
            <f7-menu-dropdown-item
              href="#"
              text="Menu Item 10"
            ></f7-menu-dropdown-item>
          </f7-menu-dropdown>
        </f7-menu-item>

        <f7-menu-item text="右边位置" dropdown>
          <f7-menu-dropdown right>
            <f7-menu-dropdown-item
              href="#"
              text="Menu Item 1"
            ></f7-menu-dropdown-item>
            <f7-menu-dropdown-item
              href="#"
              text="Menu Item 2"
            ></f7-menu-dropdown-item>
            <f7-menu-dropdown-item
              href="#"
              text="Menu Item 3"
            ></f7-menu-dropdown-item>
            <f7-menu-dropdown-item
              href="#"
              text="Menu Item 4"
            ></f7-menu-dropdown-item>
            <f7-menu-dropdown-item divider></f7-menu-dropdown-item>
            <f7-menu-dropdown-item
              href="#"
              text="Menu Item 5"
            ></f7-menu-dropdown-item>
            <f7-menu-dropdown-item
              href="#"
              text="Menu Item 6"
            ></f7-menu-dropdown-item>
          </f7-menu-dropdown>
        </f7-menu-item>

        <f7-menu-item
          style="margin-left: 25px"
          icon-f7="square_arrow_up"
          dropdown
        >
          <f7-menu-dropdown right>
            <f7-menu-dropdown-item href="#">
              <span>Share on Facebook</span>
              <f7-icon class="margin-left" f7="logo_facebook"></f7-icon>
            </f7-menu-dropdown-item>
            <f7-menu-dropdown-item href="#">
              <span>Share on Twitter</span>
              <f7-icon class="margin-left" f7="logo_twitter"></f7-icon>
            </f7-menu-dropdown-item>
          </f7-menu-dropdown>
        </f7-menu-item>

        <f7-menu-item
          href="#"
          icon-f7="pencil"
          class="margin-top"
        ></f7-menu-item>
      </f7-menu>
    </f7-block>

    <f7-block-title>菜单列表</f7-block-title>
    <f7-block strong>
      <p>
        菜单列表不同于通常的链接列表，旨在指示当前应用的活动屏幕（或部分）。就像Tabbar一样，但是是以列表的形式.
      </p>
    </f7-block>

    <f7-list menu-list>
      <f7-list-item
        link
        title="Home"
        :selected="selected === 'home'"
        @click="() => (selected = 'home')"
      >
        <template #media>
          <f7-icon
            md="material:home"
            aurora="f7:house_fill"
            ios="f7:house_fill"
          />
        </template>
      </f7-list-item>
      <f7-list-item
        link
        title="Profile"
        :selected="selected === 'profile'"
        @click="() => (selected = 'profile')"
      >
        <template #media>
          <f7-icon
            md="material:person"
            aurora="f7:person_fill"
            ios="f7:person_fill"
          />
        </template>
      </f7-list-item>
      <f7-list-item
        link
        title="Settings"
        :selected="selected === 'settings'"
        @click="() => (selected = 'settings')"
      >
        <template #media>
          <f7-icon
            md="material:settings"
            aurora="f7:gear_alt_fill"
            ios="f7:gear_alt_fill"
          />
        </template>
      </f7-list-item>
    </f7-list>

    <f7-list menu-list media-list>
      <f7-list-item
        link
        title="Home"
        subtitle="Home subtitle"
        :selected="selectedMedia === 'home'"
        @click="() => (selectedMedia = 'home')"
      >
        <template #media>
          <f7-icon
            md="material:home"
            aurora="f7:house_fill"
            ios="f7:house_fill"
          />
        </template>
      </f7-list-item>
      <f7-list-item
        link
        title="Profile"
        subtitle="Profile subtitle"
        :selected="selectedMedia === 'profile'"
        @click="() => (selectedMedia = 'profile')"
      >
        <template #media>
          <f7-icon
            md="material:person"
            aurora="f7:person_fill"
            ios="f7:person_fill"
          />
        </template>
      </f7-list-item>
      <f7-list-item
        link
        title="Settings"
        subtitle="Settings subtitle"
        :selected="selectedMedia === 'settings'"
        @click="() => (selectedMedia = 'settings')"
      >
        <template #media>
          <f7-icon
            md="material:settings"
            aurora="f7:gear_alt_fill"
            ios="f7:gear_alt_fill"
          />
        </template>
      </f7-list-item>
    </f7-list>
  </base-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    title: String,
  },
  setup() {
    const selected = ref("home");
    const selectedMedia = ref("home");
    return {
      selected,
      selectedMedia,
    };
  },
});
</script>

<style scoped></style>
