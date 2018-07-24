import axios from 'axios'
import { Loading, Message } from 'element-ui'
axios.defaults.timeout = 5000

var loadinginstace
axios.interceptors.request.use(config => {
  loadinginstace = Loading.service({
    body: true,
    fullscreen: true,
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  return config
}, error => {
  loadinginstace.close()
  Message.error({
    message: '加载超时'
  })
  return Promise.reject(error)
})

axios.interceptors.response.use(data => {
  loadinginstace.close()
  return data
}, error => {
  loadinginstace.close()
  Message.error({
    message: '加载失败'
  })
  return Promise.reject(error)
})

export var myAxios = axios
