// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";

import $ from "jquery";

import {
  Button,
  Card,
  Message,
  Modal,
  Upload,
  FormModel,
  Input,
  Icon,
  Row,
  Col,
  Form,
} from "ant-design-vue";

Vue.component(Button.name, Button);
Vue.component(Card.name, Card);
Vue.component(Card.Meta.name, Card.Meta);
Vue.component(Modal.name, Modal);
Vue.component(Upload.name, Upload);
Vue.component(Upload.Dragger.name, Upload.Dragger);
Vue.component(Input.name, Input);
Vue.component(Icon.name, Icon);
Vue.component(Form.name, Form);
Vue.component(FormModel.name, FormModel);
Vue.component(Form.Item.name, Form.Item);
Vue.component(FormModel.Item.name, FormModel.Item);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);

import VueClipboard from "vue-clipboard2";
Vue.use(VueClipboard);

Vue.config.productionTip = false;
Vue.prototype.$message = Message;
// 引入echarts

window.$ = $;

// Vue.prototype.$echarts = echarts;

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
