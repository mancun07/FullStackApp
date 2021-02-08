import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext';
// import 'materialize-css/dist/css/materialize.min.css';
// import M from 'materialize-css';

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);

const onSubmit = (e) => {
    e.preventDefault();
    if (text === '' || amount === '') {
        alert('Both fields must be filled in')
        // alert('Fill in the fields')
    } else {
        const newTransaction = {
        text, amount
    }
    addTransaction(newTransaction);
   alert('A new transaction is added')
    setText('');
    setAmount(0);
    }
}

    
    return (
        <form onSubmit={onSubmit}>
            <h2>Add New Transaction</h2>
            <hr/>
            <div className="input-field">
                <label htmlFor=""></label>
                <input value={text} onChange={e => setText(e.target.value)} type="text"/>
            </div>
            <div className="input-field">
                <label htmlFor=""></label>
                <input value={amount} onChange={e => setAmount(e.target.value)} type="number"/>
            </div>
            <button className="btn">Add Transaction</button>
            {/* <button className="btn btn-crimson">Update Transaction</button> */}
        </form>
    )
}

export default AddTransaction
