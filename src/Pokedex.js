import React from 'react';
import PokemonCard from './PokemonCard';

const Pokedex = ({ pokemonData, totalExperience, isWinner }) => {

  return (
    <div className="pokedex">
      <h2>Total Experience: {totalExperience}</h2>
      {pokemonData.map((pokemon) => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ))}
      {isWinner && <p className="winner-message">THIS HAND WINS!!</p>}
    </div>
  );
}

export default Pokedex;
