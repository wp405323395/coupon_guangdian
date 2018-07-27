const host = 'localhost'
const schema = 'http'
const port = 8083
const contextPath = 'school'
export const apiMap = {
  index: {
    url: `${schema}://${host}:${port}/${contextPath}/news/index`,
    method: 'post'
  },
  login: {
    url: `${schema}://${host}:${port}/${contextPath}/login`,
    method: 'post'
  },
  getGirls: {
    url: `${schema}://${host}:${port}/${contextPath}/girls`,
    method: 'get'
  },
  justMsg: {
    url: `${schema}://${host}:${port}/${contextPath}/getMsg`,
    method: 'get'
  },
  addGirl: {
    url: `${schema}://${host}:${port}/${contextPath}/addGirl`,
    method: 'post'
  }
}
