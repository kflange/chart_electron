let webpack = require('webpack');

module.exports = {
  target: "electron",
  node: {
    __dirname: false,
    __filename: false
  },
  entry: {
    "main/main": './src/main/main.ts',
    "renderer/app": './src/renderer/app.js'
  },
  output: {
    // path: __dirname + '/dist',
    // path: 'dist',
    filename: 'dist/[name].js',
    publicPath: "./"
  },
  resolve: {
    extensions: ['.tag', '.ts', '.js']
  },
  module : {
    rules : [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        loader: 'riot-tag-loader',
        options: {
          template: "pug",
          // hot: true,
          // debug: true
        }
      }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ]
};
