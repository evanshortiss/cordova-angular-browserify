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

  $scope.login = Auth.login;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvZXNob3J0aXNzLy5udm0vdjAuMTAuMjQvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZXNob3J0aXNzL3dvcmtzcGFjZXMvcGVyc29uYWwvYnJvd3NlcmlmeS1maG5nL3d3dy9qcy9hcHAuanMiLCIvVXNlcnMvZXNob3J0aXNzL3dvcmtzcGFjZXMvcGVyc29uYWwvYnJvd3NlcmlmeS1maG5nL3d3dy9qcy9jb25zdGFudHMvVXNlcnMuanMiLCIvVXNlcnMvZXNob3J0aXNzL3dvcmtzcGFjZXMvcGVyc29uYWwvYnJvd3NlcmlmeS1maG5nL3d3dy9qcy9jb25zdGFudHMvaW5kZXguanMiLCIvVXNlcnMvZXNob3J0aXNzL3dvcmtzcGFjZXMvcGVyc29uYWwvYnJvd3NlcmlmeS1maG5nL3d3dy9qcy9jb250cm9sbGVycy9NYWluLmpzIiwiL1VzZXJzL2VzaG9ydGlzcy93b3Jrc3BhY2VzL3BlcnNvbmFsL2Jyb3dzZXJpZnktZmhuZy93d3cvanMvY29udHJvbGxlcnMvaW5kZXguanMiLCIvVXNlcnMvZXNob3J0aXNzL3dvcmtzcGFjZXMvcGVyc29uYWwvYnJvd3NlcmlmeS1maG5nL3d3dy9qcy9kaXJlY3RpdmVzL1JhbmRvbU51bWJlci5qcyIsIi9Vc2Vycy9lc2hvcnRpc3Mvd29ya3NwYWNlcy9wZXJzb25hbC9icm93c2VyaWZ5LWZobmcvd3d3L2pzL2RpcmVjdGl2ZXMvaW5kZXguanMiLCIvVXNlcnMvZXNob3J0aXNzL3dvcmtzcGFjZXMvcGVyc29uYWwvYnJvd3NlcmlmeS1maG5nL3d3dy9qcy9mYWN0b3JpZXMvaW5kZXguanMiLCIvVXNlcnMvZXNob3J0aXNzL3dvcmtzcGFjZXMvcGVyc29uYWwvYnJvd3NlcmlmeS1maG5nL3d3dy9qcy9maWx0ZXJzL0Zvcm1hdFVzZXJOYW1lLmpzIiwiL1VzZXJzL2VzaG9ydGlzcy93b3Jrc3BhY2VzL3BlcnNvbmFsL2Jyb3dzZXJpZnktZmhuZy93d3cvanMvZmlsdGVycy9pbmRleC5qcyIsIi9Vc2Vycy9lc2hvcnRpc3Mvd29ya3NwYWNlcy9wZXJzb25hbC9icm93c2VyaWZ5LWZobmcvd3d3L2pzL3NlcnZpY2VzL0F1dGguanMiLCIvVXNlcnMvZXNob3J0aXNzL3dvcmtzcGFjZXMvcGVyc29uYWwvYnJvd3NlcmlmeS1maG5nL3d3dy9qcy9zZXJ2aWNlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJylcbiAgLCBzZXJ2aWNlcyA9IHJlcXVpcmUoJy4vc2VydmljZXMnKVxuICAsIGZhY3RvcmllcyA9IHJlcXVpcmUoJy4vZmFjdG9yaWVzJylcbiAgLCBjb250cm9sbGVycyA9IHJlcXVpcmUoJy4vY29udHJvbGxlcnMnKVxuICAsIGRpcmVjdGl2ZXMgPSByZXF1aXJlKCcuL2RpcmVjdGl2ZXMnKVxuICAsIGZpbHRlcnMgPSByZXF1aXJlKCcuL2ZpbHRlcnMnKTtcblxuZnVuY3Rpb24gcnVuICgkaW9uaWNQbGF0Zm9ybSkge1xuICBjb25zb2xlLmxvZygnQXBwIHJ1biBjYWxsZWQhJyk7XG5cbiAgJGlvbmljUGxhdGZvcm0ucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgaWYod2luZG93LlN0YXR1c0Jhcikge1xuICAgICAgLy8gb3JnLmFwYWNoZS5jb3Jkb3ZhLnN0YXR1c2JhciByZXF1aXJlZFxuICAgICAgU3RhdHVzQmFyLnN0eWxlRGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ015QXBwJywgW1xuICAvLyBJb25pY1xuICAnaW9uaWMnLFxuICAvLyBBbmd1bGFyIEZIIEFQSSBzaGltXG4gICdGSCcsXG5cbiAgZmlsdGVycy5uYW1lLFxuICBjb25zdGFudHMubmFtZSxcbiAgc2VydmljZXMubmFtZSxcbiAgZmFjdG9yaWVzLm5hbWUsXG4gIGNvbnRyb2xsZXJzLm5hbWUsXG4gIGRpcmVjdGl2ZXMubmFtZVxuXSkucnVuKHJ1bik7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gW1xuICB7XG4gICAgZmlyc3ROYW1lOiAnRXZhbicsXG4gICAgbGFzdE5hbWU6ICdTaG9ydGlzcycsXG4gICAgYWdlOiAyM1xuICB9LFxuICB7XG4gICAgZmlyc3ROYW1lOiAnSm9obicsXG4gICAgbGFzdE5hbWU6ICdXYXluZScsXG4gICAgYWdlOiA1MlxuICB9XG5dO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBSZXF1aXJlIGFsbCBjb25zdGFudHMgaGVyZVxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnTXlBcHAuY29uc3RhbnRzJywgW10pXG4gIC5jb25zdGFudCgnQVBJX1RPS0VOJywgJzEyM0FCQzEyM0FCQycpXG4gIC5jb25zdGFudCgnREVGQVVMVF9VU0VSUycsIHJlcXVpcmUoJy4vVXNlcnMnKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgJGludGVydmFsLCBBdXRoLCBERUZBVUxUX1VTRVJTKSB7XG4gICRzY29wZS50aW1lID0gbmV3IERhdGUoKS50b0pTT04oKTtcblxuICAkc2NvcGUudXNlcnMgPSBERUZBVUxUX1VTRVJTO1xuXG4gICRpbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLnRpbWUgPSBuZXcgRGF0ZSgpLnRvSlNPTigpO1xuICB9LCA5OTkpO1xuXG4gICRzY29wZS5sb2dpbiA9IEF1dGgubG9naW47XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBSZXF1aXJlIGFsbCBjb250cm9sbGVycyBoZXJlXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdNeUFwcC5jb250cm9sbGVycycsIFtdKVxuICAuY29udHJvbGxlcignTWFpbicsIHJlcXVpcmUoJy4vTWFpbicpKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuXG52YXIgdG1wID0gXCI8ZW0+e3tudW1iZXJ9fTwvZW0+XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGU6IHRtcCxcbiAgICBsaW5rOiBmdW5jdGlvbiBsaW5rICgkc2NvcGUpIHtcbiAgICAgICRzY29wZS5udW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgIH1cbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIFJlcXVpcmUgYWxsIGRpcmVjdGl2ZXMgaGVyZVxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnTXlBcHAuZGlyZWN0aXZlcycsIFtdKVxuICAuZGlyZWN0aXZlKCdyYW5kb21OdW1iZXInLCByZXF1aXJlKCcuL1JhbmRvbU51bWJlcicpKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gUmVxdWlyZSBhbGwgZmFjdG9yaWVzIGhlcmVcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ015QXBwLmZhY3RvcmllcycsIFtdKTtcbiAgLy8gLnNlcnZpY2UoJ2N1c3RvbUZhY3RvcnknLCByZXF1aXJlKCcuL2N1c3RvbUZhY3RvcnkuanMnKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHVzZXIpIHtcbiAgICByZXR1cm4gdXNlci5maXJzdE5hbWUgKyAnICcgKyB1c2VyLmxhc3ROYW1lO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIFJlcXVpcmUgYWxsIGZpbHRlcnMgaGVyZVxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnTXlBcHAuZmlsdGVycycsIFtdKVxuICAuZmlsdGVyKCdmb3JtYXRVc2VyTmFtZScsIHJlcXVpcmUoJy4vRm9ybWF0VXNlck5hbWUnKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEFjdCkge1xuICB2YXIgdG9rZW4gPSBudWxsO1xuXG4gIC8qKlxuICAgKiBFeGFtcGxlIGxvZ2luIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gICAgdXNlcm5hbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9ICAgIHBhc3N3b3JkXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259ICBjYWxsYmFja1xuICAgKi9cbiAgdGhpcy5sb2dpbiA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCF1c2VybmFtZSB8fCB1c2VybmFtZSA9PT0gJycgfHwgIXBhc3N3b3JkIHx8IHBhc3N3b3JkID09PSAnJykge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCdQbGVhc2UgZW50ZXIgdXNlcm5hbWUgYW5kIHBhc3N3b3JkLicsIG51bGwpO1xuICAgIH1cblxuICAgIEFjdC5jYWxsRm4oJ2xvZ2luJywge1xuICAgICAgdTogdXNlcm5hbWUsXG4gICAgICBwOiBwYXNzd29yZFxuICAgIH0sIGZ1bmN0aW9uIChlcnIsIHJlcykge1xuICAgICAgLy8gU2FtcGxlIHJlc3BvbnNlIEpTT04sIGEgdG9rZW4gbWVhbnMgbG9naW4gd2FzIHN1Y2Nlc3NmdWxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgZXJyb3I6ICdMb2dpbiBmYWlsZWQuIFVzZXIgbm90IGZvdW5kLicsXG4gICAgICAvLyAgIHRva2VuOiAnOTUwYzRkYTkyNGQ4MGI2ZTU3M2NlMDM1YzRmY2I2ZjEnLFxuICAgICAgLy8gfVxuXG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVyciwgcmVzKTtcbiAgICAgIH0gZWxzZSBpZiAocmVzLnRva2VuKSB7XG4gICAgICAgIC8vIFN0b3JlIHNlc3Npb24gdG9rZW4gZm9yIGxhdGVyIHJldHJpZXZhbCAvIHVzZVxuICAgICAgICB0b2tlbiA9IHJlcy50b2tlbjtcblxuICAgICAgICAvLyBSZXR1cm4gcmVzdWx0XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhyZXNbJ2Vycm9yJ10sIG51bGwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG5cbiAgLyoqXG4gICAqIENoZWNrIGhhdmUgd2UgbG9nZ2VkIGluLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgdGhpcy5pc0xvZ2dlZEluID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodG9rZW4gIT09IG51bGwpO1xuICB9O1xuXG5cbiAgLyoqXG4gICAqIEdldCBzZXNzaW9uIHRva2VuXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIHRoaXMuZ2V0U2Vzc2lvblRva2VuID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0b2tlbjtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIFJlcXVpcmUgYWxsIHNlcnZpY2VzIGhlcmVcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ015QXBwLnNlcnZpY2VzJywgW10pXG4gIC5zZXJ2aWNlKCdBdXRoJywgWydGSC5BY3QnLCByZXF1aXJlKCcuL0F1dGguanMnKV0pO1xuIl19
