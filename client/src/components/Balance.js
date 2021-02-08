import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalContext';

const Balance = () => {
    const {transactions} = useContext(GlobalContext);

    const balance = transactions
        .map(el => el.amount)
        .reduce((acc, el) => acc += el, 0)
        .toFixed(2)

    return (
        <>
         <h2>Your Balance</h2>  
         <h1>${balance}</h1> 
        </>
    )
}

export default Balance
