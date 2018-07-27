const contextPath = 'school'
export const apiMap = {
  index: {
    url: `${contextPath}/news/index`,
    method: 'post'
  },
  login: {
    url: `${contextPath}/login`,
    method: 'post'
  },
  getGirls: {
    url: `${contextPath}/girls`,
    method: 'get'
  },
  justMsg: {
    url: `${contextPath}/getMsg`,
    method: 'get'
  },
  addGirl: {
    url: `${contextPath}/addGirl`,
    method: 'post'
  }
}
