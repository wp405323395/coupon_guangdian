
import {apiMap} from './apiMap'
var myAxios = require('./myAxios')

export const getIndex = async (data, showLoading = true) => {
  return myAxios.myAxios({
    method: apiMap.index.method,
    url: apiMap.index.url,
    data,
    showLoading
  })
}
export const login = async (data, showLoading = true) => {
  return myAxios.myAxios({
    method: apiMap.login.method,
    url: apiMap.login.url,
    data,
    showLoading
  })
}
