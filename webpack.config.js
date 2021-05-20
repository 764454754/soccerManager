const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    title: "潘浩博真帅",
    filename: 'bundle.html'
  }),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: 'bundle.css'
  })
];

module.exports = {
  context: path.resolve(__dirname, 'src'), 
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    publicPath: './src',     
    path: path.resolve(__dirname, 'dist')
  },
  plugins,
  module: {
    rules: [
      {
        test: [
          /\.css$/i,
        ],
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' }
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ]
      }
    ]
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 9000,
    hot: true,
    compress: true,
    contentBase: __dirname + '/public'
  },
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 3000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.json']
  }
};