// >>>>>>>> 添加element-ui 的loading >>>>>>>>>>>>
export default (axios, Loading, Message) => {
  var loadinginstace
  axios.interceptors.request.use(config => {
    if (config.showLoading) {
      loadinginstace = Loading.service({
        body: true,
        fullscreen: true,
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    }

    return config
  }, error => {
    loadinginstace.close()
    Message.error({
      message: '加载超时'
    })
    return Promise.reject(error)
  })

  axios.interceptors.response.use(data => {
    if (data.config.showLoading) {
      loadinginstace.close()
    }

    return data
  }, error => {
    if (error.config.showLoading) {
      loadinginstace.close()
    }

    Message.error({
      message: '加载失败'
    })
    return Promise.reject(error)
  })
}
// <<<<<<<<<<<<<<< 添加element-ui 的loading <<<<<<<<<<<<<<<<<
