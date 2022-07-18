const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const json = require('./src/dataset.json');
const path = require('path');


module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(scss|css)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    /*new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),*/
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      lang: 'en-US',
      title: json["page_meta"].title,
      'meta':
        {
          'viewport': 'width=device-width, initial-scale=1',
          'keywords': json["page_meta"].meta_keywords,
          'description': json["page_meta"].meta_description,
        },
      cardTitle: json["stock"][0].title,
      //minify: true,
      template: './src/index.html',
      //templateParameters:require('./src/dataset.json')
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, './src/assets'),
          to: path.resolve(__dirname, './dist/assets'), },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};
