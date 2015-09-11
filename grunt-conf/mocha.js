'use strict';
module.exports = {

    src: [
        'server/**/*.spec.js',
        'test/int/server/**/*.spec.js'
    ], // a folder works nicely
    options: {
        reporter: 'mocha-jenkins-reporter',
        coverageFolder: 'reports/coverage/server',
        mask: '**/*.spec.js',
        root: './server',
        reportFormats: ['lcov'],
        check: {
            lines: 5,
            statements: 5
        }
    }
};
