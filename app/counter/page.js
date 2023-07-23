// Counter.js
"use client";

import React, { useContext } from 'react';
import { MyContext } from '../../context/context.js';

const Counter = () => {
  const { IncreaseHandler, decreaseHandler,count } = useContext(MyContext);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => IncreaseHandler()}>Increment</button>
      <button onClick={() => decreaseHandler()}>Decrement</button>
    </div>
  );
};

export default Counter;