import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom';
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
      const token = localStorage.getItem('olp_token');
      if (!token) {
        return;
      }
      setUser(getStoredUser());
    }
  }, [user]);

  const handleAuthSuccess = (authData) => {
    localStorage.setItem('olp_token', authData.token);
    localStorage.setItem('olp_user', JSON.stringify(authData));
    setUser(authData);
    navigate('/dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('olp_token');
    localStorage.removeItem('olp_user');
    setUser(null);
    navigate('/login');
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <Link to="/" className="brand">
          Online Learning Platform
        </Link>
        <nav className="nav-links">
          {user ? (
            <>
              <span className="nav-user">{user.email}</span>
              <button className="button button-secondary" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </>
          )}
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Navigate to={user ? '/dashboard' : '/login'} replace />} />
          <Route path="/login" element={<Login onAuthSuccess={handleAuthSuccess} />} />
          <Route path="/register" element={<Register onAuthSuccess={handleAuthSuccess} />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
