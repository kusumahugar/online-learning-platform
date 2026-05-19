import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
<<<<<<< HEAD

const getStoredUser = () => {
  const stored = localStorage.getItem('olp_user');
=======
import Navbar from './components/Navbar';

const getUserFromStorage = () => {
  const stored = localStorage.getItem('learnPlatformUser');
>>>>>>> 09a2b2447600b9584ca63bbdd32f8434a290c22b
  return stored ? JSON.parse(stored) : null;
};

function App() {
<<<<<<< HEAD
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
=======
  const [user, setUser] = useState(getUserFromStorage());
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('learnPlatformUser', JSON.stringify(user));
  }, [user]);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('learnPlatformUser');
    navigate('/login');
  };

  const protectRoute = (element) => {
    return user ? element : <Navigate to="/login" replace />;
>>>>>>> 09a2b2447600b9584ca63bbdd32f8434a290c22b
  };

  return (
    <div className="app-shell">
<<<<<<< HEAD
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
=======
      <Navbar user={user} onLogout={handleLogout} />
      <main className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/login" element={<Login onSignIn={setUser} />} />
          <Route path="/register" element={<Register onSignUp={setUser} />} />
          <Route
            path="/dashboard"
            element={protectRoute(<Dashboard user={user} />)}
          />
          <Route path="*" element={<Navigate to="/dashboard" />} />
>>>>>>> 09a2b2447600b9584ca63bbdd32f8434a290c22b
        </Routes>
      </main>
    </div>
  );
}

export default App;
