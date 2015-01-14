// conf.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test/e2e/spec.js'],
  baseUrl: 'http://localhost:9001',
  getPageTimeout: 50000,
  allScriptsTimeout: 20000,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 100000,
    isVerbose: true
  }
}