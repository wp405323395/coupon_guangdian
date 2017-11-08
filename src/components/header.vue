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
import RequestEngine from 'netenginwang'
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
        new RequestEngine().request(urls.doLogout,{},
          successValue=>{
            resolve(successValue);
          }, failValue=>{
            reject(failValue);
          }, completeValue=>{

          })
      }).then(value=>{
        router.replace({ name: 'App' })
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
