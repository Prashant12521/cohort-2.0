import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {

  return (
    <div className="mb-10 flex items-center justify-between px-6 py-4">
      <img className="w-[60%] md:w-[30%]" src={logo} alt="" />
      <img className="w-[60%] hidden md:w-[30%] md:block" src={logo} alt="" />
    </div>
  );
};

export default Navbar;
