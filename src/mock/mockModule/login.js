import {apiMap} from '../../net/apiMap'
var AutherPart = (Mock) => {
  // mock一组数据
  const loginMock = function () {
    let result = {code: 0, msg: '成功', data: '登陆成功'}
    return result
  }

  // mock从服务器获取一个字符串
  const productMsg = function () {
    let result = {code: 0, msg: '成功', data: '这是来自mock：ffffffffffffff'}
    return result
  }

  // Mock.mock( url, post/get , 返回的数据)；
  Mock.mock(apiMap.justMsg.url, apiMap.justMsg.method, productMsg)
  Mock.mock(apiMap.login.url, apiMap.login.method, loginMock)
}

export default AutherPart
