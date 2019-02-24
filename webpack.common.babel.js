import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import CleanWebPackPlugin from 'clean-webpack-plugin';

export default ({
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
                        loader: 'style-loader'
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
})