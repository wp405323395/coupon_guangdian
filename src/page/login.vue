<template>
  <div class="content">
    <progress-bar v-if="isShowProgress"></progress-bar>
    <img class="logo" src="../../static/img/guangdian_logo.png" alt="">

    <div class="login">
       <h1>绩效考核后台管理系统</h1>
       <div class="line"></div>
       <div class="account input_style">
         <input type="text" name="" placeholder="账号" v-model="account">
       </div>
       <div class="password input_style">
         <input type="password" name="" placeholder="密码" v-model="password">
       </div>
       <button @click="login" class="login_btn" type="button" name="button">登陆</button>
    </div>
  </div>

</template>

<script>
import router from '../router'
import requestEngine from '../netApi/requestEngine'
import progressBar from '../components/progressBar'
import urls from '../config.js'
export default {
  name: 'login',
  data () {
    let storage = window.localStorage;
    return {
      account: storage.account,
      password: storage.password,
      isShowProgress:false
    }
  },
  components: {
    progressBar
  },
  methods: {
    login () {
      this.isShowProgress = true;
      var storage = window.localStorage;
      storage.account = this.account;
      storage.password = this.password;
      new Promise((resolve, reject) => {
        // url, data, requestSuccess, requestFail, requestComplete
        new requestEngine().request(urls.loginUrl,{loginName: this.account ,password:this.password },
          successValue=>{
            resolve(successValue);
          }, failValue=>{
            reject(failValue);
          }, completeValue=>{

          })
      }).then(value => {
        this.isShowProgress = false;
        router.replace({ path: 'main' })
      }).catch(err => {
        this.isShowProgress = false;
      })

    }
  }
}
</script>

<style lang="scss"  scoped>
  @import "../style/mystyle.scss";
  .content{
    background-image: url('../../static/img/login_background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 700px;

  }

  .logo{
    margin-top: 130px;
    transform: translate(-87px);
    margin-bottom: 20px;
  }
  .login{
    background-color: #f2f0f1;
    width: 400px;
    margin: auto;
    height: 370px;
    margin-top: 0px;
    overflow: hidden;
    border-radius: 10px;
    opacity: 0.9;

    h1{
      font-size: 25px;
      margin-top: 20px;
      margin-bottom: 20px;
      display: block;
      box-sizing: border-box;
      letter-spacing: 5px;
    }
    .line{
      height: 1px;
      background-color: black;
      width: 100%;
      margin-bottom: 45px;
    }
    .input_style{
      height: 50px;
      border: 1px solid gray;
      border-radius: 5px;
      width:340px;height:45px;
      margin: auto;
    }
    input{
      float:left;
      border:none;background:none;height:45px;line-height:45px;width:100%; text-indent:50px;
    }
    .account{
      margin-top: 20px;
      background: url('../../static/svg/account.svg') no-repeat,white;
      background-size:25px 25px;
      background-position: 10px center;
    }
    .password{
      margin-top: 30px;
      background: url('../../static/svg/password_icon.svg') no-repeat,white;
      background-size:25px 25px;
      background-position: 10px center;
    }
    .login_btn{
      display: block;
      width: 340px;
      cursor: pointer;
      background-color: #017bc8;
      color: white;
      height: 50px;
      font-size: 18px;
      border-radius: 5px;
      margin: auto;
      margin-top: 40px;
    }
    .login_btn:hover{
      background-color:blue;
    }
    .login_btn:active{
      position:relative;
      top:1px;
    }
  }



</style>
