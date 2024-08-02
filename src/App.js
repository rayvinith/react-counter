import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  // function to increase
  const increment = () => {
    setCount(count + 1);
  };
   // function to decrease
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };


  return (

    <div className="App">
    <h1>Counter: {count}</h1>
   <button onClick={increment} style={{ margin: '5px', padding: '10px' }}>Add</button>
   <button onClick={decrement} style={{ margin: '5px', padding: '10px' }}>sub</button>
   <button onClick={reset} style={{ margin: '5px', padding: '10px' }}>reset</button>
    </div>
  );
}

export default App;
