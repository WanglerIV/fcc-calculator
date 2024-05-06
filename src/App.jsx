import React, { useState } from 'react';


function App() {
  const [answer, setAnswer] = useState('0');
  const [expression, setExpression] = useState('');
  const [prevInput, setPrevInput] = useState('');
 
 function showExp(hit) {
  setExpression(prev => prev + hit);
  setPrevInput(prev => prev + hit);
  if(prevInput && !expression && !/[*/+-]/.test(hit)){
    setAnswer('')
    setExpression(hit)
    setPrevInput(hit)
  }
  else if(/[*/+-]/.test(hit) && /[*/+-]/.test(expression[expression.length-1])){
    if(hit === expression[expression.length-1]){
      setExpression(prev => prev.slice(0, -1));
    }else{
      setExpression(prev => prev.slice(0, -2) + hit);
    }
  }
  else if(expression[expression.length-1] === '.' && hit==='.'){
    setExpression(prev => prev.slice(0, -1));
  }
  else if(expression[expression.length-1] === '0' && hit==='0' && !expression.includes('.')){
    setExpression(prev => prev.slice(0, -1));
  }

}

  
  

function handleClick(value) {
  if (value === '=') {
    try {
        console.log(prevInput)
      const result = math.evaluate(prevInput); 
      setAnswer(result);
      setPrevInput(result)
      setExpression('')
    } catch (error) {
      setAnswer('Error');
    }
  } else if (value === 'C') {
    setAnswer('0');
    setExpression('');
    setPrevInput('')
  } else {
    setExpression((prevExpression) => prevExpression + value);
  }
}

  return (
    <>
      <div className="container">
        <h1>Calculator Application</h1>
        <div id="calculator">
          <div id="screen" style={{ textAlign: 'right' }}>
            <div id="display">{answer}</div>
            <div id="expression">{expression}</div>
          </div>
          <button
            id="clear"
            className="light-gray"
            onClick={() => handleClick("C")}

          >
            C
          </button>
          <button
            id="negative"
            className="light-gray"
          >
            +/-
          </button>
          <button
            id="percentage"
            className="light-gray"
          >
            %
          </button>
          <button
            id="divide"
            className="yellow"
            onClick={() => showExp("/")}

          >
            /
          </button>
          <button
            id="seven"
            className="dark-gray"
            onClick={() => showExp("7")}

          >
            7
          </button>
          <button
            id="eight"
            className="dark-gray"
            onClick={() => showExp("8")}
          >
            8
          </button>
          <button
            id="nine"
            className="dark-gray"
            onClick={() => showExp("9")}

          >
            9
          </button>
          <button
            id="multiply"
            className="yellow"
            onClick={() => showExp("*")}

          >
            *
          </button>
          <button
            id="four"
            className="dark-gray"
            onClick={() => showExp("4")}

          >
            4
          </button>
          <button
            id="five"
            className="dark-gray"
            onClick={() => showExp("5")}

          >
            5
          </button>
          <button
            id="six"
            className="dark-gray"
            onClick={() => showExp("6")}

          >
            6
          </button>
          <button
            id="subtract"
            className="yellow"
            onClick={() => showExp("-")}

          >
            -
          </button>
          <button
            id="one"
            className="dark-gray"
            onClick={() => showExp("1")}

          >
            1
          </button>
          <button
            id="two"
            className="dark-gray"
            onClick={() => showExp("2")}

          >
            2
          </button>
          <button
            id="three"
            className="dark-gray"
            onClick={() => showExp("3")}

          >
            3
          </button>
          <button id="add" className="yellow" onClick={() => showExp("+")}
>
            +
          </button>
          <button
            id="zero"
            className="dark-gray"
            onClick={() => showExp("0")}

          >
            0
          </button>
          <button
            id="decimal"
            className="dark-gray"
            onClick={() => showExp(".")}

          >
            .
          </button>
          <button
            id="equals"
            className="yellow"
            onClick={() => handleClick("=")}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
