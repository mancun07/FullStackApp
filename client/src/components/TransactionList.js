import React, {useEffect, useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext';
import Preloader from './Preloader';
import Transaction from './Transaction';

const TransactionList = () => {
    const {getTransactions, transactions, loading} = useContext(GlobalContext);
    console.log(transactions)
    console.log(transactions.length)
    useEffect(() => {
        getTransactions();
    }, [])
    return (
        <div>
           <h2>Summary</h2> 
           <hr/>
           {loading ? <Preloader/> : ''}
           <ul className="list">
              {transactions.length > 0 ? transactions.map(transaction => {
                  return <Transaction key={transaction._id} transaction={transaction}/>
              }) : (
                  <p>There are no any transaction yet</p>
              )}  
           </ul>
        </div>
    )
}



export default TransactionList
