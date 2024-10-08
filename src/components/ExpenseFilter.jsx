import React, { useContext, useState } from 'react';
import ExpenseContext from '../context/ExpenseContext';

const ExpenseFilter = () => {
  const { dispatch } = useContext(ExpenseContext);
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    dispatch({ type: 'FILTER_EXPENSE', payload: e.target.value });
  };

  return (
    <div>
      <input type="text" placeholder="Search by description" value={search} onChange={handleSearch} />
      {/* Add more filters for category, date, payment method */}
    </div>
  );
};

export default ExpenseFilter;
