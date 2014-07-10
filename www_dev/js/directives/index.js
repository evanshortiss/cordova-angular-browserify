'use strict';

// Require all directives here
module.exports = angular.module('MyApp.directives', [])
  .directive('randomNumber', require('./RandomNumber'));
