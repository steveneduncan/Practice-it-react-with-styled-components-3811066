import React, { useState } from "react";

const Counter = () => {
  const [counterValue, setCounterValue] = React.useState(0);

  const handleIncrement = () => {
    setCounterValue(counterValue + 1);
  };
  return (
    <div>
      <h1>Counter Component</h1>
      <button onClick={handleIncrement}>Increment</button>
      <p>Count: {counterValue}</p>
    </div>
  );
};

export default Counter;
