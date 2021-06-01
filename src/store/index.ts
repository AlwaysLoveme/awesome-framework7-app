import { createStore } from "vuex";

export default createStore({
  state: {
    routerTranstion: "f7-push",
    tabEffect: "slide",
  },
  mutations: {
    setTranstion(state, payload) {
      state.routerTranstion = payload;
    },
    setTabEffect(state, payload) {
      state.tabEffect = payload;
    },
  },
  actions: {},
  modules: {},
});
