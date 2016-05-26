module.exports = {  
  entry: './src/ts/app.tsx',
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
        loader: 'babel-loader?presets[]=es2015!ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};
