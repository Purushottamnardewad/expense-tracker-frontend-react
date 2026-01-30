import { useState } from 'react';
import API_BASE_URL, { getAuthHeaders } from '../api/api';

function ExpenseForm({ onExpenseAdded }) {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE_URL}/expenses`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          category: category.trim(),
          amount: Number(amount),
          comments: comment || '',
        }),
      });

      if (res.ok) {
        setCategory('');
        setAmount('');
        setComment('');
        onExpenseAdded();
      } else {
        const err = await res.json();
        alert(err.message || 'Failed to add expense');
      }
    } catch (error) {
      alert('Failed to add expense. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        step="0.01"
        min="0.01"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Comment (optional)"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit" className="primary-btn">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;