// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import router from './router' // 引入路由配置 后面根路径默认引入index.js
var remwang = require("remwang")
import store from './store/index'
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  /* 最后效果将会替换页面中id为app的div元素。 */
  router,
  store
  /* 使用路由。 */
})
