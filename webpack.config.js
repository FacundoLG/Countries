const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = require("webpack");

module.exports = (argx, env) => {
  const isProduction = env.mode == "production";
  console.log(env.mode);
  console.log(
    `Using ${isProduction ? "production" : "development"} configuration`
  );
  return {
    entry: "./src/index.tsx",
    output: {
      filename: "index_[hash].js",
      path: path.resolve(__dirname, "dist"),
    },
    resolve: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src/public", "index.html"),
      }),
      new ProvidePlugin({
        React: "react",
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
          test: /\.css$/,
          exclude: /node_modules/,
          use: ["style-loader", { loader: "css-loader" }],
        },
      ],
    },
    devtool: isProduction ? false : "source-map",
  };
};
