module.exports = {
    sonar: {
        files: {
            'reports/coverage/client/': ['reports/coverage/client/**.info'],
            'reports/coverage/server/': ['reports/coverage/server/**.info']
        },
        options: {
            replacements: [{
                pattern: /node_modules\/norman-business-catalog-manager-client/gi,
                replacement: 'client'
            }, {
                pattern: /node_modules\/norman-business-catalog-manager-server/gi,
                replacement: 'server'
            }]
        }
    }
}