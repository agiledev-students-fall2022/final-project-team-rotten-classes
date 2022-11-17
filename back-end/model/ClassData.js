import mongoose from "mongoose";
const {Schema, model} = mongoose;

const classSchema = newSchema({
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

const class = model("class", classSchema);

