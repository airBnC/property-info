const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/src/index.jsx'),
  output: {
    filename: 'infobundle.js',
    path: path.join(__dirname, '/client/dist'),
  },
  mode: 'production',
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  module: {
    rules: [
      {
        exclude: path.join(__dirname, '/node_modules/'),
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'es2015'],
          plugins: ['transform-class-properties'],
        },
      },
    ],
  },
};
