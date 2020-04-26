import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Information from './components/Information';
import Home from './components/Home';
// const Home = lazy(() => import('./components/Home'));
//const Information = lazy(() => import('./components/Information'));

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" render={({ history }) => (<Home history={history} />)} />
      <Route exact path="/information" render={({ history }) => (<Information history={history} />)} />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);
