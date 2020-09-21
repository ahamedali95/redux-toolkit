import axios from 'axios';

const getPokemons = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');

    return { pokemons: response.data.results };
  } catch (e) {
    console.log(e);
    return { error: e };
  }
};

export default getPokemons;
