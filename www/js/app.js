'use strict';

var controllers = require('./controllers')
  , directives = require('./directives')
  , constants = require('./constants')
  , factories = require('./factories')
  , services = require('./services')
  , filters = require('./filters');


function config () {
  console.log('App config called!');
}

module.exports = angular.module('MyApp', [
    controllers.name,
    directives.name,
    constants.name,
    factories.name,
    services.name,
    filters.name
  ]).config(config);
