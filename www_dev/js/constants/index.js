'use strict';

// Require all constants here
module.exports = angular.module('MyApp.constants', [])
  .constant('API_TOKEN', '123ABC123ABC')
  .constant('DEFAULT_USERS', require('./Users'));
