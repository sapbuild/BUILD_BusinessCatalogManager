'use strict';

var commonServer = require('norman-common-server');
var services = require('./lib/services');
var api = require('./lib/api');

var logger = commonServer.logging.createLogger('catalog-service');
commonServer.logging.manager.on('configure', function () {
    logger = commonServer.logging.createLogger('catalog-service');
});

var NAME = 'BusinessCatalog';
var VERSION = '0.0.0';

module.exports = {
    name: NAME,
    initialize: function (done) {
        logger.info('Initializing Business Catalog service');
        services.initialize(function (err) {
            if (err) {
                done(err);
            }
            else {
                done();
            }
        });
    },
    onInitialized: function () {
        services.onInitialized();
    },
    checkSchema: function (done) {
        services.checkSchema(done);
    },
    onSchemaChecked: function () {
        services.onSchemaChecked();
    },
    initializeSchema: function (done) {
        services.initializeSchema(done);
    },
    onSchemaInitialized: function () {
        services.onSchemaInitialized();
    },
    prepareSchemaUpgrade: function (version, done) {
         services.prepareSchemaUpgrade(version, done);
    },
    upgradeSchema: function (version, done) {
         services.upgradeSchema(version, done);
    },
    onSchemaUpgraded: function (version, done) {
        services.onSchemaUpgraded(version, done);
    },
    shutdown: function (done) {
        logger.info('Stopping Business Catalog service');
        api.shutdown();
        services.shutdown(done);
    },
    getHandlers: function () {
        logger.debug('Get Data Business Catalog handlers');
        api.initialize();
        return api.getHandlers();
    },
    getSchemaInfo: function () {
        return {name: NAME, version: VERSION};
    }
};
