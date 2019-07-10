const isProduction = process.env.NODE_ENV === 'production'
const OUTPUT_DIR = process.env.OUTPUT_DIR || 'dist'
const serverConfig = require('./serverConfig')

const path = require('path')

module.exports = {
  publicPath: serverConfig.sitePrefix,
  lintOnSave: false,
  outputDir: OUTPUT_DIR,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#00E6BF',
          'success-color': '#00E6BF',
          'error-color': '#FF8585'
        },
        javascriptEnabled: true
      },
      sass: {
        data: `$sitePrefix:'${serverConfig.sitePrefix}';`
      }
    }
  },
  configureWebpack: {
    devtool: isProduction ? '' : 'cheap-module-inline-source-map',
    resolve: {
      alias: {
        'serverConfig': path.resolve(__dirname, './serverConfig.js'),
        'components': path.resolve(__dirname, './src/components'),
        'pages': path.resolve(__dirname, './src/pages'),
        'views': path.resolve(__dirname, './src/views'),
        'scripts': path.resolve(__dirname, './src/scripts'),
        'assets': path.resolve(__dirname, './src/assets'),
        'styles': path.resolve(__dirname, './src/styles')
      }
    },
    devServer: {
      writeToDisk: true,
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
      proxy: {
        '/api': {
          target: serverConfig.apiServePrefix,
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }
}
