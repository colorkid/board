import path from 'path';
import webpack from 'webpack';

/* eslint-disable */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');

module.exports = merge(common, {
    mode: 'development',
    output: {
        publicPath: '/',
    },
    entry: './src/index.tsx',
    devtool: 'inline-source-map',

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            },
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        historyApiFallback: true,
        port: 4000,
        open: true,
        hot: true,
    },
});