import React, { useState } from "react";
import QuotesBox from "./components/QuotesBox";

const App = () => {
  const [quote, setQuote] = useState("");
  const [name, setName] = useState("");

  const [allQuotes, setAllQuotes] = useState([]);

  const deleteHandler = (idx)=>{
    
    const copyAllQuotes = [...allQuotes]

    copyAllQuotes.splice(idx,1)

    setAllQuotes(copyAllQuotes)


  }

  return (
    <div className="h-screen bg-black flex justify-between p-4">
      <div className="h-full flex items-end justify-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            setAllQuotes([...allQuotes, { quote, name }]);

            setName("");
            setQuote("");
          }}
          className="flex flex-col gap-3 min-w-[250px] items-center border rounded-2xl bg-gray-500 p-5"
        >
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Write your quote"
            className="w-full px-8 py-3 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-sky-400"
          />

          <input
            value={quote}
            onChange={(e) => {
              setQuote(e.target.value);
            }}
            type="text"
            placeholder="Writer name"
            className="w-full px-8 py-3 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-sky-400"
          />

          <button className="w-fit py-3 px-5 rounded-xl bg-linear-to-b from-gray-600 to-black text-white cursor-pointer active:scale-95 font-medium shadow-md hover:opacity-90 transition">
            Submit
          </button>
        </form>
      </div>
      <div className="w-[60%] h-full bg-black text-white py-5 px-10 overflow-y-auto flex flex-col gap-3">

        {allQuotes.map((elem, idx) => {
          return <QuotesBox key={idx} elem={elem} idx={idx} deleteHandler={deleteHandler} />
        })}
      </div>
    </div>
  );
};

export default App;
