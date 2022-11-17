import mongoose from "mongoose";
import class from "./model/ClassData.js"

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://classcritics:classcritics1@coursedata.r0m4k2j.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

mongoose.connect({uri});

//New Class Object
const class = await class.create({
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

console.log(class)
