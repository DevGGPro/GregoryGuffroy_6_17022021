/* eslint-disable no-mixed-spaces-and-tabs */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  // Mode development ou production pour minimize
  mode: 'development',

  target: 'web',

  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      // Règle pour eslint
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader']
      },
      // Règle pour babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      // Règle pour le html loader
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          minimize: false,
          esModule: false
        }
      },
      // Règle pour les images
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: f => {
                const dirNameInsideAssets = path.relative(path.join(__dirname, 'src', 'assets'), path.dirname(f))
                return `${dirNameInsideAssets}/[name].[ext]`
              }
            }
          }
        ]
      },
      // Règle pour le css, le sass et postcss
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: ''
            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new MiniCssExtractPlugin()
  ],

  devServer: {
    contentBase: './dist'
  },

  devtool: 'source-map'

}
