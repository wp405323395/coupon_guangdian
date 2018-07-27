// >>>>>>>>>>>>>>>> 添加BusinessError  >>>>>>>>>>>>>>>>>>>>>>
// http response 返回拦截器.
export default (axios, Message) => {
  axios.interceptors.response.use(
    config => {
      if (config.data.code === -1) {
        Message.error({
          message: '请求失败了，也不知道什么原因'
        })
      }
      return config
    },
    err => {
      return Promise.reject(err)
    })
}

// <<<<<<<<<<<<<<<< 添加BusinessError <<<<<<<<<<<<<<<
