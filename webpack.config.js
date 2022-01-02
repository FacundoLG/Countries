const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = () => {
  return {
    entry: "./src/index.tsx",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
    },
    resolve: { extensions: [".js", ".jsx", ".ts", ".tsx", ".css"] },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src/public", "index.html"),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
        },
        {
          test: /\.tsx?/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    devtool: "source-map",
  };
};
