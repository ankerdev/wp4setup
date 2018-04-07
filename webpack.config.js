const CleanWebpackPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const mode = process.env.NODE_ENV;

module.exports = {
  devServer: {
    contentBase: '/',
    inline: true,
    port: 2222
  },
  entry: [
    './src/index.js',
    './src/scss/app.scss'
  ],
  mode: mode,
  module : {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:12].[ext]'
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.[hash:12].js',
    path: __dirname + '/dist',
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new Dotenv(),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      inject: 'body',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:12].css'
    })
  ]
};
