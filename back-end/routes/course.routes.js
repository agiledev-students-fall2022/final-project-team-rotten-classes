const express = require("express");
const courseRouter = express.Router()
const courseSliderController = require("../controller/courseSlider.controller");
const courseHighestController = require("../controller/courseHighestController.controller");
const courseController = require("../controller/course.controller")

courseRouter.get("/CourseSlider", courseSliderController);
courseRouter.get('/CourseHighestRatedClasses', courseHighestController);
courseRouter.get('/Course',courseController);

module.exports = courseRouter;
