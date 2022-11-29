// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const courseRouter = require("./routes/course.routes");
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require("mongoose");
app.use(bodyParser.json());
app.use(express.static('public'));
const { body, validationResult } = require('express-validator');

// import files
const classDB = require("./model/ClassData.js");

const user = require("./USERS_MOCK_DATA");

// import middleware
const cors = require('cors');
app.use(cors());
const axios = require("axios") // middleware for making requests to APIs
require("dotenv").config() // load environmental variables from a hidden file named .env
const morgan = require("morgan") // middleware for nice logging of incoming HTTP requests
app.use(morgan("dev")) // morgan has a few logging default styles - dev is a nice concise color-coded style
app.use(bodyParser.json())

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

app.get('/CourseData2', (req, res) =>{
    ClassData.find({ })
        .then((class_names) => {
            console.log("Data" + class_names),
            res.json({
                class_names,
            })
        })
        .catch((error) => {
            console.log(error)
        })
})

app.post("/review", 

body("course_name").isString(),
body("review").isLength({min:1}),

async (req, res)=>{

    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    let myData;
    myData = {
        reviewer_name:req.body.reviewer_name,
        review:req.body.review,
        rating:req.body.rating,
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

app.post("/contactUs", (req, res)=>{
    db.collection("ContactUsData").insertOne(req.body);
    res.json({
        success: true,
    })
})

//User Data and Authentication
/*const userSchema = new mongoose.schema({
    name: String,
    email: String,
    password: String,
    token: String
})

const user = mongoose.model("user", userSchema)

app.post("/createAccount", (req, res) => {
    let userData = new user({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    if(!(name && email && password)){
        res.status(400).send("Must fill out all fields")
    }

    encryptEmail = await 
})*/



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
//  // export the express app we created to make it available to other modules
  module.exports = app;
