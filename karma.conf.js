// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
'use strict';

module.exports = function (config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['mocha', 'chai', 'sinon-chai'],

        // list of files / patterns to load in the browser
        files: [
            'dev/assets/vendor.js',
            'dev/assets/bundle.js',
            'dev/resources/norman-business-catalog-manager-client/**/*.html',
            'client/test/*.spec.js'
        ],

        preprocessors: {
            'client/**/*.html': ['ng-html2js'],
            'server/**/*.js': ['coverage']
        },

        ngHtml2JsPreprocessor: {
            // strip this from the file path
            stripPrefix: 'client/',
            prependPrefix: 'node_modules/norman-business-catalog-manager/',
            // setting this option will create only a single module that contains templates
            // from all the files, so you can load them all with module('foo')
            moduleName: 'templates'
        },

        // list of files / patterns to exclude
        exclude: [],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit'
        reporters: ['progress', 'junit', 'coverage'],

        coverageReporter: {
            reporters: [
                {
                    type: 'lcovonly', dir: 'reports/coverage/clientTmp'
                }
            ]
        },

        // the default configuration
        junitReporter: {
            outputFile: 'reports/junit/TESTS-Client-all.xml'
        },

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // web server port
        port: 8080,

        // level of logging: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: 'LOG_DEBUG',

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
