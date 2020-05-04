import React from 'react';
import { connect } from 'react-redux';
import {setBooks} from '../actions';

class Home extends React.Component {
  componentDidMount() {
    console.log(this.props.state);
    this.props.setBooks(['something']);
  }

  render() {
    return (
      <>
        <h1>WELCOME HOME</h1>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setBooks: books => dispatch(setBooks(books))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

