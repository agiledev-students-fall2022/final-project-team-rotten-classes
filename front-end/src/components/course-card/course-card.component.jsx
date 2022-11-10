import './course-card.styles.css';

const CourseCard = ({course}) => {
    const {key, course_id, course_name, course_images} = course;
    return (
        <div className='course-card-container' key={key}>
            <img
                alt={`${course_name}`}
                src={`${course_images}`}
            />
            <h6 style={{color: "white"}}>{course_id}</h6>
            <h6 style={{color: "white"}}>{course_name}</h6>
        </div>
    )
};

export default CourseCard;