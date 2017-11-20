let webpack = require('webpack');

module.exports = {
  entry: './src/renderer/app.js',
  output: {
    path: __dirname + '/dist/renderer',
    filename: 'app.js'
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
