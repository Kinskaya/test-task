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
      //inject: 'head',
      hash: true,
      'meta':
        {
          'viewport': 'width=device-width, initial-scale=1',
          'keywords': json["page_meta"].meta_keywords,
          'description': json["page_meta"].meta_description,
        },
      templateParameters: {
        title: json["page_meta"].title,
        navText1: json["nav"][0].text,
        navText2: json["nav"][1].text,
        navText3: json["nav"][2].text,
        navText4: json["nav"][3].text,
        pageHeader: json.page_meta.h1,
        breadcrumbText1: json["breadcrumbs"][0].text,
        breadcrumbText2: json["breadcrumbs"][1].text,
        breadcrumbText3: json["breadcrumbs"][2].text,
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
