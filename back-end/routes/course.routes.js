const express = require("express");
const courseRouter = express.Router()
const courseRatingController = require("../controller/courseRating.controller");
const courseDataController = require("../controller/courseData.controller");
const courseSliderController = require("../controller/courseSlider.controller");
const courseHighestController = require("../controller/courseHighestController.controller");

courseRouter.get("/CourseRating", courseRatingController);
courseRouter.get("/CourseData", courseDataController);
courseRouter.get("/CourseSlider", courseSliderController);
courseRouter.get('/CourseHighestRatedClasses', courseHighestController);



module.exports = courseRouter;
