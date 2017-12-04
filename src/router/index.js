import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login'
import main from '@/page/homeMain'
import createVote from '@/page/createVote'
import voteList from '@/page/voteList'
import voteDetail from '@/page/voteDetail'
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
      path: '/login',
      component: login
    }, {
      path: '/main/',
      component: main,
      children: [{
        path: '/',
        component: voteList,
        name: 'homeMain'
      }, {
        path: '/main/createVote',
        component: createVote,
        name: 'createVote',
        meta: {
          isFrom: 'createVote'
        }
      }, {
        path: '/main/voteDetail',
        component: voteDetail,
        name: 'voteDetail'
      }]
    }]
  }]
})
