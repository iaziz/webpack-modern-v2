import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root'
import './style/style.sass';

const App = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div style={{ textAlign: 'center' }}>

      <h1>Counter</h1>

      <div>
        <h4>{counter}</h4>
        <button onClick={increment}>Increment</button>
      </div>

    </div>
  );
};

export default hot(App);
