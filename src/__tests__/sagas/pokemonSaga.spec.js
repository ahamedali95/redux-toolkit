import getPokemons from '../../services/getPokemons';
import pokemonSaga from '../../actions/sagas/pokemonSaga';
import { fetchPokemon } from '../../actions/sagas/pokemonSaga';
import { put, takeEvery } from 'redux-saga/effects';
import {pokemonFetchSuccess, pokemonFetchFailure} from '../../actions';
import {pokemonFetchRequestActionTypes} from '../../constants';

jest.mock('../../services/getPokemons');

describe('pokemonSaga', () => {
  it('should assign the work to the worker saga upon receiving action of type ~POKEMON_FETCH_REQUEST~', () => {
    const iterator = pokemonSaga();

    expect(iterator.next().value).toEqual(takeEvery(pokemonFetchRequestActionTypes.POKEMON_FETCH_REQUEST, fetchPokemon));
    iterator.next();
    expect(iterator.next().done).toBeTruthy();
  });

  describe('WORKER SAGA TEST', () => {
    it('should call ~pokemonFetchSuccess~ action creator to dispatch appropriate actions if the API call is successful', () => {
      getPokemons.mockImplementationOnce(() => ({ pokemons: ['poke'] }));
      const iterator = fetchPokemon();
      iterator.next();

      expect(iterator.next(getPokemons()).value).toStrictEqual(put(pokemonFetchSuccess(['poke'])));
    });

    it('should call ~pokemonFetchFailure~ action creator to dispatch appropriate actions if the API call is unsuccessful', () => {
      getPokemons.mockImplementationOnce(() => ({ error: {  } }));
      const iterator = fetchPokemon();
      iterator.next();

      expect(iterator.next(getPokemons()).value).toStrictEqual(put(pokemonFetchFailure({ })));
    });
  });
});