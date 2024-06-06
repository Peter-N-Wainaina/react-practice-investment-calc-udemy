import { calculateInvestmentResults } from "../util/investment.js"
import { formatter } from "../util/investment.js"

export function Results({ userInput }) {
    const results = calculateInvestmentResults(
        {
            initialInvestment: userInput.Initial,
            annualInvestment: userInput.Annual,
            expectedReturn: userInput.Expected,
            duration: userInput.Duration
        }
    )
    const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;

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
            {results.map((result) =>{
                const totalInterest =
                         result.valueEndOfYear - 
                         result.annualInvestment * result.year - 
                         initialInvestment;
                const totalInvested = result.valueEndOfYear - totalInterest;
                return (<tr key={result.year}>
                    <td>{result.year}</td>
                    <td>{formatter.format(result.valueEndOfYear)}</td>
                    <td>{formatter.format(result.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalInvested)}</td>
                </tr>
                )
                })}
        </tbody>

    </table>
}