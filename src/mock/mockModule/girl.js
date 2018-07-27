
import {apiMap} from '../../net/apiMap'
var GirlPart = (Mock) => {
  // mock添加一个女孩对象
  const productAddGirl = function () {
    let result = {code: 0, msg: '成功', data: ''}
    return result
  }

  const productGetGirl = function () {
    let result = {code: 0,
      msg: '成功',
      data: [{id: 12, cupSize: 'B', age: 44},
        {id: 12, cupSize: 'B', age: 44},
        {id: 12, cupSize: 'B', age: 44},
        {id: 12, cupSize: 'B', age: 44},
        {id: 12, cupSize: 'B', age: 44},
        {id: 12, cupSize: 'B', age: 44},
        {id: 12, cupSize: 'B', age: 44}]}
    return result
  }

  // Mock.mock( url, post/get , 返回的数据)；
  Mock.mock(apiMap.addGirl.url, apiMap.addGirl.method, productAddGirl)
  Mock.mock(apiMap.getGirls.url, apiMap.getGirls.method, productGetGirl)
}

export default GirlPart
