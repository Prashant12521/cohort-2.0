import React from "react";

const Card = ({ pokemon }) => {
  console.log(pokemon);

  return (
    <div className="w-fit rounded-2xl bg-linear-to-b from-red-300 to-blue-300 p-4 transition-all duration-300 ease-in-out hover:scale-[1.05] cursor-pointer">
      <div className="flex justify-between items-center">
          <h2 className="font-mono text-2xl font-semibold uppercase">
            {pokemon.name}
          </h2>
          <h5 className="text-red-600 font-bold capitalize border-b-2">
            {pokemon.types[0].type.name}
          </h5>
        </div>
      <div className="relative backdrop-blur-xl bg-black/10 border border-black/10 rounded-2xl shadow-lg my-4">
        <img
          className="h-60"
          src={pokemon.sprites.other["official-artwork"].front_default}
        />
      </div>
      <div>
        <div>
          <div className="flex items-center justify-center gap-2">
            <i className="ri-heart-fill"></i>
            <progress value={pokemon.stats[0].base_stat} max="255"></progress>
            <span className="text-pink-800 font-bold">{pokemon.stats[0].base_stat}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <i className="ri-fire-fill"></i>
            <progress value={pokemon.stats[1].base_stat} max="255"></progress>
            <span className="text-red-900 font-bold">{pokemon.stats[1].base_stat}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <i className="ri-shield-star-fill"></i>
            <progress value={pokemon.stats[2].base_stat} max="255"></progress>
            <span className="text-purple-800 font-bold">{pokemon.stats[2].base_stat}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <i className="ri-flashlight-fill"></i>
            <progress value={pokemon.stats[5].base_stat} max="255"></progress>
            <span className="text-blue-900 font-bold">
              {pokemon.stats[5].base_stat}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
