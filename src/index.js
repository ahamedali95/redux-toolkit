import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {rootReducer} from './reducers';

//redux-saga specific imports
import createSagaMiddleware from 'redux-saga';
import pokemonSaga from './actions/sagas/pokemonSaga';

//redux-saga setup
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(pokemonSaga);

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
