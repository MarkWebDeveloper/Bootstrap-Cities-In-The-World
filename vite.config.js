const path = require('path')

export default {
  base: '/Bootstrap-Cities-In-The-World/',
  publicDir: "../public",
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  }
}