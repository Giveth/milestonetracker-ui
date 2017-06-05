const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "dapp/js/main"),
    devServer: {
        outputPath: path.join(__dirname, "build"),
    },
    resolve: {
        extensions: [ "", ".js", ".jsx" ],
    },
    output: {
        path: path.resolve(__dirname, "build/js"),
        publicPath: "/js/",
        filename: "bundle.js",
    },
    plugins: [
        new CleanWebpackPlugin([ "build" ]),
        new CopyWebpackPlugin([
            {
                context: path.resolve(__dirname, "dapp/static"),
                from: "**/*",
                to: path.resolve(__dirname, "build"),
            },
        ]),
    ],
    devtool: "source-map",
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: [ "eslint" ],
            },
        ],
        loaders: [
            {
                test: /.woff$|.woff2$|.ttf$|.eot$|.svg$/,
                loader: "url-loader",
            },
            {
                test: /\.sol$/,
                loaders: [ "solc" ],
            },
            {
                test: /\.json$/,
                loaders: [ "json" ],
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: [ "babel" ],
            },
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                loader: "style-loader!css-loader",
            },
            {
                test: /\.module\.css$/,
                loader: "style-loader!css-loader?modules",
            },
            {
                test: /\.(gif|png|jpg)$/,
                loader: "file-loader",
            },
        ],
    },
};
