const course_review = require("../json_data/Course_Review.json");

function courseController(req,res){
    const courseId = req.query.courseId;
    let class_reviews = {}
    for(let i = 0; i<course_review.length;i++){
        if (course_review[i].course_id === courseId) {
            class_reviews = course_review[i]
            break;
        }
    }
    res.json({
        class_reviews
    })
}

module.exports = courseController