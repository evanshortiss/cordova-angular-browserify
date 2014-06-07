'use strict';

module.exports = function ($scope, $interval) {
  $scope.time = new Date().toJSON();

  $interval(function () {
    $scope.time = new Date().toJSON();
  }, 999);
};
