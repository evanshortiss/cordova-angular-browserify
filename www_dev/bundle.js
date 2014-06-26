(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var constants = require('./constants')
  , services = require('./services')
  , factories = require('./factories')
  , controllers = require('./controllers')
  , directives = require('./directives')
  , filters = require('./filters');

function run ($ionicPlatform) {
  console.log('App run called!');

  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}

module.exports = angular.module('MyApp', [
  // Ionic
  'ionic',
  // Angular FH API shim
  'FH',

  filters.name,
  constants.name,
  services.name,
  factories.name,
  controllers.name,
  directives.name
]).run(run);

},{"./constants":3,"./controllers":5,"./directives":7,"./factories":8,"./filters":11,"./services":13}],2:[function(require,module,exports){
'use strict';

module.exports = [
  {
    firstName: 'Evan',
    lastName: 'Shortiss',
    age: 23
  },
  {
    firstName: 'John',
    lastName: 'Wayne',
    age: 52
  }
];

},{}],3:[function(require,module,exports){
'use strict';

// Require all constants here
module.exports = angular.module('MyApp.constants', [])
  .constant('API_TOKEN', '123ABC123ABC')
  .constant('DEFAULT_USERS', require('./Users'));

},{"./Users":2}],4:[function(require,module,exports){
'use strict';

module.exports = function ($scope, $interval, Auth, DEFAULT_USERS) {
  $scope.time = new Date().toJSON();

  $scope.users = DEFAULT_USERS;

  $interval(function () {
    $scope.time = new Date().toJSON();
  }, 999);

  $scope.login = function () {
    Auth.login('', '', function (err, res) {
      if (err) {
        alert(err);
      }
    })
  };
};

},{}],5:[function(require,module,exports){
'use strict';

// Require all controllers here
module.exports = angular.module('MyApp.controllers', [])
  .controller('Main', require('./Main'));

},{"./Main":4}],6:[function(require,module,exports){
'use strict';


var tmp = "<em>{{number}}</em>";

module.exports = function () {
  return {
    restrict: 'E',
    template: tmp,
    link: function link ($scope) {
      $scope.number = Math.round(Math.random() * 100);
    }
  };
};

},{}],7:[function(require,module,exports){
'use strict';

// Require all directives here
module.exports = angular.module('MyApp.directives', [])
  .directive('randomNumber', require('./RandomNumber'));

},{"./RandomNumber":6}],8:[function(require,module,exports){
'use strict';

// Require all factories here
module.exports = angular.module('MyApp.factories', []);
  // .service('customFactory', require('./customFactory.js'));

},{}],9:[function(require,module,exports){
'use strict';

module.exports = function () {
  return function (user) {
    return user.firstName + ' ' + user.lastName;
  }
}

},{}],10:[function(require,module,exports){
module.exports=require(9)
},{}],11:[function(require,module,exports){
'use strict';

// Require all filters here
module.exports = angular.module('MyApp.filters', [])
  .filter('formatUserName', require('./FormatUserName'));

},{"./FormatUserName":9}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
'use strict';

// Require all services here
module.exports = angular.module('MyApp.services', [])
  .service('Auth', ['FH.Act', require('./Auth.js')]);

},{"./Auth.js":12}]},{},[2,3,4,5,6,7,8,10,11,12,13,1])