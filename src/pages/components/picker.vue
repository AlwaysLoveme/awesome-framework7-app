<template>
  <base-page :title="title">
    <f7-block strong>
      更多用法，详见doc:
      <f7-link
        external
        href="https://framework7.io/docs/picker.html"
        text="https://framework7.io/docs/picker.html"
      ></f7-link>
    </f7-block>

    <f7-block-title>单列选择，默认效果</f7-block-title>
    <f7-block strong>
      <p>已选择的值：{{ singlePickerValue }}</p>
      <f7-button
        fill
        large
        text="Single Picker"
        @click="singlePicker"
      ></f7-button>
    </f7-block>

    <f7-block-title>多列选择, Push推出效果</f7-block-title>
    <f7-block strong>
      <p>已选择的值：{{ multiplePickerValue }}</p>
      <f7-button
        fill
        large
        text="multiple Picker"
        @click="multiplePicker"
      ></f7-button>
    </f7-block>

    <f7-block-title>自定义Toolbar，带遮罩层</f7-block-title>
    <f7-block strong>
      <p>已选择的值：{{ customPickerValue }}</p>
      <f7-button
        fill
        large
        text="custom toolbar Picker"
        @click="customPicker"
      ></f7-button>
    </f7-block>
  </base-page>
</template>

<script lang="ts">
import { f7 } from "framework7-vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    title: String,
  },
  setup() {
    const singlePickerValue = ref();
    const singlePicker = () => {
      const colValue = [
        "iPhone 4",
        "iPhone 4S",
        "iPhone 5",
        "iPhone 5S",
        "iPhone 6",
        "iPhone 6 Plus",
        "iPad 2",
        "iPad Retina",
        "iPad Air",
        "iPad mini",
        "iPad mini 2",
        "iPad mini 3",
      ];
      f7.picker
        .create({
          momentumRatio: 5,
          toolbarCloseText: "关闭",
          rotateEffect: true,
          inputEl: "#demo-picker-device",
          value: [singlePickerValue.value ?? "iPhone 4"],
          cols: [
            {
              textAlign: "center",
              values: colValue,
            },
          ],
          on: {
            change(picker, values) {
              singlePickerValue.value = (values as any)[0];
            },
          },
        })
        .open();
    };

    const multiplePickerValue = ref();
    const multiplePicker = () => {
      const carVendors: any = {
        Japanese: ["Honda", "Lexus", "Mazda", "Nissan", "Toyota"],
        German: ["Audi", "BMW", "Mercedes", "Volkswagen", "Volvo"],
        American: ["Cadillac", "Chrysler", "Dodge", "Ford"],
      };
      f7.picker
        .create({
          sheetPush: true,
          backdrop: true,
          rotateEffect: true,
          toolbarCloseText: "关闭",
          formatValue: function (values) {
            return values[1] as string;
          },
          cols: [
            {
              textAlign: "left",
              values: ["Japanese", "German", "American"],
              onChange: function (picker, country) {
                const condition: any = picker.cols[1].replaceValues;
                if (condition) {
                  const value: any = carVendors[country];
                  picker.cols[1].replaceValues(value, value);
                }
              },
            },
            {
              values: carVendors.Japanese,
              width: 160,
            },
          ],
          on: {
            change(picker, values) {
              multiplePickerValue.value =
                (values as any)[0] + "-" + (values as any)[1];
            },
          },
        })
        .open();
    };

    const customPickerValue = ref();
    const customPicker = () => {
      f7.picker
        .create({
          backdrop: true,
          sheetSwipeToClose: true,
          rotateEffect: true,
          renderToolbar: function () {
            return (
              '<div class="toolbar">' +
              '<div class="toolbar-inner">' +
              '<div class="left">' +
              '<a href="#" class="link toolbar-randomize-link">left</a>' +
              "</div>" +
              '<div class="right">' +
              '<a href="#" class="link sheet-close popover-close">That\'s me</a>' +
              "</div>" +
              "</div>" +
              "</div>"
            );
          },
          cols: [
            {
              values: ["Mr", "Ms"],
            },
            {
              textAlign: "left",
              values:
                "Super Amazing Bat Iron Rocket Lex Beautiful Wonderful Raining Happy Funny Cool Hot".split(
                  " "
                ),
            },
            {
              values:
                "Man Luthor Woman Boy Girl Person Cutie Babe Raccoon".split(
                  " "
                ),
            },
          ],
          on: {
            open: function (picker) {
              picker.$el
                .find(".toolbar-randomize-link")
                .on("click", function () {
                  var col0Values = (picker.cols[0] as any).values;
                  var col0Random =
                    col0Values[Math.floor(Math.random() * col0Values.length)];

                  var col1Values = (picker.cols[1] as any).values;
                  var col1Random =
                    col1Values[Math.floor(Math.random() * col1Values.length)];

                  var col2Values = (picker.cols[2] as any).values;
                  var col2Random =
                    col2Values[Math.floor(Math.random() * col2Values.length)];

                  picker.setValue([col0Random, col1Random, col2Random]);
                });
            },
          },
        })
        .open();
    };

    return {
      singlePicker,
      singlePickerValue,
      multiplePickerValue,
      multiplePicker,
      customPickerValue,
      customPicker,
    };
  },
});
</script>

<style scoped></style>
