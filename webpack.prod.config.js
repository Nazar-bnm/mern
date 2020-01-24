const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * Images larger than 10 KB won’t be inlined
 */
const IMAGES_SIZE_LIMIT = 10 * 1024;

module.exports = {
  entry: ['./src/client/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js'
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
      test: /\.(scss|css)$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
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
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    }),
    new CopyWebpackPlugin([
      { from: './src/client/assets/static', to: './' }
    ])
  ]
};
