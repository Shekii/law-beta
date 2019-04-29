const assert = require('assert');
const request = require('supertest');
const app = require('../app');
const chai = require('chai');

// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });

describe('GET /cases', function() {
  this.timeout(150000);
  it('It should GET of the cases', function(done) {
    this.timeout(150000);
    setTimeout(done, 150000);
    request(app)
      .get('/api/cases_discovery')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        chai.assert.isAtLeast(res.body.data.length, 
                              1,
                              'No case found');
      });
      done()
  });
});

describe('GET /case', function() {
  this.timeout(150000);
  it('It should case from id', function(done) {
    this.timeout(150000);
    setTimeout(done, 150000);
    const getURL = '/api/cases_discovery/case/' + 
            "7d3d6072-9eb8-43e6-abd6-64ed202fc15f"
    request(app)
      .get(getURL)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        chai.assert.isAtLeast(res.body.data.length, 
                              1,
                              'No case found');
      });
        done()                     
  });
});