
import {apiMap} from './apiMap'
import main from '../main'
export const getIndex = async (data, showLoading = true) => {
  return main.$http({
    method: apiMap.index.method,
    url: apiMap.index.url,
    data,
    showLoading
  })
}
export const login = async (data, showLoading = true) => {
  return main.$http({
    method: apiMap.login.method,
    url: apiMap.login.url,
    data,
    showLoading
  })
}
