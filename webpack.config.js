require('dotenv').config()

const path = require('path')

const webpack = require('webpack')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

const MiniExtraCssPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: process.env.NODE_ENV || 'development',

  entry: ['webpack-hot-middleware/client?reload=true', './client/index.js'],

  output: {
    filename: 'app.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'server/public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniExtraCssPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new MiniExtraCssPlugin({
      filename: 'app.css'
    })
  ]
}
