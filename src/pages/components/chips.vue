<template>
  <base-page :title="title">
    <f7-block-title>Chips With Text</f7-block-title>
    <f7-block strong>
      <f7-chip text="Example Chip" class="margin-right margin-bottom"></f7-chip>
      <f7-chip text="Another Chip" class="margin-right margin-bottom"></f7-chip>
      <f7-chip
        text="One More Chip"
        class="margin-right margin-bottom"
      ></f7-chip>
      <f7-chip text="Fourth Chip" class="margin-right margin-bottom"></f7-chip>
      <f7-chip text="Last One" class="margin-right margin-bottom"></f7-chip>
    </f7-block>

    <f7-block-title>Outline Chips</f7-block-title>
    <f7-block strong>
      <f7-chip
        outline
        text="Example Chip"
        class="margin-right margin-bottom"
      ></f7-chip>
      <f7-chip
        outline
        text="Another Chip"
        class="margin-right margin-bottom"
      ></f7-chip>
      <f7-chip
        outline
        text="One More Chip"
        class="margin-right margin-bottom"
      ></f7-chip>
      <f7-chip
        outline
        text="Fourth Chip"
        class="margin-right margin-bottom"
      ></f7-chip>
      <f7-chip
        outline
        text="Last One"
        class="margin-right margin-bottom"
      ></f7-chip>
    </f7-block>

    <f7-block-title>Icon Chips</f7-block-title>
    <f7-block strong>
      <f7-chip
        text="Add Contact"
        media-bg-color="blue"
        class="margin-right margin-bottom"
      >
        <template #media>
          <f7-icon
            ios="f7:plus_circle"
            aurora="f7:plus_circle"
            md="material:add_circle"
          ></f7-icon>
        </template>
      </f7-chip>
      <f7-chip
        text="London"
        media-bg-color="green"
        class="margin-right margin-bottom"
      >
        <template #media>
          <f7-icon
            ios="f7:compass"
            aurora="f7:compass"
            md="material:location_on"
          ></f7-icon>
        </template>
      </f7-chip>
      <f7-chip
        text="John Doe"
        media-bg-color="red"
        class="margin-right margin-bottom"
      >
        <template #media>
          <f7-icon
            ios="f7:person"
            aurora="f7:person"
            md="material:person"
          ></f7-icon>
        </template>
      </f7-chip>
    </f7-block>

    <f7-block-title>Contact Chips</f7-block-title>
    <f7-block strong>
      <f7-chip text="Jane Doe" class="margin-right margin-bottom">
        <template #media>
          <img
            src="https://cdn.framework7.io/placeholder/people-100x100-9.jpg"
          />
        </template>
      </f7-chip>
      <f7-chip text="John Doe" class="margin-right margin-bottom">
        <template #media>
          <img
            src="https://cdn.framework7.io/placeholder/people-100x100-3.jpg"
          />
        </template>
      </f7-chip>
      <f7-chip text="Adam Smith" class="margin-right margin-bottom">
        <template #media>
          <img
            src="https://cdn.framework7.io/placeholder/people-100x100-7.jpg"
          />
        </template>
      </f7-chip>
      <f7-chip
        text="Jennifer"
        media-bg-color="pink"
        media="J"
        class="margin-right margin-bottom"
      ></f7-chip>
      <f7-chip
        text="Chris"
        media-bg-color="yellow"
        media-text-color="black"
        media="C"
        class="margin-right margin-bottom"
      ></f7-chip>
      <f7-chip
        text="Kate"
        media-bg-color="red"
        media="K"
        class="margin-right margin-bottom"
      ></f7-chip>
    </f7-block>

    <f7-block-title>Deletable Chips / Tags</f7-block-title>
    <f7-block strong>
      <f7-chip
        text="Example Chip"
        deleteable
        @click="deleteChip"
        class="margin-right margin-bottom"
      ></f7-chip>
      <f7-chip
        text="Chris"
        media="C"
        media-bg-color="orange"
        text-color="black"
        deleteable
        class="margin-right margin-bottom"
        @click="deleteChip"
      ></f7-chip>
      <f7-chip
        text="Jane Doe"
        deleteable
        @click="deleteChip"
        class="margin-right margin-bottom"
      >
        <template #media>
          <img
            src="https://cdn.framework7.io/placeholder/people-100x100-9.jpg"
          />
        </template>
      </f7-chip>
      <f7-chip
        text="One More Chip"
        class="margin-right margin-bottom"
        deleteable
        @click="deleteChip"
      ></f7-chip>
      <f7-chip
        text="Jennifer"
        media-bg-color="pink"
        media="J"
        deleteable
        class="margin-right margin-bottom"
        @click="deleteChip"
      ></f7-chip>
      <f7-chip
        text="Adam Smith"
        class="margin-right margin-bottom"
        deleteable
        @click="deleteChip"
      >
        <template #media>
          <img
            src="https://cdn.framework7.io/placeholder/people-100x100-7.jpg"
          />
        </template>
      </f7-chip>
    </f7-block>

    <f7-block-title>Color Chips</f7-block-title>
    <f7-block strong>
      <f7-chip
        text="Red Chip"
        color="red"
        class="margin-right margin-bottom"
      ></f7-chip>
      <f7-chip
        text="Green Chip"
        color="green"
        class="margin-right margin-bottom"
      ></f7-chip>
      <f7-chip
        text="Blue Chip"
        color="blue"
        class="margin-right margin-bottom"
      ></f7-chip>
      <f7-chip
        text="Orange Chip"
        color="orange"
        class="margin-right margin-bottom"
      ></f7-chip>
      <f7-chip
        text="Pink Chip"
        color="pink"
        class="margin-right margin-bottom"
      ></f7-chip>
      <f7-chip
        outline
        text="Red Chip"
        color="red"
        class="margin-right margin-bottom"
      ></f7-chip>
      <f7-chip
        outline
        text="Green Chip"
        color="green"
        class="margin-right margin-bottom"
      ></f7-chip>
      <f7-chip
        outline
        text="Blue Chip"
        color="blue"
        class="margin-right margin-bottom"
      ></f7-chip>
      <f7-chip
        outline
        text="Orange Chip"
        color="orange"
        class="margin-right margin-bottom"
      ></f7-chip>
      <f7-chip
        outline
        text="Pink Chip"
        color="pink"
        class="margin-right margin-bottom"
      ></f7-chip>
    </f7-block>
  </base-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { f7 } from "framework7-vue";

export default defineComponent({
  props: {
    title: String,
  },
  setup() {
    const deleteChip = (e: Event) => {
      const target = e.target;
      f7.dialog.confirm("确定要删除此标签?", () => {
        f7.$(target as EventTarget)
          .parents(".chip")
          .remove();
      });
    };
    return {
      deleteChip,
    };
  },
});
</script>

<style scoped></style>
