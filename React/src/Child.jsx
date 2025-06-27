import React from 'react';

const Child = ({ message,childMessage }) => {
  return (
  <>
  <h1>Example of Props Passing</h1>
  <h2>{message}</h2>;
  <h1>Example of props Drilling</h1>
  <h2>{childMessage}</h2>
  </>
  ) 
};

export default Child;
