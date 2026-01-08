import React from "react";

const Sections = (props) => {
  return (
    <div className="bg-zinc-700 h-180">
      <h1>All Sections</h1>
      {props.children[0]}
      {props.children[1]}
    </div>
  );
};

export default Sections;
