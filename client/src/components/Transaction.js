import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'

const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    console.log(typeof(transaction.amount))

    const sign = transaction.amount > 0 ? '+' : '-';

    return (
        <li className={ transaction.amount > 0 ? 'plus' : 'minus'}>
            <span>{transaction.text}</span>
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <span className="delete-btn" onClick={() => deleteTransaction(transaction._id)}>X</span>
        </li>
    )
}

export default Transaction
