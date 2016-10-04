var path              = require('path');
var webpack           = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'hot-reload-source-map',
  // devtool: 'source-map',
  entry: ['./src/index.tsx', 'webpack-dev-server/client?http://localhost:3000', 'webpack/hot/only-dev-server'],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin("[name].css")
  ],
  resolve: {
    root: path.resolve(__dirname),
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".json"],
    alias: {
      'pim': 'src',
      'view/builder': 'src/builder'
    },
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['react-hot', 'ts-loader'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.json$/,
      loaders: ['json'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    },
    {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
    }],
    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};
