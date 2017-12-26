// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import router from './router' // 引入路由配置 后面根路径默认引入index.js
import './config/rem'
Vue.config.productionTip = false
import store from './store/store'

/* eslint-disable no-new */

new Vue({
  el: '#app',
  /* 最后效果将会替换页面中id为app的div元素。 */
  router,
  /* 使用路由。 */
  store
})
