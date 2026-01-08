import React from "react";
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

const Footer = () => {

  const user = useContext(UserDataContext);

  return (
    <div className="bottom-0 w-screen h-15 bg-blue-700">
      <h1>This is Footer {user}</h1>
    </div>
  );
};

export default Footer;
