import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demon from '@/components/demon'
import login from '@/page/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/demon',
      name: 'demon',
      component: demon
    }, {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
