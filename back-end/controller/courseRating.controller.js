const axios = require("axios");

function courseRatingController(req, res, next) {
    axios
        .get("https://my.api.mockaroo.com/CourseRating.json?key=f65a0910")
        .then(apiResponse => res.json(apiResponse.data))
        .catch(err => next(err))
}

module.exports = courseRatingController
