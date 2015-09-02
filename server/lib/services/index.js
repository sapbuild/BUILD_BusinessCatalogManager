'use strict';
var commonServer = require('norman-common-server');
var registry = commonServer.registry;
var Catalog = require('./catalog');

var BUSINESS_CATALOG_SERVICE = 'BusinessCatalog';

registry.registerModule(new Catalog(), BUSINESS_CATALOG_SERVICE);

var logger = commonServer.logging.createLogger('business-catalog-service');

module.exports = {
    initialize: function (done) {
        var service = registry.getModule(BUSINESS_CATALOG_SERVICE);
        service.initialize(done);
    },
    onInitialized: function () {
        var service = registry.getModule(BUSINESS_CATALOG_SERVICE);
        service.onInitialized();
    },
    checkSchema: function (done) {
        var service = registry.getModule(BUSINESS_CATALOG_SERVICE);
        service.checkSchema(done);
    },
    onSchemaChecked: function () {
    },
    initializeSchema: function (done) {
        var service = registry.getModule(BUSINESS_CATALOG_SERVICE);
        service.initializeSchema(done);
    },
    onSchemaInitialized: function () {
    },
    prepareSchemaUpgrade: function (version, done) {
        logger.debug({version: version}, 'prepareSchemaUpgrade');
        done();
    },
    upgradeSchema: function (version, done) {
        logger.debug({version: version}, 'upgradeSchema');
        done();
    },
    onSchemaUpgraded: function (version, done) {
        logger.debug({version: version}, 'onSchemaUpgraded');
        done();
    },
    shutdown: function (done) {
        var service = registry.getModule(BUSINESS_CATALOG_SERVICE);
        registry.unregisterModule(BUSINESS_CATALOG_SERVICE);
        service.shutdown(done);
    }
};
