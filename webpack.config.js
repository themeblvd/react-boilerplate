const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: './assets/js/app.js'
    },
    plugins: [
        /*
         * Move compiled .scss to an actual .css file in the
         * final build.
         */
        new MiniCssExtractPlugin({
            filename: './assets/css/main.css'
        }),
        /*
         * Generate index.html page for app.
         */
        new HtmlWebpackPlugin({
            title: 'My App',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
                query: {
                    presets: ['react']
                }
			},
            /*
             * // @TODO ... Images from js.
             */
            {
                test: /\.(svg|png|jpg|gif)$/,
                issuer: /\.js/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './assets/img',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            /*
             * // @TODO ... Styles.
             */
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            outputStyle: process.env.NODE_ENV == "production" ?  "compressed" : "expanded"
                        }
                    }
                ]
            },
            /*
             * // @TODO ... Images from styles.
             */
            {
                test: /\.(svg|png|jpg|gif)$/,
                issuer: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './assets/img',
                            name: '[name].[ext]',
                            publicPath: '../img'
                        }
                    }
                ]
            }
            /*
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './assets/svg',
                            name: '[name].[ext]',
                            publicPath: '../svg'
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|woff|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './assets/font',
                            name: '[name].[ext]',
                            publicPath: '../font'
                        }
                    }
                ]
            }
            */
        ]
    }
};
