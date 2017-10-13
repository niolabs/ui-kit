/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const cssNano = require('cssnano');
/* eslint-enable import/no-extraneous-dependencies */

module.exports = {
  entry: path.join(__dirname, 'assets/index.js'),

  output: {
    path: path.join(__dirname, 'public'),
    filename: '[chunkhash].min.js',
    publicPath: '/',
  },

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000,
    historyApiFallback: true,
    https: true,
  },

  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({ template: path.join(__dirname, 'assets/index.html'), favicon: path.join(__dirname, 'assets/favicon.ico'), inject: 'body' }),
    new ExtractTextPlugin('[contenthash].min.css'),
    new OptimizeCssAssetsPlugin({ assetNameRegExp: /\.css$/g, cssProcessor: cssNano, cssProcessorOptions: { discardComments: { removeAll: true }}, canPrint: true }),
    new OptimizeJsPlugin({ sourceMap: false }),
    new UglifyJSPlugin({ parallel: true, sourceMap: false, cache: true, uglifyOptions: { compress: true } })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.s?css$/,
          /\.json$/,
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/,
        ],
        loader: require.resolve('file-loader'),
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?importLoaders=1&minimize=true', 'sass-loader'],
        }),
      },
    ],
  },
};