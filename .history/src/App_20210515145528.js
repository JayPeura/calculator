import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  function dis(val)
  {
      document.getElementById("calc").value+=val
  }

  function solve()
  {
      let x = document.getElementById("calc").value
      let y = eval(x)
      document.getElementById("calc").value = y
  }
  function clr()
  {
      document.getElementById("calc").value = ""
  }

  return (
  <div class="calculator"> 
      <div class ="title" >JavaScript calculator</div>
      <table border="1px">
      <tr>
      <td><input type="button" value="c" onclick="clr()"/> </td>
      <td colspan="3"><input type="text" id="calc"/></td>
      </tr>
      <tr>

      <td><input type="button" value="+" onclick="dis('+')"/> </td>
      <td><input type="button" value="1" onclick="dis('1')"/> </td>
      <td><input type="button" value="2" onclick="dis('2')"/> </td>
      <td><input type="button" value="3" onclick="dis('3')"/> </td>
      </tr>
      <tr>
      <td><input type="button" value="-" onclick="dis('-')"/> </td>
      <td><input type="button" value="4" onclick="dis('4')"/> </td>
      <td><input type="button" value="5" onclick="dis('5')"/> </td>
      <td><input type="button" value="6" onclick="dis('6')"/> </td>
      </tr>
      <tr>
      <td><input type="button" value="*" onclick="dis('*')"/> </td>
      <td><input type="button" value="7" onclick="dis('7')"/> </td>
      <td><input type="button" value="8" onclick="dis('8')"/> </td>
      <td><input type="button" value="9" onclick="dis('9')"/> </td>
      </tr>
      <tr>
      <td><input type="button" value="/" onclick="dis('/')"/> </td>
      <td><input type="button" value="." onclick="dis('.')"/> </td>
      <td><input type="button" value="0" onclick="dis('0')"/> </td>
      <td><input type="button" value="=" onclick="solve()"/> </td>
      </tr>
      </table>

  </div> 
  )
}

export default App;
