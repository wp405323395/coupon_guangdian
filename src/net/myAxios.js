import axios from 'axios'
import { Loading, Message } from 'element-ui'
import router from '../router/index'
axios.defaults.timeout = 5000 // 设置请求超时时间

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

// http request 请求拦截器，有token值则配置上token值
axios.interceptors.request.use(
  config => {
    let token = 'xxx'
    if (token) { // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
      config.headers.Authorization = token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 这里写清除token的代码
          router.replace({
            path: 'login',
            query: {redirect: router.currentRoute.fullPath}// 登录成功后跳入浏览的当前页面
          })
      }
    }
    return Promise.reject(error)
  })

export var myAxios = axios
