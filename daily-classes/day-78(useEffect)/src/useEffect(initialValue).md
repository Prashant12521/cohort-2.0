import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [names, setNames] = useState([]);
  const [randomNum] = useState(Math.floor(Math.random() * 10) + 1);

  const getData = async () => {
    const res = await axios.get(
      `https://randomuser.me/api/?results=${randomNum}`
    );

    const fetchedNames = res.data.results.map(
      (user) => `${user.name.first} ${user.name.last}`
    );

    setNames(fetchedNames);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Random Count: {randomNum}</h2>

      {names.map((name, index) => (
        <h1 key={index}>{name}</h1>
      ))}
    </div>
  );
};

export default App;