const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'c8oqaw',
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    video: true,
    defaultCommandTimeout: 15000,
    viewportWidth: 1000,
    viewportHeight: 660
  }
})

