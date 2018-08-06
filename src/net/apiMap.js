const contextPath = '/api/school'
export const apiMap = {
  index: {
    url: `${contextPath}/news/index`,
    method: 'post'
  },
  regist: {
    url: `/users/signup`,
    method: 'post'
  },
  login: {
    url: `/login`,
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
  addGirlRestFul: {
    url: `${contextPath}/addGirlRestFul/age/{age}/cupSize/{cupSize}`,
    method: 'post'
  },
  addGirl: {
    url: `${contextPath}/addGirl`,
    method: 'post'
  }
}
