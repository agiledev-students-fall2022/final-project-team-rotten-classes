// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require("mongoose");
app.use(bodyParser.json());
app.use(express.static('public'));
const classDB = require("./model/ClassData.js");


const course_data=require("./json_data/Course_Data.json")
const course_review=require("./json_data/Course_Review.json")

const cors = require('cors');
app.use(cors());


// import some useful middleware
const multer = require("multer") // middleware to handle HTTP POST requests with file uploads
const axios = require("axios") // middleware for making requests to APIs
require("dotenv").config({ silent: true }) // load environmental variables from a hidden file named .env
const morgan = require("morgan") // middleware for nice logging of incoming HTTP requests

const user = require("./USERS_MOCK_DATA");
//const { db } = require("./model/ClassData.js");
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
        .get("https://my.api.mockaroo.com/CourseRating.json?key=f65a0910")
        .then(apiResponse => res.json(apiResponse.data))
        .catch(err => next(err))
})

app.get("/CourseData", (req, res, next) => {
    axios
        .get("https://my.api.mockaroo.com/CourseData.json?key=f65a0910")
        .then(apiResponse => res.json(apiResponse.data))
        .catch(err => next(err))
})

 app.get('/CourseSlider', function(req,res){
    //get class name
    let class_names=[];

    for(let i =0; i<course_review.length;i++){
        class_names[i] = course_review[i]
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



app.get('/Course', function(req,res){
    const courseId = req.query.courseId;
    let class_reviews = {}

    for(let i = 0; i<course_review.length;i++){
        if (course_review[i].course_id === courseId) {
            class_reviews = course_review[i]
            break;
        }
    }

    res.json({
        class_reviews
    })

})

//starting connections to MongoDB

const uri = "mongodb+srv://classcritics:classcritics1@coursedata.r0m4k2j.mongodb.net/ClassCritics";
mongoose.connect(uri, {useNewUrlParser: true}, {useUnifiedTopology:true}).catch(err=>(console.log("connection failed"))).then(res=>(console.log("connected to mongoDB")))

const db = mongoose.connection;

const reviewScheme = new mongoose.Schema({

    class: String,
	course_id: String,
	course_subject: String,
	course_tags: [String],
	professor: [String],
	course_images: String,
	course_reviews: [{
		name: String,
        class: String,
        semester: Number,
		rating: Number,
        difficulty: Number,
		workload: Number,
        title: String,
        review: String
	}]
	
});


const classData = mongoose.model("classData", reviewScheme)

app.post("/review", (req, res)=>{

    console.log(req.body);

    //schema method
    let myData= new classData({
        name:req.body.name,
        class:req.body.class,
        professor:req.body.professor,
        semester:req.body.semester,
        rating:req.body.course_reviews[0].rating,
        diff:req.body.course_reviews[0].difficulty,
       work:req.body.course_reviews[0].workload,
        title:req.body.title,
        review:req.body.text
    });
      
    myData.save()

    //end of schema method

    //diff format method
    //db.collection("classData").insertOne(req.body);

    //end of second method

    res.json({
    
        success: true,
    })

})

app.post("/contactUs", (req, res)=>{

    db.collection("ContactUsData").insertOne(req.body);

    res.json({
    
        success: true,
    })

})



// //New Class Object
// const classDB = await classDB.create({
// 	course_name: "nullas",
// 	course_id: 'AK011',
// 	course_subject: 'integer',
// 	course_tags: ['Highest Rated'],
// 	professors: ['Emalia Cromar'],
// 	course_images: 'https://picsum.photos/seed/picsum/367/267',
// 	class_reviews: [{
// 		reviewer_name: "Marietta",
//   		review: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
//   		rating: 3,
//   		would_take_again: "Y",
//   		workload: 3,
//   		difficulty: 4
// 	}]
// })

// console.log(classDB)



 // export the express app we created to make it available to other modules
 module.exports = app;
