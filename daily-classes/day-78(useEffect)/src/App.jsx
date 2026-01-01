import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const [title, setTitle] = useState("");

  ///////

  const [names, setNames] = useState([]);

  const [randomNum] = useState(Math.floor(Math.random()*10)+1);

  console.log(randomNum);
  

  const getData = async () => {
    const response = await axios.get(`https://randomuser.me/api/?results=${randomNum}`);

    const allResNames = response.data.results.map((user) => {return `${user.name.first} ${user.name.last}`}
    )

    console.log(allResNames);
    

    setNames(allResNames)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>{counter}</h2>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click
      </button>

      <br />
      <br />

      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <br />
      <br />

        {names.map((elem, idx)=>{
          return <h1 key={idx}>{elem}</h1>
        })}
    </div>
  );
};

export default App;