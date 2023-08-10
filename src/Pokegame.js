import React from 'react';
import Pokedex from './Pokedex';
import PokemonCard from './PokemonCard';

function Pokegame() {
    const pokemonData = [
        { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
        { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
        { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
        { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
        { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
        { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
        { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
        { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
      ];
//Randomly Divided the pokemonData array into two hands
    const hand1 = [];
    const hand2 = [];
    while (pokemonData.length > 0) {
        const randomIndex = Math.floor(Math.random() * pokemonData.length);
        const randomPokemon = pokemonData.splice(randomIndex, 1)[0];
        if (hand1.length < 4) {
            hand1.push(randomPokemon);
        } else {
            hand2.push(randomPokemon);
        }
    }
// Calculate total experience for each hand
const calculateTotalExperience = (hand) => {
    return hand.reduce((totalExp, pokemon) => totalExp + pokemon.base_experience, 0);
  };

  const totalExperience1 = calculateTotalExperience(hand1);
  const totalExperience2 = calculateTotalExperience(hand2);

// Determine the winning hand
const isHand1Winner = totalExperience1 > totalExperience2;
const isHand2Winner = totalExperience2 > totalExperience1;

return (
    <div className="pokegame">
      <Pokedex pokemonData={hand1} totalExperience={totalExperience1} isWinner={isHand1Winner} />
      <Pokedex pokemonData={hand2} totalExperience={totalExperience2} isWinner={isHand2Winner} />
    </div>
  );
}

export default Pokegame;