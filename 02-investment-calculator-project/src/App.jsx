import UserInput from "./components/UserInput"
import Result from "./components/Result";
import { useState } from "react";



function App() {
  const [numbers, setNumbers] = useState({});

  function handleChangeNumbers(initialInvestment, annualInvestment, expectedReturn, duration) {
    setNumbers({
        initialInvestment, 
        annualInvestment,
        expectedReturn, 
        duration
    });
  }


  return <main>
    <UserInput onChangeNumbers={handleChangeNumbers} />
    <Result data={numbers} />
  </main>;
    
}

export default App
