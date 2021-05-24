import { createApp } from "vue";
import { Dom7 as $ } from "framework7";
import ScreenLoadingComponent from "@/components/shared/ScreenLoading.vue";

function renderLoading(text = "加载中") {
  const loading = $("#screen-loading");
  if (loading.length) return;
  const loadingEle = document.createElement("div");
  loadingEle.id = "screen-loading";
  $("body").append(loadingEle);
  createApp(ScreenLoadingComponent, { text }).mount(loadingEle);
}
async function hideLoading() {
  const loadingEle = $("#screen-loading");
  loadingEle.length && loadingEle.remove();
}
export { renderLoading, hideLoading };
