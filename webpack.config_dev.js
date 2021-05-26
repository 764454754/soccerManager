const path = require('path');

const plugins = [
];

module.exports = {
  context: path.resolve(__dirname, 'src'), 
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/',     
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
          {
            loader: 'style-loader'
          },
          { loader: 'css-loader' }
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ]
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: [ path.resolve(__dirname, 'node_modules') ],
        use: [ { loader: 'babel-loader' } ]
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
    extensions: ['.js', '.jsx', '.json']
  }
};