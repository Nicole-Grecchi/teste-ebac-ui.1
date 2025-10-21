const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    defaultCommandTimeout: 15000,
    viewportWidth: 1000,
    viewportHeight: 660
  }
})

