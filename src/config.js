var isPublish = (process.env.NODE_ENV === 'production');
var devHost = '192.168.1.111:8015'
var publishHost = "www.maywidehb.com"
var host = isPublish ? publishHost : devHost;
var schema = isPublish ? 'https' : 'http';
var config = {
  // 下面的地址配合云端 Server 工作
  host,
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
    listFansLevel:
    `${schema}://${host}/wappweb/tvinteract/tv-interact!listFansLevel`,
    queSubjectList:
    `${schema}://${host}/wappweb/tvinteract/tv-interact!queSubjectList`,
    doGameAnswer:
    `${schema}://${host}/wappweb/tvinteract/tv-interact!doGameAnswer`,
    wxJsSDK:
    `${schema}://${host}/wappweb/tvinteract/tv-interact!wxJsSDK`,

};


module.exports = config
