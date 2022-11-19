import mongoose from "mongoose";
import classDB from "../model/ClassData.js"
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require("mongoose");
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('public'));
const classDB = require("../model/ClassData.js");

const uri = "mongodb+srv://classcritics:classcritics1@coursedata.r0m4k2j.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri).catch(err=>(console.log("connection failed"))).then(res=>(console.log("connected to mongoDB")))


app.post("/class", (req, res)=>{

	const name = req.body.class_reviews.reviewer_name;
    const className = req.body.course_name;
    const prof =req.body.professors;
	//const sem =req.body.semester;
	const rate =req.body.class_reviews.rating;
	const diff =req.body.class_reviews.difficulty;
	const work =req.body.phone.class_reviews.workload;

	const data = {
		"name":name,
		"class name":className,
		"professor":prof,
		"rating":rate,
		"difficulty":diff,
		"workload":work
	}
	db.collection('class').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");
              
    });

})



app.get('/class',function(req,res){
	res.set({
		'Access-control-Allow-Origin': '*'
		});
	return res.redirect('AddReview.js');
	})
	  

//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });







//New Class Object
const classDB = await classDB.create({
	course_name: "nullas",
	course_id: 'AK011',
	course_subject: 'integer',
	course_tags: ['Highest Rated'],
	professors: ['Emalia Cromar'],
	course_images: 'https://picsum.photos/seed/picsum/367/267',
	class_reviews: [{
		reviewer_name: "Marietta",
  		review: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  		rating: 3,
  		would_take_again: "Y",
  		workload: 3,
  		difficulty: 4
	}]
})

console.log(classDB)
