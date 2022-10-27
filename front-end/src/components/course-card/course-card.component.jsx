import './course-card.styles.css';

const CourseCard = ({course}) => {
    const {id, name, email} = course;
    return (
        <div className='card-container' key={id}>

            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
};

export default CourseCard;