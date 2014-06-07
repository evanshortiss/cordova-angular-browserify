'use strict';

module.exports = function (Act) {
  var token = null;

  /**
   * Example login function.
   * @param {String}    username
   * @param {String}    password
   * @param {Function}  callback
   */
  this.login = function (username, password, callback) {
    Act.callFn('login', {
      u: username,
      p: password
    }, function (err, res) {
      if (err) {
        callback(err, res)
      } else {
        // Store session token for later retrieval / use
        sessionKey = res.token;

        // Return result
        callback(null, res);
      }
    });
  };


  /**
   * Check have we logged in.
   * @param {Boolean}
   */
  this.isLoggedIn = function () {
    return (token !== null);
  };


  /**
   * Get session token
   * @return {String}
   */
  this.getSessionToken = function () {
    return token;
  };
};
