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
    listProject: `${schema}://${host}/wappweb/vot/vot-manager!listProject`,
    deleteProject:
    `${schema}://${host}/wappweb/vot/vot-manager!deleteProject`,
    doLogout: `${schema}://${host}/msweb/login/login!loginout`,
    createVotProject:
    `${schema}://${host}/wappweb/vot/vot-manager!createVotProject`,
    listCandidate:
    `${schema}://${host}/wappweb/vot/vot-manager!listCandidate`,
    queryDetailByPidAndCid:
    `${schema}://${host}/wappweb/vot/vot-manager!queryDetailByPidAndCid`,
    createVotQRcode:
    `${schema}://${host}/wappweb/vot/vot-manager!createVotQRcode`,
    exportVotDetail:
    `${schema}://${host}/wappweb/vot/vot-manager!exportVotDetail`,
    queByProjectId:
    `${schema}://${host}/wappweb/vot/vot-manager!queByProjectId`,
};


module.exports = config
