import './App.css';
import React, { useState } from 'react';

function App() {
  let [ counter, changeCounter ] = useState(1)
  window.changeCounter = changeCounter

  const increment = () => {
    changeCounter(currentValue => currentValue + 1)
  }

  const decrement = () => {
    if (counter === 0) return
    changeCounter(currentValue => currentValue - 1)
  }
  return (
    <div className="App">
      <h1>{counter}</h1>
      <h4>{counter}</h4>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
