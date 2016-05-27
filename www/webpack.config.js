var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {  
  entry: './src/app.tsx',
  output: {
    filename: 'build/js/app.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { 
        test: /\.tsx?$/, 
        loader: 'babel-loader!ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'css?modules&importLoaders=1&localIdentName=[name]__[local]!postcss-loader'
        )
      }
    ]
  },
  postcss: [
    require('autoprefixer')
  ],
  plugins: [
    new ExtractTextPlugin("build/styles.css")
  ]
};
