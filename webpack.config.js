const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/bootstrap.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'bundle/'),
        publicPath: 'bundle/'
    },

    plugins: [new CleanWebpackPlugin(['./bundle'])],

    devServer: {
        contentBase: './',
    },

    module: {
        rules: [{
            test: /\.vue/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    js: 'babel-loader?presets=env'
                }
            }
        },{
            test: /\.js/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        },{
            test: /\.css/,
            loader: ['style-loader', 'css-loader'],
        },{
            test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=1000'
        }]
    },
}
