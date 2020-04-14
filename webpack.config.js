const path = require('path')
const CopyrightWebpackPlugin = require('./plugins/copyright-webpack-plugin')
module.exports = {
    mode: "development",
    entry: {
        main: './src/index.js'
    },
    resolveLoader: {
        modules: ['node_modules', './loaders']
    },
    module: {
        rules: [{
            test: /\.js/,
            // use: [path.resolve(__dirname, './loaders/replaceLoader.js')]
            use: [{
                loader: 'replaceLoader'
            }, {
                loader: 'replaceLoaderAsync',
                options: {
                    name: "hello"
                }
            }]
        }]
    },
    plugins: [new CopyrightWebpackPlugin({
        name: 'hello'
    })],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
}