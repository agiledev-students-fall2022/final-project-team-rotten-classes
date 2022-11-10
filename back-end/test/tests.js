const chai = require('chai')
const {expect, should} = require('chai');
const {describe, it, after} = require('mocha');
const chaiHttp = require('chai-http');
const assert = require("assert");

const server = require('../app.js');

chai.use(chaiHttp);
// chai.use(should);
chai.should();

//start unit test for getting course data
describe('GET CourseData', ()=>{
   it('should get all class data', (done)=>{
       chai.request(server)
        .get('/CourseData')
        .end((err,res)=>{
           res.should.have.status(200);
           expect(res.body).to.be.a('object');
          
      });

        done();
   });

})

describe('GET /CourseSlider', ()=>{
   it('should check the type of object', (done)=>{
       chai.request(server)
        .get('/CourseSlider')
        .end((err,res)=>{
           res.should.have.status(200);
           expect(res.body).to.be.a('integer');
        });

        done();
   });

})

describe('GET /CourseHighestRatedClasses', ()=>{
   it('should check the type of object', (done)=>{
       chai.request(server)
        .get('/CourseSlider')
        .end((err,res)=>{
           res.should.have.status(200);
           expect(res.body).to.be.a('integer');
        });

        done();
   });

})

 describe('GET /ClassReviews', ()=>{
   it('should get the reviews under the course_data JSON file', (done)=>{
       chai.request(server)
        .get('/ClassReviews')
        .end((err, res) => {
         res.should.have.status(200) // use should to make BDD-style assertions
         res.body.should.be.a("array") // our route sends back an object
         res.body.should.have.property("success", true) // a way to check the exact value of a property of the response object
          // resolve the Promise that these tests create so mocha can move on
        });

        done();
   });

})

//negative unit test
describe('GET /viewall', ()=>{
   it('should check the type of object', (done)=>{
       chai.request(server)
        .get('/viewall')
        .end((err,res)=>{
           res.should.have.status(200);
           expect(res.body).to.be.a('integer');
  
               
       

        });

        done();
   });

})

describe('GET /image', ()=>{
   it('should check the type of object', (done)=>{
       chai.request(server)
        .get('/images')
        .end((err,res)=>{
           res.should.have.status(200);
           expect(res.body).to.be.a('integer');
        });

        done();
   });

})
 