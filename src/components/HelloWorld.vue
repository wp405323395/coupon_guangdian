<template>
  <div class='hello'>
    <h1>{{ msg }}</h1>
    <router-link :to="{name:'demon'}">
      <span>去demon模块</span>
    </router-link><br/>
    <el-button @click="getGirlsSubmit" style='margin-top:50px;'>获取服务器数据</el-button>
  </div>
</template>

<script>
import { Button } from 'element-ui'
import { justMsg } from '../net/netApi.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'el-button': Button
  },
  methods: {
    getGirlsSubmit () {
      justMsg().then(value => {
        this.msg = value.data.data
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
</style>
