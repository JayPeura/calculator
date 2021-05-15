import React from 'react';
import './App.css';

function App() {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (

    <div className="App">
      <div className="numbers">
        {numbers.map((val, key) => {
          return <div id="singleNumber"> {val}</div>;
        })}
      </div>
    </div>
  )
}

export default App;
