import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "./mock/index";
import global from "@/utils/global";
import i18n from "./i18n";
import api from "./http";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
Vue.prototype.global = global;
Vue.use(ElementUI);
Vue.use(api);

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
