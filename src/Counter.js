import React, { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const Increment = () => {
    setCounter(counter + 1);
  };
  const Decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <p>Counter : {counter}</p>
      <input type="button" value="Increment" onClick={Increment} />
      <input type="button" value="Decrement" onClick={Decrement} />
    </>
  );
}
