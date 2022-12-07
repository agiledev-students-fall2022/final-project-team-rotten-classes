const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const courseRouter = require("./routes/course.routes");
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require("mongoose");
app.use(bodyParser.json());
app.use(express.static('public'));
const { body, validationResult } = require('express-validator');

// import middleware
const cors = require('cors');
app.use(cors());
const axios = require("axios") // middleware for making requests to APIs
require("dotenv").config() // load environmental variables from a hidden file named .env
const morgan = require("morgan") // middleware for nice logging of incoming HTTP requests
app.use(morgan("dev")) // morgan has a few logging default styles - dev is a nice concise color-coded style
app.use(bodyParser.json())
app.use(courseRouter)

//starting connections to MongoDB
const connectionParams={
    useNewUrlParser:"true",
    useUnifiedTopology:"true"
}

mongoose
    .connect(process.env.DB_URL, connectionParams)
    .then(res=>(console.log("connected to mongoDB")))
    .catch(err=>(console.log("connection failed")))
const db = mongoose.connection;

const classSchema = new mongoose.Schema({
	course_name: String,
	course_id: String,
	course_subject: String,
	course_tags: [String],
	professors: [String],
    prerequisites: String,
    grad_level: String,
    school: String,
    description: String,
    credits: Number,
	course_images: String,
    course_rating_overall: Number,
	course_reviews: [{
		reviewer_name: String,
		review: String,
		rating: Number,
		would_take_again: String,
		workload: Number,
		difficulty: Number
	}]
});

const ClassData = mongoose.model("ClassData", classSchema)

app.get('/api/CourseData', (req, res) =>{
    ClassData.find({ })
        .then((class_names) => {
            res.json({
                class_names,
            })
        })
        .catch((error) => {
            console.log(error)
        })
});

app.get('/api/Course', async function(req,res){
    const courseId = req.query.courseId;
    const course_id = courseId
    console.log(course_id)
    const class_reviews = await ClassData.find({course_id: course_id})
        console.log(class_reviews)
        res.json({
            class_reviews
        })
})

app.post("/api/review",
    body("reviewer_name").isString(),
    body("course_name").isString(),
    body("review").isLength({min:1}),
    body('review').not().isEmpty().withMessage('Review must have more than 5 characters'),

async (req, res)=>{
    const errors = validationResult(req);
    let myData;
    myData = {
        reviewer_name:req.body.reviewer_name,
        review:req.body.review,
        rating:req.body.rating,
        would_take_again:req.body.would_take_again,
        workload:req.body.workload,
        difficulty:req.body.difficulty,
    }
    myDataName = {
        course_name:req.body.class,
    }
    console.log(myData)
   const result = await db.collection("classdatas").updateOne(
    { course_name : myDataName.course_name},
    { $push : { 'class_reviews' : myData }}, 
    {upsert:true})

    console.log(result);

    res.json({
        success: true,
    })
})

app.post("/api/contactUs",
    body("name").isString(),
    body("email").isString(),
    body("feedback").isString(),
    (req, res)=>{
        db.collection("ContactUsData").insertOne(req.body);
        res.json({
            success: true,
        })
    })

module.exports = app;
