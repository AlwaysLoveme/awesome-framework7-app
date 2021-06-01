<template>
  <base-page title="拨打电话">
    <f7-block strong no-hairlines>
      <f7-row>
        <f7-col>
          <f7-button
            fill
            large
            text="拨打电话"
            @click="callNumber()"
          ></f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
  </base-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PhoneCall } from "capacitor-plugin-phone-call";
export default defineComponent({
  setup() {
    const callNumber = (phone = "18270244870") => {
      PhoneCall.start({ phone });
    };
    return {
      callNumber,
    };
  },
});
</script>

<style scoped></style>
