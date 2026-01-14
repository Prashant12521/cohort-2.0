import React from "react";
import LeftLinks from "./LeftLinks";
import Logo from "./Logo";
import RightLinks from "./RightLinks";

const Navbar = () => {
  return (
    <nav className="flex items-center mx-2 pb-4 text-[clamp(0.875rem,1.5vw,1.25rem)] border-b-2 border-gray-300">
      <LeftLinks />
      <Logo />
      <RightLinks />
    </nav>
  );
};

export default Navbar;
