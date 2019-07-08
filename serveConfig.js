const isProduction = process.env.NODE_ENV === 'production'

// 本地
let disableMock = false
let sitePrefix = '/'
let apiPrefix = '/api'
let apiServePrefix = 'http://localhost:8080'

// 线上
if (isProduction) {
  disableMock = true
  sitePrefix = '/'
  apiPrefix = ''
  apiServePrefix = ''
}

module.exports = {
  disableMock, // mock数据开启或关闭
  sitePrefix, // 网站根地址
  apiPrefix, // API 接口根地址
  apiServePrefix // API 真实服务端的接口地址 19965412404
}
