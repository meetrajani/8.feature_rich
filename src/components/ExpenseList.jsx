import React, { useContext } from 'react';
import ExpenseContext from '../context/ExpenseContext';

const ExpenseList = () => {
  const { state } = useContext(ExpenseContext);
  const { expenses } = state;

  return (
    <table>
      <thead>
        <tr>
          <th>Amount</th>
          <th>Description</th>
          <th>Date</th>
          <th>Category</th>
          <th>Payment Method</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.amount}</td>
            <td>{expense.description}</td>
            <td>{expense.date}</td>
            <td>{expense.category}</td>
            <td>{expense.paymentMethod}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
