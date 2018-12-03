const path = require('path');
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, ""),
    filename: 'index.min.js',
    library: "__TNT",
  },
  resolve: {
    extensions: ['.js']
  },
  module: {}
};