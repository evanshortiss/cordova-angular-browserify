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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvZXNob3J0aXNzLy5udm0vdjAuMTAuMjQvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZXNob3J0aXNzL3dvcmtzcGFjZXMvcGVyc29uYWwvY29yZG92YS1hbmd1bGFyLWJyb3dzZXJpZnkvd3d3X2Rldi9qcy9hcHAuanMiLCIvVXNlcnMvZXNob3J0aXNzL3dvcmtzcGFjZXMvcGVyc29uYWwvY29yZG92YS1hbmd1bGFyLWJyb3dzZXJpZnkvd3d3X2Rldi9qcy9jb25zdGFudHMvVXNlcnMuanMiLCIvVXNlcnMvZXNob3J0aXNzL3dvcmtzcGFjZXMvcGVyc29uYWwvY29yZG92YS1hbmd1bGFyLWJyb3dzZXJpZnkvd3d3X2Rldi9qcy9jb25zdGFudHMvaW5kZXguanMiLCIvVXNlcnMvZXNob3J0aXNzL3dvcmtzcGFjZXMvcGVyc29uYWwvY29yZG92YS1hbmd1bGFyLWJyb3dzZXJpZnkvd3d3X2Rldi9qcy9jb250cm9sbGVycy9NYWluLmpzIiwiL1VzZXJzL2VzaG9ydGlzcy93b3Jrc3BhY2VzL3BlcnNvbmFsL2NvcmRvdmEtYW5ndWxhci1icm93c2VyaWZ5L3d3d19kZXYvanMvY29udHJvbGxlcnMvaW5kZXguanMiLCIvVXNlcnMvZXNob3J0aXNzL3dvcmtzcGFjZXMvcGVyc29uYWwvY29yZG92YS1hbmd1bGFyLWJyb3dzZXJpZnkvd3d3X2Rldi9qcy9kaXJlY3RpdmVzL1JhbmRvbU51bWJlci5qcyIsIi9Vc2Vycy9lc2hvcnRpc3Mvd29ya3NwYWNlcy9wZXJzb25hbC9jb3Jkb3ZhLWFuZ3VsYXItYnJvd3NlcmlmeS93d3dfZGV2L2pzL2RpcmVjdGl2ZXMvaW5kZXguanMiLCIvVXNlcnMvZXNob3J0aXNzL3dvcmtzcGFjZXMvcGVyc29uYWwvY29yZG92YS1hbmd1bGFyLWJyb3dzZXJpZnkvd3d3X2Rldi9qcy9mYWN0b3JpZXMvaW5kZXguanMiLCIvVXNlcnMvZXNob3J0aXNzL3dvcmtzcGFjZXMvcGVyc29uYWwvY29yZG92YS1hbmd1bGFyLWJyb3dzZXJpZnkvd3d3X2Rldi9qcy9maWx0ZXJzL0Zvcm1hdFVzZXJOYW1lLmpzIiwiL1VzZXJzL2VzaG9ydGlzcy93b3Jrc3BhY2VzL3BlcnNvbmFsL2NvcmRvdmEtYW5ndWxhci1icm93c2VyaWZ5L3d3d19kZXYvanMvZmlsdGVycy9pbmRleC5qcyIsIi9Vc2Vycy9lc2hvcnRpc3Mvd29ya3NwYWNlcy9wZXJzb25hbC9jb3Jkb3ZhLWFuZ3VsYXItYnJvd3NlcmlmeS93d3dfZGV2L2pzL3NlcnZpY2VzL0F1dGguanMiLCIvVXNlcnMvZXNob3J0aXNzL3dvcmtzcGFjZXMvcGVyc29uYWwvY29yZG92YS1hbmd1bGFyLWJyb3dzZXJpZnkvd3d3X2Rldi9qcy9zZXJ2aWNlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpXG4gICwgc2VydmljZXMgPSByZXF1aXJlKCcuL3NlcnZpY2VzJylcbiAgLCBmYWN0b3JpZXMgPSByZXF1aXJlKCcuL2ZhY3RvcmllcycpXG4gICwgY29udHJvbGxlcnMgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXJzJylcbiAgLCBkaXJlY3RpdmVzID0gcmVxdWlyZSgnLi9kaXJlY3RpdmVzJylcbiAgLCBmaWx0ZXJzID0gcmVxdWlyZSgnLi9maWx0ZXJzJyk7XG5cbmZ1bmN0aW9uIHJ1biAoJGlvbmljUGxhdGZvcm0pIHtcbiAgY29uc29sZS5sb2coJ0FwcCBydW4gY2FsbGVkIScpO1xuXG4gICRpb25pY1BsYXRmb3JtLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIGlmKHdpbmRvdy5TdGF0dXNCYXIpIHtcbiAgICAgIC8vIG9yZy5hcGFjaGUuY29yZG92YS5zdGF0dXNiYXIgcmVxdWlyZWRcbiAgICAgIFN0YXR1c0Jhci5zdHlsZURlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdNeUFwcCcsIFtcbiAgLy8gSW9uaWNcbiAgJ2lvbmljJyxcbiAgLy8gQW5ndWxhciBGSCBBUEkgc2hpbVxuICAnRkgnLFxuXG4gIGZpbHRlcnMubmFtZSxcbiAgY29uc3RhbnRzLm5hbWUsXG4gIHNlcnZpY2VzLm5hbWUsXG4gIGZhY3Rvcmllcy5uYW1lLFxuICBjb250cm9sbGVycy5uYW1lLFxuICBkaXJlY3RpdmVzLm5hbWVcbl0pLnJ1bihydW4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAge1xuICAgIGZpcnN0TmFtZTogJ0V2YW4nLFxuICAgIGxhc3ROYW1lOiAnU2hvcnRpc3MnLFxuICAgIGFnZTogMjNcbiAgfSxcbiAge1xuICAgIGZpcnN0TmFtZTogJ0pvaG4nLFxuICAgIGxhc3ROYW1lOiAnV2F5bmUnLFxuICAgIGFnZTogNTJcbiAgfVxuXTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gUmVxdWlyZSBhbGwgY29uc3RhbnRzIGhlcmVcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ015QXBwLmNvbnN0YW50cycsIFtdKVxuICAuY29uc3RhbnQoJ0FQSV9UT0tFTicsICcxMjNBQkMxMjNBQkMnKVxuICAuY29uc3RhbnQoJ0RFRkFVTFRfVVNFUlMnLCByZXF1aXJlKCcuL1VzZXJzJykpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsICRpbnRlcnZhbCwgQXV0aCwgREVGQVVMVF9VU0VSUykge1xuICAkc2NvcGUudGltZSA9IG5ldyBEYXRlKCkudG9KU09OKCk7XG5cbiAgJHNjb3BlLnVzZXJzID0gREVGQVVMVF9VU0VSUztcblxuICAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS50aW1lID0gbmV3IERhdGUoKS50b0pTT04oKTtcbiAgfSwgOTk5KTtcblxuICAkc2NvcGUubG9naW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgQXV0aC5sb2dpbignJywgJycsIGZ1bmN0aW9uIChlcnIsIHJlcykge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBhbGVydChlcnIpO1xuICAgICAgfVxuICAgIH0pXG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBSZXF1aXJlIGFsbCBjb250cm9sbGVycyBoZXJlXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdNeUFwcC5jb250cm9sbGVycycsIFtdKVxuICAuY29udHJvbGxlcignTWFpbicsIHJlcXVpcmUoJy4vTWFpbicpKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuXG52YXIgdG1wID0gXCI8ZW0+e3tudW1iZXJ9fTwvZW0+XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGU6IHRtcCxcbiAgICBsaW5rOiBmdW5jdGlvbiBsaW5rICgkc2NvcGUpIHtcbiAgICAgICRzY29wZS5udW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgIH1cbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIFJlcXVpcmUgYWxsIGRpcmVjdGl2ZXMgaGVyZVxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnTXlBcHAuZGlyZWN0aXZlcycsIFtdKVxuICAuZGlyZWN0aXZlKCdyYW5kb21OdW1iZXInLCByZXF1aXJlKCcuL1JhbmRvbU51bWJlcicpKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gUmVxdWlyZSBhbGwgZmFjdG9yaWVzIGhlcmVcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ015QXBwLmZhY3RvcmllcycsIFtdKTtcbiAgLy8gLnNlcnZpY2UoJ2N1c3RvbUZhY3RvcnknLCByZXF1aXJlKCcuL2N1c3RvbUZhY3RvcnkuanMnKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHVzZXIpIHtcbiAgICByZXR1cm4gdXNlci5maXJzdE5hbWUgKyAnICcgKyB1c2VyLmxhc3ROYW1lO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIFJlcXVpcmUgYWxsIGZpbHRlcnMgaGVyZVxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnTXlBcHAuZmlsdGVycycsIFtdKVxuICAuZmlsdGVyKCdmb3JtYXRVc2VyTmFtZScsIHJlcXVpcmUoJy4vRm9ybWF0VXNlck5hbWUnKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEFjdCkge1xuICB2YXIgdG9rZW4gPSBudWxsO1xuXG4gIC8qKlxuICAgKiBFeGFtcGxlIGxvZ2luIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gICAgdXNlcm5hbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9ICAgIHBhc3N3b3JkXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259ICBjYWxsYmFja1xuICAgKi9cbiAgdGhpcy5sb2dpbiA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCF1c2VybmFtZSB8fCB1c2VybmFtZSA9PT0gJycgfHwgIXBhc3N3b3JkIHx8IHBhc3N3b3JkID09PSAnJykge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCdQbGVhc2UgZW50ZXIgdXNlcm5hbWUgYW5kIHBhc3N3b3JkLicsIG51bGwpO1xuICAgIH1cblxuICAgIEFjdC5jYWxsRm4oJ2xvZ2luJywge1xuICAgICAgdTogdXNlcm5hbWUsXG4gICAgICBwOiBwYXNzd29yZFxuICAgIH0sIGZ1bmN0aW9uIChlcnIsIHJlcykge1xuICAgICAgLy8gU2FtcGxlIHJlc3BvbnNlIEpTT04sIGEgdG9rZW4gbWVhbnMgbG9naW4gd2FzIHN1Y2Nlc3NmdWxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgZXJyb3I6ICdMb2dpbiBmYWlsZWQuIFVzZXIgbm90IGZvdW5kLicsXG4gICAgICAvLyAgIHRva2VuOiAnOTUwYzRkYTkyNGQ4MGI2ZTU3M2NlMDM1YzRmY2I2ZjEnLFxuICAgICAgLy8gfVxuXG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVyciwgcmVzKTtcbiAgICAgIH0gZWxzZSBpZiAocmVzLnRva2VuKSB7XG4gICAgICAgIC8vIFN0b3JlIHNlc3Npb24gdG9rZW4gZm9yIGxhdGVyIHJldHJpZXZhbCAvIHVzZVxuICAgICAgICB0b2tlbiA9IHJlcy50b2tlbjtcblxuICAgICAgICAvLyBSZXR1cm4gcmVzdWx0XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhyZXNbJ2Vycm9yJ10sIG51bGwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG5cbiAgLyoqXG4gICAqIENoZWNrIGhhdmUgd2UgbG9nZ2VkIGluLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgdGhpcy5pc0xvZ2dlZEluID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodG9rZW4gIT09IG51bGwpO1xuICB9O1xuXG5cbiAgLyoqXG4gICAqIEdldCBzZXNzaW9uIHRva2VuXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIHRoaXMuZ2V0U2Vzc2lvblRva2VuID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0b2tlbjtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIFJlcXVpcmUgYWxsIHNlcnZpY2VzIGhlcmVcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ015QXBwLnNlcnZpY2VzJywgW10pXG4gIC5zZXJ2aWNlKCdBdXRoJywgWydGSC5BY3QnLCByZXF1aXJlKCcuL0F1dGguanMnKV0pO1xuIl19
