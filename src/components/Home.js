import React from 'react';
import Async from '../utilities/Async';

class Home extends React.Component {
  static *asyncGenerator() {
    const response = yield fetch('https://pokeapi.co/api/v2/pokemon');
    const json = yield response.json();

    return json;
  };
  
  componentDidMount() {
    const getData = Async(Home.asyncGenerator);

    console.log(getData().then(d => console.log(d)));
  }

  render() {
    return (
      <>
        <h1>WELCOME HOME</h1>
      </>
    );
  }
}

export default Home;

