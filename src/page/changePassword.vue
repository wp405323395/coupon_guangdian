<template lang="html">
  <div>
    <section class="change">
      <div class="title">
        <span class = "titlememo">修改密码</span>
      </div>
      <div class="boderline"></div>
      <div class="table">
        <div class="input_style">
          <span>旧密码</span>
          <input class="oldpassword input_st" type="password"  name="" placeholder="请输入旧密码" v-model="oldpassword">
        </div>
        <div class="input_style">
          <span>新密码</span>
          <input class="newpassword1 input_st" type="password" name="" placeholder="请输入新密码" v-model="newpassword1">
        </div>
        <div class="input_style">
          <span>新密码</span>
          <input class="newpassword2 input_st" type="password" name="" placeholder="请再次输入新密码" v-model="newpassword2">
        </div>
        <section class="notice_err_wrap" v-if="password_err">
           <span class="notice_err">密码输入不一致，请重新输入</span>
        </section>
        <section class="notice_err_wrap" v-if="password_err2">
           <span class="notice_err">{{errmsg}}</span>
        </section>
        <button @click="changePassword" class="changePassword_btr" type="button" name="button">确认修改</button>
        <div class="success_icon" v-if="success_success">
          <img src="../../static/img/changeSuccess.png" class="successimg">
          <span class="successmemo">修改成功</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import md5 from 'js-md5';
import router from '../router'
import requestEngine from '../netApi/requestEngine'
import progressBar from '../components/progressBar'
import urls from '../config.js'
export default {
  name: 'changePassword',
  data () {
    let storage = window.localStorage;
    return {
      oldpassword: storage.oldpassword,
      newpassword1: storage.newpassword1,
      newpassword2: storage.newpassword2,
      password_err:false,
      password_err2:false,
      success_success:false
      // let md5passWorld = this.md5(this.password);
    }
  },
  components: {
    progressBar
  },
  methods: {
    md5(password) {
      return md5(password);
    },
    changePassword () {
      this.password_err = false;
      this.password_err2 = false;
      let that = this;
      let oldmd5passWorld = this.md5(this.oldpassword);
      let newmd5passWorld = this.md5(this.newpassword2);
      if (this.newpassword1 == this.newpassword2){
          new requestEngine().request(urls.editPassword,{oldPassword: oldmd5passWorld ,newPassword:newmd5passWorld },
            successValue=>{
              setTimeout(()=>{
                new requestEngine().request(urls.doLogout, {},
                  successValue=>{
                    router.replace({name:"login"})
                  }, failValue=>{
                  }, completeValue=>{
                  })
              },1000)
              that.success_success = true;
            }, failValue=>{
              that.errmsg = failValue;
              that.password_err2 = true;
            }, completeValue=>{
            });
      } else{
        this.password_err = true;
      }
    }
  }
}
</script>

<style lang="css">
  .change{
    height: 680px;
    margin-top: 100px;
  }
  .title{
    height: 92px;
    padding-top: 30px;
    padding-left: 30px;
    padding-bottom: 20px;
  }
  .titlememo{
    font-size: 32px;
    color: #666666;
  }
  .boderline{
    width:940px;
    height:1px;
    margin:0px auto;
    padding:0px;
    background-color:#D4D4D4;
    overflow:hidden;
  }
  .table{
    height: 600px;
    padding: 60px;
  }
  .password{

  }
  .input_style{
    height: 50px;
    width: 480px;
    margin:auto;
    margin-bottom: 20px;
  }
  input[type="password"]:focus {
    border: 1px solid #3e4fb5;
  }
  .input_st{
    border: 1px solid #ced3e4;
    border-radius: 4px;
    width:380px;
    height:50px;
    margin-left: 30px;
    padding-left: 20px;
    font-size: 20px;
  }
  .changePassword_btr{
    display: block;
    width: 380px;
    cursor: pointer;
    background: url('../../static/svg/header_bar_background.svg') no-repeat,white;
    color: white;
    height: 50px;
    font-size: 20px;
    margin: auto;
    margin-top: 60px;
    margin-right: 205px;
    box-shadow: 0px 5px 10px #abc5e4;
  }
  .changePassword_btr:active{
    position:relative;
    top:1px;
  }
  .notice_err_wrap{
    height: 1px;
    width: 100%;
  }
  .notice_err{
    color: #ff5d5d;
    font-size: 12px;
    /* display: inline-block; */
    margin-top: -15px;
    float: left;
    margin-left: 295px;
  }
  .notice_err::after{
    clear: both;
    content: '';
    display: block;
  }
  .success_icon{
    background-color: black;
    height: 100px;
    width: 380px;
    margin: auto;
    margin-top: -250px;
    margin-right: 205px;
    opacity:0.6;
    border-radius: 4px;
    text-align: center;
  }
  .successimg{
    padding-top: 20px;
  }
  .successmemo{
    font-size: 24px;
    color: white;
    margin-left: 30px;
    display: inline-block;
    transform: translateY(-20px);
  }

</style>
