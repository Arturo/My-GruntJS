exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    specs: ['e2e/**/*_spec.js'],
    baseUrl: 'http://localhost:3001',
    jasmineNodeOpts: {
        showColors: true
    }
}