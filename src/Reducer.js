import React, { useState, useReducer } from 'react';
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

export default function Reducer() {
  const [counter, dispatch] = useReducer(reducer, 0);
  const Increment = () => {
    setCounter(counter + 1);
  };
  const Decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <p>Counter : {counter}</p>
      <input
        type="button"
        value="Increment"
        onClick={() => dispatch('increment')}
      />
      <input
        type="button"
        value="Decrement"
        onClick={() => dispatch('decrement')}
      />
    </>
  );
}
