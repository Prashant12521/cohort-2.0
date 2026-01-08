import React from "react";

const Navbar = (props) => {

  return (
    <div className="top-0 min-h-15 w-full bg-emerald-600">
      <h1>This is {props.brand}</h1>
      {props.children}
      
    </div>
  );
};

export default Navbar;
