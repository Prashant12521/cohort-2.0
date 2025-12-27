import React from "react";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [allUsers, setAllUsers] = useState([]);

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
          console.log(allUsers);

          return (
            <div
              key={idx}
              className="flex justify-between items-center px-6 py-3 border-2 border-blue-600 rounded-2xl mb-4"
            >
              <div className="flex items-center gap-4">
                <i class="ri-user-3-fill px-2 py-1 rounded-[50%] text-xl bg-amber-50"></i>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {elem.name}
                  </h3>
                  <span className="text-white">{elem.phone}</span>
                </div>
              </div>
              <i class="ri-phone-fill text-white text-2xl"></i>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
