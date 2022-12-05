import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import city from "./modules/city";
import user from "./modules/user";

export default new Vuex.Store({
  modules: {
    city,
    user,
  },
});
