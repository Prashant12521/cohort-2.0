import React, { useState } from "react";

const App = () => {
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [userDesc, setUserDesc] = useState("");

  const localData = JSON.parse(localStorage.getItem('all-users')) || []
  
  const [allUsers, setAllUsers] = useState(localData);

  const submitHandler = (e) => {
    e.preventDefault();

    const oldUsers = [...allUsers]

    oldUsers.push({ userName, userRole, userDesc, imageURL })

    setAllUsers(oldUsers);
    localStorage.setItem('all-users', JSON.stringify(oldUsers))

    setUserName("");
    setUserRole("");
    setImageURL("");
    setUserDesc("");
  };

  const deleteHandler = (idx) => {
    const copyUsers = [...allUsers];

    const conf = confirm('Are you sure?')

    conf ? copyUsers.splice(idx, 1) : alert('You cancelled it')

    

    setAllUsers(copyUsers);

    localStorage.setItem('all-users', JSON.stringify(copyUsers))
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <form onSubmit={submitHandler} className="flex flex-wrap p-2">
        <input
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          className="m-2 rounded border-2 px-5 py-2 text-xl font-semibold lg:w-[48%]"
          type="text"
          placeholder="Enter your name"
        />
        <input
          value={imageURL}
          onChange={(e) => {
            setImageURL(e.target.value);
          }}
          className="m-2 rounded border-2 px-5 py-2 text-xl font-semibold lg:w-[48%]"
          type="text"
          placeholder="Image URL"
        />
        <input
          value={userRole}
          onChange={(e) => {
            setUserRole(e.target.value);
          }}
          className="m-2 rounded border-2 px-5 py-2 text-xl font-semibold lg:w-[48%]"
          type="text"
          placeholder="Enter Role"
        />
        <input
          value={userDesc}
          onChange={(e) => {
            setUserDesc(e.target.value);
          }}
          className="m-2 rounded border-2 px-5 py-2 text-xl font-semibold lg:w-[48%]"
          type="text"
          placeholder="Enter Description"
        />

        <button className="m-2 w-[97%] cursor-pointer rounded bg-emerald-600 px-5 py-2 text-xl font-semibold active:scale-95">
          Create User
        </button>
      </form>

      <div className="flex flex-wrap gap-4 px-4 py-10">
        {allUsers.map((elem, idx) => {
          return (
            <div key={idx} className="flex flex-col items-center rounded-xl bg-white px-8 py-5 text-center text-black sm:w-[45vw] md:w-[30vw] lg:w-[23vw]">
              <img
                className="h-24 w-24 rounded-full object-cover object-center"
                src={elem.imageURL}
              />
              <h1 className="mt-2 text-2xl font-bold">{elem.userName}</h1>
              <h5 className="my-2 text-lg font-semibold text-blue-500">
                {elem.userRole}
              </h5>
              <p className="text-sm leading-tight font-medium">
                {elem.userDesc}
              </p>
              <button
                onClick={() => {
                  deleteHandler(idx);
                }}
                className="mt-3 cursor-pointer rounded bg-red-600 px-4 py-2 text-xs font-semibold text-white active:scale-95"
              >
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
