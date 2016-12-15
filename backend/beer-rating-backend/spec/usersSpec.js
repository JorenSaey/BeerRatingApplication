var request = require('request');
var base_url = "http://localhost:3000/";

describe('Users test', function() {
  describe('POST /api/users/login', function() {
    it('returns Vul alle velden in when no fields', function(done) {
      request.post({
        url: base_url+'api/users/login',
        form: {},
      }, function(error, response, body) {
        expect(JSON.parse(body).message).toBe('Vul alle velden in');
        done();
      });
    });
    it('returns Vul alle velden in when only username', function(done) {
      request.post({
        url: base_url+'api/users/login',
        form: { username: 'test' },
      }, function(error, response, body) {
        expect(JSON.parse(body).message).toBe('Vul alle velden in');
        done();
      });
    });
    it('returns Vul alle velden in when only password', function(done) {
      request.post({
        url: base_url+'api/users/login',
        form: { password: 'test' },
      }, function(error, response, body) {
        expect(JSON.parse(body).message).toBe('Vul alle velden in');
        done();
      });
    });
    it('returns Aanmeldgegevens incorrect when invalid credentials', function(done) {
      request.post({
        url: base_url+'api/users/login',
        form: {
          username: 'test',
          password: 'test'
        },
      }, function(error, response, body) {
        expect(JSON.parse(body).message).toBe('Aanmeldgegevens incorrect');
        done();
      });
    });
    it('returns token when valid credentials', function(done) {
      request.post({
        url: base_url+'api/users/login',
        form: {
          username: 'joren.saey@gmail.com',
          password: 'wachtwoord'
        },
      }, function(error, response, body) {
        expect(JSON.parse(body).message).not.toBe('Aanmeldgegevens incorrect');
        done();
      });
    });
  });
});
