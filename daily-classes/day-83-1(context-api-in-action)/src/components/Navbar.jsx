import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Navbar = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);

  return (
    <div className="nav">
      <h1>Navbar</h1>
      <h2>{theme}</h2>
      <button
        onClick={() => {
          theme == "light" ? setTheme("dark") : setTheme("light");
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Navbar;
