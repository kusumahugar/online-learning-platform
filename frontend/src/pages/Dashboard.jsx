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
      } finally {
        setLoading(false);
      }
    };
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

export default Dashboard;
