/*eslint global-strict:0 */
'use strict';

module.exports = ['$scope', '$rootScope', 'bcm.Catalog', function ($scope, $rootScope, Catalog) {
    $scope.url = 'http://ldai1gm6.wdf.sap.corp:50033/sap/opu/odata/iwfnd/catalogservice/ServiceCollection?sap-client=001&$format=json';
    $scope.login = '';
    $scope.pwd = '';
    $scope.services = [];

    Catalog.getCatalogs({}, function (response) {
        $scope.services = response;
    });

    $scope.run = function () {
        var postInfo = {
            url: this.url,
            login: this.login,
            pwd: this.pwd
        };

        Catalog.import(postInfo, function () {
            $scope.services = [];
            $scope.importStatus = 'start';
        });
    };

}];
