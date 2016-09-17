var webpack = require("webpack");
module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.html$/,
            loader: "handlebars-loader"
        }, {
            test: /.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.png$/,
            loader: "url-loader?mimetype=image/png"
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            }
        }),
    ]
}