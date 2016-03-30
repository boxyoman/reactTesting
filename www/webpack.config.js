module.exports = {  
  entry: './src/ts/app.ts',
  output: {
    filename: 'app/js/app.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { 
        test: /\.ts$/, 
        loader: 'babel-loader?presets[]=es2015!ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};
