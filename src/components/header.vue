<template lang="html">
  <header class="myHeader">
    <div class="headContent">
      <img class="logo_img" src="../../static/img/head_logo.png" alt="">
      <div class="logout">
        <div class="head_text hove_modify_password">
          <span class="acount_style">用户 {{account}}</span>
          <img src="../../static/img/cursor_down.png" alt="">
          <div class="modify_password">
            <span>
              <router-link :to="{ name: 'changePassword', params: {}}">
                修改密码
              </router-link>
            </span>
          </div>
        </div>
        <span class="head_text space">|</span>
        <span @click="logoutClick" class="head_text pointer">退出登录</span>
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
    height: 50px;
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
      height: 50px;

      .logo_img{
        width: 241px;
        height:25px;
      }
      .logout{
        display: flex;
        .head_text{
          font-size: 14px;
          color: white;
          .acount_style{
            color: white;
          }
          .modify_password{
            height: 0px;
            overflow: visible;
            span{
              display: block;
              background: white;
              padding: 5px 20px;
              font-size: 14px;
              visibility: hidden;
              color: #333333;
              box-shadow: 2px 5px 10px #3e4fb5;
            }
            span:hover{
              visibility: visible;
              cursor: pointer;
            }
          }
        }
        .hove_modify_password:hover {
          span{
            visibility: visible;
          }
        }

        .space{
          margin-left: 16px;
          margin-right: 10px;
          color: #8a96de;
        }
      }
    }
  }

</style>
