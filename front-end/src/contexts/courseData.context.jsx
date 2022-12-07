import {createContext, useEffect, useState} from 'react';
import axios from "axios";

export const CourseDataContext = createContext({
  courseDataProcessed: []
});

export const CourseDataProvider = ({children}) => {
  const [courseData, setCourseData] = useState(null);
  const [courseDataProcessed, setCourseDataProcessed] = useState([]);

  const processData = async () => {
    if (courseData) {
      const tempData = await JSON.parse(JSON.stringify(courseData["class_names"]));
      for (let course of tempData) {
        let rating_total = 0;
        let difficulty_total = 0;
        let workload_total = 0;
        let popularity_total = 0;
        const num_review = course["class_reviews"].length;
        for (let review of course["class_reviews"]) {
          rating_total += parseInt(review["rating"]);
          difficulty_total += parseInt(review["difficulty"]);
          workload_total += parseInt(review["workload"]);
          popularity_total += review["would_take_again"] === "Y" ? 1 : 0;
        }

        course["rating"] = rating_total / num_review;
        course["difficulty"] = difficulty_total / num_review;
        course["workload"] = workload_total / num_review;
        course["popularity"] = popularity_total / num_review;
      }
      setCourseDataProcessed(tempData);
    }
  };

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get("/api/CourseData2");
      setCourseData(response.data);
      console.log(response)
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    processData();
  }, [courseData]);

  const value = {
    courseDataProcessed
  };

  return <CourseDataContext.Provider value={value}> {children} </CourseDataContext.Provider>;
};

