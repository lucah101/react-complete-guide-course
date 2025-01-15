import UserInput from "./components/UserInput"
import Result from "./components/Result";
import { useState } from "react";


function App() {
  const [numbers, setNumbers] = useState({
    initialInvestment: 15000, 
    annualInvestment: 900,
    expectedReturn: 5.5, 
    duration: 12,
  });

  function handleChangeNumbers(identifier, newValue) {
    setNumbers((prevNumber) => {
        return {
          ...prevNumber,
          [identifier]: +newValue,
        };
    });
  }

  const inputIsValid = numbers.duration >= 1 && numbers.initialInvestment > 0 && numbers.annualInvestment > 0 && numbers.expectedReturn > 0;

  return <main>
    <UserInput data={numbers} onChangeNumbers={handleChangeNumbers} />
    {inputIsValid ? <Result data={numbers} /> : <p className="center">Input is not valid. </p>}
  </main>;
    
}

export default App
