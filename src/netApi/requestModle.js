import Header from './Header.js'
import router from '../router'
export default {
  request(url, data, requestSuccess, requestFail, requestComplete, interceptors) {
      let header = new Header('application/json').getHeader();

      for (let interceptor of interceptors) {
        interceptor.onRequest(url, header, data);
      }

      data = {
        formData: JSON.stringify(data)
      };

      //---------------------------------------------------------------
      let xmlhttp;
      if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
      } else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }

      xmlhttp.onreadystatechange = function() {
        // console.log('readyState = ', xmlhttp.readyState);
        // console.log('status = ' , xmlhttp.status);

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          let responseData;
          try {
            responseData = JSON.parse(xmlhttp.responseText);
          } catch (e) {
            for (let interceptor of interceptors) {
              interceptor.onServiceError(url, header, responseData);
            }
            requestFail('服务器错误的消息格式');
            return;
          }

          switch (responseData.retCode) {
            case '0':
              for (let interceptor of interceptors) {
                interceptor.onResponse(url, header, responseData);
              }
              requestSuccess(responseData.retData);
              break;
            case '102':
              for (let interceptor of interceptors) {
                interceptor.onAutherErrorResponse(url, header, responseData);
              }
              requestFail('登录身份验证不通过');
              router.replace({
                path: 'login'
              })
              break;
            case '101':
              for (let interceptor of interceptors) {
                interceptor.onFaildResponse(url, header, responseData);
              }
              requestFail(responseData.retMsg);
              break;
            default:
              for (let interceptor of interceptors) {
                interceptor.onFaildResponse(url, header, responseData);
              }
              requestFail(responseData.retMsg);
          }
          if (requestComplete != undefined) {
            requestComplete(xmlhttp.responseText);
          }

        } else if (xmlhttp.readyState == 4) {
          for (let interceptor of interceptors) {
            interceptor.onFaildResponse(url, header, {
              retMsg: "网络请求失败"
            });
          }
          requestFail("网络请求失败");
        }


      }

      xmlhttp.open("POST", url, true);
      for (var key of Object.keys(header)) {
        xmlhttp.setRequestHeader(key, header[key]);
      }
      xmlhttp.withCredentials = true;
      let param = JSON.stringify(data);
      xmlhttp.send(param);

      setTimeout(connectFail, 10000);

      function connectFail() {
        if (xmlhttp) {
          xmlhttp.abort();
        }
      }

    },

    requestGet(url, requestSuccess, requestFail, requestComplete,
      interceptors) {
      let header = new Header('application/json').getHeader();

      //---------------------------------------------------------------
      let xmlhttp;
      if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
      } else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }

      xmlhttp.onreadystatechange = function() {
        // console.log('readyState = ', xmlhttp.readyState);
        // console.log('status = ' , xmlhttp.status);

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          let responseData;
          try {
            responseData = JSON.parse(xmlhttp.responseText);
          } catch (e) {
            for (let interceptor of interceptors) {
              interceptor.onServiceError(url, header, responseData);
            }
            requestFail('服务器错误的消息格式');
            return;
          }

          switch (responseData.retCode) {
            case '0':
              for (let interceptor of interceptors) {
                interceptor.onResponse(url, header, responseData);
              }
              requestSuccess(responseData.retData);
              break;
            case '102':
              for (let interceptor of interceptors) {
                interceptor.onAutherErrorResponse(url, header, responseData);
              }
              requestFail('登录身份验证不通过');
              router.replace({
                path: 'welcome'
              })
              break;
            case '101':
              for (let interceptor of interceptors) {
                interceptor.onFaildResponse(url, header, responseData);
              }
              requestFail(responseData.retMsg);
              break;
            default:
              for (let interceptor of interceptors) {
                interceptor.onFaildResponse(url, header, responseData);
              }
              requestFail(responseData.retMsg);
          }
          if (requestComplete != undefined) {
            requestComplete(xmlhttp.responseText);
          }

        } else if (xmlhttp.readyState == 4) {
          for (let interceptor of interceptors) {
            interceptor.onFaildResponse(url, header, {
              retMsg: "网络请求失败"
            });
          }
          requestFail("网络请求失败");
        }
      }
      xmlhttp.open("GET", url, true);
      for (var key of Object.keys(header)) {
        xmlhttp.setRequestHeader(key, header[key]);
      }
      xmlhttp.withCredentials = true;
      xmlhttp.send(null);

      setTimeout(connectFail, 10000);

      function connectFail() {
        if (xmlhttp) {
          xmlhttp.abort();
        }
      }

    }


}
