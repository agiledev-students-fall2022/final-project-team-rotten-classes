import SearchBox from "../../components/search-box/search-box.component";
import './search-page.styles.css';
import React from "react";
import SortBox from "../../components/sort-box/sort-box.component";
import FilterBox from "../../components/filter-box/filter-box.component";
import CourseCardList from "../../components/course-card-list/course-card-list.component";

import {useState, useEffect} from "react";


const SearchPage = () => {
    const [searchField, setSearchField] = useState(''); //[value, setValue]
    const [course, setCourse] = useState([]);
    const [filteredCourses, setFilterCourses] = useState(course);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json() )
            .then((users) => setCourse(users));
    },[]);

    useEffect(()=>{
        const newFilteredCourses = course.filter((course) =>{
            return course.name.toLocaleLowerCase().includes(searchField);
        });
        setFilterCourses(newFilteredCourses);
    },[course, searchField]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    }


    return(
        <div className='search-container'>
            <div className>
                <SearchBox onChangeHandler={onSearchChange} placeholder='Search...' className={'search-box'}/>
            </div>
            <div className='sort-filter-container'>
                    <SortBox className={'sort-box'}/>
                    <FilterBox className={'filter-box'}/>
            </div>
            <CourseCardList courses={filteredCourses}/>
        </div>
    )
}

export default SearchPage