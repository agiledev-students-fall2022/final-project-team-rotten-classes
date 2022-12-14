import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CourseReviewDetailHeader from "../course-headers/CourseReviewDetailHeader";
import CourseReviews from "../course-reviews/CourseReviews";
import CourseRatings from "../course-ratings/CourseRatings";
import CourseDetails from "../course-details/CourseDetails";

function Course() {
    const { courseId } = useParams();
    const [page, setPage] = useState('reviews');
    const [courseData, setCourseData] = useState({});

    useEffect(() => {
        fetch("https://hammerhead-app-skzsp.ondigitalocean.app/api/Course2?courseId=" + courseId).then(
            response => response.json()
        ).then(
            data => {
                setCourseData(data.class_reviews)
            }
        )
    }, [])

    return <div>
        <br />
        <CourseReviewDetailHeader page={page} setPage={setPage} data={courseData} />
        <div>
            {page === 'reviews' && <CourseReviews data={courseData} />}
            {page === 'ratings' && <CourseRatings data={courseData} />}
            {page === 'details' && <CourseDetails data={courseData} />}
        </div>
    </div>
}

export default Course;