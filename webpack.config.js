const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    mode: NODE_ENV || 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    watch: NODE_ENV === 'development',
    watchOptions: {
        ignored: /node_modules/,
        poll: 1000,
    },
    devServer: {
        port: 3000,
        overlay: true,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    devtool: NODE_ENV === 'development' ? 'source-map' : false,
    module: {
        rules: [
            {
                test: /\.[tj]s$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: [/\.svg$/, /\.gif$/, /\.bmp$/, /\.jpe?g$/, /\.png$/],
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/',
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
        }),
        {
            apply: (compiler) => {
                NODE_ENV && compiler.hooks.done.tap('DonePlugin', () => {
                    setTimeout(() => {
                        process.exit(0);
                    });
                });
            },
        }
    ],
}
;
