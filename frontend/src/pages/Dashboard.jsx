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
      } finally {
        setLoading(false);
      }
    };

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

export default Dashboard;
