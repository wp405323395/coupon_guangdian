<template>
  <div>
    <el-form label-position="right" label-width="80px" :model="formLabelAlign">
      <el-form-item label="账号">
        <el-input v-model="formLabelAlign.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password"></el-input>
      </el-form-item>
      <el-button @click="login" type="primary">登陆</el-button>
    </el-form>
  </div>
</template>

<script>
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
    login () {
      if (this.formLabelAlign.account && this.formLabelAlign.password) {
        sessionStorage.setItem('token', {account: this.account, password: this.password})
      }

      let redirectUrl = this.$router.history.current.query.redirect
      if (redirectUrl) {
        this.$router.replace({path: redirectUrl})
      } else {
        this.$router.replace({path: '/HelloWorld'})
      }
    }
  }
}
</script>

<style scoped>
</style>
