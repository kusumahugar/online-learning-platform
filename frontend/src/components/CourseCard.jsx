function CourseCard({ course }) {
  return (
    <article className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <div className="course-meta">
        <span>Instructor: {course.instructor}</span>
        <span>Category: {course.category}</span>
      </div>
      <div className="course-meta">
        <span>Duration: {course.duration}</span>
        <span>Price: ${course.price.toFixed(2)}</span>
      </div>
    </article>
  );
}

export default CourseCard;
