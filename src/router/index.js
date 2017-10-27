import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'
import main from '@/page/homeMain'
import createVote from '@/page/createVote'
import voteList from '@/page/voteList'
import voteDetail from '@/page/voteDetail'
import index from '@/page/index'
import tvProgram from '@/page/tvProgram'
// import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: App,
      children: [
        {
          path: '',
          redirect: '/index',
          name:'往期回顾'
        },
        {
          path: '/index',
          component: index,
          name:'往期回顾'
        },
        {
          path: '/tvProgram',
          component: tvProgram,
          name:'电视节目'
        },
        {
          path: '/main/',
          component: main,
          children: [
            {
              path: '/',
              component: voteList,
              name: 'homeMain'
            },
            {
              path: '/main/createVote',
              component: createVote,
              name: 'createVote'
            },
            {
              path: '/main/voteDetail',
              component: voteDetail,
              name: 'voteDetail'
            }
          ]
        }
      ]
    }
  ]
})
