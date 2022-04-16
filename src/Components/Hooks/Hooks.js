import React, { useState } from 'react'

function Hooks() {
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter+1)
    }
    const [inputValue, setInputValue] = useState("Pedroo");
    let change = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    }
  return (
    <div>{counter}<br/>
    <button onClick={increment}>Increment</button> <br/>
    <input placeholder='write to change' onChange={change}/> <br/> {inputValue}
    </div> 
    

  )
}

export default Hooks