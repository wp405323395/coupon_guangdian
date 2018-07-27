// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import myAxios from './net/myAxios'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(VueAxios, myAxios(axios, router))

Vue.config.productionTip = false
// process.env.MOCK && require('./mock/mock')
/* eslint-disable no-new */
var vue = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
export default vue
