import React, { useReducer, useState } from 'react';

export default function Reducer() {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return (state = state + 1);
      case 'decrement':
        return (state = state - 1);
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>Count {count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
    </>
  );
}
