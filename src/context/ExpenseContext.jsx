import React, { createContext, useReducer } from 'react';

const ExpenseContext = createContext();

const expenseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return { ...state, expenses: [...state.expenses, action.payload] };
    case 'EDIT_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.map((exp) => 
          exp.id === action.payload.id ? action.payload : exp
        ),
      };
    case 'FILTER_EXPENSE':
      return { ...state, filtered: action.payload };
    default:
      return state;
  }
};

export const ExpenseProvider = ({ children }) => {
  const initialState = {
    expenses: [],
    filtered: [],
  };

  const [state, dispatch] = useReducer(expenseReducer, initialState);

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
