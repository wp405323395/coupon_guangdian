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
    window.eventHub.$emit('isrequestfaild', [true, data]);
  }
  onAutherErrorResponse(url, header, data) {
    window.eventHub.$emit('progress', false);
    window.eventHub.$emit('isrequestfaild', [true, data]);
  }
  onFaildResponse(url, header, data) {
    window.eventHub.$emit('progress', false);
    window.eventHub.$emit('isrequestfaild', [true, data]);
  }
}
export default RequestStatusInterceptor
