var host = "https://www.htrnpay.cn"
// host = "/proxydir"
// host = "https://t.htrnpay.cn"
var isDebug = true;
var config = {
  // 下面的地址配合云端 Server 工作
  host,
  isDebug,
  srcUrl: `${host}/`,
    // 登录地址，用于建立会话
    loginUrl: `${host}/wappweb/vot/vot-manager!doLogin`,
    listProject: `${host}/wappweb/vot/vot-manager!listProject`,
    deleteProject:
    `${host}/wappweb/vot/vot-manager!deleteProject`,
    doLogout: `${host}/wappweb/vot/vot-manager!doLogout`,
    createVotProject:
    `${host}/wappweb/vot/vot-manager!createVotProject`,
    listCandidate:
    `${host}/wappweb/vot/vot-manager!listCandidate`,
    queryDetailByPidAndCid:
    `${host}/wappweb/vot/vot-manager!queryDetailByPidAndCid`,
    createVotQRcode:
    `${host}/wappweb/vot/vot-manager!createVotQRcode`,
    exportVotDetail:
    `${host}/wappweb/vot/vot-manager!exportVotDetail`,
    queByProjectId:
    `${host}/wappweb/vot/vot-manager!queByProjectId`,
};


module.exports = config
