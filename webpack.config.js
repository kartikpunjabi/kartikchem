var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
  entry: SRC_DIR + "/app/app.js",
  context: SRC_DIR,
  output: {
    path: DIST_DIR ,
    filename: "./app/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: "babel-loader",
        exclude: "/node_modules/",
        query: {
          presets: [
            "react", 
            "es2015",
            "stage-2"
          ]
        }
      }
    ]
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "dist"),
    inline: true,
    compress: true,
    stats: "minimal",
    historyApiFallback: true
  },
  devtool: "source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      title: "Kartik-Chem",
      template: SRC_DIR + "/index.html"
    })
  ]
}

module.exports = config;
