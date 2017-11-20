let webpack = require('webpack');

module.exports = {
  entry: {
    "renderer/app": './src/renderer/app.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module : {
    rules : [
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        loader: 'riot-tag-loader',
        options: {
          // hot: true,
          // debug: true
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ]
};
