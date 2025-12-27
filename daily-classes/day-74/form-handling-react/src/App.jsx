import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  const [email, setEmail] = useState("");

  const [allUsers, setAllUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    setAllUsers([...allUsers, { title, email }]);

    setTitle("");
    setEmail("");
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
      >
        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <button>Submit</button>
      </form>

      {allUsers.map((elem, idx) => {
        return (
          <div key={idx}>
            <h1>{elem.title}</h1>
            <p>{elem.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
