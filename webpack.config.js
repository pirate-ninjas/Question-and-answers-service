const path = require('path');

module.exports = {
  entry: __dirname + '/client/index.jsx',
  module: {
    rules: [
      {
        test: [/\.(jsx|js)$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env', 'airbnb']
          }
        }
      }
    ]
  },
   output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  // devtool: 'inline-source-map',
  // mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  }
};