import { useState } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import api from '../api/axios';

const Login = ({ onAuthSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await api.post('/api/auth/login', { email, password });
      onAuthSuccess(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to login');
=======
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/axiosConfig';

function Login({ onSignIn }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { data } = await api.post('/api/auth/login', form);
      onSignIn(data);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed.');
>>>>>>> 09a2b2447600b9584ca63bbdd32f8434a290c22b
    } finally {
      setLoading(false);
    }
  };

  return (
<<<<<<< HEAD
    <div className="form-card">
      <h1>Login</h1>
      <p className="form-note">Access your courses and account information.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        {error && <div className="alert">{error}</div>}
        <button className="button button-primary" disabled={loading}>
          {loading ? 'Signing in…' : 'Sign In'}
        </button>
      </form>
      <p className="form-footer">
        New here? <Link to="/register">Create an account</Link>
      </p>
    </div>
  );
};
=======
    <section className="page-card">
      <h1 className="section-title">Welcome Back</h1>
      <p>Sign in to access courses, track progress, and manage your learning.</p>
      <form className="form-grid" onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        {error && <div className="flash">{error}</div>}
        <button type="submit" className="primary" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
      <div className="login-actions">
        <p>
          New here? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </section>
  );
}
>>>>>>> 09a2b2447600b9584ca63bbdd32f8434a290c22b

export default Login;
