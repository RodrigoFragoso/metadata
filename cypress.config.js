const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com'
  },
  env: {
    userName: 'test_fragoso',
    password: 'test_fragoso'
  },
  reporter: 'mochawesome',
  reporterOptions: {
    charts: true,
    code: true,
    reportPageTitle: 'metadata.io',
    eportTitle: 'UI-QA Metadata',
    reportDir: './cypress/results-report/',
    reportFilename: '[status]_[datetime]-[name]-report',
    inline: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    html: true
  }
})
