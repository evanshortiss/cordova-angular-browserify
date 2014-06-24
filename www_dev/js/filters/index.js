'use strict';

// Require all filters here
module.exports = angular.module('MyApp.filters', [])
  .filter('formatUserName', require('./FormatUserName'));
