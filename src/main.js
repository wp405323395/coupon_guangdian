// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import router from './router' // 引入路由配置 后面根路径默认引入index.js
var remwang = require("remwang")
import redirect from './redirect'

import store from './store/store'
Vue.config.productionTip = false
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: require('./assets/error.png'),
    //loading: require('./assets/loading.gif'),
    attempt: 1
  })
  /* eslint-disable no-new */

new Vue({
  el: '#app',
  /* 最后效果将会替换页面中id为app的div元素。 */
  router,
  store
  /* 使用路由。 */
})
