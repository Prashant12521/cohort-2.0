import React, { useEffect, useState } from "react";
import axios, { all } from "axios";
import Card from "./components/Card";

const App = () => {
  const [allPokemon, setAllPokemon] = useState([]);

  const getPokemonData = async () => {
    const responseGetPokemon = await axios.get(
      "https://pokeapi.co/api/v2/pokemon",
    );

    const all = responseGetPokemon.data.results;

    setAllPokemon(all);

  };

  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 min-h-screen bg-black p-6">
      {allPokemon.map((elem, idx) => {
        return <div key={idx}><Card elem = {elem}/></div>
      })}

      
    </div>
  );
};

export default App;
