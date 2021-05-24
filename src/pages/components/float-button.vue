<template>
  <f7-page>
    <f7-navbar :title="title" back-link></f7-navbar>
    <!-- Toolbar FAB Morph Target -->
    <f7-toolbar bottom class="fab-morph-target">
      <f7-link>Link 1</f7-link>
      <f7-link>Link 2</f7-link>
      <f7-link>Link 3</f7-link>
    </f7-toolbar>

    <template #fixed>
      <!-- FAB Left Top (Yellow) -->
      <f7-fab position="left-top" color="yellow">
        <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
        <f7-icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></f7-icon>
        <f7-fab-buttons position="bottom">
          <f7-fab-button>1</f7-fab-button>
          <f7-fab-button>2</f7-fab-button>
          <f7-fab-button>3</f7-fab-button>
        </f7-fab-buttons>
      </f7-fab>

      <!-- FAB Right Top (Pink) -->
      <f7-fab position="right-top" color="pink">
        <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
        <f7-icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></f7-icon>
        <f7-fab-buttons position="left">
          <f7-fab-button>1</f7-fab-button>
          <f7-fab-button>2</f7-fab-button>
          <f7-fab-button>3</f7-fab-button>
        </f7-fab-buttons>
      </f7-fab>

      <!-- FAB Center (Green) -->
      <f7-fab position="center-center" color="green">
        <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
        <f7-icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></f7-icon>
        <f7-fab-buttons position="center">
          <f7-fab-button>1</f7-fab-button>
          <f7-fab-button>2</f7-fab-button>
          <f7-fab-button>3</f7-fab-button>
          <f7-fab-button>4</f7-fab-button>
        </f7-fab-buttons>
      </f7-fab>

      <!-- FAB Left Bottom (Blue) -->
      <!-- Will morph to Toolbar -->
      <f7-fab position="left-bottom" morph-to=".toolbar.fab-morph-target">
        <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
        <f7-icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></f7-icon>
      </f7-fab>

      <!-- FAB Right Bottom (Orange) -->
      <f7-fab position="right-bottom" color="orange">
        <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
        <f7-icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></f7-icon>
        <f7-fab-buttons position="top">
          <f7-fab-button label="Action 1">1</f7-fab-button>
          <f7-fab-button label="Action 2">2</f7-fab-button>
        </f7-fab-buttons>
      </f7-fab>

      <!-- Extended FAB Center Bottom (Red) -->
      <f7-fab position="center-bottom" text="Create" color="red">
        <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
      </f7-fab>
    </template>
  </f7-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
  },
  setup() {
    return {};
  },
});
</script>
