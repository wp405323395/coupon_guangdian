// >>>>>>>>>>>>>>>> 添加RestfulApi  >>>>>>>>>>>>>>>>>>>>>>
// http request 请求拦截器.
export default (axios) => {
  axios.interceptors.request.use(
    config => {
      let url = config.url
      let data = config.data
      var pa
      if (url.indexOf('{') > 0 && url.indexOf('}') > 0) {
        for (pa in data) {
          url = url.replace(`{${pa}}`, data[pa])
        }
      }
      config.url = url
      config.data = null
      return config
    },
    err => {
      return Promise.reject(err)
    })
}

// <<<<<<<<<<<<<<<< 添加RestfulApi <<<<<<<<<<<<<<<
