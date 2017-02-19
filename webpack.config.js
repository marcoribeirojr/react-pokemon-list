const path = require('path')

const inputDirName = 'app'
const outputDirName = 'dist/js'
const entryFilename = 'index.js'

module.exports = {
    entry: path.resolve(__dirname, inputDirName, entryFilename),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, outputDirName)
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
}
