const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const mode = process.env.NODE_ENV || 'production'

module.exports = {
  entry: './src/client.ts',
  output: {
    filename: `worker.${mode}.js`,
    path: path.join(__dirname, 'dist'),
  },
  mode,
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  entry: './src/client.ts',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [["@babel/preset-env", {
                useBuiltIns: "usage",
                corejs: 3
              }]],
              plugins: [
                "@babel/proposal-class-properties",
                "@babel/proposal-object-rest-spread"
              ]
            }
          },
          {loader: 'ts-loader'}
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      publicPath: `${process.env.SEARCH_PUBLIC_URL}` || 'auto'
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    }),
    new webpack.DefinePlugin({
      'process.env.SEARCH_PUBLIC_URL': JSON.stringify(process.env.SEARCH_PUBLIC_URL),
    }),
  ]
}
