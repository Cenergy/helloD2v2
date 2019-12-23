// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";
import ElementUI from "element-ui";
import $ from "jquery";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

import iView from "iview";
import "iview/dist/styles/iview.css";
Vue.use(iView);

Vue.config.productionTip = false;
// 引入echarts
import echarts from "echarts";
window.$ = $;

Vue.prototype.$echarts = echarts;

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
