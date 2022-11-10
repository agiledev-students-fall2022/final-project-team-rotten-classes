import './search-page.styles.css';
import React, {useContext} from "react";
import CourseCardList from "../../components/course-card-list/course-card-list.component";
import {CourseDataContext} from "../../contexts/courseData.context";

import {useState, useEffect} from "react";


const SearchPage = () => {
  const [searchField, setSearchField] = useState(''); //[value, setValue]
  const [course, setCourse] = useState([]);
  const [sortby, setSortBy] = useState();
  const [sortedCourses, setSortedCourses] = useState(course);

  const {courseDataProcessed} = useContext(CourseDataContext)
  console.log(courseDataProcessed);


  useEffect(() => {
    const newFilteredCourses = course.filter((course) => {
      return course.name.toLocaleLowerCase().includes(searchField);
    });
    setSortedCourses(newFilteredCourses);
  }, [course, searchField]);

  const onInputChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onSortChange = (event) => {
    console.log(event.target.value);
    setSortBy(event.target.value)
  };


  return (
    <div className="search-page">
      <div className="search-box">
        <div className={"search-box-input-group"}>
          <select name="search-preference" className="search-box-dropdown">
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