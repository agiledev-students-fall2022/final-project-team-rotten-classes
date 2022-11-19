import mongoose from "mongoose";
const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const classSchema = new mongoose.Schema({
	course_name: String,
	course_id: String,
	course_subject: String,
	course_tags: [String],
	professors: [String],
	course_images: String,
	course_reviews: [{
		reviewer_name: String,
		review: String,
		rating: Number,
		would_take_again: String,
		workload: Number,
		difficulty: Number
	}]
});


const classDB = mongoose.model("class", classSchema)
module.exports = classDB
