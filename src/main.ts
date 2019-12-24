import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import store from "./vuex/store";
import vuetify from "./plugins/vuetify";

import "@babel/polyfill";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
