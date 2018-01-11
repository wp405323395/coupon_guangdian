import Interceptor from './Interceptor.js'
import router from '../../router';
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
    router.replace({
      path: '/login',
      params: {}
    });
    document.bus.$emit('showProgress', false);
  }
  onFaildResponse(url, header, data) {
    document.bus.$emit('showProgress', false);
  }
}
export default RequestStatusInterceptor
