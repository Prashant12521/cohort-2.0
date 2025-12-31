import React from "react";

const Card = (props) => {
  const cl1 = Math.floor(Math.random() * 256);
  const cl2 = Math.floor(Math.random() * 256);
  const cl3 = Math.floor(Math.random() * 256);

  return (
    <div
      style={{ backgroundColor: `rgb(${cl1},${cl2},${cl3})` }}
      className="w-fit h-fit p-4 rounded-2xl text-center text-black m-4"
    >
      <h2 className="text-2xl uppercase font-thin">{props.elem.name}</h2>
      <h5 className="text-sm">{props.elem.email}</h5>
    </div>
  );
};

export default Card;
