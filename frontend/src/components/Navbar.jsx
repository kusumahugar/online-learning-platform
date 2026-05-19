import { Link } from 'react-router-dom';

function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <div className="brand">Learnly</div>
      <div className="nav-links">
        {user ? (
          <>
            <span className="status-chip">{user.role.toUpperCase()}</span>
            <button className="secondary" onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
