var webpack = require("webpack");
var path = require("path");
var fs = require("fs");

var nodeModules = {};
fs.readdirSync("node_modules")
  .filter(function(x) {
    return [".bin"].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = "commonjs " + mod;
  });

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
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  target: 'node',
  externals: nodeModules,
}
