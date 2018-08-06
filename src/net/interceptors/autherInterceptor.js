// >>>>>>>>>>>>>>>> 添加Auther 权限判断 >>>>>>>>>>>>>>>>>>>>>>
// http request 请求拦截器，有token值则配置上token值
export default (axios, router) => {
  axios.interceptors.request.use(
    config => {
      let token = localStorage.getItem('authorization-token')
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
}

// <<<<<<<<<<<<<<<< 添加Auther 权限判断 <<<<<<<<<<<<<<<
