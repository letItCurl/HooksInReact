import React, {useState} from 'react';

function App() {

  const [number, setNumber] = useState(10)
 
  const increase = () => setNumber(number + 1)
  const decrease = () => setNumber(number - 1)
  const setItOff = () => setNumber(0)

  return (
    <div className="container">
      <button className="button is-dark" onClick={increase} >Increase</button>
      <button className="button is-dark" onClick={decrease} >Decrease</button>
      <button className="button is-dark" onClick={setItOff} >Set it off</button>
      <p>{number}</p>
    </div>
  );
}

export default App;
