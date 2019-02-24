import path from 'path';
import mergeSmart from 'webpack-merge';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

import commonConfig from './webpack.common.babel';

export default mergeSmart(commonConfig, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        publicPath: path.join(__dirname, 'dist'),
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
});