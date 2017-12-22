<template lang="html">
  <section>
    <section class="navigationQr">
      <navigation-qr>
      </navigation-qr>
    </section>
    <section class="detel_content">
      <transition name="router-fade" mode="out-in">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
      </transition>
      <transition name="router-fade" mode="out-in">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
    </section>
  </section>

</template>

<script>
  import navigationQr from '../components/navigationQr'
export default {
  components:{
    navigationQr
  }
}
</script>

<style lang="css">
.navigationQr{
  position: fixed;
  top:50px;
  left: 0;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;

}
.detel_content{
  margin-top: 200px;
}
</style>
