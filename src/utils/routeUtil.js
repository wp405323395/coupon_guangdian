import wx from 'weixin-js-sdk'

function routeProcess({
  jsonDate,
  title = '橘子剧迷之家',
    desc = '橘子剧迷之家',
    imgUrl =
    "https://www.maywidehb.com/webapp/dist/static/img/appicon.jpg",
    success,
    cancel
}) {
  let sharUrl = window.location.href + "&json=" + encodeURIComponent(JSON
    .stringify(jsonDate));
  alert(sharUrl);
  console.log('注入转发------>', jsonDate);
  console.log('注入转发------>', title);
  console.log('注入转发------>', desc);
  console.log('注入转发------>', imgUrl);
  wx.onMenuShareAppMessage({
    title: title, // 分享标题
    desc: desc, // 分享描述
    link: sharUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: imgUrl, // 分享图标
    type: '', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: success,
    cancel: cancel
  });
}

function textIsNull(str) {
  if (str === null || str === undefined || str === '' || str === 'undefined') {
    return true
  }
  return false
}

export {
  textIsNull, routeProcess
};
