import Interceptor from './Interceptor.js'

class RequestStatusInterceptor extends Interceptor {
  constructor() {
    super()
  }
  onRequest(url, header, data) {
    window.eventHub.$emit('progress', true);
  }
  onResponse(url, header, data) {
    window.eventHub.$emit('progress', false);
  }
  onServiceError(url, header, data) {
    window.eventHub.$emit('progress', false);
  }
  onAutherErrorResponse(url, header, data) {
    window.eventHub.$emit('progress', false);
  }
  onFaildResponse(url, header, data) {
    window.eventHub.$emit('progress', false);
  }
}
export default RequestStatusInterceptor
