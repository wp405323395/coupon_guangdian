import Interceptor from './Interceptor.js'

class RequestStatusInterceptor extends Interceptor {
  constructor() {
    super()
  }
  onRequest(url, header, data) {
    document.bus.$emit('showProgress', true);
  }
  onResponse(url, header, data) {
    document.bus.$emit('showProgress', false);
  }
  onServiceError(url, header, data) {
    document.bus.$emit('showProgress', false);
  }
  onAutherErrorResponse(url, header, data) {
    document.bus.$emit('showProgress', false);
  }
  onFaildResponse(url, header, data) {
    document.bus.$emit('showProgress', false);
  }
}
export default RequestStatusInterceptor
