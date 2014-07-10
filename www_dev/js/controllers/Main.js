'use strict';

module.exports = function ($scope, $interval, $window, Auth, DEFAULT_USERS) {
  $scope.time = new Date().toJSON();

  $scope.users = DEFAULT_USERS;

  $interval(function () {
    $scope.time = new Date().toJSON();
  }, 999);

  $scope.login = function () {
    Auth.login('', '', function (err) {
      if (err) {
        $window.alert(err);
      }
    });
  };
};
