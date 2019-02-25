import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import CleanWebPackPlugin from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
const isDevMode = process.env.NODE_ENV !== 'production';

export default {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve('./dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    {
                        loader: isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name(file) {
                            if (isDevMode) {
                                return '[path][name].[ext]';
                            }
                            return '/images/[hash].[ext]';
                        }
                    }
                }]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name(file) {
                            if (isDevMode) {
                                return '[path][name].[ext]';
                            }
                            return '/fonts/[hash].[ext]';
                        }
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new CleanWebPackPlugin(['dist'])
    ]
};