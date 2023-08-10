import axios from "axios";

function getPokemonIdFromUrl(url) {
    const parts = url.split('/');
    return parseInt(parts,[parts.length - 2], 10);
}

export const fetchPokemonData = async () => {
    try {
        const response = await axios.get ('https://pokeapi.co/api/v2/pokemon?limit=151');
        const pokemonData = response.data.results;

        // Fetch the image URL for each pokemon
        const updatedPokemonData = await Promise.all(
            pokemonData.map(async (pokemon) => {
                const response = await axios.get(pokemon.url);
        const pokemonDetails = response.data;
        const imageUrl = pokemonDetails.sprites.front_default;
        return { ...pokemon, image: imageUrl };
            })
        );
        
        return updatedPokemonData;
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        return []; // Return an empty array in case of an error
    }
};