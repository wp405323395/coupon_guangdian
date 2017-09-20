const requestModle = require('./requestModle.js')
const config = require('../config.js')
import Interceptor from './interceptor/Interceptor.js'    //引入类
import LogInterceptor from './interceptor/LogInterceptor.js'    //引入类
import RequestStatusInterceptor from './interceptor/RequestStatusInterceptor.js'
class RequestEngine {
  constructor(isShowProgress = true) {
    this.interceptors = [],
      this.isShowProgress = isShowProgress
  }
  addInterceptor(interceptor) {
    this.interceptors.push(interceptor)
  }
  request(url, data, requestSuccess, requestFail, requestComplete) {

    if (config.isDebug ) {
      let logInterceptor = new LogInterceptor()
      this.addInterceptor(logInterceptor)
    }
    if (this.isShowProgress) {
      let status = new RequestStatusInterceptor()
      this.addInterceptor(status)
    }

    requestModle.default.request(url, data, requestSuccess, requestFail, requestComplete, this.interceptors)
  }


}

export default RequestEngine
