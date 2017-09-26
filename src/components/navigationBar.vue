<template lang="html">
  <div class="header_wrap">
    <ul>
      <li v-for="(nav, index) in currentRoute" @click="goBack(currentRoute.length -1 - index)">{{nav}}</li>
    </ul>
  </div>
</template>

<script>
import router from '../router'
export default {
  data () {
    return {
      router: router
    }
  },
  methods: {
    goBack (index) {
      if (index !== 0) {
        router.go(-index)
      }
    }
  },
  computed: {
    currentRoute: function () {
      let routers = router.history.current.fullPath.substring(1).split('/')
      let routerName = []
      for (let rou of routers) {
        switch (rou) {
          case 'main':
            routerName.push('主页')
            break
          case 'createVote':
            routerName.push('创建新项目')
            break
          case 'voteDetail':
            routerName.push('详情')
            break
          default:

        }
      }
      return routerName
    }
  }

}
</script>

<style lang="scss"  scoped>
  .header_wrap{
    background-color: #017bc8;
    width: 916px;
    height: 50px;
    ul{
      margin-left: 70px;
      li{
        font-size: 20px;
        float: left;
        color: white;
        line-height: 50px;
        padding-right: 10px;
        cursor: pointer;
      }
      li::after{
        content: '>';
        padding-left:10px;
      }
      li:last-child::after{
        content: '';
      }
    }
  }

</style>
