import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

const getStoredUser = () => {
  const stored = localStorage.getItem('olp_user');
  return stored ? JSON.parse(stored) : null;
};

function App() {
  const [user, setUser] = useState(getStoredUser());
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('olp_token');
    localStorage.removeItem('olp_user');
    setUser(null);
    navigate('/login');
  };

  const handleAuthSuccess = (authData) => {
    localStorage.setItem('olp_token', authData.token);
    localStorage.setItem('olp_user', JSON.stringify(authData));
    setUser(authData);
    navigate('/dashboard');
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">Online Learning Platform</div>
        {user ? (
          <div className="header-actions">
            <span className="user-badge">{user.email}</span>
            <button className="button button-secondary" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : null}
      </header>

      <main className="app-main">
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />}
          />
          <Route path="/login" element={<Login onAuthSuccess={handleAuthSuccess} />} />
          <Route path="/register" element={<Register onAuthSuccess={handleAuthSuccess} />} />
          <Route
            path="/dashboard"
            element={user ? <Dashboard user={user} /> : <Navigate to="/login" replace />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
