const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, "./dapp"),
    devServer: {
        contentBase: path.join(__dirname, "build"),
    },
    devtool: "source-map",
    entry: path.resolve(__dirname, "./dapp/js/main"),

    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: "eslint-loader",
            },
            {
                test: /.woff$|.woff2$|.ttf$|.eot$|.svg$/,
                loaders: "url-loader",
            },
            {
                test: /\.sol$/,
                loaders: "solc-loader",
            },
            {
                test: /\.json$/,
                loaders: "json-loader",
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: "babel-loader",
            },
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ],
            },
            {
                test: /\.module\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "modules",
                ],
            },
            {
                test: /\.(gif|png|jpg)$/,
                loaders: "file-loader",
            },
        ],
    },
    node: {
        console: false,
        fs: "empty",
        net: "empty",
        tls: "empty",
    },

    output: {
        path: path.resolve(__dirname, "build/js"),
        publicPath: "/js/",
        filename: "bundle.js",
    },
    plugins: [
        new CleanWebpackPlugin([ "build" ]),
        new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV) }),
        new CopyWebpackPlugin([
            {
                context: path.resolve(__dirname, "dapp/static"),
                from: "**/*",
                to: path.resolve(__dirname, "build"),
            },
        ]),
    ],
    resolve: {
        extensions: [ ".js", ".jsx" ],
    },
};
