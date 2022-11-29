const express = require("express");
const axios = require("axios"); // CommonJS import style!
const courseRouter = express.Router()
const courseRatingController = require("../controller/courseRating.controller");

courseRouter.get("/CourseRating", courseRatingController);


module.exports = courseRouter;
