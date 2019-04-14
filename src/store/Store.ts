import Vue from "vue";
import Vuex from "vuex";
import chat from "./chat/Chat";

Vue.config.devtools = process.env.NODE_ENV === "development";
Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: { chat },
  strict: debug
});
