/* jshint esversion: 6 */
var host = (process.env.NODE_ENV == "production" ? "www.maywidehb.com" : "localhost:8080")
var isHttps = (process.env.NODE_ENV == "production" ? true : false);
var isDebug = process.env.NODE_ENV != "production";
var schema = isHttps ? 'https' : 'http';
var config = {
  // 下面的地址配合云端 Server 工作
  host,
  isDebug,
  srcUrl: `${schema}://${host}/`,
    // 登录地址，用于建立会话
    loginUrl: `${schema}://${host}/msweb/login/login!login`,
    doLogout: `${schema}://${host}/msweb/login/login!loginout`,
    queMenuList: `${schema}://${host}/msweb/login/login!queMenuList`,
    queQruleList: `${schema}://${host}/msweb/msqr/ms-qrcode!queQruleList`,
    queData: `${schema}://${host}/msweb/login/login!queData`,
    editPassword: `${schema}://${host}/msweb/login/login!editPassword`,
    queQRcodeRuleDetail: `${schema}://${host}/msweb/msqr/ms-qrcode!queQRcodeRuleDetail`,
    saveQRRule: `${schema}://${host}/msweb/msqr/ms-qrcode!saveQRRule`,
    delQRcodeRule: `${schema}://${host}/msweb/msqr/ms-qrcode!delQRcodeRule`,
    updateQRrulesStatus: `${schema}://${host}/msweb/msqr/ms-qrcode!updateQRrulesStatus`,
};


module.exports = config
