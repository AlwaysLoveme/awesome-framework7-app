<template>
  <base-page :title="title">
    <f7-block strong>
      更多用法参考：<f7-link
        href="https://framework7.io/vue/popover.html"
        text="https://framework7.io/vue/popover.html"
        external
      ></f7-link>
    </f7-block>
    <template #toolbar>
      <f7-button>Dummy Link</f7-button>
      <f7-button popover-open=".popover-menu">Open Popover</f7-button>
    </template>

    <f7-block>
      <p>
        <f7-button fill large raised popover-open=".popover-menu">
          Open popover on me
        </f7-button>
      </p>
      <p>
        Mauris fermentum neque et luctus venenatis. Vivamus a sem rhoncus,
        ornare tellus eu, euismod mauris. In porta turpis at semper convallis.
        Duis adipiscing leo eu nulla lacinia, quis rhoncus metus condimentum.
        Etiam nec malesuada nibh. Maecenas quis lacinia nisl, vel posuere dolor.
        Vestibulum condimentum, nisl ac vulputate egestas, neque enim dignissim
        elit, rhoncus volutpat magna enim a est. Aenean sit amet ligula neque.
        Cras suscipit rutrum enim. Nam a odio facilisis, elementum tellus non,
        <f7-link popover-open=".popover-menu">popover</f7-link> tortor.
        Pellentesque felis eros, dictum vitae lacinia quis, lobortis vitae
        ipsum. Cras vehicula bibendum lorem quis imperdiet.
      </p>
      <p>
        In hac habitasse platea dictumst. Etiam varius, ante vel ornare
        facilisis, velit massa rutrum dolor, ac porta magna magna lacinia nunc.
        Curabitur
        <f7-link popover-open=".popover-menu">popover!</f7-link> cursus laoreet.
        Aenean vel tempus augue. Pellentesque in imperdiet nibh. Mauris rhoncus
        nulla id sem suscipit volutpat. Pellentesque ac arcu in nisi viverra
        pulvinar. Nullam nulla orci, bibendum sed ligula non, ullamcorper
        iaculis mi. In hac habitasse platea dictumst. Praesent varius at nisl eu
        luctus. Cras aliquet porta est. Quisque elementum quis dui et
        consectetur. Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Sed sed laoreet purus. Pellentesque eget
        ante ante.
      </p>
      <p>
        Duis et ultricies nibh. Sed facilisis turpis urna, ac imperdiet erat
        venenatis eu. Proin sit amet faucibus tortor, et varius sem. Etiam vitae
        lacinia neque. Aliquam nisi purus, interdum in arcu sed, ultrices rutrum
        arcu. Nulla mi turpis, consectetur vel enim quis, facilisis viverra dui.
        Aliquam quis convallis tortor, quis semper ligula. Morbi ullamcorper
        <f7-link popover-open=".popover-menu">one more popover</f7-link> massa
        at accumsan. Etiam purus odio, posuere in ligula vitae, viverra
        ultricies justo. Vestibulum nec interdum nisi. Aenean ac consectetur
        velit, non malesuada magna. Sed pharetra vehicula augue, vel venenatis
        lectus gravida eget. Curabitur lacus tellus, venenatis eu arcu in,
        interdum auctor nunc. Nunc non metus neque. Suspendisse viverra lectus
        sed risus aliquet, vel accumsan dolor feugiat.
      </p>
    </f7-block>
    <f7-popover class="popover-menu">
      <f7-list>
        <f7-list-item link="#" popover-close title="Dialog"></f7-list-item>
        <f7-list-item link="#" popover-close title="Tabs"></f7-list-item>
        <f7-list-item link="#" popover-close title="Side Panels"></f7-list-item>
        <f7-list-item link="#" popover-close title="List View"></f7-list-item>
        <f7-list-item link="#" popover-close title="Form Inputs"></f7-list-item>
      </f7-list>
    </f7-popover>
  </base-page>
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

<style scoped></style>
