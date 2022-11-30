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

//using this
describe('POST /ContactUs', ()=>{
   it('Should post the review information from the form to the data base', (done)=>{
       chai.request(server)
        .post('/contactUs')
        .end((err, res) => {
            res.should.have.status(200);
            expect(res.body).to.be.a('object');
        });
        done();
   });
})



//using this
describe('GET /CourseData2', ()=>{
   it('should get data necessary for course review header', (done)=>{
       chai.request(server)
        .get('/CourseData2')
        .end((err,res)=>{
           res.should.have.status(200);
           expect(res.body).to.be.a('object');
        });
        done();
   });
})



//using this
describe('GET /Course2', ()=>{
   it('Should fetch the review data of each class from the data base to the backend', (done)=>{
       chai.request(server)
        .get('/contactUs')
        .end((err, res) => {
            res.should.have.status(200);
            expect(res.body).to.be.a('array');
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
            expect(res.body.reviewer_name).to.be.a('string');
            expect(res.body.review).to.be.a('string');
            expect(res.body.class).to.be.a('string');
        //    expect(res.body).to.be.a('object');
        });
        done();
   });
})
