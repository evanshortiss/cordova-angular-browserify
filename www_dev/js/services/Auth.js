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
    if (!username || username === '' || !password || password === '') {
      return callback('Please enter username and password.', null);
    }

    Act.callFn('login', {
      u: username,
      p: password
    }, function (err, res) {
      // Sample response JSON, a token means login was successful
      // {
      //   error: 'Login failed. User not found.',
      //   token: '950c4da924d80b6e573ce035c4fcb6f1',
      // }

      if (err) {
        callback(err, res);
      } else if (res.token) {
        // Store session token for later retrieval / use
        token = res.token;

        // Return result
        callback(null, res);
      } else {
        callback(res['error'], null);
      }
    });
  };


  /**
   * Check have we logged in.
   * @return {Boolean}
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
