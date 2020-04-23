import React, { lazy, Suspense } from 'react';
const Chart = lazy(() => import(/* webpackChunkName: "my-component" */ './Chart'));

const Home = props => {
  console.log(props);
  return (
    <>
      <h1>WELCOME HOME</h1>
      <Suspense fallback={<div>loading</div>}>
        <Chart />
      </Suspense>
      <button type="button" onClick={() => props.history.push('/login')}>Login</button>
    </>
  );
};

export default Home;

