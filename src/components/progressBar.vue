<template lang="html">
  <div class="progress">
    <img class="pro_center" src="../../static/img/loading.gif" alt="">
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">

.progress{
  position: fixed;
  background:rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20000000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

</style>
