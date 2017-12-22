<template>
<div class="content">
  <head-top class="header_top">
  </head-top>

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
  export default {
    data () {
      return {
      }
    },
    components: {
      headTop

    },
  }
</script>
<style lang="scss"  scoped>

@import '../style/common';
.router-fade-enter-active, .router-fade-leave-active {
  transition: opacity .1s;
}
.router-fade-enter, .router-fade-leave-active {
  opacity: 0;
}
.content2{
  width: 1000px;
  background-color: white;
  margin: auto;
}
.content{
  margin-bottom: 50px;
  overflow: hidden;
}
.header_top{
  position: fixed;
  z-index: 20;
}
</style>
