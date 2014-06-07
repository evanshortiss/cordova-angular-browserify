'use strict';

var controllers = require('./controllers')
  , directives = require('./directives')
  , factories = require('./factories')
  , services = require('./services')
  , filters = require('./filters')

module.exports = angular.module('MyApp', [
    controllers.name,
    directives.name,
    factories.name,
    services.name,
    filters.name
  ]).config(function () {
  console.log('Running app');
});
