var utils = require('./utils')
var path = require('path')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var entry = require('../config/entry')
// var DashboardPlugin = require('webpack-dashboard/plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');
// let newEntry = []
// Object.keys(entry).forEach(function (name) {
//   newEntry.push(entry[name].HWPdev)
// })

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})
//
// let plugs = []
// Object.keys(entry).forEach(function (name) {
//   plugs.push(...entry[name].HWPprd)
// })
// console.log('============plugs========')
// console.dir(plugs)

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      filename: 'share/index.html',
      template: 'index.html',
      inject: true,
      chunks: ['share']
    }),
    // ...newEntry,
    new FriendlyErrorsPlugin(),
    // new webpack.DllReferencePlugin({
    //     context: path.resolve(__dirname, '..'),
    //     manifest: require('../dist/dll/vendor_manifest.json')
    // })
    new DashboardPlugin({ port: 8099 })
    // new DashboardPlugin()
  ]
})
