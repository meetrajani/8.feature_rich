import React, { useState, useContext } from 'react';
import ExpenseContext from '../context/ExpenseContext';

const ExpenseForm = () => {
  const { dispatch } = useContext(ExpenseContext);
  const [formData, setFormData] = useState({
    amount: '',
    description: '',
    date: '',
    category: '',
    paymentMethod: 'cash',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.amount || isNaN(formData.amount)) {
      alert('Please enter a valid amount');
      return;
    }
    if (!formData.date) {
      alert('Please enter a valid date');
      return;
    }

    const newExpense = {
      ...formData,
      id: Math.random(),
    };

    dispatch({ type: 'ADD_EXPENSE', payload: newExpense });
    setFormData({ amount: '', description: '', date: '', category: '', paymentMethod: 'cash' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} />
      <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <input type="date" name="date" value={formData.date} onChange={handleChange} />
      <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
        <option value="cash">Cash</option>
        <option value="credit">Credit</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
