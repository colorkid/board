import path from "path";
import webpack from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

/* eslint-disable */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');

module.exports = merge(common, {
    mode: 'production',
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].[contenthash].js",
        publicPath: "",
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new CleanWebpackPlugin(),
    ],
});