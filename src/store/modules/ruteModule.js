/* jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
  subMenusDir: ''
};
const mutations = {
  subMenusDir(state, subMenusDir) {
    state.subMenusDir = subMenusDir;
  }
};

var ruteModule = {
  state,
  mutations
};
export default ruteModule;
