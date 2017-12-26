import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
  subMenusDir: ''
}
const mutations = {
  subMenusDir(state, subMenusDir) {
    state.subMenusDir = subMenusDir;
  }
}

export default new Vuex.Store({
  state,
  mutations
});
