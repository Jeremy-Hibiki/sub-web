import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "@/plugins/element-ui";
import "@/plugins/clipboard";
import "@/plugins/particles";
import "@/plugins/axios";
import "@/plugins/device";

import "@/icons"; // icon
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
