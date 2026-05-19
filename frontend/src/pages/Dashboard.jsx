<<<<<<< HEAD
import { useEffect, useMemo, useState } from 'react';
import api from '../api/axios';
import CourseCard from '../components/CourseCard';

const Dashboard = ({ user }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await api.get('/api/courses');
        setCourses(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load courses');
=======
import { useEffect, useState } from 'react';
import api from '../api/axiosConfig';
import CourseCard from '../components/CourseCard';

function Dashboard({ user }) {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await api.get('/api/courses');
        setCourses(data);
      } catch (err) {
        setError(err.response?.data?.message || 'Unable to load courses');
>>>>>>> 09a2b2447600b9584ca63bbdd32f8434a290c22b
      } finally {
        setLoading(false);
      }
    };
<<<<<<< HEAD

    fetchCourses();
  }, []);

  const welcomeText = useMemo(
    () => (user.role === 'admin' ? 'Admin Dashboard' : 'Student Dashboard'),
    [user.role]
  );

  return (
    <section className="dashboard-page">
      <div className="dashboard-hero">
        <div>
          <p className="eyebrow">Welcome back,</p>
          <h1>{welcomeText}</h1>
          <p className="hero-copy">Browse the latest courses and continue learning with confidence.</p>
        </div>
        <div className="user-chip">
          <span>{user.role.toUpperCase()}</span>
        </div>
      </div>

      {loading && <div className="status-banner">Loading courses…</div>}
      {error && <div className="status-banner status-error">{error}</div>}

      <div className="course-grid">
        {courses.length === 0 && !loading ? (
          <div className="status-banner">No courses available yet.</div>
        ) : (
          courses.map((course) => <CourseCard key={course._id} course={course} />)
        )}
      </div>
    </section>
  );
};
=======
    fetchCourses();
  }, []);

  return (
    <section className="page-card">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 className="section-title">Hello, {user?.name || 'Learner'}</h1>
          <p>Explore the latest courses and upgrade your skills today.</p>
        </div>
        <span className="status-chip">{user?.role || 'student'}</span>
      </div>

      {loading ? (
        <div className="flash">Loading courses…</div>
      ) : error ? (
        <div className="flash">{error}</div>
      ) : (
        <div className="card-grid">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      )}
    </section>
  );
}
>>>>>>> 09a2b2447600b9584ca63bbdd32f8434a290c22b

export default Dashboard;
