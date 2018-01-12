<template>
  <div class="content">

    <div class="login">
       <div class="account input_style">
         <input class="input_st" type="text" name="" placeholder="账号" v-model="account">
       </div>
       <div class="password input_style">
         <input class="input_st" type="password"  @focus="passwordFocus" name="" placeholder="密码" v-model="password">
       </div>
       <section class="notice_err_wrap" v-if="password_err">
          <span class="notice_err">{{err}}</span>
       </section>

       <button @click="login" class="login_btn" type="button" name="button">登陆</button>

    </div>
  </div>

</template>

<script>
import md5 from 'js-md5';
import router from '../router'
import progressBar from '../components/progressBar'
export default {
  name: 'login',
  data () {
    let storage = window.localStorage;
    return {
      account: storage.account,
      password: storage.password,
      password_err:false
    }
  },
  components: {
    progressBar
  },
  methods: {
    md5(password) {
      return md5(password);
    },
    passwordFocus() {
      this.password_err = false;
    },
    login () {
      var storage = window.localStorage;
      storage.account = this.account;
      storage.password = this.password;
      let md5passWorld = this.md5(this.password);
      getPromise(urls.loginUrl,{loginName: this.account ,password:md5passWorld })
      .then(value=>{
        router.replace({ path: 'main' })
      }).catch(err=>{
        this.password_err = true;
        this.err = err;
      });

    }
  }
}
</script>

<style lang="scss"  scoped>
  @import "../style/mystyle.scss";
  .content{
    background-image: url('../../static/img/login_background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 768px;
  }

  .login{
    width: 1281px;
    margin: auto;
    height: 637px;
    overflow: hidden;
    border-radius: 10px;
    margin-top: 110px;
    background-image: url('../../static/img/login_background.png');
    padding-top: 190px;
    .input_style{
      height: 50px;
      border: 1px solid #d4d4d4;
      border-radius: 5px;
      width:340px;height:50px;
      margin: auto;
      .input_st{
        border-style: none;
        outline:none;
      }

    }
    .notice_err_wrap{
      height: 1px;
      width: 100%;
      .notice_err{
        color: red;
        font-size: 15px;
        display: inline-block;
        margin-top: 10px;
        float: right;
        margin-right: 470px;
      }
      .notice_err::after{
        clear: both;
        content: '';
        display: block;
      }
    }


    input{
      float:left;
      border:none;
      height:45px;
      line-height:45px;
      width:70%;
      margin-left: 50px;
    }
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px white inset;

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
      background-color:#12669b;

    }
    .login_btn:active{
      position:relative;
      top:1px;
    }
  }



</style>
