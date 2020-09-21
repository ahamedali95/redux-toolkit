import React from 'react';
import { connect } from 'react-redux';
import {pokemonFetchRequest} from '../actions';

class Home extends React.Component {
  getNames() {
    return this.props.pokemons.pokemons.map((pokemon, idx) => {
      return (<p key={idx}>{pokemon.name}</p>);
    })
  }

  handleClick() {
    this.props.pokemonFetchRequest();
  }

  render() {
    return (
      <>
        <h1>WELCOME HOME</h1>
        <button onClick={() => this.handleClick()}>Fetch Pokemons</button>
        {
          this.props.pokemons.isLoading &&
          <p>Loading...</p>
        }
        {this.getNames()}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemons: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    pokemonFetchRequest: () => dispatch(pokemonFetchRequest())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

