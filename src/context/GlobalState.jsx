import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';

// initial state 
const initialState = {
    transactions: []
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    // DELETE_TRANSACTION Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id,
        })
    }

    // ADD_TRANSACTION Actions
    function addTransaction(transaction) {
        console.log('transaction', transaction)
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction,
        })
    }
    // EDIT_TITLE action
    function editTitle(transaction) {
        console.log('transaction', transaction)
        dispatch({
            type: 'EDIT_TITLE',
            payload: transaction,
        })
    }

    // EDIT_AMOUNT
    function editAmount(transaction) {
        console.log('transaction', transaction)
        dispatch({
            type: 'EDIT_AMOUNT',
            payload: transaction,
        })
    }
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,
            editTitle,
            editAmount,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
