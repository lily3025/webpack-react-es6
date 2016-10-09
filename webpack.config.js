var path = require('path');
var webpack = require('webpack');
module.exports = {
    /*devtool: 'eval-source-map',*/
    entry: [path.resolve(__dirname, './dev/main.jsx')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.jsx'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                        presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test:/\.(png)|(jpg)$/,
                loader: "url?limit=50000"
            }
        ]
    },
    /*
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],*/
    devServer: {
        colors: true,
        historyApiFallback: true,
        inline: true,
    }
};
