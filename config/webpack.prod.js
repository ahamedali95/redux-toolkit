const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const common = require('./webpack.common');
const srcDirectory = path.resolve(__dirname, '../src');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'production',
  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].bundle.map'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.bundle.css',
      chunkFilename: 'style.css'
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  }
});
