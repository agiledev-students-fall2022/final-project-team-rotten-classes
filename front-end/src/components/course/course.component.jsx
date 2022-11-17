import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CourseReviewDetailHeader from "../course-headers/CourseReviewDetailHeader";
import CourseReviews from "../course-reviews/CourseReviews";
import CourseRatings from "../course-ratings/CourseRatings";
function Course() {
    const { courseId } = useParams();
    const [page, setPage] = useState('reviews');
    const [courseData, setCourseData] = useState({});

    useEffect(() => {
        fetch("/Course?courseId="+courseId).then(
            response => response.json()
        ).then(
            data => {
                console.log("data", data)
                setCourseData(data.class_reviews)
            }
        )
    }, [])

    return <div>
        <br></br>
        <CourseReviewDetailHeader page={page} setPage={setPage} data={courseData} />
        <div>
            {page === 'reviews' && <CourseReviews data={courseData} />}
            {page === 'ratings' && <CourseRatings data={courseData} />}
        </div>
    </div>
}

export default Course;