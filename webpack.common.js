const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    entry: ['@babel/polyfill', './src/index.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React-Hooks"
    }),
    new webpack.NamedModulesPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|packages/,
        use: 'babel-loader'
      },
      {
        test: /\.js$/,
        include: /node_modules/,
        use: ['react-hot-loader/webpack']
      },
      {
        test: /\.sass$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      },
      {
        test: /\.(png|jpg|gif|otf|woff)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  }
};
