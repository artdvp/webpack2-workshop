var path = require('path');

module.exports = {
  entry: './src/js/app.js',
  output: {
      path: path.resovle(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/dist'
  },
  module: {
      rules: [
        {
            test: /\.css$/,
            loader: 'css-loader'
        }
      ]
  }
};