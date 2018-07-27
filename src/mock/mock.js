import AutherPartMock from './mockModule/login'
import GirlPart from './mockModule/girl'
const Mock = require('mockjs')
Mock.setup({
  timeout: 1000
})

AutherPartMock(Mock)
GirlPart(Mock)
