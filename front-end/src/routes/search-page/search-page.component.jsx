import './search-page.styles.css';
import React, {useContext} from "react";
import CourseCardList from "../../components/course-card-list/course-card-list.component";
import {CourseDataContext} from "../../contexts/courseData.context";
import {useState, useEffect} from "react";

const SearchPage = () => {
    const {courseDataProcessed} = useContext(CourseDataContext)
    console.log(courseDataProcessed)

    const [searchField, setSearchField] = useState(''); //[value, setValue]
    const [searchOption, setSearchOption] = useState("course_name"); //[value, setValue]
    const [sortby, setSortBy] = useState();
    const [sortedCourses, setSortedCourses] = useState(courseDataProcessed);

    useEffect(() => {
        let displayedCourse;
        if (searchOption === "course-name") {
            displayedCourse = courseDataProcessed.filter(course => course["course_name"]
                .toLowerCase()
                .includes(searchField.toLowerCase()))
        } else {
            displayedCourse = courseDataProcessed.filter(course => course["course_id"]
                .toLowerCase()
                .includes(searchField.toLowerCase()))
        }
        displayedCourse = displayedCourse.sort((courseA, courseB) => courseB[sortby] - courseA[sortby])
        setSortedCourses(displayedCourse)
    }, [courseDataProcessed, searchField, searchOption, sortby]);

    const onSearchOptionChange = (event) => {
        setSearchOption(event.target.value)
    }

    const onInputChange = (event) => {
        setSearchField(event.target.value);
    };

    const onSortChange = (event) => {
        setSortBy(event.target.value)
    };


    return (
        <div className="search-page">
            <div className="search-box">
                <div className={"search-box-input-group"}>
                    <select name="search-preference" className="search-box-dropdown" onChange={onSearchOptionChange}>
                        <option value="course-id">Course ID</option>
                        <option value="course-name">Course Name</option>
                    </select>
                    <input
                        className={"search-box-input"}
                        type="search"
                        value={searchField}
                        placeholder={"search..."}
                        onChange={onInputChange}
                    />
                </div>
                <div className="sort-container" onChange={onSortChange}>
                    <div className={"sort-by-title"}>sort by</div>
                    <div className={"sort-options-container"}>
                        <div><input type="radio" value={"popularity"} name={"sort-by"}/> Popularity</div>
                        <div><input type="radio" value={"rating"} name={"sort-by"}/> Rating</div>
                        <div><input type="radio" value={"workload"} name={"sort-by"}/> Workload</div>
                        <div><input type="radio" value={"difficulty"} name={"sort-by"}/> Difficulty</div>
                    </div>
                </div>
            </div>
            <div>
                <CourseCardList courses={sortedCourses}/>
            </div>
        </div>
    );
};

export default SearchPage;