if (process.env.NODE_ENV === 'production') {
  let loadcount = sessionStorage.getItem('loadNum');
  if (loadcount == undefined || loadcount == null || loadcount == '') {
    sessionStorage.setItem('loadNum', 1);
  }

  let href = window.location.href;
  if (href.indexOf('welcome') >= 0) {} else {
    let startRefreshCount = sessionStorage.getItem('loadNum');
    if (startRefreshCount < 2) {
      sessionStorage.setItem('loadNum', 3);
      let weixinUrl =
        'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5d63c4a1990efe79&redirect_uri=https%3a%2f%2fwww.maywidehb.com%2fwebapp%2fdist%2f%23%2fwelcome&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect';
      window.location = weixinUrl;
    }

  }
}
