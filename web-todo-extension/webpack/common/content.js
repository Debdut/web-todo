const path = require('path')

const ROOT = path.resolve(__dirname, '..', '..')
const SOURCE = path.resolve(ROOT, 'src', 'content')

module.exports = {
  entry: {
    background: path.resolve(SOURCE, 'index.js')
  }
}