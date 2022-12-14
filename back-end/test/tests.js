const chai = require('chai');
const {expect, should} = require('chai');
const {describe, it, after} = require('mocha');
const chaiHttp = require('chai-http');
const assert = require("assert");
const server = require('../app.js');
chai.use(chaiHttp);
chai.should();


// //using this
describe('POST /api/contactUs', ()=>{
    it('Should post the review information from the contact us form to the data base', (done)=>{
        chai.request(server)
         .post('/api/contactUs')
         .end((err, res) => {
             res.should.have.status(200);
             expect(res.body.email).to.be.a('string');
         });
         done();
    });
 })

 //using this
describe('GET /api/CourseData2', ()=>{
    it('should get data necessary for course review header', (done)=>{
        chai.request(server)
         .get('/api/CourseData2')
         .end((err,res)=>{
            res.should.have.status(200);
            expect(res.body).to.be.a('object');
         });
         done();
    });
 })
 



//using this
describe('GET /api/Course2', ()=>{
    it('Should fetch the review data of each class from the data base to the backend', (done)=>{
        chai.request(server)
         .get('/api/Course2')
         .end((err, res) => {
             res.should.have.status(200);
             expect(res.body).to.be.a('array');
         });
         done();
    });
 })
 


describe('POST /api/review', ()=>{
    it('should post a review object to mongoDB when form is submitted', (done)=>{
        chai.request(server)
         .post('/api/review')
         .end((err, res) => {
             res.should.have.status(200);
             expect(res.body.reviewer_name).to.be.a('string');
             expect(res.body.review).to.be.a('string');
             expect(res.body.class).to.be.a('string');
             expect(res.body).to.be.a('object');
         });
         done();
    });
 })

 


