import loginMock from './mockModule/login'

const Mock = require('mockjs')
Mock.setup({
  timeout: 1000
})

loginMock(Mock)
