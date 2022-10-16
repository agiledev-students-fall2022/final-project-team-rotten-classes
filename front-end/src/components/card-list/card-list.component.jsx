import './card-list.styles.css';
import Card from '../card/card.component'

const CardList = ({courses}) => (
    <div className='card-list'>
        {courses.map(course =>{
            return (
                <Card course={course}/>
            )})}
    </div>
    );

export default CardList;