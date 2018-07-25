<template>
  <section style="color: white;">

    <el-container style="background-color: black;">
      <el-aside style="background-color: green;" width="200px">Aside</el-aside>
      <el-container>
        <el-header style="background-color: #0080ff;">Header</el-header>
        <el-main style="background-color: #80ff00;">Main6</el-main>
    </el-container>
    </el-container>

  </section>
</template>

<script>
import { Container, Header, Aside, Main, Footer } from 'element-ui'
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
