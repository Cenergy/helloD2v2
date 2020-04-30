// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";

import $ from "jquery";


import Antd from 'ant-design-vue';

import 'ant-design-vue/dist/antd.css';


Vue.use(Antd);

import VueClipboard from "vue-clipboard2";
Vue.use(VueClipboard);

Vue.config.productionTip = false;
// 引入echarts

window.$ = $;

// Vue.prototype.$echarts = echarts;

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
