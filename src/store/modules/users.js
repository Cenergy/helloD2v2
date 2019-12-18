const state = {
  count: 6
};
const getters = {
  count(state) {
    return state.count;
  }
};
const actions = {
  increment({ commit, state }) {
    commit("increment");
  },
  decrement({ commit, state }) {
    if (state.count > 10) {
      commit("decrement");
    }
  }
};

const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
