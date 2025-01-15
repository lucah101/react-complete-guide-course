import {calculateInvestmentResults} from '../util/investment.js'

export default function Result({data}) {
    let annualData = data && Object.keys(data).length > 0
    ? calculateInvestmentResults({
        initialInvestment: data.initialInvestment, 
        annualInvestment: data.annualInvestment,
        expectedReturn: data.expectedReturn, 
        duration: data.duration        
    }) : [];

    return <div id="result">
        <p>
            {data.initialInvestment} _
            {data.annualInvestment} _
            {data.expectedReturn} _
            {data.duration}
        </p>
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {annualData.map((onedata, index) => 
                    <tr key={index}>
                        <td>{onedata.year}</td>
                        <td>${onedata.valueEndOfYear}</td>
                        <td>${onedata.interest}</td>
                        <td>${onedata.annualInvestment}</td>
                        <td>$</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
}