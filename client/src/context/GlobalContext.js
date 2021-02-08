import {createContext, useReducer} from 'react';
import GlobalReducer from './GlobalReducer';
export const GlobalContext = createContext();

const initialState = {
    transactions: [],
    loading: false,
    error: null
}

const GlobalContextState = (props) => {

    const [state, dispatch] = useReducer(GlobalReducer, initialState);

    const setLoading = () => {
        dispatch({type: 'SET_LOADING'})
    }

    const getTransactions = async () => {
        try {
            setLoading();
            const res = await fetch('/api/v1/transactions');
            const data = await res.json();
            dispatch({type: 'GET_TRANSACTIONS', payload: data.data})
        }
        catch (err) {
            dispatch({type: 'ERROR_TRANSACTION', payload: err.message})
        }
    }

    const addTransaction = async (transaction) => {
        try {
            const res = await fetch('/api/v1/transactions', {
                method: 'POST',
                body: JSON.stringify(transaction),
                headers: {'Content-Type': 'application/json'}
            });
            const data = await res.json();
            console.log(data)
            console.log(data.data)
            dispatch({type: 'ADD_TRANSACTION', payload: data.data})
        }
        catch (err) {
            dispatch({type: 'ERROR_TRANSACTION', payload: err.message})
        } 
    }

    const deleteTransaction = async (id) => {
        try {
            await fetch(`/api/v1/transactions/${id}`, {
                method: 'DELETE'
            })
            dispatch({type: 'DELETE_TRANSACTION', payload: id})
        }
        catch (err) {
            dispatch({type: 'ERROR_TRANSACTION', payload: err.message})
        }
    }

    



    return (
          <GlobalContext.Provider value = {{
              transactions: state.transactions,
              loading: state.loading,
              error: state.error,
              getTransactions,
              addTransaction,
              deleteTransaction, 
              setLoading
     

          }}>
            {props.children}
          </GlobalContext.Provider>
        )
}

export default GlobalContextState;

