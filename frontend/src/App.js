import React, { useState } from 'react'; 

import Header from './Header';

// JSX (JavaScript XML): HTML integrado dentro do JavaScript

function App() {
  let counter = useState(0);

  function increment() {
    counter += 1;

    console.log(counter);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
