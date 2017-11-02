 var urls = require('../config.js');
 import RequestEngine from './RequestEngine'

 function login(loginCallBack) {
   let href = window.location.href;
   console.log(href);
   window.alertDialog(href);
   //  if (href.indexOf('code=') >= 0) {
   //
   //  } else {
   //    let weixinUrl =
   //      'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe7b477d2ec9d54ec&redirect_uri=https%3a%2f%2fwww.maywidehb.com%2fwebapp%2fdist%2f%23%2fwelcome&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect';
   //    window.location.replace(weixinUrl);
   //    return;
   //  }
   //  let href =
   //    "https://www.maywidehb.com/webapp/index.html?code=081UhLaK1Ylsz70aUt9K1yvEaK1UhLas&state=123";
   //  let param = href.split("?")[1];
   //  let wxcodemap = param.split("&")[0];
   //  let wxcode = wxcodemap.split("=")[1];
   //  new RequestEngine().request(urls.loginUrl, {
   //      loginCode: wxcode
   //    },
   //    successValue => {
   //      loginCallBack.success(successValue);
   //    }, failValue => {
   //      loginCallBack.faild(failValue);
   //    }, completeValue => {})

 }

 export default login;
