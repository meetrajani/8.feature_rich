import React from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseChart from './components/ExpenseCharts';
import { ExpenseProvider } from './context/ExpenseContext';

const App = () => {
  return (
    <ExpenseProvider>
      <div>
        <h1>Expense Tracker</h1>
        <ExpenseForm />
        <ExpenseFilter />
        <ExpenseList />
        <ExpenseChart />
      </div>
    </ExpenseProvider>
  );
};

export default App;
