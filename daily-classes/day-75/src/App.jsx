import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [userDesc, setUserDesc] = useState("");

  const [allUsers, setAllUsers] = useState([]);

  const deleteHandler = (idx)=>{
    const copyUsers = [...allUsers]
    
    copyUsers.splice(idx,1)

     setAllUsers(copyUsers)
     
  }

  return (
    <div className="h-screen bg-black text-white">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          setAllUsers([...allUsers, {userName, userRole, userDesc, imageURL}]);

          setUserName("");
          setUserRole("");
          setImageURL("");
          setUserDesc("");
        }}
        className="p-2 flex flex-wrap"
      >
        <input
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          className="border-2 px-5 py-2 text-xl font-semibold rounded m-2 lg:w-[48%]"
          type="text"
          placeholder="Enter your name"
        />
        <input
          value={imageURL}
          onChange={(e) => {
            setImageURL(e.target.value);
          }}
          className="border-2 px-5 py-2 text-xl font-semibold rounded m-2 lg:w-[48%]"
          type="text"
          placeholder="Image URL"
        />
        <input
          value={userRole}
          onChange={(e) => {
            setUserRole(e.target.value);
          }}
          className="border-2 px-5 py-2 text-xl font-semibold rounded m-2 lg:w-[48%]"
          type="text"
          placeholder="Enter Role"
        />
        <input
          value={userDesc}
          onChange={(e) => {
            setUserDesc(e.target.value);
          }}
          className="border-2 px-5 py-2 text-xl font-semibold rounded m-2 lg:w-[48%]"
          type="text"
          placeholder="Enter Description"
        />

        <button className="px-5 py-2 text-xl active:scale-95 cursor-pointer font-semibold bg-emerald-600 rounded m-2 w-[97%]">
          Create User
        </button>
      </form>

      <div className="px-4 py-10 flex gap-4 flex-wrap">
        {allUsers.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="lg:w-[23vw] md:w-[30vw] sm:w-[45vw] rounded-xl py-5 px-8 flex flex-col items-center text-center bg-white text-black"
            >
              <img
                className="h-24 w-24 rounded-full object-cover object-center"
                src={elem.imageURL}
              />
              <h1 className="text-2xl mt-2 font-bold">{elem.userName}</h1>
              <h5 className="text-blue-500 text-lg font-semibold my-2">
                {elem.userRole}
              </h5>
              <p className="text-sm font-medium leading-tight">
                {elem.userDesc}
              </p>
              <button onClick={()=>{
                deleteHandler(idx)
              }} className="px-4 py-2 rounded bg-red-600 text-xs cursor-pointer active:scale-95 text-white font-semibold mt-3">
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
