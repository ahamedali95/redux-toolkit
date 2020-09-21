import {pokemonFetchRequestActionTypes} from '../constants';

export const pokemonFetchRequest = () => {
  return {
    type: pokemonFetchRequestActionTypes.POKEMON_FETCH_REQUEST,
    payload: null
  }
};

export const pokemonFetchSuccess = data => {
  return {
    type: pokemonFetchRequestActionTypes.POKEMON_FETCH_SUCCESS,
    payload: data
  }
};

export const pokemonFetchFailure = error => {
  return {
    type: pokemonFetchRequestActionTypes.POKEMON_FETCH_FAILURE,
    payload: error
  }
};