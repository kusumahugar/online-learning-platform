const CourseCard = ({ course }) => {
  return (
    <article className="course-card">
      <div className="course-headline">
        <h2>{course.title}</h2>
        <span className={`badge ${course.published ? 'badge-success' : 'badge-muted'}`}>
          {course.published ? 'Published' : 'Draft'}
        </span>
      </div>
      <p className="course-meta">Category: {course.category}</p>
      <p className="course-description">{course.description}</p>
      <div className="course-footer">
        <span>Instructor: {course.instructor}</span>
        <span className="course-price">${course.price.toFixed(2)}</span>
      </div>
    </article>
  );
};

export default CourseCard;
