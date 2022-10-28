import { useState } from 'react';

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['+', '-', '*', '/', '.'];

  const updateCalc = value => {
    if (ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))) {
      return;
    }
    if (value === '-' && calc[0] === '0') {
      setCalc(value);
      return;
    }
    else if ((value === '+' || value === '/' || value === '*') && calc[0] === '0') return;
    else if (calc[0] === '0') {
      setCalc(value);
    }
    else setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }
  const CreateDig = () => {
    const dig = [];
    for (let i = 1; i < 10; i++) {
      dig.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
      )
    }
    dig.push(<button onClick={() => updateCalc('0')}>{0}</button>)
    return dig;
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const deleteLast = () => {
    if (calc == '') {
      return;
    }

    const value = '0';
    setCalc(value);
  }
  return (
    <div className='App'>
      <div className='Calculator'>
        <div className='ResultDisplayScreen'>
          {calc || "0"}
        </div>
        <div className='Operators'>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="Digits">
          {CreateDig()}
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
