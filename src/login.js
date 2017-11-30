 var urls = require('./config.js');
 import RequestEngine from 'netenginwang'

 function login(loginCallBack) {
   let wxcode = this.getQueryString('code');
   new RequestEngine().request(urls.loginUrl, {
       loginCode: wxcode
     },
     successValue => {
       loginCallBack.success(successValue);
     }, failValue => {
       loginCallBack.faild(failValue);
     }, completeValue => {})

 }

 function getQueryString(par) {
   var local_url = document.location.href;
   var get = local_url.indexOf(par + "=");
   if (get == -1) {
     return false;
   }
   var get_par = local_url.slice(par.length + get + 1);
   var nextPar = get_par.indexOf("&");
   if (nextPar != -1) {
     get_par = get_par.slice(0, nextPar);
   }
   return get_par;
 }

 export default login;
