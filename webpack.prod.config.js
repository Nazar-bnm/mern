const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Images larger than 10 KB won’t be inlined
 */
const IMAGES_SIZE_LIMIT = 10 * 1024;

module.exports = {
  entry: ['./src/client/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'production',
  target: 'web',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: IMAGES_SIZE_LIMIT
          }
        }
      ]
    }]
  },
  resolve: {
    extensions: ['*', '.js', 'jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html'
    })
  ]
};
