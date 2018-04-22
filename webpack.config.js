const path = require('path');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const rootPath = path.resolve(__dirname, "src");
const outputPath = path.resolve(__dirname, 'build');

module.exports = {
    context: rootPath,
    entry: {
        bundle: path.resolve(rootPath, 'App.jsx'),
        style: path.resolve(rootPath, 'assets/scss/style.scss')
    },
    output: {
        path: outputPath,
        filename: "[name].js",
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 9000
    },
    resolve:{
        extensions: ["*", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"],
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [autoprefixer({ browsers: ['last 4 version'] })]
                            }
                        },
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.(eot|ttf|woff|woff2|otf)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.(svg)|(png)|(jpg)|(gif)$/,
                loader: 'file-loader?name=images/[name].[ext]'
            },
            {
                test: /\.(php)$/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    watch: true,
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(rootPath, './index.html')
        }),

        new ExtractTextPlugin({ filename: './[name].css', disable: false, allChunks: true }),
        new CopyWebpackPlugin([
            { from: 'assets/images', to: 'images/' },
            { from: 'backend/', to: 'backend/' }
        ])
    ]
};