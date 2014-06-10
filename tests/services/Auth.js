'use strict';

// Mocha, Chai and Angular Mocks will be global

// This is better...
// // Load the myApp module, which contains the directive
// beforeEach(module('myApp'));

// // Store references to $rootScope and $compile
// // so they are available to all tests in this describe block
// beforeEach(inject(function(_$compile_, _$rootScope_){
//   // The injector unwraps the underscores (_) from around the parameter names when matching
//   $compile = _$compile_;
//   $rootScope = _$rootScope_;
// }));

beforeEach(module('MyApp'));

describe('Auth service', function () {

  describe('#login', function () {

    it('Should return an error due to no username', inject(function (Auth) {

    }));

    it('Should return an error due to no password', function () {

    });

  });

  describe('#isLoggedIn', function () {

    it('Should return false as we\'re not logged in', function () {

    });

  });

  describe('#getSessionToken', function () {

    it('Should return null as we\'re not logged in', function () {

    });

  });

});
