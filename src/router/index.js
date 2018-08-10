import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () => import('@/components/HelloWorld')
const demon = () => import('@/components/demon')
const login = () => import('@/page/login')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }, {
      path: '/login',
      component: login
    }, {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requireAuth: true,
        keepAlive: true
      }
    }, {
      path: '/demon',
      name: 'demon',
      component: demon,
      meta: {
        requireAuth: true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('Authorization')
  if (to.meta.requireAuth) {
    if (token) {
      next()
    } else {
      console.log('路由进入时，判断没有token，跳入登陆界面')
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})
export default router
