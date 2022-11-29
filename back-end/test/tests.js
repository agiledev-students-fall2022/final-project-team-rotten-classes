const chai = require('chai');
const {expect, should} = require('chai');
const {describe, it, after} = require('mocha');
const chaiHttp = require('chai-http');
const assert = require("assert");

const server = require('../app.js');

chai.use(chaiHttp);
chai.should();

//start unit test for getting course data
describe('GET /Users', ()=>{
   it('should get data for users', (done)=>{
       chai.request(server)
        .get('/Users')
        .end((err,res)=>{
           res.should.have.status(200);
           expect(res.body).to.be.a('object');
        });
        done();
   });
})

describe('GET /CourseSlider', ()=>{
   it('should get data necessary for slider mechanism', (done)=>{
       chai.request(server)
        .get('/CourseSlider')
        .end((err,res)=>{
         res.should.have.status(200);
         expect(res.body).to.be.a('object');
        });

        done();
   });

})

describe('GET /CourseReviewDetailHeader', ()=>{
   it('should get data necessary for course review header', (done)=>{
       chai.request(server)
        .get('/CourseReviewDetailHeader')
        .end((err,res)=>{
           res.should.have.status(200);
           expect(res.body).to.be.a('integer');
        });

        done();
   });

})

describe('GET /image', ()=>{
   it('should get data for images used', (done)=>{
       chai.request(server)
        .get('/images')
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

describe('GET /CourseData2', ()=>{
   it('should get data necessary for course review header', (done)=>{
       chai.request(server)
        .get('/CourseData2')
        .end((err,res)=>{
           res.should.have.status(200);
           expect(res.body).to.be.a('integer');
        });

        done();
   });

})

describe('GET /CourseHighestRatedClasses', ()=>{
   it('should get data necessary for course review header', (done)=>{
       chai.request(server)
        .get('/CourseHighestRatedClasses')
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
            res.should.have.status(200);
            expect(res.body).to.be.a('object');
        });

        done();
   });

})

describe('POST /review', ()=>{
   it('should post a review object to mongoDB when form is submitted', (done)=>{
       chai.request(server)
        .post('/review')
        .end((err, res) => {
            res.should.have.status(200);
            expect(res.body).to.be.a('object');
        });

        done();
   });

})
