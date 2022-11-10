const chai = require('chai')
const {expect, should} = require('chai');
const {describe, it, after} = require('mocha');
const chaiHttp = require('chai-http');


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
