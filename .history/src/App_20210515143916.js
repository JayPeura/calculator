import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operations = ["+", "-", "*", "/"];

  const [firstNumber, setFirstNumber] = useState("");
  const [operation, setOperation] = useState('');
  useEffect(() => {
    console.log(Number(firstNumber) + " " + operation);
  }, [firstNumber, operation]);

  function clickNumbers(val) {
    setFirstNumber(firstNumber + val);
  }

  function clickOperation(val) {
    setOperation(val);
  }

  return (

    <div className="App">

      <div className="calculator">
        <div className="display"></div>
          <div className="buttons">
            <div className="leftSide">
              <div id="clearBtn">Clear</div>
                <div className="numbers">
                  {numbers.map((val, key) => {
                    return <div id="singleNumber" onClick={() => clickNumbers(val)}>{""}{val}</div>;
                  })}
                </div>
            


            </div>
            <div className="rightSide">
              {operations.map((val, key) => {
                return <div id="operations" onClick={(() => {
                  clickOperation(val);

                })}> {val} </div>;
              })}

            </div>
          </div>
      </div>
    </div>
  )
}

export default App;
