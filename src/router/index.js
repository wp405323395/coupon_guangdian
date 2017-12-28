import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'

import index from '@/page/index'
  //import tvProgram from '@/page/tvProgram'
  //let tvProgram = require('@/page/tvProgram');
import welcome from '@/page/welcome'
const tvProgram = resolve => require(['@/page/tvProgram'], resolve);
const game = resolve => require(['@/page/gameIndex'], resolve);
const gameitem = resolve => require(['@/page/gameItem'], resolve);

Vue.use(Router)

export default new Router({
  scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        if (from.meta.keepAlive) {
          from.meta.savedPosition = document.body.scrollTop
        }
        return {
          x: 0,
          y: to.meta.savedPosition || 0
        }
      }
    },
    routes: [{
      path: '/',
      name: '',
      component: App,
      children: [{
        path: '/',
        redirect: 'welcome',
      }, {
        path: '/welcome',
        component: welcome,
        name: 'welcome',
        meta: {
          title: 'welcome',
          keepAlive: false
        }
      }, {
        path: '/tvProgram',
        component: tvProgram,
        name: 'tvProgram',
        meta: {
          title: 'tvProgram',
          keepAlive: false
        }
      }, {
        path: '/index',
        component: index,
        name: 'index',
        meta: {
          title: '热门话题',
          keepAlive: true
        }
      }, {
        path: '/game',
        component: game,
        name: 'game',
        meta: {
          title: '游戏挑战',
          keepAlive: false
        }
      }, {
        path: '/gameItem',
        component: gameitem,
        name: 'gameitem',
        meta: {
          title: '剧情大挑战',
          keepAlive: false
        }
      }]
    }]
})
