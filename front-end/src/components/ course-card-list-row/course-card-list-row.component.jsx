import './course-card-list-row.styles.css';
import CourseCard from "../course-card/course-card.component";

const CourseCardListRow = ({courses}) => (
    <div className='course-card-list-row'>
        {courses.map(course =>{
            return (
                <CourseCard course={course} key={course["key"]}/>
            )})}
    </div>
    );

export default CourseCardListRow;