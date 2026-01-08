import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

const Navbar = (props) => {
  const data = useContext(UserDataContext);
  console.log(data);
  

  return (
    <div className="top-0 min-h-15 w-full bg-emerald-600">
      <h1>This is Navbar {data}</h1>
      {props.children}
    </div>
  );
};

export default Navbar;
