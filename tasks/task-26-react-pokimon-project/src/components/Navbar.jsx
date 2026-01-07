import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="mb-10 flex items-center justify-between px-6 py-4">
      <img className="w-[40%] md:w-[30%]" src={logo} alt="" />
      <input
        className="placeholder:text-grey rounded-2xl bg-amber-50 px-4 py-2 text-center text-black md:text-2xl lg:text-3xl"
        type="text"
        placeholder="Search Your Pokemon"
      />
    </div>
  );
};

export default Navbar;
