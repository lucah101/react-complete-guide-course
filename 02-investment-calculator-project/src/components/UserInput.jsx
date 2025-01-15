import { useState } from "react"

export default function UserInput({onChangeNumbers}) {
    const [initialInvestment, setinitialInvestment] = useState(0);
    const [annualInvestment, setAnnualInvestment] = useState(0);
    const [expectedReturn, setExpectedReturn] = useState(0);
    const [duration, setDuration] = useState(0);

    function handleChangeInitial(event) {
        const value = event.target.value;
        setinitialInvestment(value);
        onChangeNumbers(initialInvestment, annualInvestment, expectedReturn, duration);
    }

    function handleChangeAnnual(event) {
        const value = event.target.value;
        setAnnualInvestment(value);
        onChangeNumbers(initialInvestment, annualInvestment, expectedReturn, duration);
    }

    function handleChangeExpected(event) {
        const value = event.target.value;
        setExpectedReturn(value);
        onChangeNumbers(initialInvestment, annualInvestment, expectedReturn, duration);
    }

    function handleChangeDuration(event) {
        const value = event.target.value;
        setDuration(value);
        onChangeNumbers(initialInvestment, annualInvestment, expectedReturn, duration);
    }


    return <div id="user-input" className="input-group">
        <div>
            <label>INITIAL INVESTMENT</label>
            <input type="number" onChange={handleChangeInitial}></input>
            <label>EXPECTED RETURN</label>
            <input type="number" onChange={handleChangeExpected}></input>
        </div>
        <div>
            <label>ANNUAL INVESTMENT</label>
            <input type="number" onChange={handleChangeAnnual}></input>
            <label>DURATION</label>
            <input type="number" onChange={handleChangeDuration}></input>
        </div>
    </div>
}