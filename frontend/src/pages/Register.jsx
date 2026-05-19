import { useState } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import api from '../api/axios';

const Register = ({ onAuthSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await api.post('/api/auth/register', { name, email, password });
      onAuthSuccess(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to register');
=======
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/axiosConfig';

function Register({ onSignUp }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
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
      const { data } = await api.post('/api/auth/register', form);
      onSignUp(data);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed.');
>>>>>>> 09a2b2447600b9584ca63bbdd32f8434a290c22b
    } finally {
      setLoading(false);
    }
  };

  return (
<<<<<<< HEAD
    <div className="form-card">
      <h1>Create Account</h1>
      <p className="form-note">Register to access courses and platform features.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
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
          {loading ? 'Creating account…' : 'Register'}
        </button>
      </form>
      <p className="form-footer">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};
=======
    <section className="page-card">
      <h1 className="section-title">Create a Free Account</h1>
      <p>Register to browse the latest courses and personalize your learning dashboard.</p>
      <form className="form-grid" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Full name"
          value={form.name}
          onChange={handleChange}
          required
        />
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
          {loading ? 'Creating account...' : 'Register'}
        </button>
      </form>
      <div className="login-actions">
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
}
>>>>>>> 09a2b2447600b9584ca63bbdd32f8434a290c22b

export default Register;
