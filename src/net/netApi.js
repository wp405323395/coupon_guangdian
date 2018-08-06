
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
export const getGirls = async (data, showLoading = true) => {
  return main.$http({
    method: apiMap.getGirls.method,
    url: apiMap.getGirls.url,
    data,
    showLoading
  })
}
export const justMsg = async (data, showLoading = true) => {
  return main.$http({
    method: apiMap.justMsg.method,
    url: apiMap.justMsg.url,
    data,
    showLoading
  })
}
export const addGirlRestFul = async (data, showLoading = true) => {
  return main.$http({
    method: apiMap.addGirlRestFul.method,
    url: apiMap.addGirlRestFul.url,
    headers: {'Content-Type': 'application/json;charset=UTF-8'},
    data,
    showLoading
  })
}

export const addGirl = async (data, showLoading = true) => {
  return main.$http({
    method: apiMap.addGirl.method,
    url: apiMap.addGirl.url,
    data,
    showLoading
  })
}

export const regist = async (data, showLoading = true) => {
  return main.$http({
    method: apiMap.regist.method,
    url: apiMap.regist.url,
    data,
    showLoading
  })
}
