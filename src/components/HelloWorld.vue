<template>
  <div class='hello'>
    <h1>{{ msg }}</h1>
    <router-link :to="{name:'demon'}">
      <span>去demon模块</span>
    </router-link><br/>
    <el-button @click="justMsgSubmit" style='margin-top:50px;'>获取服务器数据</el-button>

    <el-card class="box-card" style="width:400px;">
      <div slot="header" class="clearfix">
        <span>获取所有女孩接口</span>
        <el-button @click="getGirlsSubmit" style="float: right; padding: 3px 0" type="text">获取列表</el-button>
      </div>
      <el-table :data="girls" style="width: 100%">
        <el-table-column prop="id" label="id" width="120">
        </el-table-column>
        <el-table-column prop="cupSize" label="cupSize" width="120">
        </el-table-column>
        <el-table-column prop="age" label="age" width="120">
        </el-table-column>
      </el-table>
    </el-card>

    <el-card class="box-card" style="width:400px;">
      <div slot="header" class="clearfix">
        <span>添加对象接口</span>
        <el-button @click="insertGirlSubmit" style="float: right; padding: 3px 0" type="text">添加</el-button>
      </div>
      <el-form :model="form" label-width="80px">
        <el-form-item label="年龄">
          <el-input-number v-model="form.age" :min="1" :max="50" label="输入年龄"></el-input-number>
        </el-form-item>
        <el-form-item label="CpuSize">
          <el-select v-model="form.cupSize" placeholder="选择杯子">
            <el-option label="A杯子" value="A"></el-option>
            <el-option label="B杯子" value="B"></el-option>
            <el-option label="C杯子" value="C"></el-option>
            <el-option label="D杯子" value="D"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { Button, Card, Table, TableColumn, Form, Select, Option, FormItem, Input, InputNumber } from 'element-ui'
import { justMsg, getGirls, addGirl } from '../net/netApi.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      girls: null,
      msg: 'Welcome to Your Vue.js App',
      form: {cupSize: null, age: 0}
    }
  },
  components: {
    'el-button': Button,
    'el-card': Card,
    'el-table': Table,
    'el-table-column': TableColumn,
    'el-form': Form,
    'el-select': Select,
    'el-option': Option,
    'el-form-item': FormItem,
    'el-input': Input,
    'el-input-number': InputNumber
  },
  methods: {
    justMsgSubmit () {
      justMsg()
        .then(value => {
          this.msg = value.data.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    getGirlsSubmit () {
      getGirls()
        .then(value => {
          console.log(value)
          this.girls = value.data.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    insertGirlSubmit () {
      console.log('即将保存的对象：', this.form)
      let girl = {age: this.form.age, cupSize: this.form.cupSize}
      console.log(girl)
      addGirl(girl).then(value => {
        console.log(value)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
.box-card {
    text-align: left;
}
</style>
