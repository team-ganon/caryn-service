var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, 'client/public/dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `./client/src/components/Index.jsx`,
  output: {
    filename: 'app.js',
    path: DIST_DIR
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/public/dist/index.html',
    }),
  ],
  module : {
    rules : [
      {
        test : /\.(js|jsx)$/,
        exclude: /node_modules/,
        include : SRC_DIR,
        loader : 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
             loader: 'style-loader',
          },
          {
             loader: 'css-loader',
             options: {
                modules: {
                  localIdentName: '[local]___[hash:base64:5]'
                }
             }
          }
        ],
       }
    ]
  }
};