'use strict';

// Jasmine, Chai and Angular Mocks will be global

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
