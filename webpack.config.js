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
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
    },
    resolve: { extensions: [".js", ".jsx", ".ts", ".tsx", ".css"] },
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
          test: /\.css$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: { modules: true, importLoaders: 1 },
            },
          ],
        },
      ],
    },
    devtool: isProduction ? false : "source-map",
  };
};
