import axios from 'axios'
import { Loading, Message } from 'element-ui'
import router from '../router/index'
import autherInterceptor from './interceptors/autherInterceptor'
import loadingInterceptor from './interceptors/loadingInterceptor'
axios.defaults.timeout = 5000 // 设置请求超时时间
autherInterceptor(axios, router)
loadingInterceptor(axios, Loading, Message)
export var myAxios = axios
