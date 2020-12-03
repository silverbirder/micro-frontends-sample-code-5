const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');
const webpack = require('webpack');
const ASSET_PATH = process.env.ASSET_PATH || 'http://localhost:5000/';

module.exports = {
    entry: "./bootstrap.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bootstrap.js",
        publicPath: ASSET_PATH,
    },
    mode: "development",
    plugins: [
        new CopyWebpackPlugin(["index.html"]),
        new webpack.DefinePlugin({
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
        }),
    ]
};
