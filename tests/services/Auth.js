'use strict';

// Jasmine, Chai and Angular Mocks will be global

var expect = chai.expect;

beforeEach(module('MyApp'));

describe('Auth service', function () {

  describe('#login', function () {

    it('Should return an error due to no password', inject(function (Auth) {
      Auth.login('Evan', null, function (err, res) {
        expect(err).to.be.a('string');
        expect(res).to.equal(null);
      });
    }));

    it('Should return an error due to no username', inject(function (Auth) {
      Auth.login(null, 'abc123', function (err, res) {
        expect(err).to.be.a('string');
        expect(res).to.equal(null);
      });
    }));

  });

  describe('#isLoggedIn', function () {

    it('Should return false as we\'re not logged in', inject(function (Auth) {
      expect(Auth.isLoggedIn()).to.equal(false);
    }));

  });

  describe('#getSessionToken', function () {

    it('Should return null as we\'re not logged in', inject(function (Auth) {
      expect(Auth.getSessionToken()).to.equal(null);
    }));

  });

});
