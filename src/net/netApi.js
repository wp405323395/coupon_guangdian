
import {apiMap} from './apiMap'
var myAxios = require('./myAxios')

export const getIndex = async (data) => {
  return myAxios.myAxios({
    method: apiMap.index.method,
    url: apiMap.index.url,
    data
  })
}
export const login = async (data) => {
  console.log('神奇', apiMap)
  return myAxios.myAxios({
    method: apiMap.login.method,
    url: apiMap.login.url,
    data
  })
}
