const course_review = require("../json_data/Course_Review.json");

function courseHighestController(req, res){
    let class_info = [];
    let rating = 100;
    for(let i =0; i<course_review.length;i++){
        if(course_review[i].course_tags != ""){
            class_info[i] = [
                course_review[i].course_name,
                course_review[i].course_subject,
                course_review[i].course_images,
                course_review[i].course_id,
                rating
            ]
        }else{
            continue;
        }
    }
    res.send({
        class_info:class_info
    })
}

module.exports = courseHighestController;