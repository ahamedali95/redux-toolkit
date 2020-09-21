import {pokemonFetchRequestActionTypes} from '../constants';

const initialState = {
  pokemons: [],
  isLoading: false,
  error: ''
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case pokemonFetchRequestActionTypes.POKEMON_FETCH_REQUEST: return { ...state, isLoading: true };
    case pokemonFetchRequestActionTypes.POKEMON_FETCH_SUCCESS: return { ...state, pokemons: action.payload, isLoading: false };
    case pokemonFetchRequestActionTypes.POKEMON_FETCH_FAILURE: return { ...state, pokemons: [], isLoading: false, error: action.payload, k: 'ahamed' };
    default: return state;
  }
};