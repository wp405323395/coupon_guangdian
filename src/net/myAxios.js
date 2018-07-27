
import autherInterceptor from './interceptors/autherInterceptor'
import loadingInterceptor from './interceptors/loadingInterceptor'
import { Loading, Message } from 'element-ui'
const myAxios = (axios, router) => {
  axios.defaults.timeout = 5000 // 设置请求超时时间
  // axios.defaults.baseURL = 'http://localhost:8083/'
  autherInterceptor(axios, router)
  loadingInterceptor(axios, Loading, Message)
  return axios
}
export default myAxios
