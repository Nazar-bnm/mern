const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/client/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'development',
  target: 'web',
  devtool: '#source-map',
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
        use: ['file-loader']
      }]
  },
  resolve: {
    extensions: ['*', '.js', 'jsx']
  },
  devServer: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html'
    })
  ]
};
