/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
/* eslint-enable import/no-extraneous-dependencies */

module.exports = {
  entry: path.join(__dirname, 'app.js'),

  output: {
    path: path.join(__dirname, 'public'),
    filename: '[chunkhash].min.js',
    publicPath: '/',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new HtmlWebpackPlugin({
      title: 'niolabs UIKit Component Library',
      template: path.join(__dirname, 'index.html'),
      favicon: path.join(__dirname, 'favicon.ico'),
      inject: 'body',
    }),
    new ExtractTextPlugin('[contenthash].min.css'),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          { fallback: 'style-loader?sourceMap', use: [ 'css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]', 'postcss-loader', 'sass-loader'] }
        )
      },
    ]
  },
};
