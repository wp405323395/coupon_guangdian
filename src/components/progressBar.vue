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
@keyframes tipMove{
   0%   { transform: scale(1) }
   35%  { transform: scale(.8) }
   70%  { transform: scale(1.1) }
   100% { transform: scale(1) }
}
.progress{
  position: fixed;
  background:rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pro_center{

}

</style>
