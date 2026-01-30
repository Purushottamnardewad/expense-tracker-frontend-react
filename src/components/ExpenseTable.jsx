import API_BASE_URL, { getAuthHeaders } from '../api/api';

function ExpenseTable({ expenses, onExpenseDeleted }) {
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_BASE_URL}/expenses/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });

      if (res.ok) {
        onExpenseDeleted();
      }
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

  if (expenses.length === 0) {
    return <p>No expenses yet</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Amount</th>
          <th>Comment</th>
          <th>Created</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense._id}>
            <td>{expense.category}</td>
            <td>{expense.amount}</td>
            <td>{expense.comments || '-'}</td>
            <td>{new Date(expense.createdAt).toLocaleDateString()}</td>
            <td>
              <button onClick={() => handleDelete(expense._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;