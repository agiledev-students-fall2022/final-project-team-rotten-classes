const course_review = require("../json_data/Course_Review.json");
function courseSliderController(req,res){
    let class_names=[];
    for(let i =0; i<course_review.length;i++){
        class_names[i] = course_review[i]
    }
    res.send({
        class_names:class_names
    })
}
module.exports = courseSliderController