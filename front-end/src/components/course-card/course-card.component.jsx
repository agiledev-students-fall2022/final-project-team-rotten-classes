import './course-card.styles.css';

const CourseCard = ({course}) => {
    const {key, course_id, course_name} = course;
    return (
        <div className='card-container' key={key}>
            <h2 style={{color: "white"}}>{course_id}</h2>
            <h2 style={{color: "white"}}>{course_name}</h2>
        </div>
    )
};

export default CourseCard;