import React, { useEffect, useState } from "react";
import axios, { all } from "axios";
import Card from "./Card";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  const API = "https://pokeapi.co/api/v2/pokemon?limit=30";

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
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center gap-6 px-6 py-4">
      {pokemon.map((pokemon) => {
        return (
          <div key={pokemon.id}>
            <Card pokemon={pokemon} />
          </div>
        );
      })}
    </div>
  );
};

export default Pokemon;
