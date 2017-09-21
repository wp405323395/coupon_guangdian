import Header from './Header.js'
export default {
request (url, data, requestSuccess, requestFail, requestComplete, interceptors) {
  let header = new Header('application/json').getHeader();

  for (let interceptor of interceptors) {
    interceptor.onRequest(url, header, data);
  }

  data = { formData: JSON.stringify(data) };

  //---------------------------------------------------------------
  let xmlhttp;
	if (window.XMLHttpRequest)
	{
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange=function()
	{
    // console.log('readyState = ', xmlhttp.readyState);
    // console.log('status = ' , xmlhttp.status);
    let cooke = xmlhttp.getResponseHeader('Set-Cookie');
    console.log(xmlhttp.getAllResponseHeaders());
    console.log(cooke);
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
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

      switch (responseData.code) {
        case '0':
          for (let interceptor of interceptors) {
            interceptor.onResponse(url, header, responseData);
          }
          requestSuccess(xmlhttp.responseText);
        case '101':
          for (let interceptor of interceptors) {
            interceptor.onAutherErrorResponse(url, header, responseData);
          }
          break;
        default :
          for (let interceptor of interceptors) {
            interceptor.onFaildResponse(url, header, responseData);
          }
          requestFail(responseData.retMsg);
         }


		} else if (xmlhttp.readyState==4) {
      for (let interceptor of interceptors) {
        interceptor.onFaildResponse(url, header, { retMsg:"网络请求失败"});
      }
      requestFail("网络请求失败");
    }
    if (requestComplete != undefined) {
      requestComplete(xmlhttp.responseText);
    }

	}

  xmlhttp.open("POST",url,true);
  for (var key of Object.keys(header)) {
    xmlhttp.setRequestHeader(key, header[key]);
  }
  let param = JSON.stringify(data);
	xmlhttp.send(param);
}


}
