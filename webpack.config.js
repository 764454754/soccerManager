const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    title: "潘浩博真帅",
    filename: '../index.html',
    template: '../public/index.html'
  }),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/bundle.css'
  })
];

module.exports = {
  context: path.resolve(__dirname, 'src'), 
  entry: './index.js',
  output: {
    filename: 'js/bundle.js',
    publicPath: './src',     
    path: path.resolve(__dirname, 'dist/src')
  },
  plugins,
  module: {
    rules: [
      {
        test: [
          /\.css$/i,
        ],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './css'
            }
          },
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