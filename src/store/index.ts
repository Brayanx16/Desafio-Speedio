import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list_activity: []
  },
  mutations: {
    add_item(state, data: object) {
      state.list_activity.push(<never>data);
    },
    remove_item(state, data: object) {
      const index = state.list_activity.indexOf(<never>data);
      if (index > -1) state.list_activity.splice(index, 1);
    }
  },
  actions: {},
  modules: {}
});
