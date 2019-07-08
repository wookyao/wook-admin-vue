const isProduction = process.env.NODE_ENV === 'production'
const OUTPUT_DIR = process.env.OUTPUT_DIR || 'dist'
const serveConfig = require('./serveConfig')
console.log(serveConfig)

const path = require('path')
const Mock = require('mockjs')
const fileExists = require('file-exists')

function caniuseMock (req) {
  delete require.cache[require.resolve('./serveConfig')]
  return !req.xhr || ('disableMock' in req.query) || serveConfig.disableMock
}

function tryMock (req, res) {
  let filePath = (req.url.match(/^\/api\/([^?]*)/) || [])[1]
  let file = './mock/' + filePath + '.js'
  try {
    if (fileExists(file)) {
      delete require.cache[require.resolve(file)]
      res.json(
        Mock.mock(require(file))
      )
    }
  } catch (e) {}
}

module.exports = {
  lintOnSave: false,
  outputDir: OUTPUT_DIR,
  configureWebpack: {
    devtool: isProduction ? '' : 'cheap-module-inline-source-map',
    resolve: {
      alias: {
        'components': path.resolve(__dirname, './src/components'),
        'pages': path.resolve(__dirname, './src/pages'),
        'views': path.resolve(__dirname, './src/views'),
        'scripts': path.resolve(__dirname, './src/scripts'),
        'assets': path.resolve(__dirname, './src/assets'),
        'images': path.resolve(__dirname, './src/assets/images'),
        'styles': path.resolve(__dirname, './src/styles')
      }
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      allowedHosts: [
        '*'
      ],
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:8080',
          pathRewrite: {
            '^/api': ''
          }
        },
        bypass: function (req, res, proxyOptions) {
          // 不走mock
          if (caniuseMock(req)) return false
          // 查看 mock 文件夹下的 json 文件，有就走 mock，否则发起服务端请求
          tryMock(req, res)
          return false
        }
      }
    }
  }
}
