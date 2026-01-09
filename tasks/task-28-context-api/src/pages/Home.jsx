import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-screen flex-col gap-4 items-center justify-center">
      <h1 className="text-6xl">All Products</h1>
      <button
        onClick={() => {
          navigate("/products");
        }}
        className="px-6 w-fit h-fit py-3 text-3xl bg-gray-500 rounded-xl hover:bg-green-600 cursor-pointer transition-all ease-in-out duration-200"
      >
        Products Page
      </button>
    </div>
  );
};

export default Home;
