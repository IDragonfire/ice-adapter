const nodeExternals = require("webpack-node-externals");

module.exports = {  
  entry: './index.ts',
  output: {
    path: __dirname + "/dist",
    filename: 'faf-ice-adapter.js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'shebang-loader' },
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.node$/, loader: 'node-loader'}
    ]
  },
  target: "node",
  externals: [nodeExternals()],
  node: {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dgram: 'empty'
  }
}