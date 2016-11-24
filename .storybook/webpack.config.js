/**
 * Created by alucas on 25/11/16.
 */
var webpack = require('webpack');
var path    = require('path');
var StyleLintPlugin = require('stylelint-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');
var IMG_DIR = path.resolve(__dirname, 'assets/images');

var config = {
    module : {
        preLoaders: [
            {
                test: /\.(jsx|js)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ],
        loaders : [
            {
                test : /\.(jsx|js)$/,
                loader: 'babel',
                include: [
                    SRC_DIR,
                    path.resolve(__dirname, '../node_modules/cleave.js/')
                ]
            },
            {
                test: /\.css?$/,
                loaders: [
                    'style?sourceMap',
                    'raw'
                ],
                include: path.resolve(__dirname, '../')
            },
            {
                test: /\.scss?$/,
                loaders: [
                    'style',
                    'css?sourceMap',
                    'resolve-url',
                    'sass?sourceMap'
                ],
                include: path.resolve(__dirname, '../')
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file?name=[path][name].[hash].[ext]',
                include: IMG_DIR
            },
            {
                test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: 'url-loader?importLoaders=1&limit=100000',
                exclude: /node_modules/
            },
            {
                test: /\.(svg)$/,
                loader: 'url-loader',
                include: [
                    `${IMG_DIR}/svg/`,
                    path.resolve(__dirname, '../node_modules/flag-icon-css/')
                ]
            },
        ],
    },
    plugins: [
        new StyleLintPlugin({
            configFile: path.resolve(__dirname, '../.stylelintrc'),
            files: [ 'components/**/*.scss', 'assets/stylesheets/**/*.scss'],
            syntax: 'scss',
            failOnError: false,
            reporters: [
                {formatter: 'verbose', console: true}  // If formatter is set to 'verbose' you'll see a lot of info about linter, eitherway you can set it to 'string' to get less information
            ]
        })
    ],
    output: {
        path: DIST_DIR,
        filename: '/assets/js/bundle.js'
    },
    eslint: {
        configFile: path.resolve(__dirname, '../.eslintrc')
    }
};

module.exports = config;