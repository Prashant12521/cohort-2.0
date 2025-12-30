import React, { useState } from "react";
import QuotesBox from "./components/QuotesBox";

const App = () => {
  const [quote, setQuote] = useState("");
  const [name, setName] = useState("");

  const userData = JSON.parse(localStorage.getItem('savedData')) || []

  const [allQuotes, setAllQuotes] = useState(userData);

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = [...allQuotes, { quote, name }];

    setAllQuotes(userData)
    
    localStorage.setItem('savedData', JSON.stringify(userData))

    setName("");
    setQuote("");
  };

  const deleteHandler = (idx) => {
    const copyAllQuotes = [...allQuotes];

    copyAllQuotes.splice(idx, 1);

    setAllQuotes(copyAllQuotes);

    localStorage.setItem('savedData', JSON.stringify(copyAllQuotes))
  };

  return (
    <div className="flex min-h-screen justify-end bg-black p-4">
      <div className="fixed left-2">
        <form
  onSubmit={submitHandler}
          className="flex min-w-62.5 flex-col items-center gap-3 rounded-2xl border bg-gray-500 p-5"
        >
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Write your quote"
            className="w-full rounded-lg bg-gray-100 px-8 py-3 outline-none focus:ring-2 focus:ring-sky-400"
          />

          <input
            value={quote}
            onChange={(e) => {
              setQuote(e.target.value);
            }}
            type="text"
            placeholder="Writer name"
            className="w-full rounded-lg bg-gray-100 px-8 py-3 outline-none focus:ring-2 focus:ring-sky-400"
          />

          <button className="w-fit cursor-pointer rounded-xl bg-linear-to-b from-gray-600 to-black px-5 py-3 font-medium text-white shadow-md transition hover:opacity-90 active:scale-95">
            Submit
          </button>
        </form>
      </div>
      <div className="flex h-full w-[60%] flex-col gap-3 overflow-y-auto bg-black px-10 py-5 text-white">
        {allQuotes.map((elem, idx) => {
          return (
            <QuotesBox
              key={idx}
              elem={elem}
              idx={idx}
              deleteHandler={deleteHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
