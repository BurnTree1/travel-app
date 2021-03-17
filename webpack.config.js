const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    alias: {
      Actions: path.resolve(__dirname, 'src/store/actions/'),
      Helpers: path.resolve(__dirname, 'src/helpers/'),
      Assets: path.resolve(__dirname, 'src/assets/'),
      Types: path.resolve(__dirname, 'src/types/'),
      Api: path.resolve(__dirname, 'src/api/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: 'file-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
      {
        test: /\bmapbox-gl-csp-worker.js\b/i,
        use: { loader: 'worker-loader' },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new ESLintPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'https://peaceful-earth-11439.herokuapp.com',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
      },
    },
    overlay: true,
    open: true,
    port: 8080,
  },
};
