module.exports = {
  entry: {
    bar: './bar/index.jsx',
    line: './line/index.jsx',
    pie: './pie/index.jsx',
    radar: './radar/index.jsx'
  },
  output: {
    filename: '[name]/bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        plugins: ["transform-react-jsx"]
      }
    }]
  },
  devtool: '#inline-source-map'
}
