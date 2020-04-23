const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const common = require('./webpack.common');
const srcDirectory = path.resolve(__dirname, '../src');

module.exports = merge(common, {
  output: {
    filename: '[name].bundle.js',
  },
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: 'src',
    hot: true,
    port: 9000,
    historyApiFallback: {
      disableDotRule: true
    },
    stats: 'minimal',
    overlay: true,
    proxy: {
      '/api/**': {
        target: {
          port: 8080
        },
        secure: false
      },
      '/actuator/**': {
        target: {
          port: 8080
        },
        secure: false
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
