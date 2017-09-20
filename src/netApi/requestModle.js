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
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			requestSuccess(xmlhttp.responseText);
		} else {
      requestFail(xmlhttp.responseText);
    }
    requestComplete(xmlhttp.responseText);
	}
  console.log(header);
  // for (var key of Object.keys(header)) {
  //   console.log(key);
  //   //xmlhttp.setRequestHeader(key, header[key]);
  //
  // }
  console.log('openopen------------------');
	xmlhttp.open("POST",url,true);
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  let param = JSON.stringify(data);
  console.log(param);
	xmlhttp.send(param);
  //---------------------------------------------------------------
  // wx.request({
  //   url: url,
  //   data: data,
  //   header: header,
  //   method: 'POST',
  //   dataType: 'txt',
  //   success: function (res) {
  //
  //     let responseData;
  //     let response_code;
  //     try {
  //       responseData = JSON.parse(res.data);
  //       response_code = responseData.retCode;
  //     } catch (e) {
  //       for (let interceptor of interceptors) {
  //         interceptor.onServiceError(url, header, responseData);
  //       }
  //       requestFail('服务器错误的消息格式');
  //       return;
  //     }
  //
  //     if (response_code == 102) {
  //       for (let interceptor of interceptors) {
  //         interceptor.onAutherErrorResponse(url, header, responseData);
  //       }
  //       console.log("身份失效");
  //     } else if (response_code == '0') {
  //       for (let interceptor of interceptors) {
  //         interceptor.onResponse(url, header, responseData);
  //       }
  //       requestSuccess(responseData.retData);
  //     } else {
  //       for (let interceptor of interceptors) {
  //         interceptor.onFaildResponse(url, header, responseData);
  //       }
  //       requestFail(responseData.retMsg);
  //     }
  //   },
  //   fail: function (res) {
  //     for (let interceptor of interceptors) {
  //       interceptor.onFaildResponse(url, header, { retMsg:"网络请求失败"});
  //     }
  //     requestFail("网络请求失败");
  //   },
  //   complete: function (res) {
  //
  //     if (requestComplete != undefined) {
  //       requestComplete(res);
  //     }
  //   },
  // })
}


}
