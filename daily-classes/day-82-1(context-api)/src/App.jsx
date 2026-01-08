import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sections from "./components/Sections";

const App = () => {
  return (
    <div className="bg-black min-h-screen text-white text-xl">
      <Navbar brand="Sheryians">
        <h1>Hello Guys!!!</h1>
      </Navbar>
      <Sections>
        <h1>Hola</h1>
        <h1>Hey</h1>
      </Sections>
      <Footer />
    </div>
  );
};

export default App;
