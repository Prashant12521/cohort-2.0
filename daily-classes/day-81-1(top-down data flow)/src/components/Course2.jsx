import React from "react";

const Course2 = (props) => {

  return (
    <div>
      <h1>Course2</h1>
      <p>{props.courseData[0].courseName}</p>
    </div>
  );
};

export default Course2;
