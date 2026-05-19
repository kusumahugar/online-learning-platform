import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';

const getUserFromStorage = () => {
  const stored = localStorage.getItem('learnPlatformUser');
  return stored ? JSON.parse(stored) : null;
};

function App() {
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
  };

  return (
    <div className="app-shell">
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
        </Routes>
      </main>
    </div>
  );
}

export default App;
