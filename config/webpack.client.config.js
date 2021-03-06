const path = require('path')

module.exports = {
  entry: './src/renderer/client.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public')
  },
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: [
          'es2015',
          'react',
          'stage-0',
          ['env', { targets: { browsers: ['last 2 versions'] } }]
        ]
      }
    }]
  }
}
