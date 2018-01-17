/* jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import ruteModule from './modules/ruteModule';
export default new Vuex.Store({
  modules: {
    ruteModule
  }
});
