var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: __dirname + '/target',
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: __dirname + '/src/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
        path: __dirname + '/target',
        filename: 'js/bundle.min.js'
    }
    /*
    ,
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
    */
};
