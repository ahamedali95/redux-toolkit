import { call, put, takeEvery } from 'redux-saga/effects';
import {pokemonFetchRequestActionTypes} from '../../constants';
import getPokemons from '../../services/getPokemons';
import {pokemonFetchFailure, pokemonFetchSuccess} from '../index';

// worker-saga of pokemonSaga
export const fetchPokemon = function*(action) {
  const { pokemons, error } = yield call(getPokemons);

  if (pokemons) {
    yield put(pokemonFetchSuccess(pokemons));
  } else {
    yield put(pokemonFetchFailure(error));
  }
};

// pokemonSaga
const pokemonSaga = function*() {
  yield takeEvery(pokemonFetchRequestActionTypes.POKEMON_FETCH_REQUEST, fetchPokemon);
};

export default pokemonSaga;


// problem statement
// what is redux saga
// generators
// setup
// how it works - effects, sagas, etc...

// execute custom logic when any action is dispatched
// Has access to dispatch and getState methods of the Redux store
// Delay or halt dispatched actions
// intercept action and in turn execute async logic and dispatch new actions instead based on the success or failure.
