'use strict';

module.exports = angular.module('MyApp.services', [])
  .service('Auth', ['FH.Act', require('./Auth.js')]);
