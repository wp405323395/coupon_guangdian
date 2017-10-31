 var urls = require('../config.js');
 import RequestEngine from './RequestEngine'

 function login(loginCallBack) {
   //let href = window.location.href;
   let href =
     "https://www.maywidehb.com/webapp/index.html?code=081UhLaK1Ylsz70aUt9K1yvEaK1UhLas&state=123";
   let param = href.split("?")[1];
   let wxcodemap = param.split("&")[0];
   let wxcode = wxcodemap.split("=")[1];
   console.log(urls.loginUrl);
   new RequestEngine().request(urls.loginUrl, {
       loginCode: wxcode
     },
     successValue => {
       console.log('ffffffffffeeeeeeeeeeeeeeffffffffffff');
       console.log(loginCallBack);
       loginCallBack.success(successValue);
     }, failValue => {
       loginCallBack.faild(failValue);
     }, completeValue => {})

 }

 export default login;
