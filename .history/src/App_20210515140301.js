import React from 'react';
import './App.css';

function App() {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operations = ["+", "-", "*", "/"];
  return (

    <div className="App">

      <div className="calculator">

        <div className="leftSide">
          <div id="clearBtn">
            <div className="numbers">
              {numbers.map((val, key) => {
                return <div id="singleNumber"> {val}</div>;
              })}
            </div>
          </div>
        <div className="rightSide">
          {operations.map((val, key) => {
            return <div id="operation">{val}</div>;
          })}

        </div>


        </div>
      </div>
    </div>
  )
}

export default App;
