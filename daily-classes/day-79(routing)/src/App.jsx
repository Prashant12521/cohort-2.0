import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Men from "./pages/Men";
import Women from "./pages/Women";
import RandomAbout from "./pages/RandomAbout";
import Courses from "./pages/Courses";
import Cohort from "./pages/Cohort";
import AnyCourse from "./pages/AnyCourse";
import CourseDetail from "./pages/CourseDetail";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/courses" element={<Courses />} />

        {/* Nested Route */}
        <Route path="/product/men" element={<Men />} />
        <Route path="/product/women" element={<Women />} />

        {/* Dynamic Route */}
        <Route path="about/:id" element={<RandomAbout />} />
        <Route path="courses/:id" element={<AnyCourse />} />

        {/* Nested Dynamic Route */}
        <Route path="courses/:id/detail" element={<CourseDetail />} />

        {/* Not Found Page */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
