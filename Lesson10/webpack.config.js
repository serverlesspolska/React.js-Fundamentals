var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname + '/target')
var SOURCE_DIR = path.resolve(__dirname + '/src')

module.exports = {
    devServer: {
        inline: true,
        contentBase: BUILD_DIR,
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: SOURCE_DIR + '/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: SOURCE_DIR,
                exclude: /node_modules/,
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
        path: BUILD_DIR,
        filename: 'js/bundle.min.js'
    }
    /*
    ,
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
    */
};
