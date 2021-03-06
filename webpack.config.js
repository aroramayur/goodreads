var webpack = require("webpack");
module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    devtool: "source-map",
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
    }
}