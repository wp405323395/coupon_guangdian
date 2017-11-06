 var urls = require('../config.js');
 import RequestEngine from './RequestEngine'

 function login(loginCallBack) {
   let href = window.location.href;
   let param = href.split("?")[1];
   let wxcodemap = param.split("&")[0];
   let wxcode = wxcodemap.split("=")[1];
   new RequestEngine().request(urls.loginUrl, {
       loginCode: wxcode
     },
     successValue => {
       loginCallBack.success(successValue);
     }, failValue => {
       loginCallBack.faild(failValue);
     }, completeValue => {})

 }

 export default login;
