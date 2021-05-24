<template>
  <base-page :title="title">
    <div class="content">
      <div class="cell" v-for="(item, index) of icons" :key="index">
        <f7-icon :f7="item" color="#af08e2"></f7-icon>
        <span>{{ item }}</span>
      </div>
    </div>
  </base-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
  },
  setup() {
    const icons = [
      "airplane",
      "alarm",
      "alarm_fill",
      "alt",
      "ant",
      "ant_circle",
      "ant_circle_fill",
      "ant_fill",
      "antenna_radiowaves_left_right",
      "app",
      "app_badge",
      "app_badge_fill",
      "app_fill",
      "archivebox",
      "archivebox_fill",
      "arrow_2_circlepath",
      "arrow_2_circlepath_circle",
      "arrow_2_circlepath_circle_fill",
      "arrow_2_squarepath",
      "arrow_3_trianglepath",
      "arrow_branch",
      "arrow_clockwise",
      "arrow_clockwise_circle",
      "arrow_clockwise_circle_fill",
      "arrow_counterclockwise",
      "arrow_counterclockwise_circle",
      "arrow_counterclockwise_circle_fill",
      "arrow_down",
      "arrow_down_circle",
      "arrow_down_circle_fill",
      "arrow_down_doc",
      "arrow_down_doc_fill",
      "arrow_down_left",
      "arrow_down_left_circle",
      "arrow_down_left_circle_fill",
      "arrow_down_left_square",
      "arrow_down_left_square_fill",
      "arrow_down_right",
      "arrow_down_right_arrow_up_left",
      "arrow_down_right_circle",
      "arrow_down_right_circle_fill",
      "arrow_down_right_square",
      "arrow_down_right_square_fill",
      "arrow_down_square",
      "arrow_down_square_fill",
      "arrow_down_to_line",
      "arrow_down_to_line_alt",
      "arrow_left",
      "arrow_left_circle",
      "arrow_left_circle_fill",
      "arrow_left_right",
      "arrow_left_right_circle",
      "arrow_left_right_circle_fill",
      "arrow_left_right_square",
      "arrow_left_right_square_fill",
      "arrow_left_square",
      "arrow_left_square_fill",
      "arrow_left_to_line",
      "arrow_left_to_line_alt",
      "arrow_merge",
      "arrow_right",
      "arrow_right_arrow_left",
      "arrow_right_arrow_left_circle",
      "arrow_right_arrow_left_circle_fill",
      "arrow_right_arrow_left_square",
      "arrow_right_arrow_left_square_fill",
      "arrow_right_circle",
      "arrow_right_circle_fill",
      "arrow_right_square",
      "arrow_right_square_fill",
      "arrow_right_to_line",
      "arrow_right_to_line_alt",
      "arrow_swap",
      "arrow_turn_down_left",
      "arrow_turn_down_right",
      "arrow_turn_left_down",
      "arrow_turn_left_up",
      "arrow_turn_right_down",
      "arrow_turn_right_up",
      "arrow_turn_up_left",
      "arrow_turn_up_right",
      "arrow_up",
      "arrow_up_arrow_down",
      "arrow_up_arrow_down_circle",
      "arrow_up_arrow_down_circle_fill",
      "arrow_up_arrow_down_square",
      "arrow_up_arrow_down_square_fill",
      "arrow_up_bin",
      "arrow_up_bin_fill",
      "arrow_up_circle",
      "arrow_up_circle_fill",
      "arrow_up_doc",
      "arrow_up_doc_fill",
      "arrow_up_down",
      "arrow_up_down_circle",
      "arrow_up_down_circle_fill",
      "arrow_up_down_square",
      "arrow_up_down_square_fill",
      "arrow_up_left",
      "arrow_up_left_arrow_down_right",
      "arrow_up_left_circle",
      "arrow_up_left_circle_fill",
      "arrow_up_left_square",
      "arrow_up_left_square_fill",
      "arrow_up_right",
      "arrow_up_right_circle",
      "arrow_up_right_circle_fill",
      "arrow_up_right_diamond",
      "arrow_up_right_diamond_fill",
      "arrow_up_right_square",
      "arrow_up_right_square_fill",
      "arrow_up_square",
      "arrow_up_square_fill",
      "arrow_up_to_line",
      "arrow_up_to_line_alt",
      "arrow_uturn_down",
      "arrow_uturn_down_circle",
      "arrow_uturn_down_circle_fill",
      "arrow_uturn_down_square",
      "arrow_uturn_down_square_fill",
      "arrow_uturn_left",
      "arrow_uturn_left_circle",
      "arrow_uturn_left_circle_fill",
      "arrow_uturn_left_square",
      "arrow_uturn_left_square_fill",
      "arrow_uturn_right",
      "arrow_uturn_right_circle",
      "arrow_uturn_right_circle_fill",
      "arrow_uturn_right_square",
      "arrow_uturn_right_square_fill",
      "arrow_uturn_up",
      "arrow_uturn_up_circle",
    ];
    return {
      icons,
    };
  },
});
</script>

<style scoped lang="less">
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  .cell {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 40px;
    width: 25%;
    color: var(--f7-theme-color);
    span {
      max-width: 80px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
