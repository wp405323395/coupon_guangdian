<template>
  <section style="color: white;">
    <el-container style="background-color: yellow;">

      <el-header style="background-color: green;">
        <span>el-header</span>
      </el-header>

      <el-aside  style="background-color: black;">
        <span>el-aside</span>
      </el-aside>

      <el-main  style="background-color: red;">
        <span>el-main</span>
      </el-main>

      <el-footer style="background-color: blue;">
        <span>el-footer</span>
      </el-footer>

    </el-container>

  </section>
</template>

<script>
import {Container, Header, Aside, Main, Footer} from 'element-ui'
export default {
  data () {
    return {
      fullscreenLoading: false
    }
  },
  components: {
    'el-container': Container,
    'el-header': Header,
    'el-aside': Aside,
    'el-main': Main,
    'el-footer': Footer
  }
}
</script>
