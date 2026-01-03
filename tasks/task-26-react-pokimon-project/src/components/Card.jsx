import React, { useEffect, useState } from "react";

const Card = (props) => {

  // console.log(props.elem);

  

  const [all20Pokemon, setAll20Pokemon] = useState([])

  const getall20Pokemon = async (elem)=>{
    const all20 = await props.elem.url;

    console.log(all20);
    
  }

  useEffect(()=>{
    getall20Pokemon()
  },[])


  

  return (
    <div className="w-fit rounded-2xl bg-green-900 p-4">
      <div className="relative">
        <img className="h-60" src="./pikachu.png" />
        <span
          className="rounded-xl px-2 py-1 text-xl absolute right-0 top-0"
          style={{ backgroundColor: "red" }}
        >
          Fire
        </span>
      </div>
      <div>
        <h2 className="font-mono text-2xl font-semibold uppercase">
          {props.elem.name}
        </h2>
        <div>
          <div className="flex items-center justify-center gap-2">
            <i className="ri-heart-fill"></i>
            <progress value="65" max="255"></progress>
            <span className="text-pink-600">65</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <i className="ri-shield-star-fill"></i>
            <progress value="65" max="255"></progress>
            <span>65</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <i className="ri-fire-fill"></i>
            <progress value="65" max="255"></progress>
            <span className="text-red-600">65</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <i className="ri-flashlight-fill"></i>
            <progress value="65" max="255"></progress>
            <span className="text-yellow-600">65</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
