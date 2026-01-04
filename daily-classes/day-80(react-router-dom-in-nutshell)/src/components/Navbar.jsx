import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h5>Brand</h5>
      <div className="nav-link">
        <NavLink
          to={"/"}
          style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
        >
          Home
        </NavLink>

        <NavLink
          to={"/about"}
          style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
        >
          About
        </NavLink>

        <NavLink
          to={"/courses"}
          style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
        >
          Courses
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
