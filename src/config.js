var host = "www.maywidehb.com"
  //var host = '192.168.1.170:8080';
var isHttps = true;
var isDebug = true;
var schema = isHttps ? 'https' : 'http';
var timeOut = 10000; //设置请求超时时间
var config = {
  // 下面的地址配合云端 Server 工作
  host,
  timeOut,
  isDebug,
  srcUrl: `${schema}://${host}/`,
    // 登录地址，用于建立会话
    loginUrl: `${schema}://${host}/wappweb/tvinteract/tv-interact!login`,
    queTvThemeList:
    `${schema}://${host}/wappweb/tvinteract/tv-interact!queTvThemeList`,
    queryVotTvList:
    `${schema}://${host}/wappweb/tvinteract/tv-interact!queryVotTvList`,
    listComment:
    `${schema}://${host}/wappweb/tvinteract/tv-interact!listComment`,
    praiseOrTread:
    `${schema}://${host}/wappweb/tvinteract/tv-interact!praiseOrTread`,
    doComment:
    `${schema}://${host}/wappweb/tvinteract/tv-interact!doComment`,
    doVotTv:
    `${schema}://${host}/wappweb/tvinteract/tv-interact!doVotTv`,

};


module.exports = config
