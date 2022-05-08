import React from 'react';
import data from '../../../assets/photos_2.json';

export const ExpensiveComponent = () => {
  return (
    <div>
      <h1>ExpensiveComponent</h1>
      <h2>Data</h2>
      <ul>
        {data &&
          data.length &&
          data.map((item) => <li key={item.id}>{JSON.stringify(item)}</li>)}
      </ul>
    </div>
  );
};
