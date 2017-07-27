let HtmlWebpackPlugin = require('html-webpack-plugin')
let defaultJs = ['babel-polyfill']
var path = require('path')

module.exports = {
  app: ['babel-polyfill', './src/main.js'],
  share: ['babel-polyfill', './src/share/main.js']
  // app: {
  //   entry: [...defaultJs, './src/main.js'],
  //   HWPdev: new HtmlWebpackPlugin({
  //     filename: 'index.html',
  //     template: 'index.html',
  //     inject: true,
  //     chunks: ['app']
  //   }),
  //   HWPprd: new HtmlWebpackPlugin({
  //     filename: process.env.NODE_ENV === 'testing'
  //       ? 'index.html'
  //       : path.resolve(__dirname, '../dist/index.html'),
  //     template: 'index.html',
  //     inject: true,
  //     minify: {
  //       removeComments: true,
  //       collapseWhitespace: true,
  //       removeAttributeQuotes: true
  //       // more options:
  //       // https://github.com/kangax/html-minifier#options-quick-reference
  //     },
  //     // necessary to consistently work with multiple chunks via CommonsChunkPlugin
  //     chunksSortMode: 'dependency',
  //     chunks: ['manifest','vendor','app']
  //   })
  // },
  // share: {
  //   entry: [...defaultJs, './src/main.js'],
  //   HWPdev: new HtmlWebpackPlugin({
  //     filename: 'share/index.html',
  //     template: 'index.html',
  //     inject: true,
  //     chunks: ['share']
  //   }),
  //   HWPprd: new HtmlWebpackPlugin({
  //     filename: process.env.NODE_ENV === 'testing'
  //       ? 'share/index.html'
  //       : path.resolve(__dirname, '../dist/share/index.html'),
  //     template: 'index.html',
  //     inject: true,
  //     minify: {
  //       removeComments: true,
  //       collapseWhitespace: true,
  //       removeAttributeQuotes: true
  //       // more options:
  //       // https://github.com/kangax/html-minifier#options-quick-reference
  //     },
  //     // necessary to consistently work with multiple chunks via CommonsChunkPlugin
  //     chunksSortMode: 'dependency',
  //     chunks: ['manifest','vendor','share']
  //   })
  // }
}
