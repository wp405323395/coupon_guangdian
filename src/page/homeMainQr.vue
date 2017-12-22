<template lang="html">
  <section>
    <navigation-qr class="navigationQr">
    </navigation-qr>
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
  z-index: 20;
  top:50px;
}
</style>
