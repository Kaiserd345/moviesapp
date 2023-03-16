import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import plugins from "./plugins";

Vue.config.productionTip = false;

new Vue({
  store,
  plugins,
  render: (h) => h(App),
}).$mount("#app");
