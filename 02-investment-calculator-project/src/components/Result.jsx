import {calculateInvestmentResults, formatter} from '../util/investment.js'

export default function Result({data}) {
    let annualData =calculateInvestmentResults({
        initialInvestment: data.initialInvestment, 
        annualInvestment: data.annualInvestment,
        expectedReturn: data.expectedReturn, 
        duration: data.duration        
    });

    return <table id="result">
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
                        <td>{formatter.format(onedata.valueEndOfYear)}</td>
                        <td>{formatter.format(onedata.interest)}</td>
                        <td>{formatter.format(onedata.totalInterest)}</td>
                        <td>{formatter.format(onedata.investedCapital)}</td>
                    </tr>
                )}
            </tbody>
        </table>;
}