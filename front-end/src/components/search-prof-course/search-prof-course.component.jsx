import './search-prof-course.styles.css'

const SearchProfCourse = () => {
    return (
        <div className='search-prof-course-box'>
            <span className='search-prof-course-text-span'>Search For: </span>
            <form>
                <div>
                    <span className='search-prof-course-text-span'>Course Name </span>
                    <input type='radio' name='search-course-name-preference'/>
                </div>
                <div>
                    <span className='search-prof-course-text-span'>Course ID </span>
                    <input type='radio' name='search-course-id-preference'/>
                </div>
                <div>
                    <span className='search-prof-course-text-span'>Professor Name </span>
                    <input type='radio' name='search-prof-preference'/>
                </div>
            </form>
        </div>
    );
};

export default SearchProfCourse