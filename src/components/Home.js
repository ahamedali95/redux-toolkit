import React from 'react';

const Home = props => {

  return (
    <>
      <h1>WELCOME HOME</h1>
      <button
        type="button"
        onClick={() => props.history.push('/information')}
      >
        Go to information page
      </button>
    </>
  );
};

export default Home;

