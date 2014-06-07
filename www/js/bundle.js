(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var controllers = require('./controllers')
  , directives = require('./directives')
  , factories = require('./factories')
  , services = require('./services')
  , filters = require('./filters')

module.exports = angular.module('MyApp', [
    controllers.name,
    directives.name,
    factories.name,
    services.name,
    filters.name
  ]).config(function () {
  console.log('Running app');
});

},{"./controllers":3,"./directives":4,"./factories":5,"./filters":6,"./services":7}],2:[function(require,module,exports){
'use strict';

module.exports = function ($scope, $interval) {
  $scope.time = new Date().toJSON();

  $interval(function () {
    $scope.time = new Date().toJSON();
  }, 999);
};

},{}],3:[function(require,module,exports){
'use strict';

module.exports = angular.module('MyApp.controllers', [])
  .controller('Main', require('./Main'));

},{"./Main":2}],4:[function(require,module,exports){
'use strict';

module.exports = angular.module('MyApp.directives', [])
  // .directive('customTag', require('./customTag.js'));

},{}],5:[function(require,module,exports){
'use strict';

module.exports = angular.module('MyApp.factories', [])
  // .service('customFactory', require('./customFactory.js'));

},{}],6:[function(require,module,exports){
'use strict';

module.exports = angular.module('MyApp.filters', []);
  // .filter('customFilter', require('./customFilter.js'));

},{}],7:[function(require,module,exports){
'use strict';

module.exports = angular.module('MyApp.services', [])
  // .service('customService', require('./customService.js'));

},{}]},{},[2,3,4,5,6,7,1])