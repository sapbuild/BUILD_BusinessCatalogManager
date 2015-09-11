'use strict';
module.exports = {

    dev: {
        options: {
            transform: [['browserify-istanbul', {defaultIgnore: false, ignore : ['**/node_modules/angular*/**', '**/test/**', '**/tests/**', '**/*.json']}]]
        },
        files: {
            'dev/assets/bundle.js': ['test/client.js', 'client/index.js']
        }

    }

};
