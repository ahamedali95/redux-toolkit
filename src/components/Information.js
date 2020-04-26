import React, { lazy, Suspense } from 'react';
const Chart = lazy(() => import(/* webpackChunkName: "Chart" */ './Chart'));

const Information = () => {
  return (
    <>
      <h1>Information Page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Chart />
      </Suspense>
    </>
  );
};

export default Information;