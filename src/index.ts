import Vue from "vue";
import HomeComponent from "./components/HomePage.vue";
import store from "./store/Store";
require("./mystyles.scss");

Vue.config.devtools = true;
declare global {
  interface Window {
    __VUE_DEVTOOLS_GLOBAL_HOOK__: any;
  }
}

let v = new Vue({
  el: "#app",
  store,
  components: {
    HomeComponent
  },
  template: `
    <home-component />
    `
});

window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = v.constructor;
