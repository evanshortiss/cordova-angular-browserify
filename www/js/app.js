'use strict';

var constants = require('./constants')
  , services = require('./services')
  , factories = require('./factories')
  , controllers = require('./controllers')
  , directives = require('./directives')
  , filters = require('./filters');


function config () {
  console.log('App config called!');
}

module.exports = angular.module('MyApp', [
  'FH', // Angular FH shims,
  constants.name,
  services.name,
  factories.name,
  controllers.name,
  directives.name,
  filters.name
]).config(config);
