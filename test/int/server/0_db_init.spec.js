'use strict';

var API = require('../api/businessCatalogRestApi');
var api = new API();

describe('DB init', function () {
    this.timeout(1500000);
    before('db initialize', function (done) {
        api.dbInitialize(done);
    });

    it('ok', function (done) {
        api.initialize('dbinit.businessCatalog@example.com', '5_LucrouR').then(done);
    });

});
