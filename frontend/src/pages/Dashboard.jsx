import { useEffect, useState } from 'react';
import api from '../api/axios';
import CourseCard from '../components/CourseCard';

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadCourses = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await api.get('/courses');
        setCourses(response.data);
      } catch (err) {
        setError(err.message || 'Unable to load courses.');
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  return (
    <div className="page-card">
      <section className="dashboard-hero">
        <div>
          <h1>Course dashboard</h1>
          <p>Browse all available courses fetched from the backend API.</p>
        </div>
        <div className="badge">Live</div>
      </section>

      {loading && <div className="loading-banner">Fetching courses from the API…</div>}
      {error && <div className="error-banner">{error}</div>}

      <div className="course-grid">
        {!loading && courses.length === 0 && <p>No courses available yet.</p>}
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
