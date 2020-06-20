export default (state, action) => {
    console.log(action);
    console.log("state", state);
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }

        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case 'EDIT_TITLE':
            return { ...state }
        case 'EDIT_AMOUNT':
            return { ...state }
        default:
            return state;
    }
} 