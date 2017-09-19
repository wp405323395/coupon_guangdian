import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login'
import main from '@/page/homeMain'
import createCoupon from '@/page/createCoupon'
import couponList from '@/page/couponList'
import couponDetail from '@/page/couponDetail'
// import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children: [
        {
          path: '',
          redirect: '/login'
        },
        {
          path: '/login',
          component: login
        },
        {
          path: '/main/',
          component: main,
          children: [
            {
              path: '/',
              component: couponList,
              name: 'homeMain'
            },
            {
              path: '/main/createCoupon',
              component: createCoupon,
              name: 'createCoupon'
            },
            {
              path: '/main/couponDetail',
              component: couponDetail,
              name: 'couponDetail'
            }
          ]
        }
      ]
    }
  ]
})
