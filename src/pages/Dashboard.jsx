import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL, { getAuthHeaders } from '../api/api';
import { logout } from '../utils/auth';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';
import ExpenseChart from '../components/ExpenseChart';

function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchExpenses = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/expenses`, {
        headers: getAuthHeaders(),
      });

      if (res.status === 401) {
        logout();
        navigate('/login');
        return;
      }

      const data = await res.json();

      if (res.ok) {
        setExpenses(data.expenses || []);
      }
    } catch (error) {
      console.error('Error fetching expenses:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <div className="top-bar">
        <div>
          <h2>Expense Tracker</h2>
          <p className="welcome-text">Welcome</p>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div className="card">
        <h3>Add New Expense</h3>
        <ExpenseForm onExpenseAdded={fetchExpenses} />
      </div>

      <div className="card">
        <h3>Your Expenses</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ExpenseTable expenses={expenses} onExpenseDeleted={fetchExpenses} />
        )}
      </div>

      <div className="card">
        <h3>Expense Distribution</h3>
        <ExpenseChart expenses={expenses} />
      </div>
    </div>
  );
}

export default Dashboard;