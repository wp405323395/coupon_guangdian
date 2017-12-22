import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login'
import main from '@/page/homeMain'
import createVote from '@/page/createVote'
import voteList from '@/page/voteList'
import voteDetail from '@/page/voteDetail'
import model from '@/page/model'
import changePassword from '@/page/changePassword'
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
        path: '/main/voteDetail',
        component: voteDetail,
        name: 'voteDetail'
      }]
    }]
  }]
})
