import React, { useState } from "react";
import Men from "./components/Men";
import Women from "./components/Women";

const App = () => {
  const [num, setNum] = useState(0);

  const arr = ["hi", "hello", "hey", "bye", "bye-bye"];
  const [name, setName] = useState(0);

  const [marks, setMarks] = useState([83, 48, 23, 77, 28]);
  function graceStudent() {
    const newMarks = marks.map((elem) => {
      return elem + 5;
    });
    console.log(newMarks);
    setMarks(newMarks)
  }

  const [gender, setGender] = useState('Male')

  return (
    <div className="p-4 bg-gray-700 h-screen text-white flex flex-col gap-4">
      <div className="num">
        <h1>{num}</h1>
        <button className="mr-1 text-green-400"
          onClick={() => {
            setNum(num + 1);
          }}
        >
          Increase
        </button>
        <button className="text-red-400"
          onClick={() => {
            setNum(num - 1);
          }}
        >
          Decrease
        </button>
      </div>

      <div className="name">
        <h1>{arr[name]}</h1>
        <button className="text-blue-500"
          onClick={() => {
            name < arr.length -1 ? setName(name + 1) : setName(0)
          }}
        >
          Change
        </button>
      </div>

      <div className="students">
        {marks.map((elem, idx) => {
          return (
            <h1 key={idx}>
              Student {idx + 1} = {elem} ({elem<33 ? 'Fail' : 'Pass'})
            </h1>
          );
        })}
        <button className="text-green-500" onClick={graceStudent}>Grace Marks</button>
      </div>


      <h1 className="text-3xl">{gender}</h1>
      <button
      
      onClick={()=>{
        gender == 'Male' ? setGender('Female') : setGender('Male');
      }}

      className="w-fit text-red-600">Change Gender</button>

      <div>
        {gender == 'Male' ? <Men /> : <Women />}
      </div>
    </div>
  );
};

export default App;
