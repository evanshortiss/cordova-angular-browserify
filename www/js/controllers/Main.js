'use strict';

module.exports = function ($scope, $interval, Auth) {
  $scope.time = new Date().toJSON();

  $interval(function () {
    $scope.time = new Date().toJSON();
  }, 999);

  $scope.login = Auth.login
};
