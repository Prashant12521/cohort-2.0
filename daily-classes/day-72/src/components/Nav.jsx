import React from "react";

const Nav = (props) => {

  return (
    <div style={{background: props.color}} className="px-8 py-3 mb-1 flex items-center justify-between">
      <div className="text-xl">{props.title}</div>
      <div className="flex gap-4 text-white">
        {props.links.map((elem, index)=>{
          return <a href="#" key={index}>{elem}</a>
        })}
      </div>
    </div>
  );
};

export default Nav;
