const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: `${__dirname}/src/index.ts`,
  output: {
    filename: "index.js",
    path: `${__dirname}/dist`,
    library: "RPPrompt",
    libraryTarget: "umd"
  },

  devtool: false,

  externals: {
    "liqvid": {
      commonjs: "liqvid",
      commonjs2: "liqvid",
      amd: "liqvid",
      root: "Liqvid"
    },
    "react": {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React"
    }
  },

  mode: "production",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
    ]
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          safari10: true
        }
      })
    ],
    emitOnErrors: true
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".css"]
  }
}
