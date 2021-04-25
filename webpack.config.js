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
                    test: /\.(jpe?g|png|gif|svg|webp|ico)$/i,
                    use: ["file-loader?name=assets/resources/[name].[ext]", "image-webpack-loader"],
               }
          ],
     },
     plugins: [
          new HtmlWebpackPlugin({
               template: "./src/index.html",
               filename: "./index.html",
               favicon: "./src/app/assets/resources/favicon.ico"
          }), 
          new MiniCssExtractPlugin({
              insert: 'title',
          }),
     ],
}