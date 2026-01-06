import React from "react";
import AllCourses from "./AllCourses";

const Section2 = (props) => {
  return (
    <div>
      <h1>Section2</h1>
      <AllCourses courseData={props.courseData}/>
    </div>
  );
};

export default Section2;
