import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Section2 = () => {
  const data = useContext(ThemeDataContext);

  return (
    <div>
      <h1>Section2</h1>
      <p>{data}</p>
    </div>
  );
};

export default Section2;
