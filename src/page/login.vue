<template>
  <div>
    <el-form label-position="right" label-width="80px" :model="formLabelAlign">
      <el-form-item label="账号">
        <el-input v-model="formLabelAlign.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password"></el-input>
      </el-form-item>
      <el-button @click="loginSubmit" type="primary">登陆</el-button>
    </el-form>
    <div style="height:100px;"></div>
        <el-form label-position="right" label-width="80px" :model="formLabelAlign">
      <el-form-item label="账号">
        <el-input v-model="formLabelAlign.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password"></el-input>
      </el-form-item>
      <el-button @click="registSubmit" type="primary">注册</el-button>
    </el-form>

  </div>
</template>

<script>
import { login, regist } from '../net/netApi.js'
import {Button, Form, Input, FormItem} from 'element-ui'
export default {
  data () {
    return {
      key: 'a',
      formLabelAlign: {
        account: '',
        password: ''
      }
    }
  },
  components: {
    'el-form': Form,
    'el-form-item': FormItem,
    'el-input': Input,
    'el-button': Button
  },
  methods: {
    registSubmit () {
      regist({username: this.formLabelAlign.account, password: this.formLabelAlign.password}).then(value => {
        console.log(value)
      }).catch(err => {
        console.log(err)
      })
    },
    loginSubmit () {
      if (this.formLabelAlign.account && this.formLabelAlign.password) {
        sessionStorage.setItem('token', {account: this.account, password: this.password})
      }

      let redirectUrl = this.$router.history.current.query.redirect
      if (redirectUrl) {
        login({username: this.formLabelAlign.account, password: this.formLabelAlign.password})
          .then(value => {
            localStorage.setItem('Authorization', value.headers.authorization)
            this.$router.replace({path: redirectUrl})
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        login({username: this.formLabelAlign.account, password: this.formLabelAlign.password})
          .then(value => {
            localStorage.setItem('Authorization', value.headers.authorization)
            this.$router.replace({path: '/HelloWorld'})
            console.log('登陆成功后返回的数据', value)
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
}
</script>

<style scoped>
</style>
