//CSS and SASS setup https://christianalfoni.github.io/react-webpack-cookbook/Loading-CSS.html

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './index.html',
    './src/js/index',
    './src/css/styles'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.scss$/,
      loader: "style-loader!css-loader!sass-loader",
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.html$/,
      loader: "file?name=[name].[ext]",
    }]
  }
};
