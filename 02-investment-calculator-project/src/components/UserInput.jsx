export default function UserInput({data, onChangeNumbers}) {  

    return <div id="user-input" className="input-group">
        <div>
            <label>INITIAL INVESTMENT</label>
            <input 
                type="number" 
                required 
                value={data.initialInvestment}
                onChange={(event) => onChangeNumbers('initialInvestment', event.target.value)}>       
            </input>
            <label>EXPECTED RETURN</label>
            <input 
                type="number" 
                required 
                value={data.expectedReturn}
                onChange={(event) => onChangeNumbers('expectedReturn', event.target.value)}>       
            </input>
        </div>
        <div>
            <label>ANNUAL INVESTMENT</label>
            <input 
                type="number" 
                required 
                value={data.annualInvestment}
                onChange={(event) => onChangeNumbers('annualInvestment', event.target.value)}>       
            </input>
            <label>DURATION</label>
            <input 
                type="number" 
                required 
                value={data.duration}
                onChange={(event) => onChangeNumbers('duration', event.target.value)}>       
            </input>
        </div>
    </div>
}