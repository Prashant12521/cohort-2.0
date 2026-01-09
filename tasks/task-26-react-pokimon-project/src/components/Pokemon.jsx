import React, { useEffect, useState } from "react";
import axios, { all } from "axios";
import Card from "./Card";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([])

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState(null)

  const [search, setSearch] = useState('')

  const API = "https://pokeapi.co/api/v2/pokemon?limit=120";

  const getAllPokemon = async () => {
    try {
      const getData = await axios(API);

      const getPokemonData = getData.data.results.map(async (elem) => {
        return await axios(elem.url);
      });

      const getPokemon = await Promise.all(getPokemonData);

      const allPokemon = getPokemon.map((elem) => {
        return elem.data;
      });

      setPokemon(allPokemon);

      setLoading(false)
    } catch (error) {
      console.error(error);
      setLoading(false)
      setError(error)
    }
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  const searchData = pokemon.filter((srhPokemon)=>{
    return srhPokemon.name.toLowerCase().includes(search.toLowerCase())
  })
  

  if(loading){
    return <div className="text-3xl text-white shadow-2xl">Loading...</div>
  }

  if(error){
    return <div className="text-3xl text-red-600 shadow-2xl">{error.message}</div>
  }

  return (
    
    <div>
      <div className="w-screen flex justify-center">
        <input
        onChange={(e)=>{
          setSearch(e.target.value)
        }}
        className="placeholder:text-grey rounded-2xl w-[80%] bg-amber-50 px-4 py-2 text-center text-black md:text-2xl md:w-fit lg:text-3xl mb-10"
        type="text"
        placeholder="Search Your Pokemon"
        value={search}
      />
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center gap-6 px-6 py-4">
        
        {searchData.map((pokemon) => {
          return (
            <div key={pokemon.id}>
              <Card pokemon={pokemon} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pokemon;
