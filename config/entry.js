let HtmlWebpackPlugin = require('html-webpack-plugin')
let defaultJs = ['babel-polyfill']

module.exports = {
  // app: ['babel-polyfill', './src/main.js'],
  // share: ['babel-polyfill', './src/share/main.js']
  app: {
    entry: [...defaultJs, './src/main.js'],
    HWPdev: []
  },
  share: {
    entry: [...defaultJs, './src/main.js'],
    HWPdev: []
  }


}
