import React from "react";
import Navbar from "./Navbar";
import AllSections from "./AllSections";
import Footer from "./Footer";

const Home = (props) => {
  
  return (
    <div>
      <h1>Home</h1>
      <Navbar/>
      <AllSections courseData={props.courseData}/>
      <Footer/>
    </div>
  );
};

export default Home;
