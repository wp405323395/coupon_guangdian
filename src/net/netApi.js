
var myAxios = require('./myAxios')
const host = 'localhost'
const schema = 'http'
const port = 8081
const contextPath = 'root'
export const netApi = {
  index: {
    url: `${schema}://${host}:${port}/${contextPath}/news/index`,
    method: 'post'
  },
  login: {
    url: `${schema}://${host}:${port}/${contextPath}/login`,
    method: 'post'
  }
}

export const getIndex = async (data) => {
  return myAxios.myAxios({
    method: netApi.index.method,
    url: netApi.index.url,
    data
  })
}
export const login = async (data) => {
  console.log('神奇', myAxios)
  return myAxios.myAxios({
    method: netApi.login.method,
    url: netApi.login.url,
    data
  })
}
