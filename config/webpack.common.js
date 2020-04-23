const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const srcDirectory = path.resolve(__dirname, '../src');
const buildDirectory = path.resolve(__dirname, '../build');

module.exports = {
  entry: {
    main: ['babel-regenerator-runtime', path.join(srcDirectory, 'index.js')]
  },
  output: {
    path: buildDirectory,
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: 'html-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif|woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader'
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build'], {
      root: process.cwd()
    }),
    new HtmlWebpackPlugin({
      template: path.join(srcDirectory, 'public/index.html')
    })
  ]
};
