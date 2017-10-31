import urls from '../config.js'
function login() {
  let href = window.location.href;
  //let href = "https://www.maywidehb.com/webapp/index.html?code=081UhLaK1Ylsz70aUt9K1yvEaK1UhLas&state=123";
  let param = href.split("?")[1];
  let wxcodemap = param.split("&")[0];
  let wxcode = wxcodemap.split("=")[1];
  new Promise((resolve,reject) => {
    new requestEngine().request(urls.loginUrl,{loginCode: wxcode},
      successValue=>{
        resolve(successValue);
        console.log('success');
      }, failValue=>{
        reject(failValue);
        console.log('faild');
      }, completeValue=>{
      })

  }).then(value=>{

  }).catch(err=>{
    console.log(err);
  });
}

modules.exports = {
  login : login
}
