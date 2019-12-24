import Vue from "vue";
import App from "./App.vue";
import store from "./vuex/store";
import vuetify from "./plugins/vuetify";
import Notifications from "vue-notification";

import "@babel/polyfill";

Vue.config.productionTip = false;
Vue.use(Notifications);

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
