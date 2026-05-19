const CourseCard = ({ course }) => {
  return (
    <article className="course-card">
      <div>
        <h2>{course.title}</h2>
        <p className="course-description">{course.description}</p>
      </div>

      <div className="course-meta">
        <span>{course.category}</span>
        <span>${course.price?.toFixed(2) ?? '0.00'}</span>
      </div>
      <div className="course-meta">
        <span>Instructor: {course.instructor}</span>
        <span className="badge">{course.published ? 'Published' : 'Draft'}</span>
      </div>
    </article>
  );
};

export default CourseCard;
