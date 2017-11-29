if (process.env.NODE_ENV === 'production') {
  let urls = require("./config")
  let RequestEngine = require('netenginwang');

  new Promise((resolve, reject) => {
    new RequestEngine().request(urls.wxJsSDK, {
        "url": location.href
      },
      successValue => {
        resolve(successValue);
      }, failValue => {
        reject(failValue);
      }, completeValue => {})
  }).then(value => {
    wx.config({
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: value.appId, // 必填，公众号的唯一标识
      timestamp: value.timestamp, // 必填，生成签名的时间戳
      nonceStr: value.nonceStr, // 必填，生成签名的随机串
      signature: value.signature, // 必填，签名，见附录1
      jsApiList: [
          "onMenuShareTimeline", //分享朋友圈接口
          "onMenuShareAppMessage" //分享给朋友接口
        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
  }).catch(err => {

  });

  wx.ready(function() {

    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。

  });
  wx.error(function(res) {

    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。

  });
  wx.checkJsApi({

    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,

    success: function(res) {

      // 以键值对的形式返回，可用的api值true，不可用为false

      // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}

    }

  });
  wx.onMenuShareAppMessage({
    title: '自定义分享标题', // 分享标题
    desc: '自定义分享描述', // 分享描述
    link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: require('../static/img/appicon.jpg'), // 分享图标
    type: '', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function() {
      // 用户确认分享后执行的回调函数
    },
    cancel: function() {
      // 用户取消分享后执行的回调函数
    }
  });
}
