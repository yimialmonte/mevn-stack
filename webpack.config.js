require('dotenv').config()

const path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

const MiniExtraCssPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: process.env.NODE_ENV || 'development',

  entry: './client/index.js',

  output: {
    filename: 'app.js',
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
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniExtraCssPlugin({
      filename: 'app.css'
    })
  ]
}
