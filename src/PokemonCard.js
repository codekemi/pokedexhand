import React from 'react';

const PokemonCard = ({ id, name, type, base_experience }) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="pokemon-card">
      <img src={imageUrl} alt={name} className="pokemon-image" />
      <h3 className="pokemon-name">{name}</h3>
      <p className="pokemon-id">ID: {id}</p>
      <p className="pokemon-type">Type: {type}</p>
      <p className="pokemon-base-exp">Base Experience: {base_experience}</p>
    </div>
  );
};

export default PokemonCard;
