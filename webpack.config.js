/*
* @Author: CC
* @Date:   2015-12-29 12:25:10
* @Last Modified by:   CC
* @Last Modified time: 2015-12-29 18:26:14
*/

'use strict';

var webpack = require('webpack');
var __DEV__ = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: ['./src/index.js'],
    output: {
        filename: 'bundle.js',
        path: 'dist',
        publicPath: '/dist/',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: (__DEV__ ? 'react-hot!' : '') + 'babel',
                exclude: /node_modules/,
            },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url-loader?limit=10000' },
            { test: /\.(woff2?)$/, loader: 'url-loader?limit=10000' },
            { test: /\.(ttf|eot|wav|mp3)$/, loader: 'file-loader' },
            { test: /\.json$/, loader: 'json' },
            { test: /\.html$/, loader: 'html' },
            { test: /\.md$/, loader: 'html|markdown' },
        ],
    },
    plugins: [],
};

if (__DEV__) {
    module.exports.devtool = 'inline-source-map';
}
