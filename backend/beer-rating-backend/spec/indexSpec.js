var request = require('request');
var base_url = "http://localhost:3000/"

describe('Index test', function() {
  describe('GET /api', function() {
    it('returns status 200', function(done) {
      request.get(base_url+'api', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
    it('returns De api werkt!' , function(done) {
      request.get(base_url+'api', function(error, response, body) {
        expect(JSON.parse(body).message).toBe('De api werkt!');
        done();
      });
    });
  });
});
