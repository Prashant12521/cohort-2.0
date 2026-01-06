import React from "react";
import Home from "./components/Home";

const App = () => {

  const courseData = [{
    courseName: 'cohort 2.0',
    teacher: 'sarthak',
    duration: '6 Months',
    classTime: '8:30 p.m.'
  }]

  return (
    <div>
      <h1>App</h1>
      <Home courseData={courseData}/>
    </div>
  );
};

export default App;
