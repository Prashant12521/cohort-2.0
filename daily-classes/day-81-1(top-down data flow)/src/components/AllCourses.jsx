import React from "react";
import Course1 from "./Course1";
import Course2 from "./Course2";
import Course3 from "./Course3";

const AllCourses = (props) => {
  return (
    <div>
      <h1>AllCourses</h1>
      <Course1/>
      <Course2 courseData={props.courseData}/>
      <Course3/>
    </div>
  );
};

export default AllCourses;
