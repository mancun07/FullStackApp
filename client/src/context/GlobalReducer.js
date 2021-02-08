const GlobalReducer = (state, action) => {
    switch(action.type) {

        case 'GET_TRANSACTIONS':
        return {
            ...state,
            transactions: action.payload,
            loading: false
        }
         
        case 'ADD_TRANSACTION': 
        return {
            ...state,
            transactions: [...state.transactions, action.payload]
        }

        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(el => {
                    return el._id !== action.payload
                })
            }
        
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            } 

        default: 
        return state;
    }
}

export default GlobalReducer;