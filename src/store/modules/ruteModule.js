/* jshint esversion: 6 */
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
