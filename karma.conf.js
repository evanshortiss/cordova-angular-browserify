
module.exports = function(config) {
  config.set({

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'chai'],


    // list of files / patterns to load in the browser
    // we need angular and it's mocks for testing/loading modules
    files: [
      './www/bower_components/angular/angular.js',
      './www/bower_components/angular-animate/angular-animate.js',
      './www/bower_components/angular-sanitize/angular-sanitize.js',
      './www/bower_components/angular-ui-router/release/angular-ui-router.js',
      './www/bower_components/ionic/release/js/ionic.js',
      './www/bower_components/ionic/release/js/ionic-angular.js',
      './www/bower_components/fh-js-sdk/dist/feedhenry.js',
      './www/bower_components/ng-act/src/Act.js',
      './www/bower_components/ngCordova/dist/ng-cordova.js',
      './www/bower_components/angular-mocks/angular-mocks.js',
      './www/js/bundle.js', // Compliled app source
      './tests/**/*.js'
    ],

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: 'DEBUG',
    captureTimeout: 60000,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
