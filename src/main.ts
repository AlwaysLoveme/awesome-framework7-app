import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import VConsole from "vconsole";
import GlobalComponents from "@/components";

// Import Framework7
import Framework7 from "./f7config/app";
// Import Framework7-Vue Plugin
import Framework7Vue, { registerComponents } from "framework7-vue/bundle";

// Import f7 icons
import "framework7-icons";
// Import styles
import "./styles/app.less";
import "./styles/var.less";
import "./styles/f7.less";
import "./styles/base.less";

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);
// Init vconsole
// new VConsole();

// Init App
const app = createApp(App);
// Register Framework7 Vue components
registerComponents(app);

app.use(store);
app.use(GlobalComponents);
app.mount("#app");
