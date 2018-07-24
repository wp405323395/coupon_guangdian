<template>
  <section>
    <el-button type='primary' @click='openFullScreen2'>
      服务方式
    </el-button>
  </section>

</template>

<script>

import {Button, Loading} from 'element-ui'

export default {
  data () {
    return {
      fullscreenLoading: false
    }
  },
  components: {
    'el-button': Button
  },
  methods: {
    openFullScreen () {
      this.fullscreenLoading = true
      setTimeout(() => {
        this.fullscreenLoading = false
      }, 2000)
    },
    openFullScreen2 () {
      const loading = Loading.service({
        lock: true,
        text: 'Loading',
        body: true,
        fullscreen: true,
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      setTimeout(() => {
        loading.close()
      }, 2000)
    }
  }
}
</script>
