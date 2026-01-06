import React from 'react'

const Card = ({pokemon}) => {

  console.log(pokemon);
  
  
  return (
    <div className="w-fit rounded-2xl bg-green-900 p-4">
      <div className="relative">
        <img className="h-60" src={pokemon.sprites.other["official-artwork"].front_default} />
        <span
          className="rounded-xl px-2 py-1 text-xl absolute right-0 top-0"
          style={{ backgroundColor: "red" }}
        >
          {pokemon.types[0].type.name}
        </span>
      </div>
      <div>
        <h2 className="font-mono text-2xl font-semibold uppercase">
          {pokemon.name}
        </h2>
        <div>
          <div className="flex items-center justify-center gap-2">
            <i className="ri-heart-fill"></i>
            <progress value={pokemon.stats[0].base_stat} max="255"></progress>
            <span className="text-pink-600">{pokemon.stats[0].base_stat}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <i className="ri-fire-fill"></i>
            <progress value={pokemon.stats[1].base_stat} max="255"></progress>
            <span className="text-red-600">{pokemon.stats[1].base_stat}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <i className="ri-shield-star-fill"></i>
            <progress value={pokemon.stats[2].base_stat} max="255"></progress>
            <span>{pokemon.stats[2].base_stat}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <i className="ri-flashlight-fill"></i>
            <progress value={pokemon.stats[5].base_stat} max="255"></progress>
            <span className="text-yellow-600">{pokemon.stats[5].base_stat}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card