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
		title: String,
		reviewer_name: String,
		review: String,
		rating: Number,
		semester: Number,
		// would_take_again: String,
		workload: Number,
		difficulty: Number
	}]
});


const classDB = mongoose.model("classDB", classSchema)
module.exports = classDB
