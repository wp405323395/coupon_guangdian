import axios from 'axios'
import { Loading, Message } from 'element-ui'
axios.defaults.timeout = 5000

var loadinginstace
axios.interceptors.request.use(config => {
  // element ui Loading方法
  console.log('进入请求请求拦截器')
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
// http响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
  console.log('进入response请求拦截器')
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
