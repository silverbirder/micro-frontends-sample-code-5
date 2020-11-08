const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = process.env.NODE_ENV || 'production';
const env = mode === 'production' ? '.env.production' : '.env';
require('dotenv').config({path: __dirname + `/${env}`});

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
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: "tsconfig.client.json",
                            allowTsInNodeModules: true
                        }
                    }
                ]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: process.env.IS_PARTIAL === 'true',
        }),
        new webpack.DefinePlugin({
            'process.env.TEAM_SEARCH_API_URL': JSON.stringify(process.env.TEAM_SEARCH_API_URL)
        })
    ]
}
