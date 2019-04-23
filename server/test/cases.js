process.env.NODE_ENV = 'test';

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const expect = require('chai').expect



chai.use(chaiHttp);

/*
  * Test the /GET route
  */
  describe('/GET cases', () => {
      it('it should GET all the cases', (done) => {
        setTimeout(() => {
            chai.request(server)
                .get('/api/cases_discovery')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    //res.body.length.should.not.be.eql(0);
                    
                    done();
                });
        }, 15000);
      });

  });

//     describe('/GET specific case', () => {

//       it('it should GET case from ID', (done) => {

//         const getURL = '/api/cases_discovery/case/' + 
//                 "7d3d6072-9eb8-43e6-abd6-64ed202fc15f"
//         chai.request(server)
//             .get(getURL)
//             .end((err, res) => {
//                   res.should.have.status(200);
//                   res.body.should.be.a('object');
//             //setTimeout(done, 9999);
//             done();
//             });
//       });
//   });



