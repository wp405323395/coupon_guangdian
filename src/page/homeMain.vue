<template>
<div class="content">
  <head-top>
  </head-top>
  <navigation-bar class="navgation"></navigation-bar>
  <div class="content2">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>

  </div>

</div>
</template>
<script>
  import headTop from '../components/header'
  import navigationBar from '../components/navigationBar'

  export default {
    data () {
      return {
      }
    },
    components: {
      headTop,
      navigationBar,

    },
  }
</script>
<style lang="scss"  scoped>
.navgation{
  width: 916px;
  margin: auto;
  margin-top: 20px;
}
@import '../style/common';
.router-fade-enter-active, .router-fade-leave-active {
  transition: opacity .1s;
}
.router-fade-enter, .router-fade-leave-active {
  opacity: 0;
}
.content2{
  width: 916px;
  background-color: white;
  margin: auto;
}
.content{
  margin-bottom: 50px;
}
</style>
