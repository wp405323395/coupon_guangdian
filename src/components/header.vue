<template lang="html">
  <header class="myHeader">
    <div class="headContent">
      <img class="logo_img" src="../../static/img/head_logo.png" alt="">
      <div class="logout">
        <span class="head_text">用户 {{account}}</span>
        <span class="head_text space">|</span>
        <span class="head_text pointer">退出</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      account: '198982'
    }
  },
  props: []
}
</script>

<style lang="scss" scoped>
  @import "../style/mixin";
  .myHeader{
    width: 100%;
    height: 70px;
    background-color: white;
    text-align: center;
    .pointer{
      cursor: pointer;
    }
    .headContent{
      width: 916px;
      display: flex;
      margin: auto;
      align-items: center;
      justify-content: space-between;
      height: 70px;
      .logo_img{
        width: 455px;
        height:40px;
      }
      .logout{
        display: flex;
        .head_text{
          font-size: 16px;
          color: #333333;
        }
        .space{
          margin-left: 6px;
          margin-right: 6px;
          color: #d6dee2;
        }
      }
    }
  }

</style>
