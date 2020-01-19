var path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './tests/index.js',
  output: {
    path: path.resolve(__dirname, 'test'),
    filename: 'all.test.js'
  }
};