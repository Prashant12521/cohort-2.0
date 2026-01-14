import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="font-['Poppins'] p-4 max-w-300 mx-auto">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
