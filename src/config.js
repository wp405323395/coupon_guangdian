//var host = "www.maywidehb.com"
var host = '192.168.1.139:8080';
var isHttps = false;
var isDebug = true;
var schema = isHttps ? 'https' : 'http';
var config = {
  // 下面的地址配合云端 Server 工作
  host,
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

};


module.exports = config
