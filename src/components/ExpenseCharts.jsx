import React, { useContext } from 'react';
import { LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import ExpenseContext from '../context/ExpenseContext';

const ExpenseChart = () => {
  const { state } = useContext(ExpenseContext);
  const { expenses } = state;

  const monthlyData = expenses.map((expense) => ({
    date: expense.date,
    amount: expense.amount,
  }));

  const categoryData = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + parseFloat(expense.amount);
    return acc;
  }, {});

  return (
    <div>
      <LineChart data={monthlyData}>
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      </LineChart>
      <PieChart width={400} height={400}>
        <Pie data={Object.keys(categoryData).map((key) => ({ name: key, value: categoryData[key] }))}>
          {Object.keys(categoryData).map((key, index) => (
            <Cell key={`cell-${index}`} fill="#82ca9d" />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default ExpenseChart;
