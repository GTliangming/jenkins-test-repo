/* 
额外webpack配置

*/
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const webpack = require('webpack')
const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      '@': resolve("src"),
      'components': resolve("src/components")
    },
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new SimpleProgressWebpackPlugin()
    ],
  },
  babel: {
    plugins: [
      ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
      ['@babel/plugin-proposal-decorators', { legacy: true }]
    ]
  }
}