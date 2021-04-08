import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import MenuPage from "./components/MenuPage";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

import { store } from "./stores";
import { router } from "./routes";

new Vue({
  store,
  router,
  components: { MenuPage },
  el: "#app",
});
