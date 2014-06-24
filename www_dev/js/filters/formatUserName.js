'use strict';

module.exports = function () {
  return function (user) {
    return user.firstName + ' ' + user.lastName;
  }
}
