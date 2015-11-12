[![Build](https://img.shields.io/travis/sapbuild/BusinessCatalogManager.svg?style=flat-square)](http://travis-ci.org/sapbuild/BusinessCatalogManager)
[![Version](https://img.shields.io/npm/v/norman-business-catalog-manager-client.svg?style=flat-square)](https://npmjs.org/package/norman-business-catalog-manager-client)
[![Dependency Status](https://david-dm.org/sapbuild/BusinessCatalogManager.svg)](https://david-dm.org/sapbuild/BusinessCatalogManager)
[![devDependency Status](https://david-dm.org/sapbuild/BusinessCatalogManager/dev-status.svg)](https://david-dm.org/sapbuild/BusinessCatalogManager#info=devDependencies)
[![Coverage](https://img.shields.io/coveralls/sapbuild/BusinessCatalogManager/master.svg?style=flat-square)](https://coveralls.io/r/sapbuild/BusinessCatalogManager?branch=master)

BusinessCatalogManager
===============

# BUILD on GitHub

[Click here](https://github.com/SAP/BUILD) to visit the central BUILD project on GitHub, where you can find out more!

[Click here](https://github.com/SAP/BUILD/blob/master/Contributing.md) to view the BUILD Contribution Guidelines. 


##Installation

npm install

##Installation dev

npm install
npm link

after, you go your Norman folder and you run
npm link norman-business-catalog-manager-server
npm link norman-business-catalog-manager-client

and you update the file Norman\server\requires.js:
module.exports = function (app) {
...
    require('norman-business-catalog-manager-server')(app);
};

and you update the file Norman\client\requires.js:
...
require('norman-business-catalog-manager-client');



