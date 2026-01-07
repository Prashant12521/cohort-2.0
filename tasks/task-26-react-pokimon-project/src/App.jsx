import React from "react";
import Pokemon from "./components/Pokemon";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Pokemon />
      <Footer />
    </div>
  );
};

export default App;
