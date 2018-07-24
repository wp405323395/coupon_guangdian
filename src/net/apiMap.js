const host = 'localhost'
const schema = 'http'
const port = 8081
const contextPath = 'root'
export const apiMap = {
  index: {
    url: `${schema}://${host}:${port}/${contextPath}/news/index`,
    method: 'post'
  },
  login: {
    url: `${schema}://${host}:${port}/${contextPath}/login`,
    method: 'post'
  }
}
