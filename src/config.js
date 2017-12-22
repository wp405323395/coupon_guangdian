var host = "www.htrnpay.cn"
var host = '192.168.1.153:8080';
var isHttps = false;
var isDebug = true;
var schema = isHttps ? 'https' : 'http';
var config = {
  // 下面的地址配合云端 Server 工作
  host,
  isDebug,
  srcUrl: `${schema}://${host}/`,
    // 登录地址，用于建立会话
    loginUrl: `${schema}://${host}/msweb/login/login!login`,
    doLogout: `${schema}://${host}/msweb/login/login!loginout`,
};


module.exports = config
