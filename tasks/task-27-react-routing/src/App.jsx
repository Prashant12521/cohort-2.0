import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Login from "./pages/Login";
import Meeting from "./pages/Meeting";
import MoreAbout from "./pages/MoreAbout";
import AboutDetail from "./pages/AboutDetail";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#F2EAF3] to-[#65bceb] text-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/meeting" element={<Meeting />} />

        <Route path="/about/:id" element={<MoreAbout />} />
        <Route path="/about/:id/detail" element={<AboutDetail />} />

        <Route path="/features" element={<Features />} />

        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
};

export default App;
