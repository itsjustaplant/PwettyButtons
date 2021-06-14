/* eslint-disable require-jsdoc, max-len */
import './App.css';
import React, {useState} from 'react';
import Button from './components/Button';

function App() {
  const [counter, setCounter] = useState(0);
  console.log(counter);
  return (
    <div className="App">
      <Button onClick={() => {
        setCounter(counter + 1);
      }} color="primary" startIcon="plus_one" text="plus one"/>
    </div>
  );
}
export default App;
