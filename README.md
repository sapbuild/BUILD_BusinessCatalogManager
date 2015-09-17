BusinessCatalogManager
===============
[![Build Status](https://build-jenkins.wdf.sap.corp/jenkins/job/BusinessCatalogManager-master/badge/icon)](https://build-jenkins.wdf.sap.corp/jenkins/job/BusinessCatalogManager-master/)

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



