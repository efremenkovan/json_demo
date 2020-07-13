const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
    entry: "./js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bootstrap.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: require.resolve('@open-wc/webpack-import-meta-loader'),
            },
        ],
    },
    mode: "development",
    plugins: [
        new CopyWebpackPlugin(['index.html'])
    ],
};
