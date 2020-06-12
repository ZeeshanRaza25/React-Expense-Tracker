import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'; 

// initial state 
const initialState = {
    transactions: [
        { id: 1, title: "Title1", income: 1000, expenses: 200, },
        { id: 2, title: "Title2", income: 150, expenses: 200, },
        { id: 3, title: "Title3", income: 100, expenses: 200, },
    ]
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
