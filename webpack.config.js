var publidDir = __dirname + '/public';
module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: publidDir,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        // loaders: [{
        rules: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                // presets: ['react', 'es2015']
                presets: ['@babel/preset-react']
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: publidDir
    }
};