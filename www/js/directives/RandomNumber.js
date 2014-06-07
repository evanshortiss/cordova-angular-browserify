'use strict';

var fs = require('fs');
var path = require('path');

var tmp = fs.readFileSync(__dirname + '/../../templates/RandomNumber.html'
  , 'utf8');

module.exports = function () {
  return {
    restrict: 'E',
    template: tmp,
    link: function link ($scope) {
      $scope.number = Math.round(Math.random() * 100);
    }
  }
};
