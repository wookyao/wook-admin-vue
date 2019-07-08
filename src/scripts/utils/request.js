/**
 * 公共请求封装
 */
import axios from 'axios'
import serverConfig from 'serverConfig'

// 设置默认参数
axios.defaults.timeout = 30000
axios.defaults.method = 'post'
axios.defaults.responseType = 'json'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'

// 请求拦截
axios.interceptors.request.use(beforeRequest, requestError)
axios.interceptors.response.use(afterResponse, responseError)

/**
 * request 请求之前处理
 */
function beforeRequest (config) {
  console.log(config)
  if (config.url) {
    config.url = serverConfig.apiPrefix + config.url
  }

  if (!config.url) throw new Error('Request 请求缺少 url 参数')

  // 全局 Loading,如果需要可使用UI组件的toast
  if (config.loading) {

  }

  if (config.data && config.method === 'get') {
    config.params = Object.assign({}, config.params || {}, config.data)
  }

  return config
}

/**
 * request 请求失败处理
 */
function requestError (error) {
  // 如果开启了全局加载toast，在这个地方要清除toast

  return Promise.reject(error)
}

/**
 * response 响应之后处理
 */
const ERROR_CODE = {
  '0000': '操作成功',
  '9985': '数据不存在',
  '9986': '已删除',
  '9987': '账号已存在',
  '9988': '密码错误',
  '9989': '账号不存在',
  '9991': '短信验证码错误',
  '9992': '文件上传错误',
  '9993': '文件上传错误',
  '9994': '参数错误',
  '9995': '图片上传失败',
  '9996': '短信发送失败',
  '9997': '必填参数为空',
  '9998': '无数据',
  '9999': '系统错误'
}
function afterResponse (response) {
  // 全局 Loading,在此处清除toast
  if (response.config.loading) {

  }

  let data = response.data || {}
  let code = data.code

  if (code !== '0000') {
    // 请求失败再次做一些处理
    data.fail = true
  }
  return data
}

/**
 * response 响应失败处理
 */
function responseError (error) {
  let { config, response, __CANCEL__ } = error

  // 全局 Loading
  if (config && config.loading) {
  }

  if (__CANCEL__ || !config || !response) return Promise.reject(error)

  let msg = ''
  switch (response.status) {
    case 404:
      msg = '请求地址不存在，请重试'
      break
    case 500:
    case 501:
    case 502:
    case 503:
    case 504:
    case 505:
    case 506:
    case 507:
    case 508:
    case 509:
    case 510:
      msg = '服务器错误，请重试'
      break
    default:
      msg = '请求错误，请重试'
  }

  // 错误提醒
  // Toast(msg)

  return Promise.reject(error)
}

export default axios
