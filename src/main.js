// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";

import $ from "jquery";
import Public from './assets/css/public.css';

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
  Dropdown,
  Menu,
  Avatar
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

Vue.component(Dropdown.name, Dropdown);
Vue.component(Avatar.name, Avatar);
Vue.component(Menu.name, Menu);
Vue.component(Menu.Item.name, Menu.Item);
Vue.component(Menu.Divider.name, Menu.Divider);

import VueClipboard from "vue-clipboard2";
Vue.use(VueClipboard);
Vue.use(Modal)

Vue.config.productionTip = false;
Vue.prototype.$message = Message;
// 引入echarts

// 使用公共样式
Vue.use(Public);

window.$ = $;

// Vue.prototype.$echarts = echarts;

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
