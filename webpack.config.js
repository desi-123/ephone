const currentTask = process.env.npm_lifecycle_event;
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackManifestPlugin = require("webpack-manifest-plugin");
const fse = require('fs-extra')

class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.done.tap("Copy images", function () {
      fse.copySync("./app/images", "./dist/images");
    });
  }
}

const config = {
  entry: "./app/index.js",
  output: {
    filename: "myBundled.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new HtmlWebpackPlugin({ template: "./app/index.html" })],
  mode: "development",
  devtool: "eval-cheap-source-map",
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                { useBuiltIns: "usage", corejs: 3, targets: "defaults" },
              ],
              "@babel/preset-react",
            ],
          },
        },
      },
    ],
  },
};

if (currentTask == "build") {
  config.mode = "production";
  config.module.rules[0].use[0] = MiniCssExtractPlugin.loader;
  config.plugins.push(
    new MiniCssExtractPlugin({ filename: "styles.[hash].css" }),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin(),
    new RunAfterCompile()
  );
}

module.exports = config;
