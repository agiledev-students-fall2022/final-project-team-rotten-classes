import './course-card-list.styles.css';
import CourseCard from "../course-card/course-card.component";

const CourseCardList = ({courses}) => (
    <div className='course-card-list'>
        {courses.map(course =>{
            return (
                <CourseCard course={course} key={course["key"]}/>
            )})}
    </div>
    );

export default CourseCardList;