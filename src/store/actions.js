//通过mutation间接更新state的多个方法的对象

import {
  RECEIVE_USERNAME,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS
} from "./mutations-types";
import { reqUser } from "../api";

export default {
  //async req
  async getUsername({ commit, state }) {
    const username = state.username;
    const result = await reqUser(username);
    console.log(result);
    const address = result;
    commit(RECEIVE_ADDRESS, { address });
  }
};
