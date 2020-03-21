var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/public/dist');

module.exports = {
  entry: `./client/src/components/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    rules : [
      {
        test : /\.(js|jsx)$/,
        exclude: /node_modules/,
        include : SRC_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};