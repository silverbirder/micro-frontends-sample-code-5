const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV || 'production'

module.exports = {
    mode,
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
            inject: process.env.IS_PARTIAL === 'true',
        })
    ]
}
