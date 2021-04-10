const HtmlWebpackPlugin = require("html-webpack-plugin"),
     MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
     entry: {
          index: "./src/index.js",
     },
     output: {
          filename: "[name].js",
     },
     module: {
          rules: [
               {
                    test: /\.js$/i,
                    exclude: /node_modules/,
                    use: {
                         loader: 'babel-loader',
                    }
               },
               {
                    test: /\.html$/i,
                    use: [
                         {
                              loader: "html-loader",
                              options: {
                                   minimize: true,
                              },
                         },
                    ],
               },
               {
                    test: /\.css$/i,
                    use: [
                         {
                              loader: MiniCssExtractPlugin.loader,
                              options: {
                                   publicPath: "./",
                              },
                         },
                         "css-loader",
                    ],
               },
               {
                    test: /\.(jpe?g|png|gif|svg|webp)$/i,
                    use: ["file-loader?name=assets/resources/[name].[ext]", "image-webpack-loader"],
               }
          ],
     },
     plugins: [
          new HtmlWebpackPlugin({
               template: "./src/index.html",
               filename: "./index.html",
          }), 
          new MiniCssExtractPlugin({
              insert: 'title',
          }),
     ],
}