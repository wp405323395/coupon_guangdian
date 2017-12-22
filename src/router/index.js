import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login'
import main from '@/page/homeMain'
import model from '@/page/model'
import changePassword from '@/page/changePassword'
import homeMainQr from '@/page/homeMainQr'
import qrRulerManager from '@/page/qrRulerManager'
  // import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'App',
    component: App,
    children: [{
      path: '',
      redirect: '/login'
    }, {
      name: 'login',
      path: '/login',
      component: login
    }, {
      path: '/main/',
      component: main,
      children: [{
        path: '/',
        component: model,
        name: 'model'
      }, {
        path: '/main/model',
        component: model,
        name: 'model'
      }, {
        path: '/main/changePassword',
        component: changePassword,
        name: 'changePassword'
      }, {
        path: '/main/homeMainQr',
        component: homeMainQr,
        name: 'homeMainQr',
        children: [{
          path: '',
          component: qrRulerManager
        }, {
          name: 'qrRulerManager',
          path: '/main/qrRulerManager',
          component: qrRulerManager
        }]
      }]
    }]
  }]
})
