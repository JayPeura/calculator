import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operations = ["+", "-", "*", "/"];

  const [currentOperation, setCurrentOperation] = useState("");
  const [operation, setOperation] = useState('');
  useEffect(() => {
    console.log(Number(currentOperation) + " " + operation);
  }, [currentOperation]);

  function clickNumbers(val) {
    setCurrentOperation(currentOperation + val);
    console.log(Number(currentOperation));
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
