//直接更新state的多个方法的对象

import {
  RECEIVE_USERNAME,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS
} from "./mutations-types";

export default {
  [RECEIVE_CATEGORYS](state, { categorys }) {
    state.categorys = categorys;
  },
  [RECEIVE_ADDRESS](state, { address }) {
    state.address = address;
  }
};
