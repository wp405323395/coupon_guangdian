<template lang="html">
  <header class="myHeader">
    <div class="headContent">
      <img class="logo_img" src="../../static/img/head_logo.png" alt="">
      <div class="logout">
        <span class="head_text">用户 <span>{{account}}</span> </span>
        <span class="head_text space">|</span>
        <span @click="logoutClick" class="head_text pointer">退出</span>
      </div>
    </div>
  </header>
</template>

<script>
import requestEngine from '../netApi/requestEngine'
import router from '../router'
import urls from '../config.js'
export default {
  data () {
    var storage = window.localStorage;

    return {
      account: storage.account
    }
  },
  props: [],
  methods: {
    logoutClick () {
      new Promise((resolve, reject)=>{
        new requestEngine().request(urls.doLogout,{},
          successValue=>{
            resolve(successValue);
          }, failValue=>{
            reject(failValue);
          }, completeValue=>{

          })
      }).then(value=>{
        router.replace({ name: 'login' })
      }).catch(err=>{})
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../style/mixin";
  .myHeader{
    width: 100%;
    height: 70px;
    background-image: url('../../static/svg/header_bar_background.svg');
    background-size: cover;
    text-align: center;
    box-shadow: 0px 3px 10px #d4d4d4;
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
          color: #999999;
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
