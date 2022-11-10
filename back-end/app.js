// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const bodyParser = require('body-parser');
const slider_img=require("./list.json");

const course_data=require("./json_data/Course_Data.json")
const course_review=require("./json_data/Course_Review.json")

const cors = require('cors');
app.use(cors());

// import some useful middleware
const multer = require("multer") // middleware to handle HTTP POST requests with file uploads
const axios = require("axios") // middleware for making requests to APIs
require("dotenv").config({ silent: true }) // load environmental variables from a hidden file named .env
const morgan = require("morgan") // middleware for nice logging of incoming HTTP requests

const user = require("./USERS_MOCK_DATA")
app.get('/', (req, res) => res.send('Hello from Classcritic!'))
app.get('/profile', (req, res) => res.send('Hello from Classcritic Profile!'))

// user data to display on profile screen (front-end)
app.get('/Users', (req, res) => {
    res.json({
        id: 1,
        dp: "https://pbs.twimg.com/profile_images/1520724563876888577/qkJG25yC_400x400.jpg",
        name: "Danny Hunter",
        year: "Sophomore",
        university: "New York University",
        school: "College of Arts & Science",
        major: "Computer Science",
        bio: "I am an NYU student and a good data and software researcher. I believe in the great power of technology."
    }
    );
});

// use the morgan middleware to log all incoming http requests
app.use(morgan("dev")) // morgan has a few logging default styles - dev is a nice concise color-coded style
app.use(bodyParser.json())
// app.use('/api/course', courseRoutes => {})

app.get("/CourseRating", (req, res, next) => {
    axios
        .get("https://my.api.mockaroo.com/CourseRating.json?key=90ef8730")
        .then(apiResponse => res.json(apiResponse.data))
        .catch(err => next(err))
})

app.get("/CourseData", (req, res, next) => {
    axios
        .get("https://my.api.mockaroo.com/CourseData.json?key=90ef8730")
        .then(apiResponse => res.json(apiResponse.data))
        .catch(err => next(err))
})

 // app.get("/CourseData", function(req, res){
 //    res.send({
 //        course_data
 //    })
 // })

 app.get('/CourseSlider', function(req,res){
    //get class name
    let class_names=[];

    for(let i =0; i<course_review.length;i++){
        class_names[i] = [
            course_review[i].course_name,
            course_review[i].course_subject,
            course_review[i].course_images,
            course_review[i].course_id,
            course_review[i].key
        ]
    }

    res.send({
        class_names:class_names
       
    })

})

app.get('/CourseHighestRatedClasses', function(req, res){
    
    let class_info = [];
    let rating = 100;

    for(let i =0; i<course_review.length;i++){
        if(course_review[i].course_tags != ""){
            class_info[i] = [
                course_review[i].course_name,
                course_review[i].course_subject,
                course_review[i].course_images,
                course_review[i].course_id,
                rating
            ]
        }else{
            continue;
        }
    }

    res.send({
        class_info:class_info
    })

})

app.get('/CourseReviewDetailHeader', function(req, res){
    
    let class_info = [];

    let rating = 100;

    for(let i =0; i<course_review.length;i++){
        if(course_review[i].course_tags != ""){
            class_info[i] = [
                course_review[i].course_name,
                course_review[i].course_subject,
                course_review[i].course_tags,
                course_review[i].professors
            ]
        }else{
            continue;
        }
    }

    res.send({
        class_info:class_info
    })

})


app.get('/images', function(req,res){

    let images=[];

    for(let i=0;i<slider_img.length;i++){
        images[i]=[slider_img[i].download_url];
    }

    res.send({
        images:images
    })
})

app.get('/viewall', function(req,res){

    let class_info = [];
    for(let i =0; i<course_review.length;i++){
        if(course_review[i].course_tags != ""){
            class_info[i] = [
                course_review[i].course_name,
                course_review[i].course_subject,
                course_review[i].course_images,
                course_review[1].course_id
            ]
        }else{
            continue;

        }
    }

    res.send({
        class_info:class_info
    })


})

app.get('/CourseReviews', function(req,res){
    let class_reviews = [];

    let counter = 0;
    let course_name_counter = 0;
    let rating_calc = 0;
    let retake_calc = 0;
    let difficult_calc = 0;

    for(let i = 0; i<course_data.length;i++){
            class_reviews[i] = [
                course_data[i].reviewer_name,
                course_data[i].review,
                course_data[i].rating,
                course_data[i].would_take_again,
                course_data[i].difficulty
            ]   
    }

    res.send({
        class_reviews:class_reviews
    })

})


 // export the express app we created to make it available to other modules
 module.exports = app;
