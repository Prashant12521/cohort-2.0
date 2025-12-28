import React from "react";
import { useState } from "react";
import Contact from "./components/Contact";

const App = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [allUsers, setAllUsers] = useState([]);

  const deleteHandler = (idx) => {
    const copyUsers = [...allUsers];

    copyUsers.splice(idx, 1);

    setAllUsers(copyUsers);
  };

  return (
    <div className="h-screen w-screen flex items-center gap-4 justify-between px-10 py-6 bg-black">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setAllUsers([...allUsers, { name, phone }]);
          setName("");
          setPhone("");
          setEmail("");
        }}
        className="flex flex-col items-center gap-2 border-4 border-blue-600 rounded-2xl justify-between p-4 min-w-75"
      >
        <h1 className="text-white text-xl mb-3 font-bold font-mono">
          Add New Contact
        </h1>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="text-xl border-b-2 border-blue-400 px-4 pb-2 outline-none text-white font"
        />

        <input
          type="text"
          placeholder="Enter your phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          className="text-xl border-b-2 border-blue-400 px-4 pb-2 outline-none text-white font"
        />

        <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md mt-4 cursor-pointer">
          Submit
        </button>
      </form>

      <div className="h-full w-[60%]">
        {allUsers.map((elem, idx) => {

          return <Contact key={idx} elem={elem} idx={idx} deleteHandler={deleteHandler}/>
        })}
      </div>
    </div>
  );
};

export default App;
