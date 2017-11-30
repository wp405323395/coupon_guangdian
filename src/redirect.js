if (process.env.NODE_ENV === 'production') {
  let loadcount = sessionStorage.getItem('loadNum');
  if (loadcount == undefined || loadcount == null || loadcount == '') {
    sessionStorage.setItem('loadNum', 1);
  }

  let href = window.location.href;
  if (href.indexOf('welcome') >= 0) {} else if (href.indexOf('sharByWx')) {
    alert('来自微信分享-', window.location);
    // let weixinUrl =
    //   'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5d63c4a1990efe79&+redirect_uri=' +
    //   'https%3a%2f%2fwww.maywidehb.com%2fwebapp%2fdist%2f%23%2fwelcome%3froutepath%3dgame%26json%3d%257b%2522tvId%2522%253a2%257d&' +
    //   'response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect';
    window.location = weixinUrl;
  } else {
    let startRefreshCount = sessionStorage.getItem('loadNum');
    if (startRefreshCount < 2) {
      sessionStorage.setItem('loadNum', 3);
      let weixinUrl =
        'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5d63c4a1990efe79&+redirect_uri=' +
        'https%3a%2f%2fwww.maywidehb.com%2fwebapp%2fdist%2f%23%2fwelcome%3froutepath%3dgame%26json%3d%257b%2522tvId%2522%253a2%257d&' +
        'response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect';
      window.location = weixinUrl;
    }

  }
}
