import React, {useState, useEffect} from 'react';
import HookThis from './HookThis'

function App() {
  const [userText, setUserText] = useState('')

  function handleUserKeyPress(event){
    console.log(event)
    let {key, keyCode} = event
    if (keyCode = 32 || (keyCode >= 65 && key <= 90)){
      setUserText(`${userText}${key}`)
    }
  }

  useEffect(()=>{
    window.addEventListener("keydown", handleUserKeyPress)
    return ()=>{
      window.removeEventListener("keydown", handleUserKeyPress)
    }
  }, [userText])

  return (
    <div className="container">
      <HookThis/>
      <h1>Type !</h1>
      <h1>
        {userText}
      </h1>
    </div>
  );
}

export default App;
