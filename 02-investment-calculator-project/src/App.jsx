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
          [identifier]: newValue,
        };
    });
  }


  return <main>
    <UserInput data={numbers} onChangeNumbers={handleChangeNumbers} />
    <Result data={numbers} />
  </main>;
    
}

export default App
