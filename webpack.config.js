const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use:['babel-loader']
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use:['eslint-loader']            
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                { loader: 'style-loader' },
                { 
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        // modules: true,
                        // localIdentName: '[name]__[local]__[hash:base64:5]'
                    }
                 },
                 {
                     loader: 'postcss-loader',
                     options: {
                         ident: 'postcss',
                         plugins: () => [
                             autoprefixer({
                             })
                         ]
                     }
                 }
            ]
        },
        {
            test: /\.(png|jpe?g|gif)$/,
            loader: 'url-loader?limit=8000&name=images/[name].[ext]'
        }

        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]

};