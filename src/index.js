import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
//simport Login from "./components/Login";


// const Home = lazy(() => import('./components/Home'));
const Login = lazy(() => import('./components/Login'));

ReactDOM.render(
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/" render={({ history }) => (<Home history={history} />)} />
      <Route exact path="/login" render={({ history }) => (<Login history={history} />)} />
    </Switch>
    </Suspense>
  </Router>,
  document.getElementById('root')
);
