import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import { useState } from "react"
import { Results } from "./components/Results.jsx"

function App() {
  const [inputs, setInputs] = useState(
    {
        "Initial": 10000,
        "Annual": 1200,
        "Expected": 6,
        "Duration": 10
    }
)

const inputIsValid = inputs.Duration >= 1;

function handleInput(label, newValue){
    setInputs((prevInputs) =>{
      const newInputs=  { ...prevInputs, [label]:+newValue};
      return newInputs; })
}

  return (<>
    <Header title="Investment Calculator"/>
    <UserInput handleInput={handleInput} inputs={inputs}/>
    {inputIsValid? <Results userInput={inputs}/>: <p className="center">Please enter a duration greater than 0.</p>}
    </>
  )
}

export default App