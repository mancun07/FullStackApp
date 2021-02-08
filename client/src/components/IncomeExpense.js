import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalContext';

const IncomeExpense = () => {
    const {transactions} = useContext(GlobalContext);

    // const sign =  ?;

    const income = transactions
        .filter(el => el.amount > 0)
        .map(el => el.amount)
        .reduce((acc, el) => acc += el, 0)
        .toFixed(2)
        console.log(income)

    const expense = transactions
    .filter(el => el.amount < 0)
    .map(el => el.amount)
    .reduce((acc, el) => acc += el, 0)
    .toFixed(2)
    console.log(income)

        // const expense = transactions
        

    return (
        <div className="inc-exp-container">
            <div>
                <h3>Income</h3>
                <span className="money plus">${income}</span>
            </div>
            <div>
                <h3>Expense</h3>
                <span className="money minus">${expense}</span>
            </div>
        </div>
    )
}

export default IncomeExpense
