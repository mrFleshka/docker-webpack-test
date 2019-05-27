const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const isDevServer = process.argv[1] && process.argv[1].indexOf('webpack-dev-server') !== -1;
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    watch: true,
    devtool: 'inline-source-map',
    entry: './assets/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        // HotFix for css-hot-loader (reload only one module)
        filename: 'bundle.js' + (isDevServer ? "" : "?v=[hash]"),
        hotUpdateChunkFilename: 'js/hot/hot-update.js?v=[hash]',
        hotUpdateMainFilename: 'js/hot/hot-update.json?v=[hash]',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use:[
                    "css-hot-loader",
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader", options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader", options: {
                            sourceMap: true
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle.css" + (isDevServer ? "" : "?v=[hash]"),
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        stats: "minimal",
        publicPath: '/dist/',
        hot: true,
        inline: true,
        host: "0.0.0.0",
        port: 8080,
        sockPort: 8081,
        proxy: {
            "*": "http://nginx:9000",
        },
        disableHostCheck: true
    }
};